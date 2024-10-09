import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

interface DropdownProps {
  buttonChildren: ReactNode;
  children: ReactNode;
  width: string;
  childType?: 'menu' | 'team';
}

/**
 * Dropdown 공통 컴포넌트
 * @param buttonChildren 드롭다운을 펼치는 버튼 디자인 컴포넌트를 넣어주시면 됩니다.
 * @param children 드롭다운이 펼쳐질 때 리스트업 할 디자인 컴포넌트를 넣어주시면 됩니다.
 * @param width 리스트업 할 컴포넌트들을 감싸는 ul태그의 넓이를 지정합니다
 * @param childType 네비게이션 바의 팀(이름)목록: team, 나머지는 menu로 지정해주세요.
 */
export default function Dropdown({
  buttonChildren,
  children,
  width,
  childType = 'menu',
}: DropdownProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement | null>(null);

  const handleButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setIsMenuOpen((nextIsMenuOpen) => !nextIsMenuOpen);
    },
    []
  );

  // 메뉴 밖에 누르면 드롭다운 사라지게
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutsideOfMenu = () => setIsMenuOpen(false);
    window.addEventListener('click', handleClickOutsideOfMenu);

    return () => {
      window.removeEventListener('click', handleClickOutsideOfMenu);
    };
  }, [isMenuOpen]);

  // 드롭다운이 화면 밖으로 나갈 때 위치 조정
  useEffect(() => {
    if (isMenuOpen && dropdownRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const overflowRight = dropdownRect.right > window.innerWidth;

      if (overflowRight) {
        dropdownRef.current.style.left = 'auto';
        dropdownRef.current.style.right = '0'; // 우측 정렬
      }
    }
  }, [isMenuOpen, childType]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleButtonClick}
        className="text-text-primary"
      >
        {buttonChildren}
      </button>
      {isMenuOpen && (
        <ul
          ref={dropdownRef}
          className={`absolute z-10 flex flex-col items-center justify-center rounded-[12px] border border-background-tertiary bg-background-secondary text-text-primary ${width} ${childType === 'team' ? 'border-none p-[16px]' : ''}`}
        >
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return (
                <li
                  className={`flex h-full w-full rounded-[12px] hover:bg-background-tertiary
                    ${childType === 'team' ? 'rounded-[8px]' : ''}`}
                >
                  {child}
                </li>
              );
            }
          })}
        </ul>
      )}
    </div>
  );
}
