import { create } from 'zustand';
import type { TaskListDto } from '../types/tasks/taskListDto';
import type { TaskDto } from '../types/tasks/taskDto';

interface TaskListStore {
  groupId?: number;
  taskLists: TaskListDto[];
  selectedTaskListId?: number; // 선택된 taskListId
  selectedTasks: TaskDto[]; // 선택된 taskList의 tasks[] 데이터
  currentTask?: TaskDto; // 선택된 task 데이터
  currentTaskId?: number; // 선택된 taskID
  isSidebarOpen: boolean; // task의 sidebar 상태
  taskCompletionStatus: Record<number, boolean>; // 각 작업의 완료 상태
  setTaskLists: (taskLists: TaskListDto[]) => void;
  setSelectedTaskListId: (id: number | undefined) => void;
  setSelectedTasks: (tasks: TaskDto[]) => void;
  setCurrentTask: (task: TaskDto | undefined) => void;
  setCurrentTaskId: (taskId: number | undefined) => void;
  setTaskCompletionStatus: (taskId: number, doneAt: string | null) => void; // Task의 완료 상태 설정
  setSidebarOpen: (isOpen: boolean) => void;
}

const initialTaskLists: TaskListDto[] = [
  {
    groupId: 1,
    id: 1,
    name: 'TaskList1',
    createdAt: '2024-10-01T10:00:00+09:00',
    updatedAt: '2024-10-01T12:00:00+09:00',
    displayIndex: 0,
    tasks: [],
  },
  {
    groupId: 1,
    id: 2,
    name: 'TaskList2',
    createdAt: '2024-10-02T10:00:00+09:00',
    updatedAt: '2024-10-02T12:00:00+09:00',
    displayIndex: 0,
    tasks: [],
  },
];

const initialSelectedTasks: TaskDto[] = [
  {
    id: 12141,
    updatedAt: '2024-10-24T15:19:31+09:00',
    date: '2024-10-24T09:00:00+09:00',
    doneAt: null,
    recurringId: 3023,
    name: '제로주 오늘 할 일',
    description: '산더미',
    frequency: 'ONCE',
    deletedAt: null,
    displayIndex: 0,
    recurring: {
      id: 3023,
      name: '제로주 오늘 할 일',
      description: '산더미',
      createdAt: '2024-10-24T15:15:42+09:00',
      updatedAt: '2024-10-24T15:15:42+09:00',
      startDate: '2024-10-24T09:00:00+09:00',
      frequencyType: 'ONCE',
      weekDays: [],
      monthDay: null,
      taskListId: 1,
      groupId: 1,
      writerId: 1003,
    },
    writer: {
      id: 1003,
      nickname: '제로주',
      image: null,
    },
    doneBy: {
      user: null,
    },
    commentCount: 0,
  },
];

const initialTask: TaskDto = {
  id: 12141,
  updatedAt: '2024-10-24T15:19:31+09:00',
  date: '2024-10-24T09:00:00+09:00',
  doneAt: null,
  recurringId: 3023,
  name: '제로주 오늘 할 일',
  description: '산더미',
  frequency: 'ONCE',
  deletedAt: null,
  displayIndex: 0,
  recurring: {
    id: 3023,
    name: '제로주 오늘 할 일',
    description: '산더미',
    createdAt: '2024-10-24T15:15:42+09:00',
    updatedAt: '2024-10-24T15:15:42+09:00',
    startDate: '2024-10-24T09:00:00+09:00',
    frequencyType: 'ONCE',
    weekDays: [],
    monthDay: null,
    taskListId: 1,
    groupId: 1,
    writerId: 1003,
  },
  writer: {
    id: 1003,
    nickname: '제로주',
    image: null,
  },
  doneBy: {
    user: null,
  },
  commentCount: 0,
};

export const useTaskListStore = create<TaskListStore>((set) => ({
  groupId: undefined,
  taskLists: initialTaskLists,
  selectedTaskListId: undefined,
  selectedTasks: initialSelectedTasks,
  currentTask: initialTask,
  currentTaskId: undefined,
  taskCompletionStatus: {},
  isSidebarOpen: false,

  setData: (data: any) =>
    set({
      groupId: data.id,
      taskLists: data.taskLists,
    }),

  setTaskLists: (taskLists: TaskListDto[]) => set({ taskLists }),
  setSelectedTaskListId: (id: number | undefined) =>
    set({ selectedTaskListId: id }),
  setSelectedTasks: (tasks: TaskDto[]) => set({ selectedTasks: tasks }),
  setCurrentTask: (task: TaskDto | undefined) => set({ currentTask: task }),
  setCurrentTaskId: (taskId: number | undefined) =>
    set({ currentTaskId: taskId }),
  setTaskCompletionStatus: (taskId, doneAt) => {
    const isDone = doneAt !== null;
    set((state) => ({
      selectedTasks: state.selectedTasks.map(
        (task) =>
          task.id === taskId ? { ...task, doneAt, done: isDone } : task // done 값을 업데이트
      ),
      taskCompletionStatus: {
        ...state.taskCompletionStatus,
        [taskId]: isDone,
      },
    }));
  },
  setSidebarOpen: (isOpen) => set({ isSidebarOpen: isOpen }),
}));
