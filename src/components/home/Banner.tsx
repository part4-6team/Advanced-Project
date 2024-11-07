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
    <section className="relative h-[400px] w-full bg-[url('/images/landing_background.png')] bg-contain bg-center bg-no-repeat md:h-[600px]">
      <div className="mt-[100px] flex flex-col items-center gap-1 text-center md:top-[100px] md:gap-2 xl:top-[84px] xl:gap-5">
        <Image
          alt="배너 메인 멘트"
          src="/images/landing_ment.png"
          width={400}
          height={56}
        />
        <Image
          alt="배너 로고"
          src="/images/landing_banner_logo.png"
          width={200}
          height={56}
        />
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
