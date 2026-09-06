import Link from "next/link";
import type { ReactNode } from "react";
import Icon from "./Icon";
import type { IconName } from "./Icon";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "white";
  icon?: IconName;
  className?: string;
  external?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `btn ${
    variant === "primary"
      ? "btn-primary"
      : variant === "white"
        ? "btn-white"
        : "btn-outline"
  } ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {icon ? <Icon name={icon} className="h-4 w-4" /> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {icon ? <Icon name={icon} className="h-4 w-4" /> : null}
    </Link>
  );
}
