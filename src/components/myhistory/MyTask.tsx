import Dropdown from '@components/@shared/Dropdown';
import CheckBoxIconActiveIcon from 'public/icons/checkbox_active.svg';
import KebabIcon from 'public/icons/kebab_small.svg';

export default function MyTask() {
  return (
    <div className="flex flex-col gap-4  ">
      <div className=" relative flex min-w-[270px] items-center justify-between break-all rounded-md bg-background-secondary px-3.5 py-2.5 text-md-regular">
        <div className="flex items-center gap-1.5  ">
          <CheckBoxIconActiveIcon />
          <span className="line-through">법인 설립 안내 드리기</span>
        </div>

        <Dropdown
          buttonChildren={<KebabIcon />}
          width="w-[120px]"
          childType="menu"
        >
          <button className="flex w-full items-center justify-center px-[24px] py-[14px] text-center text-md-regular">
            수정하기
          </button>
          <button className="flex w-full items-center justify-center px-[24px] py-[14px] text-center text-md-regular">
            삭제하기
          </button>
        </Dropdown>
      </div>
    </div>
  );
}
