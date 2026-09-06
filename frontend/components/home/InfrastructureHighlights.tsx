import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import Icon, { type IconName } from "../ui/Icon";
import Link from "next/link";
import Image from "next/image";
import { infrastructureHighlights } from "@/lib/site";

export default function InfrastructureHighlights() {
  return (
    <section className="relative overflow-clip bg-ink py-16 sm:py-24 lg:py-32">
{/* Background image */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <Image
            src="/images/manik2.jpeg"
            alt=""
            fill
            sizes="(max-width: 640px) 430px, 100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(6,7,9,0.82) 0%, rgba(6,7,9,0.68) 40%, rgba(6,7,9,0.72) 70%, rgba(6,7,9,0.9) 100%)",
            }}
          />
        </div>
        <Container className="relative z-10">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              title="Every layer engineered for availability"
              description="Power, cooling, network and security: each system designed with redundancy and operated with discipline."
            />
            <Reveal delay={2} className="shrink-0">
              <Link href="/infrastructure" className="btn btn-outline">
                Explore Infrastructure
              </Link>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {infrastructureHighlights.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 3) as 0 | 1 | 2}
                className="h-full"
              >
                <article className="card card-hover group flex h-full flex-col rounded-xl p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-line bg-panel text-accent transition-colors duration-300 group-hover:border-accent/40">
                    <Icon name={item.icon as IconName} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-semibold text-frost">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    {item.blurb}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
    </section>
  );
}
