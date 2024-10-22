import { fetchProfileImage } from '@/src/api/mysetting/inputAPI';
import { useMutation } from '@tanstack/react-query';

export const useProfileChange = () => {
  return useMutation({
    mutationFn: fetchProfileImage,
    onSuccess: () => {
      console.log('프로필 변경!');
    },
    onError: (error) => {
      console.error('프로필 변경 실패', error);
    },
  });
};
