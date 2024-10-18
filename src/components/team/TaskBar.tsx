import Image from 'next/image';
import CircleGraph from './CircleGraph';

export interface TaskProps {
  name: string;
  done: boolean;
}

interface TaskBarProps {
  name: string;
  tasks: TaskProps[];
}

export default function TaskBar({ name, tasks }: TaskBarProps) {
  // 1. 총 task의 개수
  const totalTasks = tasks.length;

  // 2. done이 true인 task의 개수
  const doneTasksCount = tasks.filter((task) => task.done).length;

  // 3. 진척도
  const doneRate = totalTasks === 0 ? 0 : (doneTasksCount / totalTasks) * 100;

  return (
    <div className="flex h-[40px] justify-between bg-background-secondary">
      <div className="flex items-center justify-between gap-[10px]">
        <div className="h-full w-[12px] rounded-bl-[12px] rounded-br-[0px] rounded-tl-[12px] rounded-tr-[0px] bg-point-purple">
          &nbsp;
        </div>
        <p className="text-md-medium">{name}</p>
      </div>
      <div className="mr-[10px] flex items-center gap-[10px]">
        <div className="flex h-[25px] w-[58px] items-center justify-between rounded-[12px] bg-background-primary px-[8px] py-[4px]">
          {doneRate === 100 ? (
            <Image
              src="/icons/progress_done.svg"
              alt="더보기 아이콘"
              width={17}
              height={17}
              className="flex-shrink-0"
            />
          ) : (
            <CircleGraph
              backgroundColor="#ffffff"
              gradientColorStart="#10B981"
              gradientColorEnd="#10B981"
              radius={6}
              percentage={doneRate}
              strokeWidth={3}
            />
          )}
          <p className="text-md-regular text-brand-primary">
            {doneTasksCount}/{totalTasks}
          </p>
        </div>
        <Image
          src="/icons/kebab_large.svg"
          alt="더보기 아이콘"
          width={4}
          height={10}
        />
      </div>
    </div>
  );
}
