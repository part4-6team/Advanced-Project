import { authAxiosInstance } from '@libs/axios/axiosInstance';

// 특정 날짜 및 특정 목록에 해당하는 모든 할 일
// 날짜 기본 값 당일
export const getTasks = async (
  groupId: number,
  taskListId: number,
  date: string
) => {
  const response = await authAxiosInstance.get(
    `groups/${groupId}/task-lists/${taskListId}/tasks`,
    {
      params: { date },
    }
  );
  return response.data;
};

// 특정 할 일
export const getTask = async (taskId: number) => {
  const response = await authAxiosInstance.get(
    `/{teamId}/groups/{groupId}/task-lists/{taskListId}/tasks/${taskId}`
  );
  return response.data;
};

export const deleteTask = async (taskId: number) => {
  await authAxiosInstance.delete(
    `groups/{groupId}/task-lists/{taskListId}/tasks/${taskId}`
  );
};
