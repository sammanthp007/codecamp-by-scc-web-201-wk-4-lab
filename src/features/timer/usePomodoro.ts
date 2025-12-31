import { useCallback, useMemo, useState } from "react";
import { formatSeconds } from "../../lib/time";

/**
 * TODO(WEEK4-LAB): Students will replace this file during the lab.
 * This starter stub exists ONLY so the UI compiles and renders.
 * In the lab, students will implement a real Pomodoro engine using:
 * - useState
 * - useEffect
 * - useRef
 * - a custom useInterval hook
 * - persistence via localStorage
 */

export type PomodoroMode = "focus" | "break";

type PomodoroAPI = {
  mode: PomodoroMode;
  secondsLeft: number;
  formattedTime: string;
  isRunning: boolean;

  focusMinutes: number;
  breakMinutes: number;
  setFocusMinutes: (n: number) => void;
  setBreakMinutes: (n: number) => void;

  start: () => void;
  pause: () => void;
  reset: () => void;
  skip: () => void;
};

export function usePomodoro(): PomodoroAPI {
  // Minimal fake behavior: UI toggles run state, but no ticking (students implement ticking in lab).
  const [mode, setMode] = useState<PomodoroMode>("focus");
  const [isRunning, setIsRunning] = useState(false);

  const [focusMinutes, setFocusMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  const secondsLeft = useMemo(() => (mode === "focus" ? focusMinutes : breakMinutes) * 60, [
    mode,
    focusMinutes,
    breakMinutes,
  ]);

  const formattedTime = useMemo(() => formatSeconds(secondsLeft), [secondsLeft]);

  const start = useCallback(() => setIsRunning(true), []);
  const pause = useCallback(() => setIsRunning(false), []);
  const reset = useCallback(() => {
    setIsRunning(false);
    setMode("focus");
  }, []);
  const skip = useCallback(() => setMode((m) => (m === "focus" ? "break" : "focus")), []);

  return {
    mode,
    secondsLeft,
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
  };
}
