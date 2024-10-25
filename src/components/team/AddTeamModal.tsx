import Button from '@components/@shared/Button';
import { Input } from '@components/@shared/Input';
import { Modal } from '@components/@shared/Modal';
import ProfileImageInput from '@components/@shared/ProfileImageInput';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { postGroupById } from '@/src/api/team/teamAPI';
import { postImage } from '@/src/api/imageAPI';
import { useRouter } from 'next/router';

interface AddTeamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddTeamModal({ isOpen, onClose }: AddTeamModalProps) {
  const [teamName, setTeamName] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const router = useRouter();

  // 그룹 생성 Mutation
  const { mutate: createGroup } = useMutation({
    mutationFn: ({ image, name }: { image: string; name: string }) =>
      postGroupById(image, name),
    onSuccess: (data) => {
      const groupId = data.id; // 성공적으로 생성된 그룹의 ID를 받아온다고 가정
      setTeamName('');
      setImageFile(null);
      onClose();
      console.log(
        `${teamName} 팀이 성공적으로 생성되었습니다. 그룹 ID: ${groupId}`
      );
      // 그룹 생성 후 리다이렉트

      if (groupId) {
        router.push(`/${groupId}`); // 해당 그룹 페이지로 리다이렉트
      }
    },
    onError: (error) => {
      console.error('그룹 생성 실패:', error);
    },
  });

  // 이미지 업로드 Mutation
  const uploadImageMutate = useMutation({
    mutationFn: (file: File) => postImage(file),
    onSuccess: (imageUrl: string) => {
      // 이미지 URL을 성공적으로 받으면 그룹 생성 요청
      createGroup({ image: imageUrl, name: teamName });
    },
    onError: (error) => {
      console.error('이미지 업로드 실패:', error);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.target.value);
  };

  const handleAddClick = () => {
    if (imageFile && teamName) {
      uploadImageMutate.mutate(imageFile); // 이미지 업로드 시작
    } else {
      console.log('이미지와 팀 이름을 입력해주세요.');
    }
  };

  const handleFileChange = (imgFile: File | null) => {
    setImageFile(imgFile);
  };

  return (
    <Modal
      isOpen={isOpen}
      isXButton
      onClose={onClose}
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
