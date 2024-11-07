import Image from 'next/image';
import IMAGE_PATHS from '@constants/imagePaths';

export default function NoTaskCard() {
  return (
    <div className="gradient-border mx-auto mb-6 mt-40 flex w-1/2 flex-col justify-center rounded-40 shadow-[0_0_12px_2px_rgba(255,255,255,0.5)] ">
      <h1 className="mb-4 mt-10 flex w-full items-center justify-center text-xl-medium text-text-secondary">
        추가된 할 일이 없습니다.
      </h1>
      <p className="mb-4 ml-10 flex flex-col gap-[2px] text-sm font-medium text-text-disabled md:ml-8">
        새로운 할 일을 추가해서 <br />
        세부적인 일정을 기록해보세요!
      </p>
      <div className="flex gap-1 pl-6">
        <div className="mb-8 ml-auto mr-0 mt-auto flex flex-row items-center justify-around">
          <Image
            alt="할 일 카드"
            src={IMAGE_PATHS.TASKCARD}
            width={433}
            height={73}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
