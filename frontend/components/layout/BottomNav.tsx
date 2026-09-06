"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon, { type IconName } from "../ui/Icon";

const items = [
  { label: "Home", href: "/", icon: "home" as IconName },
  { label: "Services", href: "/services", icon: "server" as IconName },
  { label: "Infrastructure", href: "/infrastructure", icon: "bolt" as IconName },
  { label: "Contact", href: "/contact", icon: "mail" as IconName },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-ink/95 backdrop-blur-xl lg:hidden"
    >
      <ul className="mx-auto flex h-16 max-w-lg items-stretch justify-around px-2">
        {items.map((item) => {
          const active =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-[44px] flex-col items-center justify-center gap-1 py-2 transition-colors ${
                  active ? "text-accent" : "text-dim"
                }`}
              >
                <Icon name={item.icon} className="h-5 w-5" />
                <span className="text-[10px] font-medium leading-none">
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      {/* Safe area padding for iOS */}
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  );
}
