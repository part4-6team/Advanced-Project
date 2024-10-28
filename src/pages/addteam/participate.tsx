import ParticipateTeamForm from '@components/addteam/ParticipateTeamForm';

export default function ParticipateTeam() {
  return (
    <div className="my-[72px] flex justify-center md:my-[100px] xl:my-[140px]">
      <div className="flex flex-col items-center gap-6">
        <ParticipateTeamForm />
        <p className="text-center text-md-regular md:text-lg-regular">
          공유받은 팀 링크를 입력해 참여할 수 있어요.
        </p>
      </div>
    </div>
  );
}
