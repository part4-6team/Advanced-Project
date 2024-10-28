import { patchTaskList } from '@/src/api/tasks/taskListAPI';
import { TeamStore, useTeamStore } from '@/src/stores/teamStore';
import Button from '@components/@shared/Button';
import { Input } from '@components/@shared/Input';
import { Modal } from '@components/@shared/Modal';
import { useValidation } from '@hooks/useValidation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

interface EditTaskListModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTaskListName?: string;
  taskListId: number;
}

export default function EditTaskListModal({
  isOpen,
  onClose,
  initialTaskListName = '',
  taskListId,
}: EditTaskListModalProps) {
  const [TaskListName, setTaskListName] = useState(initialTaskListName);
  const { id } = useTeamStore();
  const queryClient = useQueryClient();

  const {
    errors,
    setError,
    validateOnBlur,
    validateValueOnSubmit,
    clearError,
  } = useValidation();

  const teamData = queryClient.getQueryData<TeamStore>(['group', id]);

  // onBlur 시 이름이 비어 있는지 검사
  const handleBlurName = () => {
    validateOnBlur('taskListName', TaskListName);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 30) {
      setTaskListName(value);
      clearError('taskListName');
    } else {
      setError('taskListName', true, '30자 이하로 입력해주세요.');
    }
  };

  // 할 일 목록 수정 Mutation
  const { mutate: editGroup } = useMutation({
    mutationFn: ({
      groupId,
      taskListId,
      name,
    }: {
      groupId: number;
      taskListId: string;
      name: string;
    }) => patchTaskList(groupId, taskListId, name),
    onSuccess: () => {
      onClose();
    },

    onSettled: () => {
      // 쿼리 무효화 및 리패치
      queryClient.invalidateQueries({ queryKey: ['group', id] });
    },
    onError: (error) => {
      console.error('그룹 생성 실패:', error);
    },
  });

  // 제출 시 중복된 이름 검사
  const taskListNames =
    teamData?.taskLists.map((taskList) => taskList.name) || [];

  const handlePatchClick = () => {
    if (validateValueOnSubmit('taskListName', taskListNames, TaskListName)) {
      editGroup({
        groupId: Number(id),
        taskListId: String(taskListId),
        name: TaskListName,
      });
    }
  };

  // 모달이 닫힐 때 TaskListName을 초기값으로 리셋
  useEffect(() => {
    if (!isOpen) {
      setTaskListName(initialTaskListName);
      clearError('taskListName');
    }
  }, [isOpen, initialTaskListName]);

  return (
    <Modal
      isOpen={isOpen}
      isXButton
      onClose={onClose}
      array="column"
      padding="default"
      bgColor="primary"
    >
      <Modal.Header
        fontColor="primary"
        className="mb-[20px] flex flex-col items-center"
      >
        할 일 목록
      </Modal.Header>
      <Input
        placeholder="목록 명을 입력해주세요."
        inputProps={{
          value: TaskListName,
          onChange: handleChange,
        }}
        className="mb-[30px] mt-[15px]"
        onBlur={handleBlurName}
        errorMessage={errors.taskListName?.message}
        isError={errors.taskListName?.isError}
      />

      <Modal.Footer>
        <Button size="full" onClick={handlePatchClick}>
          수정하기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
