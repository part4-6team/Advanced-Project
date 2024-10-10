import Dropdown from '@components/@shared/Dropdown';
import Image from 'next/image';

export default function Test() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 p-4">
        <button className="bg-red-100 text-red-500" type="button">
          버튼1
        </button>
        <button className="bg-blue-100 text-blue-500" type="button">
          버튼2
        </button>
        <button type="button">버튼3</button>
        <button type="button">버튼4</button>
        <button type="button">버튼5</button>
        <button type="button">버튼6</button>
        <button type="button">버튼7</button>
      </div>
      <div className="flex w-full items-center gap-[150px]">
        <Dropdown // 필터
          buttonChildren={
            <div className="flex items-center justify-between px-[14px] py-[10px] text-md-medium text-text-primary">
              <span>menu</span>
              <div className="relative flex h-[24px] w-[24px] items-center justify-center">
                <Image fill src="/icons/toggle.png" alt="팀 드롭다운" />
              </div>
            </div>
          }
          width="w-[120px]"
        >
          <div className="flex h-[40px] w-[120px] items-center px-[14px] py-[11px] text-md-regular">
            최신순
          </div>
          <div className="flex h-[40px] w-[120px] items-center px-[14px] py-[11px] text-md-regular">
            좋아요 많은순
          </div>
        </Dropdown>
        <Dropdown
          buttonChildren={
            <div className="flex items-center gap-[8px] px-[10px] py-[8px] text-md-medium text-text-default">
              <span>menu</span>
              <div className="relative flex h-[24px] w-[24px] items-center justify-center">
                <Image fill src="/icons/toggle.png" alt="팀 드롭다운" />
              </div>
            </div>
          }
          width="w-[109px]"
        >
          <div className="flex h-[40px] w-[109px] items-center px-[16px] py-[11px] text-md-regular">
            한 번
          </div>
          <div className="flex h-[40px] w-[109px] items-center px-[16px] py-[11px] text-md-regular">
            매일
          </div>
          <div className="flex h-[40px] w-[109px] items-center px-[16px] py-[11px] text-md-regular">
            주 반복
          </div>
          <div className="flex h-[40px] w-[109px] items-center px-[16px] py-[11px] text-md-regular">
            월 반복
          </div>
        </Dropdown>

        <Dropdown // 팀 드롭다운
          buttonChildren={
            <div className="flex items-center gap-[12px]">
              <span>team</span>
              <div className="relative flex h-[24px] w-[24px] items-center justify-center">
                <Image fill src="/icons/toggle.png" alt="팀 드롭다운" />
              </div>
            </div>
          }
          width="w-[218px]"
          childType="team"
        >
          <div className="flex w-full items-center justify-between px-[8px] py-[7px] text-lg-medium">
            <div className="flex items-center gap-[12px]">
              <div className="relative h-[32px] w-[32px]">
                <Image fill src="/images/todo.png" alt="이미지" />
              </div>
              <span>경영관리 팀</span>
            </div>
            <Dropdown
              buttonChildren={
                <div className="relative h-[16px] w-[16px]">
                  <Image
                    fill
                    src="/icons/kebab_small.png"
                    alt="드롭다운 메뉴"
                  />
                </div>
              }
              width="w-[120px]"
              childType="menu"
            >
              <div className="flex w-full items-center justify-center px-[24px] py-[14px] text-center text-md-regular">
                수정하기
              </div>
              <div className="flex w-full items-center justify-center px-[24px] py-[14px] text-center text-md-regular">
                삭제하기
              </div>
            </Dropdown>
          </div>
          <div className="flex w-full items-center justify-between px-[8px] py-[7px] text-lg-medium">
            <div className="flex items-center gap-[12px]">
              <div className="relative h-[32px] w-[32px]">
                <Image fill src="/images/todo.png" alt="이미지" />
              </div>
              <span>프로덕트 팀</span>
            </div>
            <div className="relative h-[16px] w-[16px]">
              <Image fill src="/icons/kebab_small.png" alt="드롭다운 메뉴" />
            </div>
          </div>
          <div className="flex w-full items-center justify-between px-[8px] py-[7px] text-lg-medium">
            <div className="flex items-center gap-[12px]">
              <div className="relative h-[32px] w-[32px]">
                <Image fill src="/images/todo.png" alt="이미지" />
              </div>
              <span>마케팅 팀</span>
            </div>
            <div className="relative h-[16px] w-[16px]">
              <Image fill src="/icons/kebab_small.png" alt="드롭다운 메뉴" />
            </div>
          </div>
          <div className="flex w-full items-center justify-between px-[8px] py-[7px] text-lg-medium">
            <div className="flex items-center gap-[12px]">
              <div className="relative h-[32px] w-[32px]">
                <Image fill src="/images/todo.png" alt="이미지" />
              </div>
              <span>테스트</span>
            </div>
            <Dropdown
              buttonChildren={
                <div className="relative h-[16px] w-[16px]">
                  <Image
                    fill
                    src="/icons/kebab_small.png"
                    alt="드롭다운 메뉴"
                  />
                </div>
              }
              width="w-[120px]"
              childType="menu"
            >
              <div className="flex w-full items-center justify-center px-[24px] py-[14px] text-center text-md-regular">
                수정하기
              </div>
              <div className="flex w-full items-center justify-center px-[24px] py-[14px] text-center text-md-regular">
                삭제하기
              </div>
            </Dropdown>
          </div>
        </Dropdown>
        <Dropdown // 메뉴 드롭다운
          buttonChildren={
            <div className="flex items-center">
              <div className="relative flex h-[24px] w-[24px] items-center justify-center">
                <Image fill src="/icons/kebab_large.png" alt="메뉴 드롭다운" />
              </div>
              <span>(menu)</span>
            </div>
          }
          width="w-[120px]"
          childType="menu"
        >
          <div className="flex w-full items-center justify-center px-[24px] py-[14px] text-center text-md-regular">
            수정하기
          </div>
          <div className="flex w-full items-center justify-center px-[24px] py-[14px] text-center text-md-regular">
            삭제하기
          </div>
        </Dropdown>
        <Dropdown
          buttonChildren={
            <div className="flex items-center gap-[8px]">
              <div className="relative flex h-[16px] w-[16px] items-center justify-center">
                <Image
                  fill
                  src="/icons/profile_large.png"
                  alt="유저 드롭다운"
                />
              </div>
              <span className="text-md-medium">userMenu</span>
            </div>
          }
          width=" w-[120px] "
        >
          <div className="flex w-full items-center justify-center px-[14px] py-[14px] text-center text-lg-regular">
            마이 히스토리
          </div>
          <div className="flex w-full items-center justify-center px-[24px] py-[14px] text-center text-lg-regular">
            계정 설정
          </div>
          <div className="flex w-full items-center justify-center px-[24px] py-[14px] text-center text-lg-regular">
            팀 참여
          </div>
          <div className="flex w-full items-center justify-center px-[24px] py-[14px] text-center text-lg-regular">
            로그아웃
          </div>
        </Dropdown>
      </div>
    </>
  );
}
