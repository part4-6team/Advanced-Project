import TeamBanner from '@components/team/TeamBanner';
import TaskList from '@components/team/TaskList';
import Report from '@components/team/Report';
import MemberList from '@components/team/MemberList';

export default function TeamPage() {
  return (
    <main className="mx-auto mt-[20px] w-full px-[10px] xl:w-[1200px] xl:px-0">
      <TeamBanner />
      <TaskList />
      <Report />
      <MemberList />
    </main>
  );
}
