import React, { useCallback, useEffect, useState } from 'react';

const MENU_LIST = [
  // 테스트용
  { id: 1, value: '경영관리팀' },
  { id: 2, value: '프로덕트팀' },
  { id: 3, value: '마케팅팀' },
];

export default function Dropdown() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleButtonClick}
        className="bg-background-secondary text-text-primary"
      >
        드롭다운
      </button>
      {isMenuOpen && (
        <ul className="rounded-[12px]  border border-border-primary border-opacity-10 bg-background-secondary text-text-primary">
          {MENU_LIST.map((menu) => (
            <li
              key={menu.id}
              className="list-none hover:bg-background-tertiary"
            >
              {menu.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
