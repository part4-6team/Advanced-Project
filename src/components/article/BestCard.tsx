import Image from 'next/image';
import IcmediaIcon from 'public/icons/ic_medal.svg';
import ProfileIcon from 'public/icons/profile_large.svg';
import HeartIcon from 'public/icons/heart.svg';
import { useCard } from '@hooks/article/useArticleCard';

interface BestCardProps {
  keyword: string;
}

export default function BestCard({ keyword }: BestCardProps) {
  const {
    data: cards,
    isLoading,
    isError,
  } = useCard(1, 3, 'like', keyword || '');

  // 로딩 상태 처리
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // 에러 상태 처리
  if (isError) {
    return <div>Failed to load cards</div>;
  }

  return (
    <ul>
      {cards?.map((card) => (
        <li key={card.List.id}>
          <article className=" h-[178px] w-full rounded-xl border border-background-tertiary bg-background-secondary">
            <div className="mx-4 mb-4 mt-[9.5px] flex flex-col  ">
              <div className="mb-6">
                <div className=" mb-[13.5px] flex items-center">
                  <IcmediaIcon />
                  <span className="text-md-semibold md:text-lg-semibold">
                    Best
                  </span>
                </div>
                <div className=" flex justify-between">
                  <div>
                    <h3 className="mb-3 text-md-medium md:text-2lg-medium">
                      {card.List.title}
                    </h3>
                    <span className="text-xs-regular text-slate-400 md:text-md-medium">
                      {card.List.createdAt}
                    </span>
                  </div>
                  <div>
                    <Image
                      src="https://i.pinimg.com/736x/0c/c7/16/0cc7169aec1d81898f1daf4b46d41857.jpg"
                      width={64}
                      height={64}
                      alt="게시글 이미지"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ProfileIcon />
                  <span className="text-xs-medium md:text-md-medium">
                    {card.List.wirter.nickname}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <HeartIcon />
                  <span className="text-xs-regular text-slate-400 md:text-md-medium">
                    {card.List.likeCount}
                  </span>
                </div>
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
