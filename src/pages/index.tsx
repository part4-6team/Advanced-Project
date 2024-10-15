import Image from 'next/image';
// import Link from 'next/link';

import Button from '@components/@shared/Button';
import IMAGE_PATHS from '@constants/imagePaths';
import ICON_PATHS from '@constants/iconPaths';

export default function Home() {
  //  const { isLoggedIn, teamId } = useAuth();

  return (
    <>
      <section className="relative w-full">
        <Image
          src={IMAGE_PATHS.LADNING_TRAIN_MB}
          alt="상단 배너 기차이미지"
          layout="responsive"
          width={375}
          height={480}
          className="md:hidden"
        />
        <Image
          src={IMAGE_PATHS.LADNING_TRAIN_TB}
          alt="상단 배너 기차이미지"
          layout="responsive"
          width={744}
          height={660}
          className="hidden w-full md:block xl:hidden"
        />
        <Image
          src={IMAGE_PATHS.LADNING_TRAIN_PC}
          alt="상단 배너 기차이미지"
          width={1920}
          height={862}
          layout="responsive"
          className="hidden w-full xl:block"
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
            Coworkers
          </h1>
        </div>
      </section>

      <section className="mx-4 flex flex-col gap-8 text-2lg-medium text-white md:mx-6 xl:mx-auto xl:w-[996px] xl:text-2xl-medium">
        <div className="my-10 mt-20 flex w-full justify-center md:my-20 xl:my-10 xl:mb-32">
          {/* <Link href={isLoggedIn ? `/${teamId}` : '/login'} passHref> */}
          <Button bgColor="gradient" shape="round" width={343} height={48}>
            지금 시작하기
          </Button>
          {/* </Link> */}
        </div>
        <div className="gradient-border rounded-40 flex w-full flex-col px-[54px] shadow-[0_0_12px_2px_rgba(255,255,255,0.5)] md:px-[81px] xl:px-[174px] ">
          <div className="mx-auto flex flex-col items-center md:w-full md:flex-row md:justify-around">
            <div className="flex-start my-12 flex w-full flex-col gap-4 md:order-2 md:w-40 xl:w-52">
              <Image
                alt="폴더 랜딩아이콘"
                src={ICON_PATHS.LANDING_FOLDER}
                width={48}
                height={48}
                className="rounded-xl shadow-[0_0_12px_2px_rgba(0,0,0,0.25)]"
              />
              <h2 className="flex flex-col gap-1">
                그룹으로 <span> 할 일을 관리해요 </span>
              </h2>
            </div>
            <Image
              alt="팀 관리 기능 랜딩이미지"
              src={IMAGE_PATHS.LANDING_TEAM}
              width={291}
              height={338}
              className="md:order-1 md:pt-[81px]"
            />
          </div>
        </div>
        <div className="rounded-40 flex w-full border-[1px] border-[rgba(248,250,252,0.1)] bg-background-secondary px-[54px] md:px-[81px] xl:px-[174px]">
          <div className="mx-auto flex flex-col items-center md:w-full md:flex-row md:justify-around">
            <Image
              alt="멤버 초대 기능 랜딩이미지"
              src={IMAGE_PATHS.LANDING_INVITE}
              width={291}
              height={338}
              className="md:order-2 md:pb-[81px]"
            />
            <div className="flex-start my-12 flex w-full flex-col gap-4 md:order-1 md:w-40 md:items-end xl:w-52">
              <Image
                alt="이메일 랜딩아이콘"
                src={ICON_PATHS.LANDING_EMAIL}
                width={48}
                height={48}
                className="rounded-xl shadow-[0_0_12px_2px_rgba(0,0,0,0.25)]"
              />
              <h2 className="flex flex-col gap-1 md:text-end">
                간단하게 멤버들을 <span> 초대해요 </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="rounded-40 flex w-full bg-slate-950 px-[54px] md:px-[81px] xl:px-[174px]">
          <div className="mx-auto flex flex-col items-center md:w-full md:flex-row md:justify-around">
            <Image
              alt="투두 기능 랜딩이미지"
              src={IMAGE_PATHS.LANDING_TODO}
              width={291}
              height={338}
              className="md:pb-[81px]"
            />
            <div className="flex-start my-12 flex w-full flex-col gap-4 md:w-40 xl:w-52">
              <Image
                alt="이메일 체크아이콘"
                src={ICON_PATHS.LANDING_CHECK}
                width={48}
                height={48}
                className="rounded-xl shadow-[0_0_12px_2px_rgba(0,0,0,0.25)]"
              />
              <h2 className="flex flex-col gap-1">
                할 일도 간편하게 <span> 체크해요 </span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[640px] w-full md:h-[940px] xl:h-[1080px]">
        <div className="absolute top-1/4 flex w-full flex-col items-center gap-4 text-center text-text-primary md:gap-6">
          <h3 className="md:text-4xl-semibold text-2xl-semibold">
            지금 바로 시작해보세요
          </h3>
          <p className=" text-lg-medium md:text-2xl-medium">
            팀원 모두와 같은 방향,
            <span className="block md:inline">
              같은 속도로 나아가는 가장 쉬운 방법
            </span>
          </p>
        </div>
        <Image
          src={IMAGE_PATHS.LADNING_WORKERS_MB}
          alt="하단 배너 협업이미지"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 h-full md:hidden"
        />
        <Image
          src={IMAGE_PATHS.LADNING_WORKERS_TB}
          alt="하단 배너 협업이미지"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 hidden h-full md:block xl:hidden"
        />
        <Image
          src={IMAGE_PATHS.LADNING_WORKERS_PC}
          alt="하단 배너 협업이미지"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 hidden h-full xl:block"
        />
      </section>
    </>
  );
}
