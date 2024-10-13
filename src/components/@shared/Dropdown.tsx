import { DropdownProps, Option } from '@/src/types/dropdown';
import React, { useCallback, useEffect, useRef, useState } from 'react';

export default function Dropdown({
  initialOption,
  options,
  selected,
  onSelect,
  triggerIcon,
  triggerClass,
  optionsWrapClass,
  optionClass,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev); // 드롭다운 열기/닫기
  }, []);

  const handleSelect = (option: Option) => {
    if (onSelect) {
      onSelect(option);
    }
    setIsOpen(false);
  };

  // 메뉴 밖의 화면을 누르면 드롭다운 사라지도록
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = () => setIsOpen(false);
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  // 드롭다운이 화면 밖으로 나갈 때 위치 조정
  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const overflowRight = dropdownRect.right > window.innerWidth;
      const overflowLeft = dropdownRect.left < window.innerWidth;

      if (overflowRight) {
        dropdownRef.current.style.left = 'auto';
        dropdownRef.current.style.right = '0'; // 우측 정렬
      }

      if (overflowLeft) {
        dropdownRef.current.style.left = '0'; // 좌측 정렬
        dropdownRef.current.style.right = 'auto';
      }
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleToggle}
        className={`${triggerClass}`}
      >
        {initialOption && !selected
          ? initialOption.label
          : selected?.label || ''}
        {triggerIcon}
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          className={`${optionsWrapClass} absolute z-50 flex flex-col bg-background-secondary text-text-primary`}
        >
          {options.map((option) => (
            <button
              key={option.label}
              type="button"
              onClick={() => handleSelect(option)}
              className={`${optionClass}`}
            >
              {option.component}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
