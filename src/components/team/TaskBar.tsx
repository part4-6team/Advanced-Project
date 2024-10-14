import Image from 'next/image';
import CircleGraph from './CircleGraph';

export default function TaskBar() {
  return (
    <div className="flex h-[40px] justify-between bg-background-secondary">
      <div className="flex items-center justify-between gap-[10px]">
        <div className="h-full w-[12px] rounded-bl-[12px] rounded-br-[0px] rounded-tl-[12px] rounded-tr-[0px] bg-point-purple">
          &nbsp;
        </div>
        <p className="text-md-medium">법인 설립</p>
      </div>
      <div className="mr-[10px] flex items-center gap-[10px]">
        <div className="flex h-[25px] w-[58px] items-center justify-between rounded-[12px] bg-background-primary px-[8px] py-[4px]">
          <CircleGraph
            backgroundColor="#ffffff"
            gradientColorStart="#10B981"
            gradientColorEnd="#10B981"
            radius={6}
            percentage={40}
            strokeWidth={3}
          />
          <p className="text-md-regular text-brand-primary">3/5</p>
        </div>
        <Image
          src="/icons/kebab_large.svg"
          alt="더보기 아이콘"
          width={4}
          height={10}
        />
      </div>
    </div>
  );
}
