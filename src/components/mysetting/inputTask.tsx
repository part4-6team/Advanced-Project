import { IconInput, Input } from '@components/@shared/Input';
import ProfileEditIcon from 'public/icons/profile_edit.svg';
import PasswordChange from './PasswordChange';
import { useRef, useState } from 'react';

const InputTask = () => {
  const [ProfileImage, setProfileImage] = useState<string | JSX.Element>(
    <ProfileEditIcon />
  );
  const fileInput = useRef<HTMLInputElement | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2 && reader.result) {
          setProfileImage(
            <img
              src={reader.result as string}
              alt="프로필이미지"
              className="h-16 w-16 rounded-full object-cover "
            />
          );
        }
      };
      reader.readAsDataURL(file);
    } else {
      setProfileImage(<ProfileEditIcon />);
    }
  };

  return (
    <main className="mx-6 flex max-w-[792px] flex-col gap-6">
      <div>
        <input
          type="file"
          ref={fileInput}
          style={{ display: 'none' }}
          onChange={onChange}
        />
        <button
          onClick={() => {
            if (fileInput.current) {
              fileInput.current.click();
            }
          }}
        >
          {ProfileImage}
        </button>
      </div>
      <Input label="이름" placeholder="이름을 입력해주세요" />
      <Input label="이메일" placeholder="이메일을 입력해주세요" />
      <IconInput
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        actionIcon={<PasswordChange />}
      />
    </main>
  );
};

export default InputTask;
