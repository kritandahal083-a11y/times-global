import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative overflow-clip bg-carbon py-16 sm:py-24 lg:py-28">
      {/* Facility photo background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/h.webp"
          alt=""
          fill
          sizes="(max-width: 640px) 430px, 100vw"
          className="object-cover object-center"
        />
        {/* Readability scrim — keeps every word legible over the photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,7,9,0.82) 0%, rgba(6,7,9,0.66) 40%, rgba(6,7,9,0.66) 60%, rgba(6,7,9,0.88) 100%)",
          }}
        />
      </div>
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-frost sm:text-4xl lg:text-5xl">
            Ready to move your infrastructure to a better home?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            Talk to our team about colocation, hosting or connectivity. We&rsquo;ll
            help you design the right setup for your workloads.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" icon="arrow-right">
              Contact Us
            </Button>
            <Button href="/services" variant="outline">
              Explore Services
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
