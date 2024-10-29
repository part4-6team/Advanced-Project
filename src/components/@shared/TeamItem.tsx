interface TeamItemProps {
  name: string;
  isActive: boolean;
  onClick: () => void;
}

export default function TeamItem({ name, isActive, onClick }: TeamItemProps) {
  return (
    <div
      onClick={onClick}
      className="flex h-[40px] cursor-pointer items-center gap-3 overflow-hidden rounded-[12px] px-[16px] hover:bg-[#ffffff17]"
    >
      <p
        className={`overflow-hidden text-ellipsis whitespace-nowrap ${isActive ? 'text-brand-primary' : ''}`}
      >
        {name}
      </p>
    </div>
  );
}
