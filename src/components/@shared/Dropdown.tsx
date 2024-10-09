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
