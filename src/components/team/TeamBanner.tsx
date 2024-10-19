import { useModal } from '@hooks/useModal';
import { Option } from '@components/@shared/Dropdown';
import Image from 'next/image';
import EditDropdown from './EditDropdown';
import EditTeamModal from './EditTeamModal';

export default function TeamBanner({ name }: any) {
  const { isOpen, openModal, closeModal } = useModal();
  const gearIcon = (
    <Image width={24} height={24} src="/icons/gear.svg" alt="톱니바퀴 아이콘" />
  );
  // 드롭다운에서 선택된 옵션을 처리하는 함수
  const handleSelect = (option: Option) => {
    if (option.label === 'edit') {
      openModal(); // '수정하기'를 선택했을 때만 모달을 열기
    }
  };
  return (
    <div className="flex justify-between rounded-[12px] border border-border-primary border-opacity-10 bg-slate-50 bg-opacity-10 bg-[url('/images/thumbnail_team.png')] bg-contain bg-[90%] bg-no-repeat p-[24px]">
      <p className="text-xl-bold">{name}</p>
      <EditDropdown triggerIcon={gearIcon} onSelect={handleSelect} />
      <EditTeamModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}
