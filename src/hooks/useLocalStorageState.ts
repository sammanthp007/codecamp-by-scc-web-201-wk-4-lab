import { useState } from "react";

/**
 * TODO(WEEK4-LAB): Students will replace this file during the lab.
 * For the starter repo, we keep it minimal so the app compiles and runs.
 */
export function useLocalStorageState<T>(
  _key: string,
  initialValue: T | (() => T)
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(
    typeof initialValue === "function" ? (initialValue as () => T)() : initialValue
  );

  return [value, setValue];
}
