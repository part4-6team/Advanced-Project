// 게시글 상세 페이지

import DetailCard from '@components/article/DetailCard';
import CommentList from '@components/article/CommentList';

export default function ArticleDetail() {
  return (
    <div className="mx-4 mt-10 max-w-[1200px] xl:mx-auto">
      <DetailCard />
      <hr className="my-8 opacity-10" />
      <footer>
        <CommentList />
      </footer>
    </div>
  );
}
