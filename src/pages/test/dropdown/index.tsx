import { Option } from '@/src/types/dropdown';
import Dropdown from '@components/@shared/Dropdown';
import { useState } from 'react';
import ArrowDown from '@icons/arrow_down.svg';
import Gear from '@icons/gear.svg';
import Toggle from '@icons/toggle.svg';

export default function Test() {
  const [selectedTeam, setSelectedTeam] = useState<Option | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<Option | null>(null);

  const teams: Option[] = [
    { label: '경영관리팀', component: <div>경영관리 팀</div> },
    { label: '프로덕트팀', component: <div>프로덕트 팀</div> },
    { label: '마케팅팀', component: <div>마케팅 팀</div> },
  ];
  const basic: Option[] = [
    { component: <div>수정하기</div> },
    { component: <div>삭제하기</div> },
  ];

  const filter: Option[] = [
    { label: '한 번', component: <div>한 번</div> },
    { label: '매일', component: <div>매일</div> },
    { label: '주 반복', component: <div>주 반복</div> },
    { label: '월 반복', component: <div>월 반복</div> },
  ];

  const handleSelectTeam = (option: Option) => {
    setSelectedTeam(option);
  };

  const handleSelectFilter = (option: Option) => {
    setSelectedFilter(option);
  };

  return (
    <div className="mt-20 flex items-center gap-[150px] px-20">
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
      <Dropdown
        options={basic}
        triggerIcon={<Gear />}
        optionsWrapClass="mt-2 right-0 rounded-[12px] border border-background-tertiary"
        optionClass="rounded-[12px] md:w-[135px] md:h-[47px] w-[120px] h-[40px] justify-center text-md-regular md:text-lg-regular text-center hover:bg-background-tertiary"
      />
      <Dropdown
        initialOption={{
          label: '반복 안함',
          component: <div>반복 안함</div>,
        }}
        options={filter}
        selected={selectedFilter}
        onSelect={handleSelectFilter}
        triggerIcon={<Toggle />}
        triggerClass="flex items-center px-[14px] py-[11px] border border-background-tertiary rounded-[12px] justify-between text-xs-regular md:text-md-regular bg-background-primary text-text-default hover:bg-background-tertiary rounded-[12px] p-[8px]  md:w-[120px] md:h-[44px] w-[109px] h-[40px]"
        optionsWrapClass="mt-2 right-0 rounded-[12px] border border-background-tertiary"
        optionClass="flex items-center px-[14px] py-[11px] rounded-[12px] md:w-[120px] w-[109px] h-[40px] text-xs-regular md:text-md-regular text-center hover:bg-background-tertiary"
      />
    </div>
  );
}
