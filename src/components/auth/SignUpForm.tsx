import Button from '@components/@shared/Button';
import { IconInput, Input } from '@components/@shared/Input';
import NonVisibleIcon from '@icons/visibility_off.svg';

export default function SignUpForm() {
  return (
    <div className="mt-[24px] flex w-[343px] flex-col gap-[40px] md:mt-[100px] md:w-[460px]">
      <form className="flex w-full flex-col gap-[24px]">
        <h1 className="flex w-full justify-center text-2xl-medium text-text-primary md:mb-[80px] xl:text-4xl">
          회원가입
        </h1>
        <Input label="이름" placeholder="이름을 입력해주세요." />
        <Input label="이메일" placeholder="이메일을 입력해주세요." />
        <IconInput
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          actionIcon={<NonVisibleIcon />}
        />
        <IconInput
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 한 번 입력해주세요."
          actionIcon={<NonVisibleIcon />}
        />
      </form>
      <Button size="full">회원가입</Button>
    </div>
  );
}
