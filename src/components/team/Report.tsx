import Image from 'next/image';
import CircleGraph from './CircleGraph';

export default function Report() {
  return (
    <section>
      <p className="my-[20px] text-lg-medium">리포트</p>
      <div className="flex h-[217px] items-center justify-between gap-[30px] rounded-[12px] bg-background-secondary pr-[10px] md:px-[24px]">
        <div className="flex items-center gap-[20px]">
          <div className="hidden md:block">
            <CircleGraph
              backgroundColor="#334155"
              gradientColorStart="#10B981"
              gradientColorEnd="#A3E635"
              radius={60}
              percentage={25}
              strokeWidth={30}
            />
          </div>
          <div className="md:hidden">
            <CircleGraph
              backgroundColor="#334155"
              gradientColorStart="#10B981"
              gradientColorEnd="#A3E635"
              radius={60}
              percentage={25}
              strokeWidth={30}
              isTextShown
              additionalText="오늘"
              additionalTextColor="#ffffff"
            />
          </div>
          <div className="hidden md:block md:text-md-medium">
            <p>오늘의</p>
            <p>진행상황</p>
            <p className="bg-brand-gradient bg-clip-text text-4xl text-transparent">
              25%
            </p>
          </div>
        </div>
        <div className="max-w-[400px] flex-grow xl:w-[400px] xl:flex-none">
          <div className="flex h-[76.5px] w-full items-center justify-between rounded-[12px] bg-background-tertiary px-[16px] ">
            <div className="flex flex-col gap-[4px]">
              <p className="text-xs-medium text-text-secondary">오늘의 할 일</p>
              <p className="text-2xl-bold text-brand-tertiary">20개</p>
            </div>
            <Image
              width={50}
              height={30}
              src="/images/todo.png"
              alt="얼굴 아이콘"
            />
          </div>
          <div className="mt-[8px] flex h-[76.5px] w-full items-center justify-between rounded-[12px] bg-background-tertiary px-[16px]">
            <div className="flex flex-col gap-[4px]">
              <p className="text-xs-medium text-text-secondary">한 일</p>
              <p className="text-2xl-bold text-brand-tertiary">5개</p>
            </div>
            <Image
              width={50}
              height={30}
              src="/images/done_signs.png"
              alt="한 일 아이콘"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
