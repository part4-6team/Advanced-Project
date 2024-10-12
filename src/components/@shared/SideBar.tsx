import { ReactNode, useEffect, useRef, useState } from 'react';
import XIcon from 'public/icons/x.svg';
import clsx from 'clsx';
import Button from '@components/@shared/Button';
import CheckWhiteIcon from 'public/icons/check_white.svg';

interface SideBarProps {
  children: ReactNode;
  trigger: (toggle: () => void) => ReactNode;
  position: 'left' | 'right';
  clickEvent?: () => void;

}

/**
 * SideBar 공통 컴포넌트
 * @param children 사이드바 안의 컨텐츠 넣어주시면 됩니다
 * @param trigger 사이드바를 여는 트리거로 사이드 바를 여는 버튼 혹은 글을 적용하면 됩니다.
 * @param position 왼쪽에서 열리는 사이드바인지 오른쪽에서 열리는 사이드바인지
 * @param clickEvent 완료하기 버튼을 눌렀을때 발생하는 이벤트 넣어주시면 됩니다
 */

export default function SideBar({
  children,
  trigger,
  position,
  clickEvent,
}: SideBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const sideBarRef = useRef<HTMLDivElement>(null);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  //사이드바 밖 부분을 클릭시 닫기위한 로직
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sideBarRef.current &&
        !sideBarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);


  const classes = {
    sidebar: clsx(
      'fixed h-auto transform bg-gray-800 text-white transition-transform',
      {
        'inset-y-0 left-0 w-52': position === 'left',
        'bottom-0 right-0 top-[66px] min-w-[375px] border border-border-primary border-opacity-50':
          position === 'right',
        'translate-x-0': isOpen,
        '-translate-x-full': !isOpen && position === 'left',
        'translate-x-full': !isOpen && position === 'right',
      }
    ),

    closeButton: clsx('absolute top-4', {
      'right-4': position === 'left',
      'left-4': position === 'right',
    }),

    completeButtonWrapper: clsx({
      'fixed bottom-6 right-6': position === 'right',
      hidden: position === 'left',
    }),
  };

  return (
    <>
      {/* 메뉴를 여는 트리거 */}
      {trigger(toggleSideBar)}
      <div ref={sideBarRef} className={classes.sidebar}>
        <button className={classes.closeButton} onClick={toggleSideBar}>
          <XIcon />
        </button>
        <div className="mt-10">{children}</div>
        <div className={classes.completeButtonWrapper}>
          <Button shape="round">
            <div
              onClick={clickEvent}
              className="flex items-center justify-center gap-1"
            >
              <CheckWhiteIcon />
              <span>완료하기</span>
            </div>
          </Button>
        </div>
      </div>
    </>
  );
}
