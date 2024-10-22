import { useUserStore } from '@/src/stores/useUserStore';
import axios from 'axios';

// 인증이 필요하지 않은 요청에 사용
export const publicAxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// 인증이 필요한 요청에 사용
export const authAxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

/**
 * @설명
 * - 요청 인터셉터는 요청이 서버로 전달되기 전에 실행됩니다.
 * - 로컬 스토리지에 저장된 'userStorage' 데이터를 가져와 JSON으로 파싱 후 'accessToken'을 추출합니다.
 * - 'accessToken'이 존재하면 요청 헤더에 'Authorization'으로 토큰을 포함시킵니다.
 * - 토큰이 없거나 파싱 에러가 발생하면 경고 메시지 또는 에러 메시지를 출력합니다.
 */
authAxiosInstance.interceptors.request.use(
  (config) => {
    const requestConfig = config;
    const storageData = localStorage.getItem('userStorage');
    if (storageData) {
      try {
        const parsedData = JSON.parse(storageData);
        const token = parsedData?.state?.accessToken;
        if (token) {
          requestConfig.headers.Authorization = `Bearer ${token}`;
        } else {
          console.warn('토큰이 존재하지 않습니다.');
        }
      } catch (parsingError) {
        console.error('토큰 파싱 에러가 발생했습니다.:', parsingError);
      }
    } else {
      console.warn('저장된 유저 데이터가 없습니다.');
    }
    return config;
  },
  (requestInterceptorError) => {
    console.error('요청 인터셉터 에러:', requestInterceptorError);
    return Promise.reject(requestInterceptorError);
  }
);

/**
 * @설명
 * - 응답 인터셉터는 서버로부터 응답이 도착하기 전에 실행됩니다.
 * - 401 상태 코드이고 로컬스토리지에 'userStorage'가 있는 경우 'accessToken' 재발급을 시도합니다.
 * - 재발급이 성공하면 다시 원래 요청을 보냅니다.
 * - 재발급이 실패한 경우 'refreshToken'이 만료된 걸로 간주해서 토큰을 삭제합니다.
 */
authAxiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { setTokens } = useUserStore();
    const originalRequest = error.config;
    const storageData = localStorage.getItem('userStorage');
    if (error.response?.status === 401 && storageData) {
      try {
        const parsedData = JSON.parse(storageData);
        const refreshToken = parsedData?.state?.refreshToken;
        if (refreshToken) {
          const refreshResponse = await publicAxiosInstance.post(
            '/auth/refresh-token',
            { refreshToken }
          );

          if (refreshResponse) {
            const { accessToken } = refreshResponse.data;
            setTokens(accessToken, refreshToken);
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            return authAxiosInstance(originalRequest);
          }
        } else {
          console.warn('refreshToken이 존재하지 않습니다.');
        }
      } catch (refreshError) {
        console.error('토큰 갱신 중 오류 발생:', refreshError);
        setTokens(null, null);
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
