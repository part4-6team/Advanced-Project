import { axiosInstance } from '@libs/axios/axiosInstance';

// 계정설정 페이지의 프로필이미지, 이름, 이메일 가져옴
export const fetchUserData = async () => {
  const response = await axiosInstance.get('user');
  return response.data;
};

// 프로필 이미지 변경
export const fetchProfileImage = async () => {
  const response = await axiosInstance.patch('user');
};

// 회원탈퇴 api
export const fetchDeletUser = async () => {
  const response = await axiosInstance.delete('user');
};

// 비밀번호 변경
export const fetchChangePassword = async () => {
  const response = await axiosInstance.patch('user/password');
};
