import ArrowDown from 'public/icons/arrow_down.svg';
import KebabIcon from 'public/icons/kebab_small.svg';
import { useModal } from '@hooks/useModal';
import AddTeamModal from '@components/team/AddTeamModal';
import { useRouter } from 'next/router';
import PCLogo from 'public/images/logo_pc.png';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Dropdown, { Option } from '@components/@shared/Dropdown';
import { User } from '@/src/types/mysetting/settingData';
import Menu from 'public/icons/menu.svg';
import Link from 'next/link';
import EditTeamModal from '@components/team/banner/EditTeamModal';
import DeleteTeamModal from '@components/team/banner/DeleteTeamModal';
import Button from './Button';

export default function NavBarTeam({ data }: { data: User }) {
  const [selectedTeam, setSelectedTeam] = useState<Option | null>(null);
  const [isLogoOnlyPage, setIsLogoOnlyPage] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  const {
    isOpen: addIsOpen,
    onOpen: addOpenModal,
    onClose: addCloseModal,
  } = useModal();

  const {
    isOpen: editIsOpen,
    onOpen: editOpenModal,
    onClose: editCloseModal,
  } = useModal();

  const {
    isOpen: deleteIsOpen,
    onOpen: deleteOpenModal,
    onClose: deleteCloseModal,
  } = useModal();

  const handleTeamSelet = (groupId: number) => {
    router.push(`/${groupId}`);
  };

  useEffect(() => {
    setIsClient(true);
    const logoOnlyPages = ['/signin', 'signup', 'addteam', '/'];
    // 팀참여하기 페이지, 비밀번호 재설정페이지 추가 필요
    setIsLogoOnlyPage(logoOnlyPages.includes(router.pathname));
  }, [router.pathname]);

  if (!isClient) {
    return null;
  }

  const handleSelect = (option: Option) => {
    if (option.label === '수정하기') {
      editOpenModal(); // '수정하기'를 선택했을 때
    } else {
      deleteOpenModal();
    } // '삭제하기'를 선택했을 때
  };

  const basic: Option[] = [
    {
      label: '수정하기',
      component: (
        <div
          onClick={() => handleSelect({ label: '수정하기', component: null })}
        >
          수정하기
        </div>
      ),
    },
    {
      label: '삭제하기',
      component: (
        <div
          onClick={() => handleSelect({ label: '삭제하기', component: null })}
        >
          삭제하기
        </div>
      ),
    },
  ];

  const teams: Option[] = [
    ...(data?.memberships?.map((membership) => ({
      label: membership.group.name || '',
      component: (
        <div className=" flex items-center justify-between">
          <div
            className="flex items-center gap-3"
            onClick={() => handleTeamSelet(membership.groupId)}
          >
            <Image
              src={membership.group.image}
              alt="팀 이미지"
              width={30}
              height={30}
              className="rounded-md"
            />
            {membership.group.name}
          </div>
          <div className="relative">
            <Dropdown
              options={basic}
              triggerIcon={<KebabIcon />}
              optionsWrapClass="absolute w-[120px] md:w-[135px] left-[20px] top-[0px] mt-2 right-0 rounded-[12px] border border-background-tertiary"
              optionClass="rounded-[12px] md:w-[135px] md:h-[47px] w-[120px] h-[40px] justify-center text-md-regular md:text-lg-regular text-center hover:bg-background-tertiary"
            />
          </div>
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

  return (
    <>
      <div className="md:hidden">
        <Dropdown
          options={teams}
          selected={selectedTeam}
          onSelect={handleSelectTeam}
          triggerClass="flex gap-[12px] items-center text-text-primary"
          triggerIcon={<Menu />}
          optionsWrapClass="mt-[30px] flex p-[16px] rounded-[12px]"
          optionClass="px[8px] py-[7px] rounded-[8px] w-[186px] h-[46px] hover:bg-background-tertiary"
        />
      </div>
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
            <AddTeamModal isOpen={addIsOpen} onClose={addCloseModal} />
          </div>
          <Link href="/article">
            <span className="max-md:hidden">자유게시판</span>
          </Link>
          <EditTeamModal isOpen={editIsOpen} onClose={editCloseModal} />
          <DeleteTeamModal isOpen={deleteIsOpen} onClose={deleteCloseModal} />
        </>
      )}
    </>
  );
}
