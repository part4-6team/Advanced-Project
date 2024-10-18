import type { TaskListDto } from '@/src/types/tasks/TaskListDto';

export const MockData: TaskListDto[] = [
  {
    displayIndex: 0,
    groupId: 1,
    updatedAt: '2024-10-16T12:59:10.181Z',
    createdAt: '2024-10-16T12:59:10.181Z',
    name: 'TaskList 1',
    id: 1,
    tasks: [
      {
        doneBy: {
          user: {
            image: 'user1.png',
            nickname: 'User One',
            id: 1,
          },
        },
        writer: {
          image: 'writer1.png',
          nickname: 'Writer One',
          id: 2,
        },
        displayIndex: 0,
        commentCount: 2,
        deletedAt: null,
        recurringId: 1,
        frequency: 'DAILY',
        updatedAt: '2024-10-16T12:59:10.181Z',
        doneAt: '2024-10-16T12:59:10.181Z',
        date: '2024-10-16T12:59:10.181Z',
        description: 'Description for Task 1',
        name: 'Task 1',
        id: 1,
      },
      {
        doneBy: {
          user: {
            image: 'user1.png',
            nickname: 'User One',
            id: 1,
          },
        },
        writer: {
          image: 'writer1.png',
          nickname: 'Writer One',
          id: 2,
        },
        displayIndex: 0,
        commentCount: 7,
        deletedAt: null,
        recurringId: 1,
        frequency: 'DAILY',
        updatedAt: '2024-10-16T12:59:10.181Z',
        doneAt: '2024-10-16T12:59:10.181Z',
        date: '2024-10-16T12:59:10.181Z',
        description: 'Description for Task 1',
        name: '두우번째',
        id: 2,
      },
    ],
  },
  {
    displayIndex: 1,
    groupId: 2,
    updatedAt: '2024-10-17T12:59:10.181Z',
    createdAt: '2024-10-17T12:59:10.181Z',
    name: 'TaskList 2',
    id: 2,
    tasks: [
      {
        doneBy: {
          user: {
            image: 'user2.png',
            nickname: 'User Two',
            id: 3,
          },
        },
        writer: {
          image: 'writer2.png',
          nickname: 'Writer Two',
          id: 4,
        },
        displayIndex: 1,
        commentCount: 1,
        deletedAt: null,
        recurringId: 2,
        frequency: 'WEEKLY',
        updatedAt: '2024-10-17T12:59:10.181Z',
        doneAt: null,
        date: '2024-10-17T12:59:10.181Z',
        description: 'Description for Task 2',
        name: 'Task 2',
        id: 2,
      },
    ],
  },
  {
    displayIndex: 2,
    groupId: 3,
    updatedAt: '2024-10-18T12:59:10.181Z',
    createdAt: '2024-10-18T12:59:10.181Z',
    name: 'TaskList 3',
    id: 3,
    tasks: [
      {
        doneBy: {
          user: {
            image: 'user3.png',
            nickname: 'User Three',
            id: 5,
          },
        },
        writer: {
          image: 'writer3.png',
          nickname: 'Writer Three',
          id: 6,
        },
        displayIndex: 2,
        commentCount: 0,
        deletedAt: null,
        recurringId: 3,
        frequency: 'MONTHLY',
        updatedAt: '2024-10-18T12:59:10.181Z',
        doneAt: null,
        date: '2024-10-18T12:59:10.181Z',
        description: 'Description for Task 3',
        name: 'Task 3',
        id: 3,
      },
    ],
  },
  {
    displayIndex: 3,
    groupId: 4,
    updatedAt: '2024-10-19T12:59:10.181Z',
    createdAt: '2024-10-19T12:59:10.181Z',
    name: 'TaskList 4',
    id: 4,
    tasks: [
      {
        doneBy: {
          user: {
            image: 'user4.png',
            nickname: 'User Four',
            id: 7,
          },
        },
        writer: {
          image: 'writer4.png',
          nickname: 'Writer Four',
          id: 8,
        },
        displayIndex: 3,
        commentCount: 5,
        deletedAt: null,
        recurringId: 4,
        frequency: 'DAILY',
        updatedAt: '2024-10-19T12:59:10.181Z',
        doneAt: '2024-10-19T12:59:10.181Z',
        date: '2024-10-19T12:59:10.181Z',
        description: 'Description for Task 4',
        name: 'Task 4',
        id: 4,
      },
    ],
  },
  {
    displayIndex: 4,
    groupId: 5,
    updatedAt: '2024-10-20T12:59:10.181Z',
    createdAt: '2024-10-20T12:59:10.181Z',
    name: 'TaskList 5',
    id: 5,
    tasks: [
      {
        doneBy: {
          user: {
            image: 'user5.png',
            nickname: 'User Five',
            id: 9,
          },
        },
        writer: {
          image: 'writer5.png',
          nickname: 'Writer Five',
          id: 10,
        },
        displayIndex: 4,
        commentCount: 3,
        deletedAt: null,
        recurringId: 5,
        frequency: 'WEEKLY',
        updatedAt: '2024-10-20T12:59:10.181Z',
        doneAt: null,
        date: '2024-10-20T12:59:10.181Z',
        description: 'Description for Task 5',
        name: 'Task 5',
        id: 5,
      },
    ],
  },
];
