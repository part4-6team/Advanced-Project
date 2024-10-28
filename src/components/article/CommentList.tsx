import SmallKebabIcon from 'public/icons/kebab_small.svg';
import ProfileIcon from 'public/icons/profile_large.svg';
import { useCommentCards } from '@hooks/article/useCommentCard';
import NetworkError from '@components/@shared/NetworkError';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function CommentList() {
  const router = useRouter();
  const { articleId } = router.query;

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCommentCards({
    limit: 3,
    articleId,
  });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isLoading) {
    return <p>로딩중...</p>;
  }

  if (isError) {
    return (
      <div>
        <NetworkError />
      </div>
    );
  }

  const comments = data?.pages.flatMap((page) => page.list) || [];

  return (
    <>
      {comments.map((comment) => (
        <article
          key={comment.id}
          className="rounded-xl bg-background-secondary"
        >
          <div className="flex flex-col gap-12 p-4 ">
            <div className="flex justify-between">
              <span className="break-words text-md-regular text-text-primary md:text-lg-regular">
                {comment.content}
              </span>
              <SmallKebabIcon />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <ProfileIcon />
                <span className="ml-[6px] mr-2 border-r-[1px] border-slate-700/60 pr-2  text-xs-medium text-text-primary md:text-md-medium ">
                  {comment.writer.nickname}
                </span>
                <span className="text-xs-medium text-slate-400 md:text-md-medium">
                  {comment.createdAt}
                </span>
              </div>
            </div>
          </div>
        </article>
      ))}
      <div ref={ref}>로딩중</div>
    </>
  );
}
