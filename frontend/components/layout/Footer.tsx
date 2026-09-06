import Link from "next/link";
import Container from "../ui/Container";
import Icon from "../ui/Icon";
import Logo from "./Logo";
import { site } from "@/lib/site";

const socials = [
  { name: "LinkedIn", href: site.social.linkedin, icon: "linkedin" as const },
  { name: "Facebook", href: site.social.facebook, icon: "facebook" as const },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-carbon">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <Container className="pt-6 pb-5 sm:pt-8 lg:pt-10">
        {/* Brand — full width always */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between lg:grid lg:grid-cols-12 lg:gap-6">
          <div className="sm:flex-1 lg:col-span-4">
            <Logo glow size="md" showText={false} />
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist">
              {site.name} operates enterprise-grade data center infrastructure in
              Nepal: secure, reliable and connected hosting for the organizations
              that power the country&rsquo;s digital economy.
            </p>
            <div className="mt-3 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-mist transition-colors duration-300 hover:border-accent/50 hover:text-accent"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact — beside brand on sm, below on lg */}
          <div className="sm:flex-1 lg:col-span-3 lg:col-start-10">
            <h3 className="kicker text-dim">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="/contact"
                  className="flex items-start gap-3 text-mist transition-colors duration-300 hover:text-frost"
                >
                  <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-mist">
                <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {site.phone}
              </li>
              <li className="flex items-start gap-3 text-mist">
                <Icon name="map-pin" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {site.address}
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-5 flex flex-col items-start justify-between gap-3 border-t border-line pt-4 sm:flex-row sm:items-center">
          <p className="text-xs text-dim">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-xs text-dim transition-colors duration-300 hover:text-frost"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-dim transition-colors duration-300 hover:text-frost"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
