import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="relative overflow-clip bg-ink">
      {/* ---- Full-width background image ---- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/who-we-are-bg.webp"
          alt=""
          fill
          priority
          sizes="(max-width: 640px) 430px, 100vw"
          className="object-cover object-center"
        />
        {/* Base gradient — keeps the copy readable without hiding the person */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,12,0.55) 0%, rgba(10,10,12,0.28) 30%, rgba(10,10,12,0.36) 65%, rgba(8,8,10,0.82) 100%)",
          }}
        />
        {/* Left-side readability gradient — darkens only the copy zone, clear of the person's face */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,10,12,0.62) 0%, rgba(10,10,12,0.34) 30%, rgba(10,10,12,0.1) 52%, transparent 68%)",
          }}
        />
        {/* Localized scrim behind the left copy */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(110% 85% at 8% 32%, rgba(6,7,9,0.5) 0%, rgba(6,7,9,0.2) 45%, transparent 70%)",
          }}
        />
        {/* Red/black atmospheric gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 88% 8%, rgba(229,72,77,0.1) 0%, transparent 48%), radial-gradient(100% 100% at 0% 100%, rgba(0,0,0,0.45) 0%, transparent 55%)",
          }}
        />
        <div className="tech-grid absolute inset-0 opacity-30" />
      </div>

      {/* ---- Content over the background ---- */}
      <Container className="relative">
        <div className="py-16 sm:py-24 lg:py-28">
          <div className="grid gap-8 sm:grid-cols-2 sm:items-start sm:gap-10">
            {/* Left — heading & copy on the dark side of the photo */}
            <div className="max-w-xl">
              <Reveal>
                <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-frost [text-shadow:0_2px_10px_rgba(3,4,6,0.8),0_1px_3px_rgba(3,4,6,0.7)] sm:text-4xl lg:text-[2.75rem]">
                  The secure, reliable foundation behind Nepal&apos;s digital
                  economy
                </h2>
              </Reveal>
              <Reveal delay={1} className="mt-8">
                <p className="text-base leading-relaxed text-mist [text-shadow:0_1px_10px_rgba(3,4,6,0.6)] sm:text-lg sm:leading-relaxed">
                  Purpose-built data center infrastructure in Dhumbarahi,
                  Kathmandu, where enterprises, financial institutions and
                  service providers host the systems they depend on.
                </p>
              </Reveal>
              <Reveal delay={2} className="mt-6">
                <p className="text-base leading-relaxed text-mist [text-shadow:0_1px_10px_rgba(3,4,6,0.6)] sm:text-lg sm:leading-relaxed">
                  Every layer of our facility is engineered to keep customer
                  workloads online. Redundant power, precision cooling and
                  physical security are monitored around the clock, so issues
                  are caught and resolved before they ever become downtime. Our
                  team manages the environment so our clients can focus on
                  running their business.
                </p>
              </Reveal>
            </div>

            {/* Right — rack-styled panel over the open rack, clear of the person's face */}
            <Reveal delay={1} className="sm:pt-24 lg:pt-60">
              <div className="relative rounded-2xl border border-white/15 bg-black/75 p-7 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)] backdrop-blur-md sm:p-8">
                {/* Commitment statement */}
                <p className="mt-2 font-display text-lg font-semibold leading-snug text-frost sm:text-xl">
                  We run our facility as if your business depended on it.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  Security, reliability and responsiveness are not features
                  here; they are how we operate, every hour of every day.
                </p>

                {/* Bottom tagline */}
                <div className="mt-8 flex items-center gap-3">
                  <span className="h-px w-12 bg-accent" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent [text-shadow:0_1px_8px_rgba(3,4,6,0.85)]">
                    World-Class Infrastructure, Right Here in Nepal
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
