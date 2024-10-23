import { authAxiosInstance } from '@libs/axios/axiosInstance';

// 그룹 데이터를 가져오는 API 함수
export const getGroupById = async (id: string | string[] | undefined) => {
  const response = await authAxiosInstance.get(`groups/${id}`);
  return response.data;
};

// 그룹 데이터를 생성하는 API 함수
export const postGroupById = async (image: string, name: string) => {
  const response = await authAxiosInstance.post('groups', { image, name });
  return response.data;
};

// 그룹 데이터를 삭제하는 API 함수
export const deleteGroupById = async (id: string) => {
  const response = await authAxiosInstance.delete(`groups/${id}`);
  return response.data;
};

// 그룹 데이터를 수정하는 API 함수
export const patchGroupById = async (
  id: string,
  image: string,
  name: string
) => {
  const response = await authAxiosInstance.patch(`groups/${id}`, {
    image,
    name,
  });
  return response.data;
};
