"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Icon from "../ui/Icon";
import { nav, site } from "@/lib/site";
import Button from "../ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between overflow-visible px-5 sm:px-8 lg:px-12"
      >
        <Logo glow size="md" showText={false} />

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm font-semibold transition-colors duration-300 ${
                    active ? "text-accent" : "text-frost hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary">
            Contact Us
          </Button>
        </div>

        {/* Mobile: hamburger + CTA */}
        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-ink/60 text-frost transition-colors duration-300 hover:border-accent/50 hover:text-accent"
          >
            <span className="relative block h-4 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-current transition-all duration-300 ${open ? "top-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-full rounded-full bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-current transition-all duration-300 ${open ? "bottom-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
          <Button href="/contact" variant="primary" className="!px-3 !py-1.5 !text-xs">
            Contact
          </Button>
        </div>
      </nav>

      {/* Mobile slide-in menu (kept for deeper access, triggered by long-press or future) */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        inert={!open}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 top-[72px] z-30 bg-ink/60 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        {/* Panel */}
        <div
          className={`fixed inset-y-0 right-0 top-[72px] z-40 flex w-full max-w-sm flex-col overflow-y-auto border-l border-line bg-ink px-6 pb-8 pt-6 transition-transform duration-300 ease-out sm:px-8 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item, i) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li
                  key={item.href}
                  className="transition-all duration-300"
                  style={{ transitionDelay: open ? `${60 + i * 40}ms` : "0ms" }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between border-b border-line-soft py-4 font-display text-xl font-medium transition-colors ${
                      active ? "text-accent" : "text-frost"
                    }`}
                  >
                    {item.label}
                    <Icon name="arrow-right" className="h-4 w-4 text-dim" />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="my-6 border-t border-line" />

          <div className="space-y-4">
            <p className="kicker text-dim">Contact</p>
            <a
              href={`tel:${site.phoneHref}`}
              className="flex items-center gap-3 text-sm text-mist transition-colors hover:text-frost"
            >
              <Icon name="phone" className="h-4 w-4 text-accent" />
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 text-sm text-mist transition-colors hover:text-frost"
            >
              <Icon name="mail" className="h-4 w-4 text-accent" />
              {site.email}
            </a>
          </div>

          <div className="mt-8">
            <Button href="/contact" variant="primary" className="w-full">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
