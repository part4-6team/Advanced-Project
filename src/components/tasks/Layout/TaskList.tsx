import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTaskList } from '@/src/api/tasks/taskListAPI';
import { useDate } from '@/src/contexts/DateContext';
import { useTaskListStore } from '@/src/stores/taskListStore';
import type { TaskListDto } from '@/src/types/tasks/taskListDto';
import TaskCard from '../TaskCard';

interface TaskListProps {
  initialTaskListId?: number;
}

export default function TaskList({ initialTaskListId }: TaskListProps) {
  const {
    taskLists,
    selectedTaskListId,
    setSelectedTaskListId,
    selectedTasks,
    setSelectedTasks,
  } = useTaskListStore();
  const { date, toKSTISOString } = useDate();

  // 초기 initialTaskListId 적용
  useEffect(() => {
    setSelectedTaskListId(initialTaskListId);
  }, [initialTaskListId]);

  // 선택된 taskList의 tasks[] 가져오기
  const handleButtonClick = (initialTaskListId: number) => {
    // 다른 taskList를 선택한 경우
    if (selectedTaskListId !== initialTaskListId) {
      const selectedList = taskLists.find(
        (taskList: TaskListDto) => taskList.id === initialTaskListId
      );
      if (selectedList) {
        setSelectedTasks(selectedList.tasks);
        setSelectedTaskListId(initialTaskListId);
      }
    }
  };

  // get, 선택된 목록의 할 일들
  const {
    data: tasksData,
    isLoading: tasksLoading,
    isError: tasksError,
  } = useQuery({
    queryKey: ['tasks', selectedTaskListId, toKSTISOString(date)],
    queryFn: () =>
      getTaskList({
        id: selectedTaskListId,
        date: toKSTISOString(date),
      }),
    enabled: !!selectedTaskListId && !!date,
  });

  // 선택된 Tasks[] 데이터 업데이트
  useEffect(() => {
    if (tasksData) {
      setSelectedTasks(tasksData);
    }
  }, [tasksData]);

  return (
    <section className="flex flex-col gap-4">
      {taskLists.length > 0 ? (
        <ul className="flex gap-3">
          {taskLists.map((taskList: TaskListDto) => (
            <li
              key={taskList.id}
              className={
                selectedTaskListId === taskList.id
                  ? 'border-b-[1px] border-b-white text-white'
                  : 'text-text-default'
              }
            >
              <button
                type="button"
                onClick={() => handleButtonClick(taskList.id)}
                className="pb-1"
              >
                {taskList.name}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-text-center text-text-md mt-96 text-text-default sm:mt-56">
          <p>아직 할 일 목록이 없습니다.</p>
          <p>새로운 목록을 추가해보세요.</p>
        </div>
      )}
      {selectedTasks.length > 0 ? (
        <ul className="flex flex-col gap-4">
          {selectedTasks.length > 0 &&
            selectedTasks.map((task) => <TaskCard key={task.id} task={task} />)}
        </ul>
      ) : (
        <div className="text-text-md mt-80 text-center text-text-default sm:mt-48">
          <p>아직 할 일이 없습니다.</p>
          <p>할 일을 추가해주세요.</p>
        </div>
      )}
    </section>
  );
}
