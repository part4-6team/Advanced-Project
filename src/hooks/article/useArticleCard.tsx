import { fetchBestCard } from '@/src/api/article/articlecardAPI';
import { list } from '@/src/types/article/CardType';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const useCard = (
  page: number,
  pageSize: number,
  orderBy: string,
  keyword: string
) => {
  return useQuery<list[]>({
    queryKey: ['bestcard', page, pageSize, orderBy, keyword],
    queryFn: () =>
      fetchBestCard({ queryKey: [page, pageSize, orderBy, keyword] }),
  });
};

// 무한 스크롤 관련 hook
export const useCards = (
  pageSize: number,
  orderBy: string,
  keyword: string
) => {
  return useInfiniteQuery({
    queryKey: ['articleCard', pageSize, orderBy, keyword],
    queryFn: ({ pageParam = 1 }) =>
      fetchBestCard({ queryKey: [pageParam, pageSize, orderBy, keyword] }),
    getNextPageParam: (lastPage, allPage) => {
      if (lastPage.length < pageSize) {
        return undefined;
      }
      return allPage.length + 1;
    },
    initialPageParam: 1,
  });
};
