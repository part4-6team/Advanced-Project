import TaskBar from './TaskBar';

export default function TaskList() {
  return (
    <section>
      <div className="my-[20px]">
        <div className="flex justify-between">
          <div className="flex gap-[10px]">
            <p className="text-lg-medium">할 일 목록</p>
            <p className="text-lg-regular text-text-default">(4개)</p>
          </div>
          <p className="cursor-pointer text-md-regular text-brand-primary">
            +새로운 목록 추가하기
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <TaskBar />
        <TaskBar />
        <TaskBar />
        <TaskBar />
      </div>
    </section>
  );
}
