import Button from '@components/@shared/Button';
import { Input } from '@components/@shared/Input';
import { Modal } from '@components/@shared/Modal';
import ProfileImageInput from '@components/@shared/ProfileImageInput';
import { useState } from 'react';

interface AddTeamModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function AddTeamModal({
  isOpen,
  closeModal,
}: AddTeamModalProps) {
  const [teamName, setTeamName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.target.value);
  };

  const handleAddClick = () => {
    setTeamName('');
    closeModal();
    console.log('팀 이름', teamName, '으로 설정!');
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
      <p className="mb-[40px] text-center text-2xl-semibold">팀 생성하기</p>
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
        <Button size="full" onClick={handleAddClick}>
          생성하기
        </Button>
        <p className="mt-[20px] text-md-regular ">
          팀 이름은 회사명이나 모임 이름 등으로 설정하면 좋아요.
        </p>
      </Modal.Footer>
    </Modal>
  );
}
