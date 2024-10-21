import { useUserStore } from '@/src/stores/useUserStore';
import Button from '@components/@shared/Button';
import { IconInput, Input } from '@components/@shared/Input';
import NonVisibleIcon from '@icons/visibility_off.svg';
import VisibleIcon from '@icons/visibility_on.svg';
import { publicAxiosInstance } from '@libs/axios/axiosInstance';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function SignInForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { setTokens, updateUser } = useUserStore();

  // 모든 입력값의 유효성을 검사하는 함수
  const validateForm = () => {
    return !emailError && !passwordError;
  };

  // 이메일 유효성 검사 함수
  const validateEmail = () => {
    if (!email) {
      setEmailError('이메일은 필수 입력입니다.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('이메일 형식으로 작성해 주세요.');
    } else {
      setEmailError('');
    }
    validateForm(); // 유효성 검사 후 폼 상태 업데이트
  };

  // 비밀번호 유효성 검사 함수
  const validatePassword = () => {
    if (!password) {
      setPasswordError('비밀번호는 필수 입력입니다.');
    } else {
      setPasswordError('');
    }
    validateForm(); // 유효성 검사 후 폼 상태 업데이트
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return; // 폼이 유효하지 않으면 제출 중지

    try {
      const signInResponse = await publicAxiosInstance.post('auth/signIn', {
        email,
        password,
      });
      console.log('로그인 성공', signInResponse.data);

      const { accessToken, refreshToken, user } = signInResponse.data;
      setTokens(accessToken, refreshToken);
      updateUser(user);

      // 로그인 성공 후 랜딩 페이지로 이동
      router.push('/');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error('서버에서 반환된 에러 데이터:', error.response.data);
        setEmailError('이메일 혹은 비밀번호를 확인해주세요.');
        setPasswordError('이메일 혹은 비밀번호를 확인해주세요.');
      } else {
        console.error('로그인 에러 발생:', error);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="mt-6 flex w-[343px] flex-col gap-10 md:mt-[100px] md:w-[460px]">
        <div className="flex flex-col gap-3">
          <form className="flex w-full flex-col gap-6">
            <h1 className="flex w-full justify-center text-2xl-medium text-text-primary md:mb-[80px] xl:text-4xl">
              로그인
            </h1>
            <Input
              label="이메일"
              placeholder="이메일을 입력해주세요."
              isError={!!emailError}
              errorMessage={emailError}
              inputProps={{
                value: email,
                onChange: (e) => {
                  setEmail(e.target.value);
                },
                onBlur: validateEmail,
              }}
            />
            <IconInput
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요."
              isError={!!passwordError}
              errorMessage={passwordError}
              inputProps={{
                type: isPasswordVisible ? 'text' : 'password',
                value: password,
                onChange: (e) => {
                  setPassword(e.target.value);
                },
                onBlur: validatePassword,
              }}
              actionIcon={
                isPasswordVisible ? (
                  <VisibleIcon onClick={togglePasswordVisibility} />
                ) : (
                  <NonVisibleIcon onClick={togglePasswordVisibility} />
                )
              }
            />
          </form>
          <Link
            href="/#"
            className="text-right text-[14px] font-medium leading-6 text-interaction-focus underline md:text-[16px]"
          >
            비밀번호를 잊으셨나요?
          </Link>
        </div>
        <Button size="full" onClick={handleSubmit} disabled={!validateForm()}>
          로그인
        </Button>
      </div>
      <div className="flex items-center gap-3 text-md-medium md:text-lg-medium">
        <span className="text-text-primary">아직 계정이 없으신가요?</span>
        <Link href="/signup" className="text-interaction-focus underline">
          가입하기
        </Link>
      </div>
    </div>
  );
}
