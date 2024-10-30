import { authAxiosInstance } from '@libs/axios/axiosInstance';

interface NewArticleProps {
  image: string;
  content: string;
  title: string;
}

export const fetchNewArticle = async ({
  image,
  content,
  title,
}: NewArticleProps) => {
  const response = await authAxiosInstance.post('articles', {
    image,
    content,
    title,
  });
  return response.data;
};
