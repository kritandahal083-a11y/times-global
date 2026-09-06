import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Image from "next/image";

const locations = [
  { city: "Kathmandu" },
  { city: "Dhalkebar" },
  { city: "Butwal" },
];

export default function NepalPresence() {
  return (
    <section className="relative overflow-clip bg-ink py-16 sm:py-24 lg:py-32">
      <Container className="relative z-10">
        <div className="grid items-center gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          {/* Left — text */}
          <Reveal>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-frost sm:text-4xl lg:text-[2.75rem]">
              Infrastructure Across Nepal
            </h2>
            <p className="mt-6 text-base leading-relaxed text-mist sm:text-lg">
              Three data centers keeping Nepal connected and online.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {locations.map((loc, i) => (
                <Reveal key={loc.city} delay={i === 0 ? 1 : i === 1 ? 2 : 3}>
                  <div className="card rounded-xl px-4 py-5 text-center">
                    <span className="mx-auto mb-2 block h-2 w-2 rounded-full bg-accent" />
                    <p className="text-sm font-semibold text-frost">{loc.city}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* Right — Nepal map */}
          <Reveal delay={1} className="flex justify-center">
            <Image
              src="/images/nepal.png"
              alt="Nepal map showing data center locations"
              width={1100}
              height={1100}
              className="h-auto w-full"
              priority
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
