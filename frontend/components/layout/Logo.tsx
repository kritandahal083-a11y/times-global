import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  href?: string;
  glow?: boolean;
  size?: "sm" | "md";
  showText?: boolean;
};

export default function Logo({
  className = "",
  href = "/",
  glow = false,
  size = "sm",
  showText = true,
}: LogoProps) {
  const isLarge = size === "md";
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Times Global Data Center - Home"
    >
      <span
        className={`relative flex shrink-0 items-center justify-center overflow-visible ${
          isLarge ? "h-12" : "h-10"
        }`}
      >
        {glow && (
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[150%] w-[280%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(244,246,248,0.45), rgba(244,246,248,0.12) 60%, transparent 78%)",
            }}
          />
        )}
        <Image
          src="/images/times-global-main-logo.png"
          alt="Times Global Data Center logo"
          width={1774}
          height={887}
          className={`relative w-auto object-contain transition-opacity duration-300 group-hover:opacity-90 ${
            isLarge ? "h-10" : "h-8"
          }`}
        />
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[15px] font-semibold tracking-tight text-frost">
            Times Global
          </span>
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-dim">
            Data Center
          </span>
        </span>
      )}
    </Link>
  );
}
