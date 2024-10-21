interface Task {
  displayIndex: number;
  writerId: number;
  userId: number;
  deletedAt: string | null;
  frequency: string;
  description: string;
  name: string;
  recurringId: number;
  doneAt: string | null;
  date: string;
  updatedAt: string;
  id: number;
}

export default Task;
