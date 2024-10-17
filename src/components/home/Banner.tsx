import Image from 'next/image';

import useResponsiveImageDetails from '@hooks/useResponsiveImageDetails';
import IMAGE_PATHS from '@constants/imagePaths';
import ICON_PATHS from '@constants/iconPaths';

export default function Banner() {
  const { src, width, height } = useResponsiveImageDetails({
    mobile: {
      src: IMAGE_PATHS.LADNING_TRAIN_MB,
      width: 375,
      height: 480,
    },
    tablet: {
      src: IMAGE_PATHS.LADNING_TRAIN_TB,
      width: 744,
      height: 660,
    },
    pc: {
      src: IMAGE_PATHS.LADNING_TRAIN_PC,
      width: 1920,
      height: 862,
    },
  });

  return (
    <section className="relative w-full">
      <Image
        src={src}
        alt="상단 배너 기차이미지"
        layout="responsive"
        width={width}
        height={height}
        className="w-full"
      />
      <div className="absolute top-[55px] flex w-full flex-col items-center gap-1 text-center md:top-[100px] md:gap-2 xl:top-[84px] xl:gap-5">
        <div className="flex h-full items-center gap-1 md:gap-4 xl:gap-6">
          <h1 className="xl:text-5xl-semibold md:text-4xl-semibold text-xl-semibold text-teal-50">
            함께 만들어가는 투두 리스트
          </h1>
          <Image
            alt="작업 도구 아이콘"
            src={ICON_PATHS.REPAIR_PC}
            width={56}
            height={56}
            className="h-7 w-7 md:h-12 md:w-12 xl:h-14 xl:w-14"
          />
        </div>
        <h1 className="gradient-text-brand md:text-5xl-semibold text-3xl-semibold xl:h-40 xl:text-[64px]">
          CoTRAIN
        </h1>
      </div>
    </section>
  );
}
