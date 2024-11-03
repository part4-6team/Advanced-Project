import Link from 'next/link';
import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useTaskListStore } from '@/src/stores/taskListStore';
import TaskCard from '../TaskCard';

export default function TaskList() {
  const router = useRouter();
  const { query } = router;
  const { teamid, taskListId } = query;
  const { taskLists, setTaskListId, tasks, setTasks } = useTaskListStore();

  // 선택된 taskList의 tasks[]를 가져오는 함수
  const fetchTasks = useCallback(
    (queryTaskListId: number | undefined) => {
      const selectedList = taskLists.find(
        (taskList) => taskList.id === queryTaskListId
      );
      setTasks(selectedList ? selectedList.tasks : []);
    },
    [taskLists, setTasks]
  );

  useEffect(() => {
    if (taskListId) {
      setTaskListId(Number(taskListId));
      fetchTasks(Number(taskListId));
    } else if (teamid) {
      setTaskListId(Number(teamid));
    }
  }, [taskListId, teamid, setTaskListId, fetchTasks]);

  useEffect(() => {
    setTasks(tasks);
  }, [tasks, setTasks]);

  return (
    <section className="flex flex-col gap-4">
      <ul className="flex gap-3">
        {taskLists.map((taskList) => (
          <li
            key={taskList.id}
            className={
              Number(taskListId) === taskList.id ||
              (taskListId === undefined && Number(teamid) === taskList.id)
                ? 'border-b-[1px] border-b-white text-white'
                : 'text-text-default'
            }
          >
            <Link
              href={{
                pathname: `/${teamid}/tasks`,
                query: { taskListId: taskList.id },
              }}
            >
              <button type="button" className="pb-1">
                {taskList.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
      {tasks.length > 0 ? (
        <ul className="flex flex-col gap-4">
          {tasks.length > 0 &&
            tasks.map((task) => <TaskCard key={task.id} task={task} />)}
        </ul>
      ) : (
        <div className="text-text-md mt-80 text-center text-text-default sm:mt-48">
          <p>아직 할 일이 없습니다.</p>
          <p>할 일을 추가해보세요.</p>
        </div>
      )}
    </section>
  );
}
