import { deleteTaskList } from '@/src/api/tasks/taskListAPI';
import { useTeamStore } from '@/src/stores/teamStore';
import Button from '@components/@shared/Button';
import { Modal } from '@components/@shared/Modal';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';

interface DeleteTaskListModalProps {
  isOpen: boolean;
  onClose: () => void;
  taskListId: number;
  taskName: string;
}

export default function DeleteTaskListModal({
  isOpen,
  onClose,
  taskListId,
  taskName,
}: DeleteTaskListModalProps) {
  const queryClient = useQueryClient();
  const { id } = useTeamStore();

  // 목록 삭제 Mutation
  const { mutate: deleteList } = useMutation({
    mutationFn: (id: number) => deleteTaskList(id),
    onSuccess: () => {
      onClose();
    },
    onSettled: () => {
      // 쿼리 무효화 및 리패치
      queryClient.invalidateQueries({ queryKey: ['group', id] });
    },
    onError: (error) => {
      console.error('목록 삭제 실패:', error);
    },
  });

  const handleDeleteClick = () => {
    deleteList(taskListId);
  };

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
        <Modal.Header
          fontColor="primary"
          className="flex flex-col items-center gap-[16px]"
        >
          <Image
            src="/icons/alert.svg"
            alt="경고 아이콘"
            width={24}
            height={24}
          />
          목록을 삭제하시겠어요?
        </Modal.Header>
        <Modal.Content fontColor="secondary" fontSize="14" fontArray="center">
          <p className="mt-[20px]">
            [{taskName}] 내의 모든 할 일이 사라집니다. 정말로 삭제하시겠습니까?
          </p>
        </Modal.Content>
      </Modal.Wrapper>
      <Modal.Footer>
        <div className="flex gap-[8px]">
          <Button
            size="full"
            bgColor="white"
            fontColor="gray"
            onClick={onClose}
          >
            취소
          </Button>
          <Button size="full" bgColor="red" onClick={handleDeleteClick}>
            삭제
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
