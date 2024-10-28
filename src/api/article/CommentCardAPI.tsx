import { authAxiosInstance } from '@libs/axios/axiosInstance';

interface FetchCommentCardProps {
  articleId: string | string[] | undefined;
  limit: number;
  nextCursor: number | null;
}

export const fetchCommentCard = async ({
  limit,
  nextCursor = null,
  articleId,
}: FetchCommentCardProps) => {
  const response = await authAxiosInstance.get(
    `articles/${articleId}/comments`,
    {
      params: { limit, nextCursor },
    }
  );
  return response.data;
};
