import TeamBanner from '@components/team/TeamBanner';
import TaskList from '@components/team/TaskList';
import Report from '@components/team/Report';
import MemberList from '@components/team/MemberList';
import { teamData } from '../../components/team/teamInfo';

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
  return (
    <main className="mx-auto mt-[20px] w-full min-w-[340px] px-[10px] xl:w-[1200px] xl:px-0">
      <TeamBanner name={teamData.name} teamImage={teamData.image} />
      <TaskList taskLists={teamData.taskLists} />
      <Report taskLists={teamData.taskLists} />
      <MemberList members={teamData.members} />
    </main>
  );
}
