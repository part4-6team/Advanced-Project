import { postTaskList } from '@/src/api/tasks/taskListAPI';
import Button from '@components/@shared/Button';
import { Input } from '@components/@shared/Input';
import { Modal } from '@components/@shared/Modal';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { TeamStore } from '@/src/stores/teamStore';
import { useValidation } from '@hooks/useValidation';

interface AddTaskListModalProps {
  isOpen: boolean;
  onClose: () => void;
  groupId: string;
}

export default function AddTaskListModal({
  isOpen,
  onClose,
  groupId,
}: AddTaskListModalProps) {
  const [taskListName, setTaskListName] = useState('');
  const newGroupId = Number(groupId);
  const queryClient = useQueryClient();
  const {
    errors,
    setError,
    validateOnBlur,
    validateValueOnSubmit,
    clearError,
  } = useValidation();

  const teamData = queryClient.getQueryData<TeamStore>(['group', groupId]);

  // onBlur 시 이름이 비어 있는지 검사
  const handleBlurName = () => {
    validateOnBlur('taskListName', taskListName);
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

  // 제출 시 중복된 이름 검사
  const taskListNames =
    teamData?.taskLists.map((taskList) => taskList.name) || [];

  const handleAddClick = () => {
    if (validateValueOnSubmit('taskListName', taskListNames, taskListName)) {
      createTaskList({ id: newGroupId, name: taskListName });
    }
  };

  // 그룹 생성 Mutation
  const { mutate: createTaskList } = useMutation({
    mutationFn: ({ id, name }: { id: number; name: string }) =>
      postTaskList(id, name),
    onSuccess: () => {
      setTaskListName('');
      onClose();
    },
    onSettled: () => {
      // 쿼리 무효화 및 리패치
      queryClient.invalidateQueries({ queryKey: ['group', groupId] });
    },
    onError: (error) => {
      console.error('목록 생성 실패:', error);
    },
  });

  useEffect(() => {
    if (!isOpen) {
      setTaskListName('');
      clearError('taskListName');
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      isXButton
      onClose={onClose}
      array="column"
      padding="default"
      bgColor="primary"
      fontSize="16"
      fontArray="center"
      gap="40"
    >
      <Modal.Wrapper array="column">
        <Modal.Header fontColor="primary">할 일 목록</Modal.Header>
        <Modal.Content fontColor="secondary" fontSize="14" fontArray="left">
          <Input
            onBlur={handleBlurName}
            inputProps={{
              value: taskListName,
              onChange: handleChange,
            }}
            className="mt-[30px]"
            placeholder="목록 명을 입력해주세요."
            errorMessage={errors.taskListName?.message}
            isError={errors.taskListName?.isError}
          />
        </Modal.Content>
      </Modal.Wrapper>
      <Modal.Footer>
        <Button
          size="full"
          onClick={handleAddClick}
          disabled={taskListName === ''}
        >
          만들기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
