import Image from 'next/image';
import ProfileIcon from 'public/icons/profile_large.svg';
import HeartIcon from 'public/icons/heart.svg';
import ArrayDropdown from '@components/article/ArrayDropdown';
import { useCard } from '@hooks/article/useArticleCard';
import NetworkError from '@components/@shared/NetworkError';
import dayjs from 'dayjs';

interface ArticleCardProps {
  keyword: string;
}

export default function ArticleCard({ keyword }: ArticleCardProps) {
  const { data: cards, isError } = useCard(1, 6, 'like', keyword || '');

  if (isError) {
    return (
      <div>
        <NetworkError />
      </div>
    );
  }

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg-bold md:text-xl-bold">게시글</h2>
        <ArrayDropdown />
      </div>
      <ul className="grid gap-4 xl:grid-cols-2">
        {cards?.map((card) => (
          <li key={card.id}>
            <article className=" h-[178px] w-full rounded-xl border border-background-tertiary bg-background-secondary">
              <div className="mx-4 mb-4 mt-6  ">
                <div className="mb-10 flex justify-between">
                  <div>
                    <h3 className="mb-3 text-md-medium md:text-2lg-medium">
                      {card.title}
                    </h3>
                    <span className="text-xs-regular text-slate-400 md:text-md-medium">
                      {dayjs(card.createdAt).format('YYYY.MM.DD')}
                    </span>
                  </div>
                  <div className="h-16 w-16 overflow-hidden rounded-lg">
                    <Image
                      src={card.image}
                      width={64}
                      height={64}
                      alt="게시글 이미지"
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ProfileIcon />
                    <span className="text-xs-medium md:text-md-medium">
                      {card.writer.nickname}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <HeartIcon />
                    <span className="text-xs-regular text-slate-400 md:text-md-medium">
                      {card.likeCount}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </>