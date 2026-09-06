import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/layout/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for the Times Global Data Center website.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: [
      "By accessing or using the " +
      site.name +
      " website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use the website.",
    ],
  },
  {
    title: "Use of the Website",
    body: [
      "This website is provided to present information about our data center services and to allow visitors to submit inquiries. You agree to use the website lawfully and not to interfere with its operation.",
      "You agree not to submit false, misleading or unlawful content through the contact form or any other channel on this website.",
    ],
  },
  {
    title: "No Warranty",
    body: [
      "The content on this website is provided for general information only and is subject to change without notice. While we aim to keep the information accurate, we make no warranties, express or implied, regarding its completeness or accuracy.",
      "Information about our services on this website is not an offer and does not create any contractual obligation unless a separate written agreement is signed.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, " +
      site.name +
      " shall not be liable for any direct, indirect, incidental or consequential damages arising from the use of, or inability to use, this website.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "The name, design, text and other content on this website are the property of " +
      site.name +
      " or their respective owners and may not be reproduced without permission.",
    ],
  },
  {
    title: "Third-Party Links",
    body: [
      "This website may contain links to third-party websites. We are not responsible for the content or privacy practices of those websites.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These Terms of Service are governed by the laws of Nepal. Any disputes arising under these terms shall be subject to the jurisdiction of the courts of Nepal.",
    ],
  },
  {
    title: "Contact",
    body: [
      "If you have questions about these Terms of Service, please contact us through the contact details provided on this website.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        kicker="Legal"
        title="Terms of Service"
        description="The terms governing your use of the Times Global Data Center website."
      />
      <section className="bg-ink py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl space-y-10">
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
        </Container>
      </section>
    </>
  );
}
