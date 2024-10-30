import { authAxiosInstance } from '@libs/axios/axiosInstance';

export const fetchBestCard = async ({
  queryKey,
}: {
  queryKey: [number, number, string, string];
}) => {
  const [page, pageSize, orderBy, keyword] = queryKey;

  const response = await authAxiosInstance.get('articles?', {
    params: { page, pageSize, orderBy, keyword },
  });
  return response.data.list;
};

interface FetchCardDetailProps {
  articleId: number;
  content?: string;
}

// 게시글 내용 보여주는 API
export const fetchCardDetail = async ({ articleId }: FetchCardDetailProps) => {
  const response = await authAxiosInstance.get(`articles/${articleId}`);
  return response.data;
};

// 댓글 작성하는 API
export const fetchCommentadd = async ({
  articleId,
  content,
}: FetchCardDetailProps) => {
  const response = await authAxiosInstance.post(
    `articles/${articleId}/comments`,
    {
      content,
    }
  );
  return response.data;
};

// 댓글 삭제하는 API
export const fetchArticleDelete = async (
  articleId: string | string[] | undefined
) => {
  const response = await authAxiosInstance.delete(`articles/${articleId}`);
  return response.data;
};
