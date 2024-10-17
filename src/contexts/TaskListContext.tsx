/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState, ReactNode } from 'react';

interface Task {
  id: number;
  doneAt: string | null;
}

interface TaskListContextProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  updateTask: (id: number, doneAt: string | null) => void;
}

const TaskListContext = createContext<TaskListContextProps | undefined>(
  undefined
);

export function TaskListProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const updateTask = (id: number, doneAt: string | null) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, doneAt } : task))
    );
  };

  return (
    <TaskListContext.Provider value={{ tasks, setTasks, updateTask }}>
      {children}
    </TaskListContext.Provider>
  );
}

export const useTaskListContext = (): TaskListContextProps => {
  const context = useContext(TaskListContext);
  if (!context) {
    throw new Error('TaskListContext error');
  }
  return context;
};
