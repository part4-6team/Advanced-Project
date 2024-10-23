import { useUserStore } from '@/src/stores/useUserStore';
import Button from '@components/@shared/Button';
import { IconInput, Input } from '@components/@shared/Input';
import { Modal } from '@components/@shared/Modal';
import { useModal } from '@hooks/useModal';
import NonVisibleIcon from '@icons/visibility_off.svg';
import VisibleIcon from '@icons/visibility_on.svg';
import { publicAxiosInstance } from '@libs/axios/axiosInstance';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function SignInForm() {
  const router = useRouter();
  const { setTokens, updateUser } = useUserStore();
  const { isOpen, openModal, closeModal } = useModal();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const [emailSentMessageVisible, setEmailSentMessageVisible] = useState(false);
  const [modalEmail, setModalEmail] = useState('');

  // 이메일 유효성 검사 함수
  const validateEmail = () => {
    if (!email) {
      setEmailError('이메일은 필수 입력입니다.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('이메일 형식으로 작성해 주세요.');
    } else {
      setEmailError('');
    }
  };

  // 비밀번호 유효성 검사 함수
  const validatePassword = () => {
    if (!password) {
      setPasswordError('비밀번호는 필수 입력입니다.');
    } else {
      setPasswordError('');
    }
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    validateEmail();
    validatePassword();

    if (emailError || passwordError) return;

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
        console.error('로그인 에러:', error);
        setEmailError('이메일 혹은 비밀번호를 확인해주세요.');
        setPasswordError('이메일 혹은 비밀번호를 확인해주세요.');
      }
    }
  };

  // 이메일로 비밀번호 재설정 링크 보내기
  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailLoading(true);

    try {
      const sendEmailResponse = await publicAxiosInstance.post(
        'user/send-reset-password-email',
        {
          email: modalEmail,
          redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}`,
        }
      );
      if (sendEmailResponse) {
        console.log(sendEmailResponse.data);
        setEmailSentMessageVisible(true);
      }
    } catch (error) {
      console.error('비밀번호 재설정 이메일 전송 에러:', error);
    } finally {
      setEmailLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleCloseClick = () => {
    // 링크가 전송됐을 때 닫기 버튼 누를 시 창 꺼짐
    if (emailSentMessageVisible) {
      window.close();
    } else {
      closeModal();
    }
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
                  validateEmail();
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
                  validatePassword();
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
          <button
            className="text-right text-[14px] font-medium leading-6 text-interaction-focus underline md:text-[16px]"
            type="button"
            onClick={openModal}
          >
            비밀번호를 잊으셨나요?
          </button>
        </div>
        <Button size="full" onClick={handleSubmit}>
          로그인
        </Button>
      </div>
      <div className="flex items-center gap-3 text-md-medium md:text-lg-medium">
        <span className="text-text-primary">아직 계정이 없으신가요?</span>
        <Link href="/signup" className="text-interaction-focus underline">
          가입하기
        </Link>
      </div>
      <Modal
        isOpen={isOpen}
        array="column"
        padding="default"
        bgColor="primary"
        fontSize="16"
        fontArray="center"
        gap="24"
      >
        <Modal.Wrapper>
          <Modal.Header fontColor="primary">비밀번호 재설정</Modal.Header>
          <Modal.Content
            className="items-center gap-4"
            array="column"
            fontColor="secondary"
            fontSize="14"
          >
            <p className="mt-2">비밀번호 재설정 링크를 보내드립니다.</p>
            <form className="w-[280px]">
              <Input
                placeholder="이메일을 입력하세요."
                inputProps={{
                  value: modalEmail,
                  onChange: (e) => setModalEmail(e.target.value),
                }}
              />
            </form>
            {emailSentMessageVisible && (
              <div
                className="flex flex-col items-center justify-center text-brand-primary"
                onClick={handleCloseClick}
              >
                <span>비밀번호 재설정 링크를 보냈습니다</span>
                <span>이메일을 확인해주세요!</span>
              </div>
            )}
          </Modal.Content>
        </Modal.Wrapper>
        <Modal.Footer className="justify-center" array="row">
          <div className="flex w-[280px] gap-2">
            <Button
              onClick={handleCloseClick}
              bgColor="white"
              fontColor="green"
              border="green"
            >
              닫기
            </Button>
            <Button onClick={handleSubmitEmail} disabled={emailLoading}>
              링크 보내기
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
