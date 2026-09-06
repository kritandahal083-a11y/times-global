import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/layout/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the Times Global Data Center website.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "Information We Collect",
    body: [
      "When you submit the contact form on this website, we collect the information you provide: your name, email address, optional phone number and your message.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "The information you submit through the contact form is used to respond to your inquiry and to provide the products and services you request.",
      "Contact inquiries submitted through this website are delivered to the company's official email address as a record of the request, where authorized personnel handle your inquiry.",
    ],
  },
  {
    title: "Data Retention",
    body: [
      "We retain contact inquiry records for as long as needed to manage your request and to maintain accurate business records, in line with applicable legal and operational requirements.",
    ],
  },
  {
    title: "Sharing of Information",
    body: [
      "We do not sell, rent or trade your personal information. Your information is shared only with authorized personnel of " +
      site.name +
      " who need it to respond to your inquiry.",
    ],
  },
  {
    title: "Security",
    body: [
      "We take reasonable technical and organizational measures to protect the information you submit against loss, misuse and unauthorized access.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You may contact us at any time to request access to, correction of, or deletion of the personal information you have submitted. Please email us using the contact details on this website.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        kicker="Legal"
        title="Privacy Policy"
        description="This policy explains how Times Global Data Center collects, uses and protects information submitted through this website."
      />
      <section className="bg-ink py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="font-display text-xl font-semibold text-frost">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.body.map((paragraph, i) => (
                      <p key={i} className="text-sm leading-relaxed text-mist">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-14 select-none font-mono text-[10px] tracking-wide text-dim/60">
              Website developed by Kritan Dahal &amp; Manik Magar
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
