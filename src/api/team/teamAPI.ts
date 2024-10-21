import { authAxiosInstance } from '@libs/axios/axiosInstance';

// 그룹 데이터를 가져오는 API 함수
export const getGroupById = async (id: string | string[] | undefined) => {
  const response = await authAxiosInstance.get(`groups/${id}`);
  return response.data;
};
