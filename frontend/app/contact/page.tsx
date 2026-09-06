import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHeader from "@/components/layout/PageHeader";
import ContactForm from "@/components/forms/ContactForm";
import Icon from "@/components/ui/Icon";
import DnaHelixBackground from "@/components/contact/DnaHelixBackground";
import { contactInfo } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Times Global Data Center: send us an inquiry about colocation, hosting, connectivity or disaster recovery in Nepal.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Times Global Data Center",
    description:
      "Contact Times Global Data Center: send us an inquiry about colocation, hosting, connectivity or disaster recovery in Nepal.",
    images: [{ url: "/images/dd.webp", width: 1200, height: 630, alt: "Contact Times Global Data Center" }],
  },
};

const channels = [
  {
    icon: "mail" as const,
    label: "Email",
    value: contactInfo.email,
  },
  {
    icon: "phone" as const,
    label: "Phone",
    value: contactInfo.phone,
  },
  {
    icon: "map-pin" as const,
    label: "Location",
    value: contactInfo.address,
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Contact" }]} />
      <PageHeader
        kicker="Contact"
        title="Let&rsquo;s build your infrastructure together"
        description="Questions about colocation, hosting, connectivity or disaster recovery? Send us a message, our team responds promptly."
        image="/images/dd.webp"
      />

      <section className="relative isolate overflow-clip bg-ink py-24 sm:py-32">
        <DnaHelixBackground />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1]"
        >
          <div className="absolute -left-48 top-1/4 h-[28rem] w-[28rem] rounded-full bg-accent/[0.07] blur-[130px]" />
          <div className="absolute -right-48 bottom-0 h-[26rem] w-[26rem] rounded-full bg-brand/[0.09] blur-[130px]" />
          <div className="absolute inset-0 bg-ink/30" />
          <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_45%,transparent_35%,rgba(6,7,9,0.78)_100%)]" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />
        </div>

        <Container className="relative z-10">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal className="space-y-4">
                {channels.map((channel) => {
                  const content = (
                    <>
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                        <Icon name={channel.icon} className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-[0.16em] text-dim">
                          {channel.label}
                        </span>
                        <span className="mt-1 block text-base font-medium text-frost">
                          {channel.value}
                        </span>
                      </span>
                    </>
                  );
                  return channel.href ? (
                    <a
                      key={channel.label}
                      href={channel.href}
                      className="card card-hover flex items-center gap-5 rounded-xl p-5"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={channel.label}
                      className="card flex items-center gap-5 rounded-xl p-5"
                    >
                      {content}
                    </div>
                  );
                })}
              </Reveal>

            </div>

            <Reveal delay={1} className="lg:col-span-7">
              <div className="card rounded-2xl p-7 sm:p-10">
                <h2 className="font-display text-2xl font-semibold text-frost">
                  Send an inquiry
                </h2>
                <p className="mt-2 text-sm text-mist">
                  Fields marked with <span className="text-accent">*</span> are
                  required. Your inquiry opens as a pre-filled email you review
                  and send, and our team responds by email.
                </p>
                <ContactForm className="mt-8" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
