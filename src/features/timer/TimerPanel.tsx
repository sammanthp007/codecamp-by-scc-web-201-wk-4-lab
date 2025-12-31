import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Pill } from "../../components/Pill";
import { Section } from "../../components/Section";
import { usePomodoro } from "./usePomodoro";

export function TimerPanel() {
  const {
    mode,
    formattedTime,
    isRunning,
    focusMinutes,
    breakMinutes,
    setFocusMinutes,
    setBreakMinutes,
    start,
    pause,
    reset,
    skip,
  } = usePomodoro();

  return (
    <Section
      title="Pomodoro Timer"
      subtitle="This UI is ready. In the lab, you will implement the hook that powers it."
    >
      <div className="flex items-center justify-between gap-4">
        <Pill tone={mode === "focus" ? "focus" : "break"}>
          Mode: {mode === "focus" ? "Focus" : "Break"}
        </Pill>
        <div className="text-xs text-neutral-500">
          {isRunning ? "Running" : "Paused (starter stub)"}
        </div>
      </div>

      <div className="mt-4 rounded-lg border bg-neutral-50 px-4 py-6 text-center">
        <div className="text-5xl font-semibold tabular-nums tracking-tight">
          {formattedTime}
        </div>
        <div className="mt-2 text-sm text-neutral-600">
          In the lab, this will tick every second.
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <Button variant="primary" onClick={start} disabled={isRunning}>
          Start
        </Button>
        <Button onClick={pause} disabled={!isRunning}>
          Pause
        </Button>
        <Button onClick={reset}>Reset</Button>
        <Button onClick={skip}>Skip</Button>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Focus minutes</label>
          <div className="mt-2">
            <Input
              type="number"
              min={1}
              max={90}
              value={focusMinutes}
              onChange={(e) => setFocusMinutes(Number(e.target.value))}
              disabled={isRunning}
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Break minutes</label>
          <div className="mt-2">
            <Input
              type="number"
              min={1}
              max={30}
              value={breakMinutes}
              onChange={(e) => setBreakMinutes(Number(e.target.value))}
              disabled={isRunning}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 text-xs text-neutral-500">
        Note: Inputs are disabled while running to avoid mid-flight rule changes.
      </div>
    </Section>
  );
}
