import Button from '@components/@shared/Button';
import { Input } from '@components/@shared/Input';
import { Modal } from '@components/@shared/Modal';
import { useEffect, useState } from 'react';

interface EditTaskListModalProps {
  isOpen: boolean;
  closeModal: () => void;
  initialTaskListName?: string;
}

export default function EditTaskListModal({
  isOpen,
  closeModal,
  initialTaskListName = '',
}: EditTaskListModalProps) {
  const [TaskListName, setTaskListName] = useState(initialTaskListName);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskListName(e.target.value);
  };

  const handleEditClick = () => {
    setTaskListName(initialTaskListName);
    closeModal();
    console.log('목록 이름', TaskListName, '으로 변경!');
    // API요청 추가 예정
  };

  // 모달이 닫힐 때 TaskListName을 초기값으로 리셋
  useEffect(() => {
    if (!isOpen) {
      setTaskListName(initialTaskListName);
    }
  }, [isOpen, initialTaskListName]);

  return (
    <Modal
      isOpen={isOpen}
      isXButton
      onClose={closeModal}
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
      />

      <Modal.Footer>
        <Button size="full" onClick={handleEditClick}>
          수정하기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
