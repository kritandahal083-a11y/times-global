import type { ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  as?: ElementType;
};

// Pure markup wrapper. The entrance effect is applied in CSS via scroll-driven
// animations (see `.reveal` in globals.css), so this component ships no client
// JS and creates no client boundary around its children.
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  return (
    <Tag className={`reveal ${className}`} data-delay={delay}>
      {children}
    </Tag>
  );
}
