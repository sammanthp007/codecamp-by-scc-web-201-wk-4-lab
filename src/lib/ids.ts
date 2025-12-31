export function newId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    // @ts-expect-error: TS lib versions vary; runtime is fine in modern browsers.
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
