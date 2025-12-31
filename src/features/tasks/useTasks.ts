import { useCallback, useState } from "react";
import { newId } from "../../lib/ids";

/**
 * TODO(WEEK4-LAB): Students will replace this file during the lab.
 * Starter stub: task UI compiles, but persistence + real logic is built in lab.
 */

export type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
  completedAt?: number;
};

type TasksAPI = {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  clearCompleted: () => void;
};

export function useTasks(): TasksAPI {
  // Minimal stub behavior: tasks are in-memory only (lab adds localStorage).
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = useCallback((rawTitle: string) => {
    const title = rawTitle.trim();
    if (!title) return;
    setTasks((prev) => [
      { id: newId(), title, completed: false, createdAt: Date.now() },
      ...prev,
    ]);
  }, []);

  const toggleTask = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              completed: !t.completed,
              completedAt: !t.completed ? Date.now() : undefined,
            }
          : t
      )
    );
  }, []);

  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const clearCompleted = useCallback(() => {
    setTasks((prev) => prev.filter((t) => !t.completed));
  }, []);

  return { tasks, addTask, toggleTask, deleteTask, clearCompleted };
}
