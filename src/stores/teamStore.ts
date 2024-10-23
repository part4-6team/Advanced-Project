// store.ts
import { create } from 'zustand';

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

interface TeamStore {
  teamId: string;
  teamName: string;
  imageUrl: string;
  members: MemberProps[];
  taskLists: TaskListProps[];
  setTeamData: (data: TeamDataProps) => void;
  setTeamName: (name: string) => void;
  setImageUrl: (url: string) => void;
  setMembers: (members: MemberProps[]) => void;
  setTaskLists: (taskLists: TaskListProps[]) => void;
  clearTeamData: () => void;
}

export const useTeamStore = create<TeamStore>((set) => ({
  teamId: '0',
  teamName: '',
  imageUrl: '',
  members: [],
  taskLists: [],
  setTeamData: (data) =>
    set({
      teamId: data.id.toString(),
      teamName: data.name,
      imageUrl: data.image,
      members: data.members,
      taskLists: data.taskLists,
    }),
  setTeamName: (name) => set({ teamName: name }),
  setImageUrl: (url) => set({ imageUrl: url }),
  setMembers: (members) => set({ members }),
  setTaskLists: (taskLists) => set({ taskLists }),
  clearTeamData: () =>
    set({
      teamId: '0',
      teamName: '',
      imageUrl: '',
      members: [],
      taskLists: [],
    }),
}));
