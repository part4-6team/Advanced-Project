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
// 인터셉터를 설정할 때 useUserStore를 사용하지 않도록 변경합니다.
authAxiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const storageData = localStorage.getItem('userStorage');

    // 401 에러 및 유저 데이터가 있는지 확인
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

            // 로컬 스토리지에 새 토큰 저장
            localStorage.setItem(
              'userStorage',
              JSON.stringify({
                ...parsedData,
                state: {
                  ...parsedData.state,
                  accessToken,
                },
              })
            );

            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            return authAxiosInstance(originalRequest);
          }
        } else {
          console.warn('refreshToken이 존재하지 않습니다.');
        }
      } catch (refreshError) {
        console.error('토큰 갱신 중 오류 발생:', refreshError);
        // 토큰 삭제 로직
        localStorage.removeItem('userStorage');
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
