import TaskBar from './TaskBar';

export interface TaskProps {
  name: string;
  done: boolean;
}
export interface TaskListItem {
  displayIndex: number;
  groupId: number;
  updatedAt: string;
  createdAt: string;
  name: string;
  id: number;
  tasks: TaskProps[];
}

interface TaskListProps {
  taskLists: TaskListItem[];
}

export default function TaskList({ taskLists }: TaskListProps) {
  const listCount = taskLists.length;

  return (
    <section>
      <div className="my-[20px]">
        <div className="flex justify-between">
          <div className="flex gap-[10px]">
            <p className="text-lg-medium">할 일 목록</p>
            <p className="text-lg-regular text-text-default">({listCount}개)</p>
          </div>
          <p className="cursor-pointer text-md-regular text-brand-primary">
            +새로운 목록 추가하기
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        {taskLists.map((taskList) => (
          <TaskBar
            key={taskList.id}
            name={taskList.name}
            tasks={taskList.tasks}
          />
        ))}
      </div>
    </section>
  );
}
