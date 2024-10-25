import Button from '@components/@shared/Button';
import { Input } from '@components/@shared/Input';
import ProfileImageInput from '@components/@shared/ProfileImageInput';
import { useState } from 'react';

export default function AddTeamForm() {
  const [teamProfile, setTeamProfile] = useState<File | null>(null);

  const handleFileChange = (file: File | null) => {
    setTeamProfile(file);
    console.log(teamProfile);
  };

  return (
    <form className="flex w-[343px] flex-col gap-10 md:w-[460px]">
      <div className="flex w-[343px] flex-col items-center gap-6 md:w-[460px] md:gap-[80px]">
        <h1 className="text-2xl-medium xl:text-4xl">팀 생성하기</h1>
        <div className="flex w-full flex-col gap-6">
          <div>
            <div className="mb-3 text-lg-medium">팀 프로필</div>
            <ProfileImageInput onFileChange={handleFileChange} />
          </div>
          <Input label="팀 이름" placeholder="팀 이름을 입력해주세요." />
        </div>
      </div>
      <Button size="full">생성하기</Button>
    </form>
  );
}
