import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import { useTaskListStore } from '@/src/stores/taskListStore';
import { useDate } from '@/src/contexts/DateContext';
import { getTask } from '@/src/api/tasks/taskAPI';

import SideBar from '@components/@shared/SideBar';

interface TaskSideBarProps {
  isOpen: boolean;
  onClose: () => void;
  taskId: number;
}

export function TaskSideBar({ isOpen, onClose, taskId }: TaskSideBarProps) {
  const { date, toKSTISOString } = useDate();
  const { setCurrentTask } = useTaskListStore();

  console.log(taskId);

  // get, 할 일의 세부 정보
  const {
    data: taskData,
    isLoading: taskLoading,
    isError: taskError,
  } = useQuery({
    queryKey: ['tasks', taskId, toKSTISOString(date)],
    queryFn: () =>
      getTask({
        id: taskId,
        date: toKSTISOString(date),
      }),
    enabled: !!taskId && !!date,
  });

  // store
  useEffect(() => {
    if (taskData) {
      setCurrentTask(taskData);
    }
  }, [taskData]);

  return (
    <SideBar position="right" isOpen={isOpen} onClose={onClose}>
      <section></section>
    </SideBar>
  );
}
