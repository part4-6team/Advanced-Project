import Image from 'next/image';

import useResponsiveImageDetails from '@hooks/useResponsiveImageDetails';
import IMAGE_PATHS from '@constants/imagePaths';

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
    <section className="relative h-[600px] w-full bg-[url('/images/landing_background.png')] bg-cover bg-center bg-no-repeat md:h-[600px] xl:mx-auto xl:w-[1200px]">
      <div className="mt-[100px] flex flex-col items-center gap-1 md:top-[100px] md:gap-2 xl:top-[84px] xl:gap-5">
        <div className="relative mx-auto mt-[10px] h-[36px] w-[300px] md:h-[56px] md:w-[500px]">
          <Image
            alt="배너 메인 멘트"
            src="/images/landing_ment.png"
            fill
            quality={100}
          />
        </div>
        <div className="relative mt-[10px] h-[36px] w-[120px] md:h-[56px] md:w-[200px]">
          <Image alt="배너 로고" src="/images/landing_banner_logo.png" fill />
        </div>
        <Image
          src={src}
          alt="상단 배너 기차이미지"
          layout="responsive"
          width={width}
          height={height}
          className="w-full"
        />
      </div>
    </section>
  );
}
