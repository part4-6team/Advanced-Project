import { fetchCommentCard } from '@/src/api/article/CommentCardAPI';
import { useInfiniteQuery } from '@tanstack/react-query';

interface UseCommentCardsProps {
  limit: number;
  articleId: string | string[] | undefined;
}

export const useCommentCards = ({ limit, articleId }: UseCommentCardsProps) => {
  return useInfiniteQuery({
    queryKey: ['CommentCards', articleId],
    queryFn: ({ pageParam = null }) =>
      fetchCommentCard({ articleId, limit, nextCursor: pageParam }),
    getNextPageParam: (lastPage) =>
      lastPage.nextCursor ? lastPage.nextCursor : null,
    initialPageParam: undefined,
    enabled: !!articleId,
  });
};
