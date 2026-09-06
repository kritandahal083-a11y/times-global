import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";
import Link from "next/link";

const plans = [
  {
    name: "Single Server",
    subtitle: "Single Server, Physical or Cloud",
    features: [
      "Self Managed Server or Managed Server",
      "Single Server or Cloud Server",
    ],
  },
  {
    name: "Quarter Server Rack",
    subtitle: "Quarter Rack",
    features: [
      "Quarter Rack Space",
      "Self Managed Server or Managed Server",
      "Single Server",
    ],
  },
  {
    name: "Half Rack Space",
    subtitle: "Self Managed or Managed",
    features: [
      "Half Rack Space",
      "Self Managed Server or Managed Server",
      "Half Rack",
    ],
  },
  {
    name: "Full Rack Space",
    subtitle: "Self Managed or Managed",
    features: [
      "Full Rack Space",
      "Self Managed Server or Managed Server",
      "Full Rack",
    ],
  },
];

const includedFeatures = [
  "Unlimited Bandwidth",
  "Secure Environment",
  "Redundant Power Supply",
  "24/7 Monitoring",
  "24/7 Network Support",
  "24/7 Access to Data Center",
];

export default function ServicesPreview() {
  return (
    <section className="relative border-y border-line bg-carbon py-16 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          kicker="Plans and Packages"
          title="Choose the plan that fits your needs"
          align="center"
        />
        <p className="mx-auto mt-5 max-w-xl text-center text-base leading-relaxed text-mist sm:text-lg">
          Want to discuss your requirements? Call us:{" "}
          <span className="font-semibold text-accent">9851020982</span>
        </p>

        {/* Mobile: horizontal scroll carousel */}
        <div className="mt-10 sm:mt-14 lg:mt-14">
          <div role="region" aria-label="Service plans" className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none sm:visible sm:overflow-visible sm:grid sm:grid-cols-2 sm:gap-5 sm:pb-0 lg:grid-cols-4">
            {plans.map((plan, i) => (
              <Reveal
                key={plan.name}
                delay={(i % 4) as 0 | 1 | 2 | 3}
                className="h-full"
              >
                <article className="card card-hover flex h-full min-w-[280px] snap-start flex-col rounded-xl p-6 sm:min-w-0 sm:p-7">
                  <h3 className="font-display text-lg font-semibold text-frost">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-mist">{plan.subtitle}</p>
                  <p className="mt-5 font-display text-xl font-semibold text-accent">
                    Price on call
                  </p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {[...plan.features, ...includedFeatures].map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm leading-snug text-mist"
                      >
                        <Icon
                          name="check"
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="btn btn-outline group mt-6 w-full sm:mt-8"
                  >
                    Contact Us
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
          {/* Scroll indicator dots — mobile only */}
          <div className="mt-4 flex justify-center gap-1.5 sm:hidden">
            {plans.map((_, i) => (
              <span
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-white/20 first:bg-accent"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
