import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-clip bg-ink pt-32">
      <div className="tech-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative">
        <div className="max-w-xl">
          <p className="font-mono text-sm tracking-widest text-accent">404</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-frost sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-5 text-base leading-relaxed text-mist">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has been
            moved. Let&rsquo;s get you back on track.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/" variant="primary" icon="arrow-right">
              Back to Home
            </Button>
            <Link
              href="/contact"
              className="btn btn-outline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
