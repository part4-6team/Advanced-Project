import { fetchNewArticle } from '@/src/api/article/newarticleAPI';
import { useMutation } from '@tanstack/react-query';

export const useNewArticle = () => {
  return useMutation({
    mutationFn: fetchNewArticle,
    onSuccess: () => {
      console.log('게시글 등록 완료');
    },
    onError: (error) => {
      console.error('게시글 등록 실패', error);
    },
  });
};
