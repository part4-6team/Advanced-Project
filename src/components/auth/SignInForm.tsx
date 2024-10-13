import Button from '@components/@shared/Button';
import { IconInput, Input } from '@components/@shared/Input';
import NonVisibleIcon from '@icons/visibility_off.svg';

export default function SignInForm() {
  return (
    <div className="flex flex-col items-center gap-[24px]">
      <div className="mt-[24px] flex w-[343px] flex-col gap-[40px] md:mt-[100px] md:w-[460px]">
        <div className="flex flex-col gap-[12px]">
          <form className="flex w-full flex-col gap-[24px]">
            <h1 className="flex w-full justify-center text-2xl-medium text-text-primary md:mb-[80px] xl:text-4xl">
              로그인
            </h1>
            <Input label="이메일" placeholder="이메일을 입력해주세요." />
            <IconInput
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요."
              actionIcon={<NonVisibleIcon />}
            />
          </form>
          <span className="text-right text-[14px] font-medium leading-[24px] text-interaction-focus underline md:text-[16px]">
            비밀번호를 잊으셨나요?
          </span>
        </div>
        <Button size="full">로그인</Button>
      </div>
      <div className="flex items-center gap-[12px] text-md-medium md:text-lg-medium">
        <span className="text-text-primary">아직 계정이 없으신가요?</span>
        <span className="text-interaction-focus underline">가입하기</span>
      </div>
    </div>
  );
}
