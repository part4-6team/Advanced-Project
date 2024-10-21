import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { getGroupById } from '@/src/api/team/teamAPI';
import TeamBanner from '@components/team/banner/TeamBanner';
import TaskList from '@components/team/taskList/TaskList';
import Report from '@components/team/Report';
import MemberList from '@components/team/member/MemberList';

export interface MemberProps {
  role: string;
  userImage: string;
  userEmail: string;
  userName: string;
  groupId: number;
  userId: number;
}

export interface TaskProps {
  name: string;
  done: boolean;
}

export interface TaskListProps {
  displayIndex: number;
  groupId: number;
  updatedAt: string;
  createdAt: string;
  name: string;
  id: number;
  tasks: TaskProps[];
}

export interface TeamDataProps {
  teamId: string;
  updatedAt: string;
  createdAt: string;
  image: string;
  name: string;
  id: number;
  members: MemberProps[];
  taskLists: TaskListProps[];
}

export default function TeamPage() {
  const router = useRouter();
  const { teamid } = router.query;

  // teamid는 string | string[] | undefined로 추론되므로 string으로 변환
  const teamIdString = Array.isArray(teamid) ? teamid[0] : teamid;

  // React Query로 그룹 데이터 가져오기
  const { data, isLoading, isError } = useQuery<TeamDataProps>({
    queryKey: ['group', teamIdString],
    queryFn: () => getGroupById(teamIdString as string),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;
  console.log(data);

  return (
    <main className="mx-auto mt-[20px] w-full min-w-[340px] px-[10px] xl:w-[1200px] xl:px-0">
      <TeamBanner name={data?.name} teamImage={data?.image} />
      <TaskList taskLists={data?.taskLists} />
      <Report taskLists={data?.taskLists} />
      <MemberList members={data?.members} />
    </main>
  );
}
