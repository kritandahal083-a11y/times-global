import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHeader from "@/components/layout/PageHeader";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { services } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Times Global Data Center services: colocation, rack space, server hosting, network connectivity, disaster recovery, backup infrastructure and managed hosting.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Times Global Data Center",
    description:
      "Times Global Data Center services: colocation, rack space, server hosting, network connectivity, disaster recovery, backup infrastructure and managed hosting.",
    images: [{ url: "/images/e.jpg", width: 1200, height: 630, alt: "Times Global Data Center Services" }],
  },
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Services" }]} />
      <PageHeader
        kicker="Services"
        title="Data center services that scale with you"
        description="From a single rack to fully managed enterprise infrastructure: flexible, professional services delivered from our secured facility in Nepal."
        image="/images/e.jpg"
      />

      <section className="bg-ink py-24 sm:py-32">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 2) as 0 | 1} className="h-full">
                <article
                  className="card card-hover group flex h-full flex-col rounded-xl p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-soft text-accent">
                      <Icon name={service.icon} className="h-6 w-6" />
                    </span>
                  </div>
                  <h2 className="mt-6 font-display text-xl font-semibold text-frost">
                    {service.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">
                    {service.blurb}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-mist">
                        <Icon name="check" className="h-4 w-4 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="btn btn-outline group mt-8 w-full"
                  >
                    Learn more
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <div className="relative overflow-clip rounded-2xl border border-line bg-carbon p-8 sm:p-10">
              <div
                className="tech-grid pointer-events-none absolute inset-0"
                aria-hidden="true"
              />
              <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-frost">
                    Not sure which service you need?
                  </h2>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-mist">
                    Our team will assess your requirements and recommend the right
                    configuration, no obligation, no guesswork.
                  </p>
                </div>
                <Button href="/contact" variant="primary" icon="arrow-right" className="shrink-0">
                  Contact Us
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
