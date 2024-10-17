import { axiosInstance } from '@libs/axios/axiosInstance';

// 특정 날짜에 해당하는 할 일 목록
// 날짜 기본 값 당일
export const getTaskList = async (id: number, date: string) => {
  const response = await axiosInstance.get(
    `groups/{groupId}/task-lists/${id}`,
    {
      params: { date },
    }
  );
  return response.data;
};

export const patchTaskList = async (groupId: number, id: number) => {
  const response = await axiosInstance.patch(
    `groups/${groupId}/task-lists/${id}`
  );
  return response.data;
};

export const deleteTaskList = async (id: number) => {
  await axiosInstance.delete(`groups/{groupId}/task-lists/${id}`);
};

export const postTaskList = async (groupId: number, name: string) => {
  const response = await axiosInstance.post(`groups/${groupId}/task-lists`, {
    name,
  });
  return response.data;
};

export const patchTaskListOrder = async (
  groupId: number,
  id: number,
  displayIndex: number
) => {
  const response = await axiosInstance.patch(
    `groups/${groupId}/task-lists/${id}/order`,
    { displayIndex }
  );
  return response.data;
};
