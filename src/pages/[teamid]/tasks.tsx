import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTaskListStore } from '@/src/stores/taskListStore';
import { getTaskLists } from '@/src/api/tasks/taskListAPI';
import TaskDate from '@components/tasks/Layout/TaskDate';
import TaskList from '@components/tasks/Layout/TaskList';
import AddTaskButton from '@components/tasks/UI/AddTaskButton';
import { DateProvider } from '@/src/contexts/DateContext';

export default function TasksPage() {
  const router = useRouter();
  const { teamid, taskListId } = router.query;
  const groupId = typeof teamid === 'string' ? parseInt(teamid, 10) : undefined;
  const parsedTaskListId =
    typeof taskListId === 'string' ? parseInt(taskListId, 10) : undefined;
  const { setTaskLists } = useTaskListStore();

  // get, 팀의 모든 목록
  const {
    data: taskListsData,
    isLoading: taskListsLoading,
    isError: taskListsError,
  } = useQuery({
    queryKey: ['taskList', groupId],
    queryFn: () => getTaskLists({ groupId }),
    enabled: !!groupId,
  });

  // store
  useEffect(() => {
    if (taskListsData) {
      setTaskLists(taskListsData);
    }
  }, [taskListsData, setTaskLists]);

  if (taskListsLoading) return <div>리스트 페이지 로딩 중...</div>;
  if (taskListsError) return <div>리스트 페이지 로딩 에러</div>;

  return (
    <DateProvider>
      <main className="flex flex-col gap-6 px-4 pt-6 text-left md:px-6 xl:mx-auto xl:max-w-[1200px] xl:px-0 xl:pt-10">
        <TaskDate />
        <TaskList initialTaskListId={parsedTaskListId} />
        <AddTaskButton />
      </main>
    </DateProvider>
  );
}
