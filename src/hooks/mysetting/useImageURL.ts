import { fetchImageURL } from '@/src/api/mysetting/inputAPI';
import { useMutation } from '@tanstack/react-query';

export const useImageURL = () => {
  return useMutation({
    mutationFn: fetchImageURL,
    onSuccess: () => {
      console.log('url 변경 완료');
    },
    onError: (error) => {
      console.error('url변경 안됨', error);
    },
  });
};
