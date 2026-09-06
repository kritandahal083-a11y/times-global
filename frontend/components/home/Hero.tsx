import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-clip bg-ink">
      <h1 className="sr-only">
        Times Global Data Center. Enterprise Data Center Infrastructure in Nepal.
      </h1>
      {/* ---- Cinematic background ---- */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero-6.webp"
          alt=""
          fill
          preload
          sizes="(max-width: 640px) 430px, 100vw"
          quality={90}
          className="hero-media object-cover object-center"
        />
        {/* Very subtle dark wash — keeps the image bright (~10%) */}
        <div className="absolute inset-0 bg-ink/10" />
        {/* Gentle center scrim — keeps the hero text readable without hiding the racks */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(3,4,6,0.14) 22%, rgba(3,4,6,0.22) 50%, rgba(3,4,6,0.14) 78%, transparent 100%)",
          }}
        />
        {/* Soft edge vignette — subtle depth, keeps the racks sharp and detailed */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 95% at 50% 45%, transparent 62%, rgba(3,4,6,0.18) 100%)",
          }}
        />
        {/* Top scrim — keeps the fixed navigation readable over the bright corridor */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/60 to-transparent" />
      </div>

      {/* ---- Center brand composition ---- */}
      <Container className="relative z-10 flex flex-1 flex-col items-center justify-center pb-16 pt-32 text-center sm:pb-20 sm:pt-36">
        {/* 1. Official Times Global logo — crisp, unmodified foreground element */}
        <div className="hero-logo relative">
          {/* Same soft whitish/light-gray glow as the small logo (Logo.tsx) — subtle,
              diffused, slightly wider than the logo, no visible box or hard edges. */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[150%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(244,246,248,0.45), rgba(244,246,248,0.12) 60%, transparent 78%)",
            }}
          />
          <Image
            src="/images/times-global-main-logo.png"
            alt="Times Global Data Center"
            width={1774}
            height={887}
            preload
            sizes="(max-width: 640px) 74vw, 400px"
            className="relative h-auto w-[min(280px,74vw)] object-contain drop-shadow-[0_16px_40px_rgba(0,0,0,0.5)] sm:w-[360px] lg:w-[400px]"
          />
        </div>

        {/* 2. Brand descriptor */}
        <p
          className="hero-item hero-text-shadow mt-8 pl-[0.38em] text-xs font-semibold uppercase tracking-[0.38em] text-accent sm:text-sm"
          style={{ animationDelay: "0.1s" }}
        >
          Data Center
        </p>

        {/* 3. Short supporting statement */}
        <p
          className="hero-item hero-text-shadow mt-6 max-w-[600px] text-base leading-relaxed text-mist sm:text-lg sm:leading-relaxed"
          style={{ animationDelay: "0.2s" }}
        >
          Enterprise-grade infrastructure for secure, reliable and connected
          digital operations.
        </p>

        {/* 4. CTAs */}
        <div
          className="hero-item mt-9 flex w-full max-w-sm flex-col items-center justify-center gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4"
          style={{ animationDelay: "0.3s" }}
        >
          <Button
            href="/infrastructure"
            variant="primary"
            className="btn-lg w-full sm:w-auto"
          >
            Explore Infrastructure
          </Button>
        </div>
      </Container>

      {/* ---- Fade into next section ---- */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-b from-transparent to-ink sm:h-36"
        aria-hidden="true"
      />
    </section>
  );
}
