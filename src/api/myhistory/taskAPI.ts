import { axiosInstance } from '@libs/axios/axiosInstance';

export const fetchTask = async () => {
  const response = await axiosInstance.get('user/history');
  return response.data;
};

export const deleteTask = async (id: number) => {
  await axiosInstance.delete(`groups/{groupId}/task-lists/${id}`);
};
