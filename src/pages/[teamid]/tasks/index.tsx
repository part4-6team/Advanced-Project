import TaskDate from '@components/tasks/Layout/TaskDate';
import TaskList from '@components/tasks/Layout/TaskList';
import AddTaskButton from '@components/tasks/UI/AddTaskButton';

import { TaskListProvider } from '@/src/contexts/TaskListContext';
import { DateProvider } from '@/src/contexts/DateContext';

export default function TasksPage() {
  return (
    <DateProvider>
      <TaskListProvider>
        <main className="flex flex-col gap-6 px-4 pt-6 text-left md:px-6 xl:mx-auto xl:max-w-[1200px] xl:px-0 xl:pt-10">
          <TaskDate />
          <TaskList />
          <AddTaskButton />
        </main>
      </TaskListProvider>
    </DateProvider>
  );
}
