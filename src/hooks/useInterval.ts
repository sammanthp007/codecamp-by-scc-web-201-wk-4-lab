import { useEffect } from "react";

/**
 * TODO(WEEK4-LAB): Students will replace this file during the lab.
 * Stubbed to be safe: does nothing when delay is null; runs interval otherwise.
 * Includes cleanup so StrictMode doesn't create runaway timers.
 */
export function useInterval(callback: () => void, delayMs: number | null) {
  useEffect(() => {
    if (delayMs === null) return;

    const id = window.setInterval(() => callback(), delayMs);
    return () => window.clearInterval(id);
  }, [callback, delayMs]);
}
