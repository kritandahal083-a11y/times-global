import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHeader from "@/components/layout/PageHeader";
import Icon, { type IconName } from "@/components/ui/Icon";
import CTASection from "@/components/home/CTASection";
import { securityHighlights, securityLayers } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Security",
  description:
    "How Times Global Data Center protects your infrastructure: physical security, CCTV, access control, network security, monitoring and power redundancy.",
  alternates: {
    canonical: "/security",
  },
  openGraph: {
    title: "Security | Times Global Data Center",
    description:
      "How Times Global Data Center protects your infrastructure: physical security, CCTV, access control, network security, monitoring and power redundancy.",
    images: [{ url: "/images/qw.webp", width: 1200, height: 630, alt: "Times Global Data Center Security" }],
  },
};

export default function SecurityPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Security" }]} />
      <PageHeader
        kicker="Security"
        title="Defense in depth, at every layer"
        description="Security is not a feature at Times Global Data Center, it is the operating principle of the entire facility. Physical controls, surveillance, access management and network segmentation work together to protect your infrastructure."
        image="/images/qw.webp"
      />

      <section className="bg-ink py-24 sm:py-32">
        <Container>
          <SectionHeading
            kicker="Security Layers"
            title="Every layer of the facility is protected"
            description="We secure the perimeter, the building, the data floor, the rack and the network, with overlapping controls so no single failure creates a gap."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {securityLayers.map((layer, i) => (
              <Reveal key={layer.title} delay={(i % 2) as 0 | 1} className="h-full">
                <article className="card card-hover flex h-full flex-col rounded-xl p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                      <Icon name={layer.icon} className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-frost">
                    {layer.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    {layer.blurb}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-carbon py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {securityHighlights.map((h, i) => (
              <Reveal key={h.title} delay={(i % 2) as 0 | 1}>
                <div className="card flex h-full flex-col rounded-xl p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Icon name={h.icon as IconName} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-semibold text-frost">
                    {h.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{h.blurb}</p>
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
