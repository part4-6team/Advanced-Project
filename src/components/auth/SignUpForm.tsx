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

  const [emailValidation, setEmailValidation] = useState('');
  const [nicknameValidation, setNicknameValidation] = useState('');
  const [passwordValidation, setPasswordValidation] = useState('');
  const [passwordConfirmationValidation, setPasswordConfirmationValidation] =
    useState('');

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const validateEmail = () => {
    if (!email) {
      setEmailValidation('이메일은 필수 입력입니다.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailValidation('이메일 형식으로 작성해 주세요.');
    } else {
      setEmailValidation('');
    }
  };

  const validateNickname = () => {
    if (!nickname) {
      setNicknameValidation('닉네임은 필수 입력입니다.');
    } else if (nickname.length > 20) {
      setNicknameValidation('닉네임은 최대 20자까지 가능합니다.');
    } else {
      setNicknameValidation('');
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordValidation('비밀번호는 필수 입력입니다.');
    } else if (password.length < 8) {
      setPasswordValidation('비밀번호는 최소 8자 이상입니다.');
    } else if (
      !/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).+$/.test(password)
    ) {
      setPasswordValidation(
        '비밀번호는 숫자, 영문자, 특수문자(!@#$%^&*)가 각각 하나 이상 포함되어야 합니다.'
      );
    } else {
      setPasswordValidation('');
    }
  };

  const validatePasswordConfirmation = () => {
    if (!passwordConfirmation) {
      setPasswordConfirmationValidation('비밀번호 확인을 입력해주세요.');
    } else if (passwordConfirmation !== password) {
      setPasswordConfirmationValidation('비밀번호가 일치하지 않습니다.');
    } else {
      setPasswordConfirmationValidation('');
    }
  };

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
          isError={!!nicknameValidation}
          errorMessage={nicknameValidation}
          inputProps={{
            value: nickname,
            onChange: (e) => setNickname(e.target.value),
            onBlur: validateNickname,
          }}
        />
        <Input
          label="이메일"
          placeholder="이메일을 입력해주세요."
          isError={!!emailValidation}
          errorMessage={emailValidation}
          inputProps={{
            value: email,
            onChange: (e) => setEmail(e.target.value),
            onBlur: validateEmail,
          }}
        />
        <IconInput
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          isError={!!passwordValidation}
          errorMessage={passwordValidation}
          inputProps={{
            type: isPasswordVisible ? 'text' : 'password',
            value: password,
            onChange: (e) => setPassword(e.target.value),
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
        <IconInput
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 한 번 입력해주세요."
          isError={!!passwordConfirmationValidation}
          errorMessage={passwordConfirmationValidation}
          inputProps={{
            type: isConfirmPasswordVisible ? 'text' : 'password',
            value: passwordConfirmation,
            onChange: (e) => setPasswordConfirmation(e.target.value),
            onBlur: validatePasswordConfirmation,
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
