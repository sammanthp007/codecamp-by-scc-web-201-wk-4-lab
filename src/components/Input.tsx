import React from "react";

export function Input({
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={
        "w-full rounded-md border bg-white px-3 py-2 text-sm outline-none " +
        "focus:ring-2 focus:ring-neutral-200 " +
        "disabled:cursor-not-allowed disabled:bg-neutral-50 " +
        className
      }
      {...props}
    />
  );
}
