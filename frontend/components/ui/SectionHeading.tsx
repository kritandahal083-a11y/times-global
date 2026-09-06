import Reveal from "./Reveal";

type SectionHeadingProps = {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal
      className={`${centered ? "mx-auto text-center" : ""} max-w-2xl ${className}`}
    >
      {kicker ? (
        <p className="kicker mb-4 flex items-center gap-3 text-accent">
          {!centered ? <span className="h-px w-8 bg-accent" aria-hidden="true" /> : null}
          {centered ? <span aria-hidden="true" /> : null}
          <span>{kicker}</span>
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-frost sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
