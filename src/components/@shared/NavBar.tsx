import Image from 'next/image';
import PCLogo from 'public/images/logo_pc.png';
import UserIcon from 'public/icons/user.svg';
import ArrowDown from 'public/icons/arrow_down.svg';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const router = useRouter();
  const [isLogoOnlyPage, setIsLogoOnlyPage] = useState(false);

  useEffect(() => {
    const logoOnlyPages = ['/login', 'signup', 'addteam']; //랜딩페이지, 팀참여하기 페이지, 비밀번호 재설정페이지 추가 필요
    setIsLogoOnlyPage(logoOnlyPages.includes(router.pathname));
  }, [router.pathname]);
  return (
    <header className="flex h-16 items-center justify-center bg-background-secondary">
      <nav className="flex h-8 w-[1200px]  justify-between text-text-primary">
        <div className="flex items-center gap-10">
          <Link href={'./'}>
            <Image src={PCLogo} alt="로고" width={132} height={32} />
          </Link>
          {!isLogoOnlyPage && (
            <>
              <button className="flex items-center gap-2.5">
                팀이름 <ArrowDown />
              </button>
              <Link href={'#'}>
                <span>자유게시판</span>
              </Link>
            </>
          )}
        </div>
        {!isLogoOnlyPage && (
          <Link className="flex items-center gap-2" href={'#'}>
            <UserIcon />
            <span>이름</span>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
