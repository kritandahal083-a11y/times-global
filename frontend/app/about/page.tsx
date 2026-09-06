import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/ui/Button";
import Icon, { type IconName } from "@/components/ui/Icon";
import CTASection from "@/components/home/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { aboutPrinciples, aboutPillars, aboutStatements } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Times Global Data Center, our mission, vision, infrastructure, reliability, security and operational excellence in Nepal.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Times Global Data Center",
    description:
      "Learn about Times Global Data Center, our mission, vision, infrastructure, reliability, security and operational excellence in Nepal.",
    images: [{ url: "/images/t.webp", width: 1200, height: 630, alt: "Times Global Data Center" }],
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "About" }]} />
      <PageHeader
        kicker="About Us"
        title="The company behind the racks"
        image="/images/t.webp"
        description={
          <>
            Times Global Data Center is a{" "}
            <span className="text-accent">Tier III</span> data center built to
            give Nepal&rsquo;s enterprises the secure, reliable infrastructure
            they deserve, engineered to international standards and operated
            with local expertise.
          </>
        }
      />

      <section className="bg-ink py-24 sm:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading
                kicker="Company Overview"
                title="Enterprise infrastructure, rooted in Nepal"
              />
              <Reveal delay={1} className="mt-8 space-y-5">
                <p className="text-base leading-relaxed text-mist sm:text-lg">
                  Times Global Data Center is a professional data center services
                  company in Dhumbarahi, Kathmandu, Nepal. We operate a{" "}
                  <span className="text-accent">Tier III</span> data center
                  facility
                  purpose-built to house the servers, storage and network systems
                  that organizations depend on every day.
                </p>
                <p className="text-base leading-relaxed text-mist">
                  Our clients include{" "}
                  <span className="text-accent">banks, financial institutions,
                  technology companies and enterprises</span> that need more than a
                  server room.
                  They need guaranteed power, cooling, physical security, network
                  connectivity and a team that treats their infrastructure as
                  mission-critical.
                </p>
                <p className="text-base leading-relaxed text-mist">
                  From colocation and rack space to managed hosting and disaster
                  recovery, we deliver services that combine global data center
                  standards with the responsiveness of a local partner.
                </p>
              </Reveal>

              <Reveal delay={2} className="mt-10 grid gap-4 sm:grid-cols-2">
                {aboutStatements.map((statement) => (
                  <div key={statement.kicker} className="card rounded-xl p-6">
                    <p className="kicker text-accent">{statement.kicker}</p>
                    <p className="mt-3 text-sm leading-relaxed text-mist">
                      {statement.body}
                    </p>
                  </div>
                ))}
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal className="lg:sticky lg:top-28">
                <div className="card rounded-2xl p-8">
                  <p className="kicker text-dim">At a glance</p>
                  <ul className="mt-6 space-y-6">
                    {aboutPillars.map((p) => (
                      <li key={p.title} className="flex gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                          <Icon name={p.icon as IconName} className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="font-display text-base font-semibold text-frost">
                            {p.title}
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-mist">
                            {p.blurb}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 border-t border-line pt-6">
                    <Button href="/infrastructure" variant="outline" icon="arrow-right" className="w-full">
                      Explore Infrastructure
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-carbon py-24 sm:py-28">
        <Container>
          <SectionHeading
            kicker="Operational Excellence"
            title="How we work"
            description="Our approach to operating a data center is built on principles that shape every shift, every task and every customer interaction."
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aboutPrinciples.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) as 0 | 1 | 2 | 3} className="h-full">
                <article className="card card-hover flex h-full flex-col rounded-xl p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Icon name={p.icon as IconName} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-semibold text-frost">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{p.blurb}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
