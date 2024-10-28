import {
  fetchCardDetail,
  fetchCommentadd,
} from '@/src/api/article/articlecardAPI';
import { Article } from '@/src/types/article/ArticleType';
import { useMutation, useQuery } from '@tanstack/react-query';

interface FetchCardDetailProps {
  articleId: number;
  content?: string;
}

export const useDetailCard = ({ articleId }: FetchCardDetailProps) => {
  return useQuery<Article>({
    queryKey: ['DetailCard'],
    queryFn: () => fetchCardDetail({ articleId }),
    enabled: !!articleId,
  });
};

export const useCommentAdd = () => {
  return useMutation({
    mutationFn: ({
      articleId,
      content,
    }: {
      articleId: number;
      content: string;
    }) => fetchCommentadd({ articleId, content }),
    onSuccess: () => {
      console.log('댓글등록 완료 ');
    },
    onError: (error) => {
      console.error('댓글 등록안됨', error);
    },
  });
};
