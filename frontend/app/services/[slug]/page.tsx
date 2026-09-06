import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/home/CTASection";
import { services, serviceDetails } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Unknown slugs must return a real 404 status rather than a 200 with a
// not-found body, so only prerendered slugs are allowed.
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.blurb,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | Times Global Data Center`,
      description: service.blurb,
      images: [{ url: "/images/e.jpg", width: 1200, height: 630, alt: `${service.title} - Times Global Data Center` }],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const details = serviceDetails[slug];
  const serviceIndex = services.findIndex((s) => s.slug === slug);
  const icon = service.icon;

  const nextService = services[(serviceIndex + 1) % services.length];

  return (
    <>
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: service.title }]} />

      {/* Service Navigation Bar */}
      <nav className="sticky top-16 z-40 border-b border-line bg-ink/80 backdrop-blur-xl">
        <Container>
          <div className="flex items-center justify-between py-3">
            <Link
              href="/services"
              className="group flex items-center gap-2 text-sm text-mist transition-colors hover:text-frost"
            >
              <Icon name="arrow-left" className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              <span>Back</span>
            </Link>

            <Link
              href={`/services/${nextService.slug}`}
              className="group flex items-center gap-2 text-sm text-mist transition-colors hover:text-frost"
            >
              <span className="hidden sm:inline">{nextService.title}</span>
              <span className="sm:hidden">Next</span>
              <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Container>
      </nav>

      {/* Hero */}
      <section className="relative overflow-clip border-b border-line bg-carbon pb-16 pt-16 sm:pb-20 sm:pt-20">
        {/* Background image */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <Image
            src="/images/SS.png"
            alt=""
            fill
            priority
            sizes="(max-width: 640px) 430px, 100vw"
            className="object-cover object-center"
          />
          {/* Readability overlay — darkens edges, keeps center clear */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, rgba(6,7,9,0.92) 0%, rgba(6,7,9,0.78) 35%, rgba(6,7,9,0.5) 60%, rgba(6,7,9,0.72) 100%)",
            }}
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/40 to-transparent" aria-hidden="true" />
        <Container className="relative z-10">
          <Reveal className="max-w-3xl">
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Icon name={icon} className="h-7 w-7" />
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-frost sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
              {service.blurb}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" variant="primary" icon="arrow-right">
                Request a Quote
              </Button>
              <Button href="/infrastructure" variant="outline">
                Explore Infrastructure
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Description */}
      {details && (
        <section className="bg-ink py-16 sm:py-24 lg:py-32">
          <Container>
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <SectionHeading
                  kicker="About this service"
                  title={`What is ${service.title}?`}
                />
                <Reveal delay={1} className="mt-8">
                  <p className="text-base leading-relaxed text-mist sm:text-lg">
                    {details.description}
                  </p>
                </Reveal>
              </div>
              <div className="lg:col-span-5">
                <Reveal className="lg:sticky lg:top-28">
                  <div className="card rounded-2xl p-8">
                    <p className="kicker text-dim">Key features</p>
                    <ul className="mt-6 space-y-5">
                      {details.features.map((feature) => (
                        <li key={feature.title} className="flex gap-4">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                            <Icon name="check" className="h-5 w-5" />
                          </span>
                          <div>
                            <h3 className="text-sm font-semibold text-frost">
                              {feature.title}
                            </h3>
                            <p className="mt-1 text-sm leading-relaxed text-mist">
                              {feature.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Benefits */}
      {details && (
        <section className="border-t border-line bg-carbon py-20 sm:py-24">
          <Container>
            <SectionHeading
              title="Why choose this service"
              align="center"
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {details.benefits.map((benefit, i) => (
                <Reveal key={benefit} delay={(i % 2) as 0 | 1}>
                  <div className="card flex items-start gap-4 rounded-xl p-6">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                      <Icon name="shield" className="h-4.5 w-4.5" />
                    </span>
                    <p className="text-sm leading-relaxed text-mist">
                      {benefit}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
}
