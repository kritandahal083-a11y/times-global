import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Image from "next/image";
import type { ReactNode } from "react";

type PageHeaderProps = {
  kicker: string;
  title: string;
  description: ReactNode;
  image?: string;
};

export default function PageHeader({
  kicker,
  title,
  description,
  image,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-clip border-b border-line bg-carbon pb-16 pt-40 sm:pb-20 sm:pt-48">
      {image && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(6,7,9,0.82) 0%, rgba(6,7,9,0.7) 45%, rgba(6,7,9,0.82) 100%)",
            }}
          />
        </div>
      )}
      {!image && (
        <div
          className="tech-grid pointer-events-none absolute inset-0"
          aria-hidden="true"
        />
      )}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
        aria-hidden="true"
      />
      <Container>
        <Reveal className="max-w-3xl">
          <p className="kicker mb-5 flex items-center gap-3 text-accent">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            <span>{kicker}</span>
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-frost sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
            {description}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
