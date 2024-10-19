import Button from '@components/@shared/Button';
import { Input } from '@components/@shared/Input';
import { Modal } from '@components/@shared/Modal';
import ProfileImageInput from '@components/@shared/ProfileImageInput';
import { useState } from 'react';

interface EditTeamModalProps {
  isOpen: boolean;
  closeModal: () => void;
  initialTeamName?: string;
}

export default function EditTeamModal({
  isOpen,
  closeModal,
  initialTeamName = '기존 팀 이름',
}: EditTeamModalProps) {
  const [teamName, setTeamName] = useState(initialTeamName);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.target.value);
  };

  const handleEditClick = () => {
    closeModal();
    console.log('팀 이름', teamName, '으로 변경!');
  };

  const handleFileChange = (imgFile: File | null) => {
    console.log(imgFile);
  };

  return (
    <Modal
      isOpen={isOpen}
      isXButton
      onClose={closeModal}
      array="column"
      padding="default"
      bgColor="primary"
    >
      <p className="mb-[40px] text-center text-2xl-semibold">팀 수정하기</p>
      <p className="mb-[15px] text-lg-medium">팀 프로필</p>
      <ProfileImageInput onFileChange={handleFileChange} />
      <p className="mt-[20px] text-lg-medium">팀 이름</p>
      <Input
        placeholder="팀 이름을 입력해주세요."
        inputProps={{
          value: teamName,
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
