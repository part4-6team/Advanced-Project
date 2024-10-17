import Image from 'next/image';

export default function MemberBox() {
  return (
    <div className="flex h-[68px] items-center justify-between gap-[10px] rounded-[16px] bg-background-secondary px-[24px] md:h-[73px] xl:w-[384px]">
      <div className="grid grid-cols-[30px_1fr] grid-rows-2 items-center md:grid-cols-[40px_1fr] md:grid-rows-2 md:gap-[5px]">
        <div className="relative my-auto h-[24px] w-[24px] md:col-span-1 md:row-span-2 md:row-start-1 md:mb-[3px] md:h-[34px] md:w-[34px]">
          <Image src="/icons/profile_large.svg" alt="프로필 사진" fill />
        </div>
        <p className="ml-[4px] overflow-hidden text-ellipsis whitespace-nowrap text-md-medium md:col-start-2 md:row-start-1 md:ml-0">
          최영선
        </p>
        <p className="col-span-2 row-start-2 overflow-hidden text-ellipsis whitespace-nowrap text-xs-regular text-text-secondary">
          sunn7931@naver.com
        </p>
      </div>
      <Image
        src="/icons/kebab_large.svg"
        alt="더보기 아이콘"
        width={4}
        height={10}
      />
    </div>
  );
}
