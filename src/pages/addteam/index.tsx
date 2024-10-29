import AddTeamForm from '@components/addteam/AddTeamForm';

export default function AddTeam() {
  return (
    <div className="my-[72px] flex justify-center md:my-[100px] xl:my-[140px]">
      <div className="flex flex-col items-center gap-6">
        <AddTeamForm />
        <p className="text-center text-md-regular md:text-lg-regular">
          팀 이름은 회사명이나 모임 이름 등으로 설정하면 좋아요.
        </p>
      </div>
    </div>
  );
}
