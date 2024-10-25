import Button from '@components/@shared/Button';
import { Input } from '@components/@shared/Input';

export default function ParticipateTeamForm() {
  return (
    <form className="flex w-[343px] flex-col gap-10 md:w-[460px]">
      <div className="flex w-[343px] flex-col items-center gap-6 md:w-[460px] md:gap-[80px]">
        <h1 className="text-2xl-medium xl:text-4xl">팀 참여하기</h1>
        <Input label="팀 링크" placeholder="팀 링크를 입력해주세요." />
      </div>
      <Button size="full">참여하기</Button>
    </form>
  );
}
