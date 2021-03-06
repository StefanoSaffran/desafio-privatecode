import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';

import { padLeft } from '~/utils';

export interface ITask {
  id: string;
  title: string;
  done: boolean;
  backgroundStartedAt: number | null;
  time: number;
  isRunning: boolean;
}

interface ITaskContext {
  tasks: ITask[];
  addTask(task: ITask): void;
  updateTask(task: ITask): void;
  getTotal(): number;
  getDone(): number;
  getInProgress(): number;
  getTotalTime(): string;
}

const TaskContext = createContext<ITaskContext | null>(null);

const TaskProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<ITask[]>(() => {
    const storedTasks = localStorage.getItem('@TaskManager:tasks');

    if (storedTasks) return JSON.parse(storedTasks);
    return [];
  });

  useEffect(() => {
    async function updateStoredTasks(): Promise<void> {
      localStorage.setItem('@TaskManager:tasks', JSON.stringify(tasks));
    }

    updateStoredTasks();
  }, [tasks]);

  const addTask = useCallback((task: ITask) => {
    setTasks(state => [...state, task]);
  }, []);

  const updateTask = useCallback((task: ITask) => {
    setTasks(state =>
      state.map(storagedTask => {
        if (storagedTask.id === task.id) return task;

        return storagedTask;
      }),
    );
  }, []);

  const getTotal = useCallback(() => {
    const total = tasks.length;
    return total;
  }, [tasks]);

  const getDone = useCallback(() => {
    const doneTasks = tasks.filter(task => task.done).length;
    return doneTasks;
  }, [tasks]);

  const getInProgress = useCallback(() => {
    const inProgressTasks = tasks.filter(task => task.done === false).length;
    return inProgressTasks;
  }, [tasks]);

  const getTotalTime = useCallback(() => {
    const timestamp = tasks.reduce((acc, next) => (acc += next.time), 0);

    const seconds = timestamp / 1000;

    const min = Math.floor(seconds / 60).toString();
    const sec = Math.floor(seconds % 60).toString();

    return `${padLeft(Number(min))}:${padLeft(Number(sec))}`;
  }, [tasks]);

  const value = useMemo(
    () => ({
      tasks,
      addTask,
      updateTask,
      getTotal,
      getDone,
      getInProgress,
      getTotalTime,
    }),
    [
      tasks,
      addTask,
      updateTask,
      getTotal,
      getDone,
      getInProgress,
      getTotalTime,
    ],
  );
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

function useTask(): ITaskContext {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error(`useTask must be used within a TaskProvider`);
  }

  return context;
}

export { TaskProvider, useTask };
