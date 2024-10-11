export default function Divider() {
  return (
    <div className="w-full ">
      <div className="flex items-center gap-[24px]">
        <div className="flex-1 border-b border-border-primary border-opacity-10" />
        <span className="text-lg-regular text-white">OR</span>
        <div className="flex-1 border-b border-border-primary border-opacity-10" />
      </div>
    </div>
  );
}
