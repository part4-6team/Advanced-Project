import CalenderIcon from '@icons/calendar_large.svg';
import CommentIcon from '@icons/comment.svg';
import RepeatIcon from '@icons/repeat.svg';
import KebabIcon from '@icons/kebab_small.svg';
import type { TaskDto } from '@/src/types/tasks/TaskListDto';
import { useTaskListContext } from '@/src/contexts/TaskListContext';

import Dropdown, { Option } from '@components/@shared/Dropdown';
import CheckBox from './CheckBox';

interface TaskCardProps {
  task: TaskDto;
}

export default function TaskCard({ task }: TaskCardProps) {
  const { updateTask } = useTaskListContext();

  const basic: Option[] = [
    { component: <div>수정하기</div> },
    { component: <div>삭제하기</div> },
  ];

  return (
    <div className="flex flex-col gap-[10px] rounded-lg bg-background-secondary px-[14px] py-3 text-text-default">
      <div className="flex">
        <div className="flex gap-2">
          <CheckBox
            doneAt={task.doneAt}
            onChange={(newDoneAt) => updateTask(task.id, newDoneAt)}
          />
          <h3 className="text-text-primary">{task.name}</h3>
        </div>
        <div className="flex flex-grow justify-end gap-2 md:ml-2 md:justify-between">
          <div className="flex items-center gap-[2px]">
            <CommentIcon />
            <p>{task.commentCount}</p>
          </div>
          <Dropdown
            options={basic}
            triggerIcon={<KebabIcon />}
            optionsWrapClass="mt-2 rounded-[12px] border border-background-tertiary"
            optionClass="rounded-[12px] md:w-[135px] md:h-[47px] w-[120px] h-[40px] justify-center text-md-regular md:text-lg-regular text-center hover:bg-background-tertiary"
          />
        </div>
      </div>
      <div className="flex items-center gap-[10px] text-xs-regular">
        <CalenderIcon />
        <p>{task.date}</p>
        <line className="h-3 border-[1px] border-slate-700" />
        <RepeatIcon />
        <p>{task.frequency}</p>
      </div>
    </div>
  );
}
