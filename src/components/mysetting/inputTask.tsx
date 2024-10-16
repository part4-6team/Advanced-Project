import { IconInput, Input } from '@components/@shared/Input';
import ProfileEditIcon from 'public/icons/profile_edit.svg';
import PasswordChange from './PasswordChange';

const InputTask = () => {
  return (
    <main className="mx-6 flex max-w-[792px] flex-col gap-6">
      <div>
        <ProfileEditIcon />
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
