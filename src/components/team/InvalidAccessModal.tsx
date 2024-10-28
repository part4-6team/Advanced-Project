import { Modal } from '@components/@shared/Modal';
import Image from 'next/image';

interface InvalidAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  countdown: number;
}

export default function InvalidAccessModal({
  isOpen,
  onClose,
  countdown,
}: InvalidAccessModalProps) {
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
          권한 없음
        </Modal.Header>
        <Modal.Content fontColor="secondary" fontSize="14" fontArray="center">
          <p className="mt-[20px]">접근 권한이 없습니다.</p>
          <p className="mt-[8px]">팀 리스트 페이지로 이동합니다.</p>
          <p className="mt-[20px] text-[20px]">{countdown}</p>
        </Modal.Content>
      </Modal.Wrapper>
    </Modal>
  );
}
