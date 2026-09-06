import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import Icon, { type IconName } from "../ui/Icon";
import Image from "next/image";

const categories = [
  {
    icon: "building",
    label: "Banks & Financial",
    items: [
      "Commercial Banks",
      "Development Banks",
      "Microfinance Institutions",
      "Insurance Companies",
    ],
  },
  {
    icon: "network",
    label: "ISPs & Telecom",
    items: [
      "Internet Service Providers",
      "Telecom Operators",
      "Broadband Providers",
      "Fiber Networks",
    ],
  },
  {
    icon: "cloud",
    label: "Government & Enterprise",
    items: [
      "Government Agencies",
      "Large Enterprises",
      "SaaS Platforms",
      "E-Commerce",
    ],
  },
  {
    icon: "server",
    label: "Technology & Media",
    items: [
      "Tech Startups",
      "Media & Broadcasting",
      "Education Platforms",
      "Healthcare Systems",
    ],
  },
];

export default function TrustedBy() {
  return (
    <section className="relative overflow-clip py-16 sm:py-24 lg:py-32">
      {/* Background image — person's face visible */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/s.png"
          alt=""
          fill
          priority
          sizes="(max-width: 640px) 430px, 100vw"
          className="object-cover object-center"
        />
        {/* Base gradient — darkens edges but keeps center (person) visible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,12,0.7) 0%, rgba(10,10,12,0.5) 30%, rgba(10,10,12,0.55) 60%, rgba(10,10,12,0.88) 100%)",
          }}
        />
        {/* Left-side scrim for the heading text */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,10,12,0.75) 0%, rgba(10,10,12,0.5) 35%, rgba(10,10,12,0.15) 60%, transparent 75%)",
          }}
        />
        {/* Bottom scrim so cards stay readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(10,10,12,0.85) 0%, rgba(10,10,12,0.5) 40%, transparent 70%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          kicker="Trusted Partners"
          title="Infrastructure we power"
          description="From banks and ISPs to government platforms — Nepal's most critical organizations trust us to keep their systems online."
        />

        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {categories.map((cat, i) => (
            <Reveal key={cat.label} delay={(i % 4) as 0 | 1 | 2 | 3} className="h-full">
              <article className="group flex h-full flex-col rounded-xl border border-white/10 bg-black/70 p-6 transition-colors duration-300 hover:border-accent/30 hover:bg-black/75 sm:p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-carbon text-accent transition-colors duration-300 group-hover:border-accent/40">
                  <Icon name={cat.icon as IconName} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold text-frost sm:text-lg">
                  {cat.label}
                </h3>
                <ul className="mt-4 flex-1 space-y-2.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm leading-snug text-mist"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={1} className="mt-12 text-center sm:mt-16">
          <p className="text-sm text-dim">
            + Dozens of enterprises, service providers and institutions across Nepal
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
