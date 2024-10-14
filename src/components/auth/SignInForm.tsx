import Button from '@components/@shared/Button';
import { IconInput, Input } from '@components/@shared/Input';
import NonVisibleIcon from '@icons/visibility_off.svg';
import VisibleIcon from '@icons/visibility_on.svg';
import { axiosInstance } from '@libs/axios/axiosInstance';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function SignInForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const signInResponse = await axiosInstance.post('auth/signIn', {
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
        console.error('로그인 에러 발생:', error);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center gap-[24px]">
      <div className="mt-[24px] flex w-[343px] flex-col gap-[40px] md:mt-[100px] md:w-[460px]">
        <div className="flex flex-col gap-[12px]">
          <form className="flex w-full flex-col gap-[24px]">
            <h1 className="flex w-full justify-center text-2xl-medium text-text-primary md:mb-[80px] xl:text-4xl">
              로그인
            </h1>
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
          </form>
          <Link
            href="/#"
            className="text-right text-[14px] font-medium leading-[24px] text-interaction-focus underline md:text-[16px]"
          >
            비밀번호를 잊으셨나요?
          </Link>
        </div>
        <Button size="full" onClick={handleSubmit}>
          로그인
        </Button>
      </div>
      <div className="flex items-center gap-[12px] text-md-medium md:text-lg-medium">
        <span className="text-text-primary">아직 계정이 없으신가요?</span>
        <Link href="/signup" className="text-interaction-focus underline">
          가입하기
        </Link>
      </div>
    </div>
  );
}
