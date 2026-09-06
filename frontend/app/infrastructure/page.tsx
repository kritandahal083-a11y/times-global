import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHeader from "@/components/layout/PageHeader";
import Icon, { type IconName } from "@/components/ui/Icon";
import CTASection from "@/components/home/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { infrastructureStats, infrastructureSystems } from "@/lib/site";

export const metadata: Metadata = {
  title: "Infrastructure",
  description:
    "Explore the Times Global Data Center facility: racks, power, UPS, generators, cooling, CCTV, physical security, network, redundancy and 24/7 monitoring.",
  alternates: {
    canonical: "/infrastructure",
  },
  openGraph: {
    title: "Infrastructure | Times Global Data Center",
    description:
      "Explore the Times Global Data Center facility: racks, power, UPS, generators, cooling, CCTV, physical security, network, redundancy and 24/7 monitoring.",
    images: [{ url: "/images/i.webp", width: 1200, height: 630, alt: "Times Global Data Center Infrastructure" }],
  },
};

export default function InfrastructurePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Infrastructure" }]} />
      <PageHeader
        kicker="Infrastructure"
        title="A facility engineered around availability"
        image="/images/i.webp"
        description={
          <>
            Our <span className="text-accent">Tier III</span> data center
            facility, power, cooling, security and network, is engineered with
            redundancy and operated with discipline. This is the infrastructure
            your workloads run on.
          </>
        }
      />

      <section className="bg-ink py-24 sm:py-32">
        <Container>
          {infrastructureSystems.map((system) => (
            <div key={system.group} className="mb-16 last:mb-0">
              <Reveal>
                <p className="kicker mb-8 flex items-center gap-3 text-accent">
                  <span className="h-px w-8 bg-accent" aria-hidden="true" />
                  <span>{system.group}</span>
                </p>
              </Reveal>
              <div className="grid gap-5 md:grid-cols-2">
                {system.items.map((item, i) => (
                  <Reveal key={item.title} delay={(i % 2) as 0 | 1} className="h-full">
                    <article className="card card-hover flex h-full flex-col rounded-xl p-7">
                      <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-line bg-panel text-accent">
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
            </div>
          ))}
        </Container>
      </section>

      <section className="border-t border-line bg-carbon py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-4">
            {infrastructureStats.map((s, i) => (
              <Reveal key={s.label} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="card rounded-xl p-8 text-center">
                  <p className="font-display text-4xl font-semibold text-accent">
                    {s.value}
                  </p>
                  <p className="mt-3 text-sm uppercase tracking-wider text-dim">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
