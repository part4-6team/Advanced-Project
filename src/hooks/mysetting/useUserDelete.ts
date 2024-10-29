import { useMutation } from '@tanstack/react-query';
import { fetchDeletUser } from '@/src/api/mysetting/inputAPI';

export const useUserDelete = () => {
  return useMutation({
    mutationFn: fetchDeletUser,
    onSuccess: () => {
      console.log('탈퇴성공~!!');
    },
    onError: (error) => {
      console.error('탈퇴 실패:', error);
    },
  });
};
