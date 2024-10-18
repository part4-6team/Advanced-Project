import ProfileEditIcon from 'public/icons/profile_edit.svg';
import { useRef, useState } from 'react';

interface ProfileImageInputProps {
  onFileChange: (file: File) => void;
}

export default function ProfileImageInput({
  onFileChange,
}: ProfileImageInputProps) {
  const [ProfileImage, setProfileImage] = useState<string | JSX.Element>(
    <ProfileEditIcon />
  );
  const fileInput = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2 && reader.result) {
          setProfileImage(
            <img
              src={reader.result as string}
              alt="프로필 이미지"
              className="h-16 w-16 rounded-full object-cover"
            />
          );
        }
      };
      reader.readAsDataURL(file);

      // 부모 컴포넌트에 파일 전달
      onFileChange(file);
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
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={() => {
            if (fileInput.current) {
              fileInput.current.click();
            }
          }}
        >
          {ProfileImage}
        </button>
      </div>
    </main>
  );
}
