import { authAxiosInstance } from '@libs/axios/axiosInstance';

interface FetchCommentCardProps {
  articleId: string | string[] | undefined;
  limit: number;
  nextCursor: number | null;
}

// 댓글 리스트 가져오는 API 함수
export const fetchCommentCard = async ({
  limit,
  nextCursor = null,
  articleId,
}: FetchCommentCardProps) => {
  const response = await authAxiosInstance.get(
    `articles/${articleId}/comments`,
    {
      params: { limit, cursor: nextCursor },
    }
  );
  return response.data;
};
