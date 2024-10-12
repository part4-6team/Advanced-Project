import Dropdown from '@components/@shared/Dropdown';
import CheckBoxIconActiveIcon from 'public/icons/checkbox_active.svg';
import KebabIcon from 'public/icons/kebab_small.svg';
import axios from '@/src/lib/axios';
import { useQuery } from '@tanstack/react-query';

interface Task {
  displayIndex: number;
  writerId: number;
  userId: number;
  deletedAt: string | null;
  frequency: string;
  description: string;
  name: string;
  recurringId: number;
  doneAt: string | null;
  date: string;
  updatedAt: string;
  id: number;
}

const fetchTask = async () => {
  const response = await axios.get('/user/history');
  return response.data;
};

export default function MyTask() {
  const {
    data: tasks = [],
    isLoading,
    isError,
  } = useQuery<Task[]>({
    queryKey: ['tasks'],
    queryFn: fetchTask,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading tasks.</p>;
  }

  // 날짜 내림차순으로 정렬
  const sortedTasks = [...tasks].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // 날짜별로 그룹화된 객체 생성
  const groupedTasks = sortedTasks.reduce(
    (acc, task) => {
      if (task.doneAt === null) {
        return acc;
      }

      const date = new Date(task.date).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(task);
      return acc;
    },
    {} as Record<string, Task[]>
  );

  return (
    <div className="flex flex-col gap-4  ">
      {Object.keys(groupedTasks).map((date) => (
        <div key={date} className="mb-8">
          <h2 className="mb-4 text-lg-medium">{date}</h2>
          {groupedTasks[date].map((tasks) => (
            <div
              key={tasks.id}
              className=" relative flex min-w-[270px] items-center justify-between break-all rounded-md bg-background-secondary px-3.5 py-2.5 text-md-regular"
            >
              <div className="flex items-center gap-1.5  ">
                <CheckBoxIconActiveIcon />
                <span className="line-through">{tasks.description}</span>
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
          ))}
        </div>
      ))}
    </div>
  );
}
