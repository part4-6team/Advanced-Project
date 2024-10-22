import Button from '@components/@shared/Button';
import { IconInput, Input } from '@components/@shared/Input';
import { Modal } from '@components/@shared/Modal';
import { useModal } from '@hooks/useModal';
import NonVisibleIcon from '@icons/visibility_off.svg';
import VisibleIcon from '@icons/visibility_on.svg';
import { publicAxiosInstance } from '@libs/axios/axiosInstance';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [emailSentMessageVisible, setEmailSentMessageVisible] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();
  const router = useRouter();
  const { token } = router.query;

  const validateForm = () => {
    return !passwordError && !passwordConfirmationError;
  };

  // 비밀번호 유효성 검사 함수
  const validatePassword = () => {
    if (!password) {
      setPasswordError('비밀번호를 입력해주세요.');
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

  const toggleNewPasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible((prev) => !prev);
  };

  // 이메일로 비밀번호 재설정 링크 보내기
  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const sendEmailResponse = await publicAxiosInstance.post(
        'user/send-reset-password-email',
        {
          email,
          redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}`,
        }
      );
      if (sendEmailResponse) {
        console.log(sendEmailResponse.data);
        setEmailSentMessageVisible(true);
      }
    } catch (error) {
      console.error('비밀번호 재설정 이메일 전송 에러:', error);
    }
  };

  // 받은 링크의 토큰을 가지고 비밀번호 재설정하기
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return; // 폼이 유효하지 않으면 제출 중지

    try {
      const resetPasswordResponse = await publicAxiosInstance.patch(
        'user/reset-password',
        {
          passwordConfirmation,
          password,
          token,
        }
      );
      if (resetPasswordResponse) {
        console.log(resetPasswordResponse.data);
        router.push('/signin'); // 비밀번호가 변경되면 로그인 페이지로 이동
      }
    } catch (error) {
      console.error('비밀번호 재설정 에러:', error);
    }
  };

  const handleCloseClick = () => {
    closeModal();
    setEmailSentMessageVisible(false);
  };

  return (
    <div className="my-6 flex w-[343px] flex-col gap-10 md:my-[100px] md:w-[460px]">
      <form className="flex w-full flex-col gap-6">
        <h1 className="flex w-full justify-center text-2xl-medium text-text-primary md:mb-[80px] xl:text-4xl">
          비밀번호 재설정
        </h1>
        <IconInput
          label="새 비밀번호"
          placeholder="영문, 숫자, 특수문자 포함 8자 이상"
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
              <VisibleIcon onClick={toggleNewPasswordVisibility} />
            ) : (
              <NonVisibleIcon onClick={toggleNewPasswordVisibility} />
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
      <Button
        size="full"
        onClick={token ? handleResetPassword : openModal} // 토큰이 있으면 비밀번호 재설정이 되고, 없으면 링크를 이메일로 보내는 모달이 켜짐
        disabled={!validateForm()}
      >
        재설정
      </Button>
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
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
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
            <Button onClick={handleSubmitEmail}>링크 보내기</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
