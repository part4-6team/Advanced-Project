// 게시글 메인 페이지
import Button from '@components/@shared/Button';
import { SearchInput } from '@components/@shared/Input';
import ArticleCard from '@components/article/ArticleCard';
import BestCard from '@components/article/BestCard';
import { useRouter } from 'next/router';
import PlusIcon from 'public/icons/plus.svg';

export default function ArticlePage() {
  const router = useRouter();

  const handelNewArticle = () => {
    router.push('/article/newarticle');
  };

  return (
    <div className="mx-4 mt-8 max-w-[1200px] lg:mx-auto">
      <header className="mb-6">
        <h1 className="mb-6 text-2lg-bold md:text-2xl-bold">자유 게시판</h1>
        <SearchInput placeholder="검색어를 입력해주세요" />
      </header>
      <main>
        <BestCard keyword="" />
        <hr className="my-8 opacity-10" />
        <ArticleCard keyword="" />
      </main>
      <div className="fixed bottom-4 right-4">
        <Button
          onClick={handelNewArticle}
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
