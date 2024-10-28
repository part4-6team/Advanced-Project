import { fetchArticleDelete } from '@/src/api/article/articlecardAPI';
import { useMutation } from '@tanstack/react-query';

export const useArticleDelete = () => {
  return useMutation({
    mutationFn: fetchArticleDelete,
    onSuccess: () => {
      console.log('게시글 삭제 완료');
    },
    onError: (error) => {
      console.log('게시글 삭제 실패', error);
    },
  });
};
