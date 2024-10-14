import Button from '@components/@shared/Button';
import { IconInput } from '@components/@shared/Input';
import NonVisibleIcon from '@icons/visibility_off.svg';
import VisibleIcon from '@icons/visibility_on.svg';
import { useState } from 'react';

export default function SignUpForm() {
  const [newPassword, setNewPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const toggleNewPasswordVisibility = () => {
    setIsNewPasswordVisible((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible((prev) => !prev);
  };

  return (
    <div className="mt-[24px] flex w-[343px] flex-col gap-[40px] md:mt-[100px] md:w-[460px]">
      <form className="flex w-full flex-col gap-[24px]">
        <h1 className="flex w-full justify-center text-2xl-medium text-text-primary md:mb-[80px] xl:text-4xl">
          비밀번호 재설정
        </h1>
        <IconInput
          label="새 비밀번호"
          placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          inputProps={{
            type: isNewPasswordVisible ? 'text' : 'password',
            value: newPassword,
            onChange: (e) => setNewPassword(e.target.value),
          }}
          actionIcon={
            isNewPasswordVisible ? (
              <VisibleIcon onClick={toggleNewPasswordVisibility} />
            ) : (
              <NonVisibleIcon onClick={toggleNewPasswordVisibility} />
            )
          }
        />
        <IconInput
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 한 번 입력해주세요."
          inputProps={{
            type: isConfirmPasswordVisible ? 'text' : 'password',
            value: passwordConfirmation,
            onChange: (e) => setPasswordConfirmation(e.target.value),
          }}
          actionIcon={
            isConfirmPasswordVisible ? (
              <VisibleIcon onClick={toggleConfirmPasswordVisibility} />
            ) : (
              <NonVisibleIcon onClick={toggleConfirmPasswordVisibility} />
            )
          }
        />
      </form>
      <Button size="full">재설정</Button>
    </div>
  );
}
