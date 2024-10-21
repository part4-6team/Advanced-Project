import { useUserStore } from '@/src/stores/useUserStore';
import Button from '@components/@shared/Button';
import { IconInput, Input } from '@components/@shared/Input';
import NonVisibleIcon from '@icons/visibility_off.svg';
import VisibleIcon from '@icons/visibility_on.svg';
import { publicAxiosInstance } from '@libs/axios/axiosInstance';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SignUpForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nicknameError, setNicknameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const { setTokens, updateUser } = useUserStore();

  // 모든 입력값의 유효성을 검사하는 함수
  const validateForm = () => {
    return (
      !emailError &&
      !nicknameError &&
      !passwordError &&
      !passwordConfirmationError
    );
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

  // 닉네임 유효성 검사 함수
  const validateNickname = () => {
    if (!nickname) {
      setNicknameError('닉네임은 필수 입력입니다.');
    } else if (nickname.length > 20) {
      setNicknameError('닉네임은 최대 20자까지 가능합니다.');
    } else {
      setNicknameError('');
    }
    validateForm(); // 유효성 검사 후 폼 상태 업데이트
  };

  // 비밀번호 유효성 검사 함수
  const validatePassword = () => {
    if (!password) {
      setPasswordError('비밀번호는 필수 입력입니다.');
    } else if (password.length < 8) {
      setPasswordError('비밀번호는 최소 8자 이상입니다.');
    } else if (
      !/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).+$/.test(password)
    ) {
      setPasswordError('비밀번호는 숫자, 영문, 특수문자가 포함되어야 합니다.');
    } else {
      setPasswordError('');
    }
    validateForm(); // 유효성 검사 후 폼 상태 업데이트
  };

  // 비밀번호 확인 유효성 검사 함수
  const validatePasswordConfirmation = () => {
    if (!passwordConfirmation) {
      setPasswordConfirmationError('비밀번호 확인을 입력해주세요.');
    } else if (passwordConfirmation !== password) {
      setPasswordConfirmationError('비밀번호가 일치하지 않습니다.');
    } else {
      setPasswordConfirmationError('');
    }
    validateForm(); // 유효성 검사 후 폼 상태 업데이트
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return; // 폼이 유효하지 않으면 제출 중지

    try {
      const signUpResponse = await publicAxiosInstance.post('/auth/signUp', {
        email,
        nickname,
        password,
        passwordConfirmation,
      });
      console.log('회원가입 성공', signUpResponse.data);

      const signInResponse = await publicAxiosInstance.post('/auth/signIn', {
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
    <div className="mt-6 flex w-[343px] flex-col gap-10 md:mt-[100px] md:w-[460px]">
      <form className="flex w-full flex-col gap-6">
        <h1 className="flex w-full justify-center text-2xl-medium text-text-primary md:mb-[80px] xl:text-4xl">
          회원가입
        </h1>
        <Input
          label="이름"
          placeholder="이름을 입력해주세요."
          isError={!!nicknameError}
          errorMessage={nicknameError}
          inputProps={{
            value: nickname,
            onChange: (e) => {
              setNickname(e.target.value);
            },
            onBlur: validateNickname,
          }}
        />
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
        <IconInput
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 한 번 입력해주세요."
          isError={!!passwordConfirmationError}
          errorMessage={passwordConfirmationError}
          inputProps={{
            type: isConfirmPasswordVisible ? 'text' : 'password',
            value: passwordConfirmation,
            onChange: (e) => {
              setPasswordConfirmation(e.target.value);
            },
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
      <Button size="full" onClick={handleSubmit} disabled={!validateForm()}>
        회원가입
      </Button>
    </div>
  );
}
