import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import Image from "next/image";

const certificates = [
  {
    src: "/images/cc.jpeg",
    alt: "Times Global data center certification certificate",
    width: 913,
    height: 1280,
  },
  {
    src: "/images/certificate-2.jpeg",
    alt: "Times Global facility certification certificate",
    width: 931,
    height: 1280,
  },
];

export default function CertificationsSection() {
  return (
    <section className="relative overflow-clip bg-ink py-16 sm:py-24 lg:py-32">
      {/* Subtle accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-accent/5 blur-3xl"
      />
      <Container className="relative">
        {/* Copy */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-frost sm:text-4xl lg:text-[2.75rem]">
            Certified to international standards
          </h2>
          <p className="mt-6 text-base leading-relaxed text-mist sm:text-lg">
            Trust is earned, not claimed. Our facility operates under recognized
            certifications and audited processes, so your most critical
            workloads rest on infrastructure that has been independently
            verified, not just promised.
          </p>
        </Reveal>

        {/* Certificates */}
        <Reveal delay={1}>
          <div className="relative mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:mt-14 sm:gap-8 lg:mt-20 lg:gap-10">
            {certificates.map((certificate) => (
              <div key={certificate.src} className="relative">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-6 rounded-3xl bg-accent/10 blur-3xl"
                />
                <div className="card relative rounded-2xl p-2 sm:p-4">
                  <div className="relative overflow-clip rounded-xl shadow-2xl shadow-black/50 ring-1 ring-white/10">
                    <Image
                      src={certificate.src}
                      alt={certificate.alt}
                      width={certificate.width}
                      height={certificate.height}
                      quality={90}
                      sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 420px"
                      className="h-auto w-full object-contain"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <Icon name="shield" className="h-6 w-6" />
            </span>
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold text-frost">Certified Facility</p>
              <p className="text-xs uppercase tracking-wider text-dim">
                Verified &amp; audited operations
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
