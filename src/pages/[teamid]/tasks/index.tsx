import TaskDate from '@components/tasks/TaskDate';
import Tasks from '@components/tasks/Tasks';

export default function TasksPage() {
  return (
    <main className="flex flex-col gap-6 px-4 pt-6 text-left md:px-6 xl:mx-auto xl:max-w-[1200px] xl:px-0 xl:pt-10">
      <TaskDate />
      <Tasks />
    </main>
  );
}
