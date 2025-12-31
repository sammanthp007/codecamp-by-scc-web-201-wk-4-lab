import { useMemo, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Pill } from "../../components/Pill";
import { Section } from "../../components/Section";
import { useTasks } from "./useTasks";

export function TasksPanel() {
  const { tasks, addTask, toggleTask, deleteTask, clearCompleted } = useTasks();
  const [draft, setDraft] = useState("");

  const stats = useMemo(() => {
    const total = tasks.length;
    const done = tasks.filter((t) => t.completed).length;
    return { total, done };
  }, [tasks]);

  return (
    <Section
      title="Tasks"
      subtitle="Add tasks, mark done, delete, clear completed. Lab adds persistence."
    >
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          addTask(draft);
          setDraft("");
        }}
      >
        <Input
          placeholder="Add a task…"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
        />
        <Button variant="primary" type="submit">
          Add
        </Button>
      </form>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Pill>Tasks: {stats.total}</Pill>
          <Pill tone={stats.done > 0 ? "break" : "neutral"}>Done: {stats.done}</Pill>
        </div>
        <Button onClick={clearCompleted} disabled={stats.done === 0}>
          Clear completed
        </Button>
      </div>

      <div className="mt-4">
        {tasks.length === 0 ? (
          <div className="rounded-lg border bg-neutral-50 p-4 text-sm text-neutral-600">
            No tasks yet. Add one above.
          </div>
        ) : (
          <ul className="space-y-2">
            {tasks.map((t) => (
              <li
                key={t.id}
                className="flex items-center justify-between gap-3 rounded-lg border p-3"
              >
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={t.completed}
                    onChange={() => toggleTask(t.id)}
                    className="h-4 w-4"
                  />
                  <span className={t.completed ? "text-neutral-500 line-through" : ""}>
                    {t.title}
                  </span>
                </label>
                <Button variant="danger" onClick={() => deleteTask(t.id)}>
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-4 text-xs text-neutral-500">
        Starter note: tasks are currently in-memory only; the lab upgrades this to localStorage.
      </div>
    </Section>
  );
}
