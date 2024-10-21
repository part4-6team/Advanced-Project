import { fetchTask } from '@/src/api/myhistory/taskAPI';
import Task from '@/src/types/myhistory/TaskType';
import { useQuery } from '@tanstack/react-query';

export const useTask = () => {
  return useQuery<Task[]>({
    queryKey: ['tasks'],
    queryFn: fetchTask,
  });
};
