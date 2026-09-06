import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import Button from "../ui/Button";
import Image from "next/image";

const layers = [
  { title: "CCTV & video surveillance", note: "Recorded 24/7" },
  { title: "Multi-tier access control", note: "Biometric + audit trails" },
  { title: "Visitor management", note: "Registered & escorted" },
  { title: "Network segmentation", note: "Isolated customer zones" },
];

export default function SecuritySection() {
  return (
    <section className="relative overflow-clip bg-ink py-16 sm:py-24 lg:py-32">
      {/* Door photo background — lightly blurred */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/door.jpg"
          alt=""
          fill
          sizes="(max-width: 640px) 430px, 100vw"
          className="animate-bg-drift object-cover object-center blur-[3px]"
        />
        {/* Readability scrim — keeps every word legible over the photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,7,9,0.76) 0%, rgba(6,7,9,0.6) 40%, rgba(6,7,9,0.7) 70%, rgba(6,7,9,0.9) 100%)",
          }}
        />
      </div>
      <Container className="relative">
        <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="lg:order-1">
            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-8 rounded-3xl bg-accent/5 blur-2xl"
                aria-hidden="true"
              />
              <div className="card relative overflow-clip rounded-2xl p-8 sm:p-10">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon name="shield" className="h-7 w-7" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-frost">
                      Security by design
                    </p>
                      <p className="text-sm text-dim">Defense in depth, at every layer</p>
                  </div>
                </div>
                <ul className="mt-8 space-y-5">
                  {layers.map((layer) => (
                    <li key={layer.title} className="flex items-start justify-between gap-4 border-b border-line-soft pb-5 last:border-0 last:pb-0">
                      <span className="text-sm font-medium text-frost">{layer.title}</span>
                      <span className="shrink-0 text-xs uppercase tracking-wider text-dim">
                        {layer.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <div className="lg:order-2 [text-shadow:0_1px_8px_rgba(3,4,6,0.9),0_0_2px_rgba(3,4,6,0.85)]">
            <Reveal>
              <p className="kicker mb-4 flex items-center gap-3 text-accent">
                <span className="h-px w-8 bg-accent" aria-hidden="true" />
                <span>Security</span>
              </p>
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-frost sm:text-4xl lg:text-[2.75rem]">
                Protected at every level, around the clock
              </h2>
              <p className="mt-6 text-base leading-relaxed text-mist sm:text-lg">
                Your equipment is the crown jewel of our facility. Physical
                barriers, surveillance, access control and operational discipline
                work together so that only authorized people and authorized
                workloads are ever inside.
              </p>
            </Reveal>
            <Reveal delay={1} className="mt-8">
              <Button href="/security" variant="outline" icon="arrow-right">
                See Our Security Approach
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
