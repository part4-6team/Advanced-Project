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
  const [newPassword, setNewPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [emailSentMessageVisible, setEmailSentMessageVisible] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();
  const router = useRouter();
  const { token } = router.query;

  const toggleNewPasswordVisibility = () => {
    setIsNewPasswordVisible((prev) => !prev);
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

    try {
      const resetPasswordResponse = await publicAxiosInstance.patch(
        'user/reset-password',
        {
          passwordConfirmation,
          password: newPassword,
          token,
        }
      );
      if (resetPasswordResponse) {
        console.log(resetPasswordResponse.data);
        router.push('/signin');
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
      <Button size="full" onClick={token ? handleResetPassword : openModal}>
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
