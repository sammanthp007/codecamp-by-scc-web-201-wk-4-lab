import React from "react";

type Variant = "primary" | "secondary" | "danger";

export function Button({
  variant = "secondary",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const base =
    "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition " +
    "disabled:cursor-not-allowed disabled:opacity-50";

  const styles: Record<Variant, string> = {
    primary: "bg-neutral-900 text-white hover:bg-neutral-800",
    secondary: "bg-white text-neutral-900 border hover:bg-neutral-50",
    danger: "bg-red-600 text-white hover:bg-red-500",
  };

  return <button className={`${base} ${styles[variant]} ${className}`} {...props} />;
}
