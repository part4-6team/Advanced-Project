import AddTaskListModal from '@components/team/taskList/AddTaskListModal';
import { useModal } from '@hooks/useModal';

export default function AddTaskListButton() {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <>
      <button
        className="text-md-regular text-brand-primary"
        type="button"
        onClick={onOpen}
      >
        + 새로운 목록 추가하기
      </button>

      {isOpen && <AddTaskListModal isOpen={isOpen} closeModal={onClose} />}
    </>
  );
}
