import { useEffect } from 'react';
import CalenderIcon from '@icons/calendar_large.svg';
import CommentIcon from '@icons/comment.svg';
import RepeatIcon from '@icons/repeat.svg';
import type { TaskDto } from '@/src/types/tasks/taskDto';

import { useModal } from '@hooks/useModal';
import { useTaskListStore } from '@/src/stores/taskListStore';
import useDropdownModals from '@hooks/useDropdownModals';
import Image from 'next/image';

import EditDropdown, { editOption } from '@components/team/EditDropdown';
import EditTaskModal from './UI/EditTaskModal';
import DeleteTaskModal from './UI/DeleteTaskModal';
import { TaskSideBar } from './TaskSideBar';
import CheckBox from './CheckBox';

interface TaskCardProps {
  task: TaskDto;
  key: number;
}

export default function TaskCard({ task }: TaskCardProps) {
  const { setCurrentTaskId, isSidebarOpen, setSidebarOpen } =
    useTaskListStore();

  // 각 모달의 상태 독립적으로 관리
  const editModal = useModal();
  const deleteModal = useModal();

  // 드롭다운의 Option 및 모달 상태 전달
  const { handleOptionSelect } = useDropdownModals(editOption, [
    editModal,
    deleteModal,
  ]);

  // 드롭다운 옵션 선택 시 taskId 설정
  const handleDropdownSelection = (option: any) => {
    handleOptionSelect(option);
    setCurrentTaskId(task.id);
  };

  return (
    <li className="flex flex-col gap-[10px] rounded-lg bg-background-secondary px-[14px] py-3 text-text-default">
      <div className="flex">
        <div className="flex gap-2">
          <CheckBox taskId={task.id} doneAt={task.doneAt} />
          <button type="button" onClick={() => setSidebarOpen(!isSidebarOpen)}>
            <h1 className="text-text-primary">{task.name}</h1>
          </button>
          <TaskSideBar
            isOpen={isSidebarOpen}
            onClose={() => setSidebarOpen(false)}
            taskId={task.id}
          />
        </div>
        <div className="flex flex-grow justify-end gap-2 md:ml-2 md:justify-between">
          <div className="flex items-center gap-[2px]">
            <CommentIcon />
            <span>{task.commentCount}</span>
          </div>
          <EditDropdown
            triggerIcon={
              <Image
                src="/icons/kebab_large.svg"
                alt="더보기 아이콘"
                width={10}
                height={10}
                className="h-3"
              />
            }
            onSelect={handleDropdownSelection}
          />
          {editModal.isOpen && (
            <EditTaskModal
              isOpen={editModal.isOpen}
              onClose={editModal.onClose}
              done={task.doneAt !== null}
            />
          )}
          {deleteModal.isOpen && (
            <DeleteTaskModal
              isOpen={deleteModal.isOpen}
              onClose={deleteModal.onClose}
              taskName={task.name}
            />
          )}
        </div>
      </div>
      <div className="flex items-center gap-[10px] text-xs-regular">
        <CalenderIcon />
        <span>{task.date}</span>
        <div className="h-3 border-[1px] border-slate-700" />
        <RepeatIcon />
        <span>{task.frequency}</span>
      </div>
    </li>
  );
}
