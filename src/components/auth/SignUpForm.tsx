import Button from '@components/@shared/Button';
import { IconInput, Input } from '@components/@shared/Input';
import NonVisibleIcon from '@icons/visibility_off.svg';
import VisibleIcon from '@icons/visibility_on.svg';
import { axiosInstance } from '@libs/axios/axiosInstance';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SignUpForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const signUpResponse = await axiosInstance.post('/auth/signUp', {
        email,
        nickname,
        password,
        passwordConfirmation,
      });
      console.log('회원가입 성공', signUpResponse.data);

      const signInResponse = await axiosInstance.post('/auth/signIn', {
        email,
        password,
      });

      console.log('로그인 성공', signInResponse.data);

      // 로그인 성공 후 랜딩 페이지로 이동
      router.push('/');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error('서버에서 반환된 데이터:', error.response.data);
      } else {
        console.error('회원가입 에러 발생:', error);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible((prev) => !prev);
  };

  return (
    <div className="mt-[24px] flex w-[343px] flex-col gap-[40px] md:mt-[100px] md:w-[460px]">
      <form className="flex w-full flex-col gap-[24px]">
        <h1 className="flex w-full justify-center text-2xl-medium text-text-primary md:mb-[80px] xl:text-4xl">
          회원가입
        </h1>
        <Input
          label="이름"
          placeholder="이름을 입력해주세요."
          inputProps={{
            value: nickname,
            onChange: (e) => setNickname(e.target.value),
          }}
        />
        <Input
          label="이메일"
          placeholder="이메일을 입력해주세요."
          inputProps={{
            value: email,
            onChange: (e) => setEmail(e.target.value),
          }}
        />
        <IconInput
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          inputProps={{
            type: isPasswordVisible ? 'text' : 'password',
            value: password,
            onChange: (e) => setPassword(e.target.value),
          }}
          actionIcon={
            isPasswordVisible ? (
              <VisibleIcon onClick={togglePasswordVisibility} />
            ) : (
              <NonVisibleIcon onClick={togglePasswordVisibility} />
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
      <Button size="full" onClick={handleSubmit}>
        회원가입
      </Button>
    </div>
  );
}
