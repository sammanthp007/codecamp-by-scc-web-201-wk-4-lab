import { TimerPanel } from "./features/timer/TimerPanel";
import { TasksPanel } from "./features/tasks/TasksPanel";

export default function App() {
  return (
    <div className="min-h-full bg-neutral-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-5xl px-4 py-5">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <h1 className="text-xl font-semibold tracking-tight">FocusFlow</h1>
              <p className="text-sm text-neutral-600">
                Week 4 Starter — Hooks: state, effects, refs, custom hook composition
              </p>
            </div>
            <div className="text-xs text-neutral-500">
              Build: Pomodoro + Tasks + Persistence
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          <TimerPanel />
          <TasksPanel />
        </div>

        <div className="mt-8 rounded-lg border bg-white p-4 text-sm text-neutral-700">
          <p className="font-medium">Starter status</p>
          <p className="mt-1 text-neutral-600">
            This starter UI compiles and runs. The real logic will be implemented in the Week 4 Lab
            by replacing the hook files (usePomodoro, useTasks, useInterval, useLocalStorageState).
          </p>
        </div>
      </main>
    </div>
  );
}
