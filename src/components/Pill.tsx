import React from "react";

export function Pill({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "focus" | "break";
}) {
  const styles =
    tone === "focus"
      ? "bg-blue-50 text-blue-700 border-blue-200"
      : tone === "break"
        ? "bg-green-50 text-green-700 border-green-200"
        : "bg-neutral-50 text-neutral-700 border-neutral-200";

  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs ${styles}`}>
      {children}
    </span>
  );
}
