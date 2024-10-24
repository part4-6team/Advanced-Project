import Button from '@components/@shared/Button';
import { Modal } from '@components/@shared/Modal';
import Image from 'next/image';

interface ExileUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  memberName: string;
}

export default function ExileUserModal({
  isOpen,
  onClose,
  memberName,
}: ExileUserModalProps) {
  const handleDeleteClick = () => {
    console.log(`${memberName} 멤버 삭제 완료!`);
    onClose();
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
          [{memberName}] 유저를 삭제하시겠어요?
        </Modal.Header>
        <Modal.Content fontColor="secondary" fontSize="14" fontArray="center">
          <p className="mt-[20px]">
            팀 내에서 멤버를 삭제합니다. 정말로 진행하시겠습니까?
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
