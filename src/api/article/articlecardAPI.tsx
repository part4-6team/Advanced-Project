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
