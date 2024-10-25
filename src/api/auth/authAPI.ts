import { publicAxiosInstance } from '@libs/axios/axiosInstance';

// 회원가입 API
export const postSignUp = async (
  email: string,
  nickname: string,
  password: string,
  passwordConfirmation: string
) => {
  const response = await publicAxiosInstance.post('auth/signUp', {
    email,
    nickname,
    password,
    passwordConfirmation,
  });
  return response.data;
};

// 로그인 API
export const postSignIn = async (email: string, password: string) => {
  const response = await publicAxiosInstance.post('auth/signIn', {
    email,
    password,
  });
  return response.data;
};

// 액세스 토큰 재발급 API
export const postRefreshToken = async (refreshToken: string) => {
  const response = await publicAxiosInstance.post('auth/refresh-token', {
    refreshToken,
  });
  return response.data;
};

// 간편 로그인 API
export const postOAuthProvider = async (
  provider: 'GOOGLE' | 'KAKAO',
  state: string,
  redirectUri: string,
  token: string
) => {
  const response = await publicAxiosInstance.post(`auth/signIn/${provider}`, {
    state,
    redirectUri,
    token,
  });
  return response.data;
};
