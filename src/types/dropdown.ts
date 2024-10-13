import { ReactNode } from 'react';

export interface Option {
  label?: string;
  component: ReactNode;
}

export interface DropdownProps {
  triggerClass?: string; // 드롭다운 버튼에 추가할 클래스
  optionsWrapClass?: string; // 옵션을 감싸는 div태그에 추가할 클래스
  optionClass?: string; // 옵션에 추가할 클래스
  triggerIcon?: ReactNode; // 드롭다운 버튼에 추가할 아이콘
  initialOption?: Option;
  options: Option[];
  selected?: Option | null;
  onSelect?: (option: Option) => void;
}
