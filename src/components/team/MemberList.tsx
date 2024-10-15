import MemberBox from './MemberBox';

export default function MemberList() {
  return (
    <div>
      <div className="my-[20px]">
        <div className="flex justify-between">
          <div className="flex gap-[10px]">
            <p className="text-lg-medium">멤버</p>
            <p className="text-lg-regular text-text-default">(6명)</p>
          </div>
          <p className="cursor-pointer text-md-regular text-brand-primary">
            +새로운 멤버 초대하기
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[24px] md:grid-cols-3">
        <MemberBox />
        <MemberBox />
        <MemberBox />
        <MemberBox />
        <MemberBox />
        <MemberBox />
      </div>
    </div>
  );
}
