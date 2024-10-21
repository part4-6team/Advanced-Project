import Dropdown, { Option } from '@components/@shared/Dropdown';
import Image from 'next/image';
import PCLogo from 'public/images/logo_pc.png';
import UserIcon from 'public/icons/user.svg';
import ArrowDown from 'public/icons/arrow_down.svg';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Menu from 'public/icons/menu.svg';
import { useModal } from '@hooks/useModal';
import AddTeamModal from '@components/team/AddTeamModal';
import KebabIcon from 'public/icons/kebab_small.svg';
import { useUserData } from '@hooks/mysetting/useUserData';
import NetworkError from './NetworkError';
import Button from './Button';

export default function NavBar() {
  const router = useRouter();
  const [isLogoOnlyPage, setIsLogoOnlyPage] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<Option | null>(null);
  const [isClient, setIsClient] = useState(false);

  const { data, isLoading, isError } = useUserData();

  const {
    isOpen: addIsOpen,
    openModal: addOpenModal,
    closeModal: addCloseModal,
  } = useModal();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    router.push('/signin');
  };

  useEffect(() => {
    setIsClient(true);
    const logoOnlyPages = ['/login', 'signup', 'addteam', '/'];
    // 팀참여하기 페이지, 비밀번호 재설정페이지 추가 필요
    setIsLogoOnlyPage(logoOnlyPages.includes(router.pathname));
  }, [router.pathname]);

  if (!isClient) {
    return null;
  }

  const basic: Option[] = [
    {
      component: (
        <button
          type="button"
          onClick={() => router.push(`/myhistory/${data?.id}`)}
        >
          마이 히스토리
        </button>
      ),
    },
    {
      component: (
        <button
          type="button"
          onClick={() => router.push(`/mysetting/${data?.id}`)}
        >
          계정 설정
        </button>
      ),
    },
    {
      component: (
        <button type="button" onClick={() => router.push('#')}>
          팀 참여
        </button>
      ),
    },
    {
      component: (
        <button type="button" onClick={handleLogout}>
          로그아웃
        </button>
      ),
    },
  ];

  const teams: Option[] = [
    ...(data?.memberships?.map((membership) => ({
      label: membership.group.name || '',
      component: (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={membership.group.image}
              alt="팀 이미지"
              width={30}
              height={30}
              className="rounded-md"
            />
            {membership.group.name}
          </div>
          <KebabIcon />
        </div>
      ),
    })) || []),
    {
      label: '팀 메뉴',
      component: (
        <Button bgColor="transparent" border="white" size="full" height={40}>
          + 팀 추가하기
        </Button>
      ),
    },
  ];

  const handleSelectTeam = (option: Option) => {
    if (option.label === '팀 메뉴') {
      addOpenModal();
    } else {
      setSelectedTeam(option);
    }
  };

  if (isLoading) {
    return <div> 로딩중</div>;
  }

  if (isError) {
    return (
      <div>
        <NetworkError />
      </div>
    );
  }

  return (
    <header className=" flex h-16 items-center justify-center border-b border-border-primary border-opacity-10 bg-background-secondary px-6">
      <nav className="flex h-8 w-[1200px]  items-center justify-between text-text-primary max-xl:w-full max-md:w-full ">
        <div className="flex items-center gap-10 max-md:gap-5">
          <button type="button" className="md:hidden">
            <Menu />
          </button>
          <Link href="/">
            <div className="block max-xl:hidden">
              <Image src={PCLogo} alt="로고" width={158} height={32} />
            </div>
            <div className="hidden max-xl:block">
              <Image src={PCLogo} alt="로고" width={102} height={20} />
            </div>
          </Link>
          {!isLogoOnlyPage && (
            <>
              <div className="max-md:hidden">
                <Dropdown
                  initialOption={teams[0]}
                  options={teams}
                  selected={selectedTeam}
                  onSelect={handleSelectTeam}
                  triggerClass="flex gap-[12px] items-center text-text-primary"
                  triggerIcon={<ArrowDown />}
                  optionsWrapClass="mt-[30px] flex p-[16px] rounded-[12px]"
                  optionClass="px[8px] py-[7px] rounded-[8px] w-[186px] h-[46px] hover:bg-background-tertiary"
                />
                <AddTeamModal isOpen={addIsOpen} closeModal={addCloseModal} />
              </div>
              <Link href="#">
                <span className="max-md:hidden">자유게시판</span>
              </Link>
            </>
          )}
        </div>
        {!isLogoOnlyPage && (
          <button type="button">
            <Dropdown
              options={basic}
              triggerIcon={
                <div className="flex items-center gap-2">
                  {' '}
                  <UserIcon />
                  <span className="max-xl:hidden">
                    {data?.nickname || '이름'}
                  </span>
                </div>
              }
              optionsWrapClass="mt-2 right-0 rounded-[12px] border border-background-tertiary"
              optionClass="rounded-[12px] md:w-[150px] md:h-[47px] w-[120px] h-[40px] justify-center text-md-regular md:text-lg-regular text-center hover:bg-background-tertiary"
            />
          </button>
        )}
      </nav>
    </header>
  );
}
