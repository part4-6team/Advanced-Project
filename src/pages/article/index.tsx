// 게시글 메인 페이지
import Button from '@components/@shared/Button';
import { SearchInput } from '@components/@shared/Input';
import ArrayDropdown from '@components/article/ArrayDropdown';
import ArticleCard from '@components/article/ArticleCard';
import ArrowRightIcon from 'public/icons/arrow_right.svg';
import PlusIcon from 'public/icons/plus.svg';

export default function ArticlePage() {
  return (
    <div className="mx-4 mt-8">
      <header className="mb-6">
        <h1 className="mb-6 text-2lg-bold">자유 게시판</h1>
        <SearchInput placeholder="검색어를 입력해주세요" />
      </header>
      <main>
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg-bold">베스트 게시글</h2>
            <button type="button" className="flex items-center gap-[1px]">
              <span className="text-sm text-slate-400">더보기</span>
              <ArrowRightIcon />
            </button>
          </div>
          <article className="flex justify-center">
            <ArticleCard />
          </article>
        </div>
        <hr className="my-8 opacity-10" />
        <div className="mb-6 flex items-center justify-between">
          <h2>게시글</h2>
          <ArrayDropdown />
        </div>
        <ul className="flex flex-col gap-4">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </ul>
      </main>
      <div className="fixed bottom-4 right-4">
        <Button
          shape="round"
          className="bg-amber-500 hover:bg-amber-400 active:bg-amber-600"
        >
          <div className="flex items-center justify-center">
            <PlusIcon />글 작성하기
          </div>
        </Button>
      </div>
    </div>
  );
}
