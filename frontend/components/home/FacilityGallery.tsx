"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Icon from "../ui/Icon";
import { facilityPhotos } from "@/lib/site";

const photos = facilityPhotos;
const featurePhoto = photos[0];
const gridPhotos = photos.slice(1);

export default function FacilityGallery() {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const restoreFocus = useRef<HTMLElement | null>(null);

  const isOpen = active !== null;
  const photo = active === null ? null : photos[active];

  // Open / close lifecycle: lock body scroll, move focus in, restore it after.
  useEffect(() => {
    if (!isOpen) return;
    restoreFocus.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    const closeButton = dialogRef.current?.querySelector<HTMLButtonElement>(
      "[data-lightbox-close]"
    );
    closeButton?.focus();
    return () => {
      document.body.style.overflow = "";
      restoreFocus.current?.focus?.();
      restoreFocus.current = null;
    };
  }, [isOpen]);

  // Keyboard navigation while open: Escape closes, arrows step through.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
      } else if (event.key === "ArrowRight") {
        setActive((current) =>
          current === null ? current : (current + 1) % photos.length
        );
      } else if (event.key === "ArrowLeft") {
        setActive((current) =>
          current === null
            ? current
            : (current - 1 + photos.length) % photos.length
        );
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  // Trap Tab inside the dialog so focus cannot escape into the page behind it.
  function handleDialogKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab" || !dialogRef.current) return;
    const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
      'button, [href], [tabindex]:not([tabindex="-1"])'
    );
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function openAt(index: number) {
    setActive(index);
  }

  return (
    <section className="bg-ink py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="reveal max-w-2xl">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-frost sm:text-4xl lg:text-[2.75rem]">
            Inside the facility
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">
            Rack aisles, secure access, power and fire protection: a look at the
            environment your workloads run in.
          </p>
        </div>

        <div className="reveal mt-10 sm:mt-14" data-delay={1}>
          <button
            type="button"
            onClick={() => openAt(0)}
            aria-label={`${featurePhoto.title}. ${featurePhoto.caption} View larger.`}
            className="group relative block aspect-video w-full overflow-clip rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:aspect-[21/9]"
          >
            <Image
              src={featurePhoto.src}
              alt={featurePhoto.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 92vw, 88rem"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </button>

          <div className="mt-3 grid grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-3 sm:gap-4">
            {gridPhotos.map((item, i) => (
              <button
                key={item.src}
                type="button"
                onClick={() => openAt(i + 1)}
                aria-label={`${item.title}. ${item.caption} View larger.`}
                className="group relative block aspect-[4/3] w-full overflow-clip rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 48vw, (max-width: 1024px) 30vw, 24rem"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </button>
            ))}
          </div>
        </div>
      </Container>

      {photo && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${photo.title}. Image ${active! + 1} of ${photos.length}`}
          tabIndex={-1}
          onKeyDown={handleDialogKeyDown}
          className="fixed inset-0 z-[80] flex flex-col bg-ink/95 p-4 outline-none backdrop-blur-sm sm:p-6 lg:p-10"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-dim" aria-hidden="true">
              {active! + 1} / {photos.length}
            </p>
            <button
              type="button"
              data-lightbox-close
              onClick={() => setActive(null)}
              aria-label="Close image viewer"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-carbon text-mist transition-colors duration-300 hover:border-accent/50 hover:text-accent"
            >
              <Icon name="close" className="h-5 w-5" />
            </button>
          </div>

          <div className="relative mt-3 flex min-h-0 flex-1 items-center justify-center">
            <button
              type="button"
              onClick={() =>
                setActive((current) =>
                  current === null
                    ? current
                    : (current - 1 + photos.length) % photos.length
                )
              }
              aria-label="Previous photo"
              className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg border border-line bg-carbon/90 text-frost transition-colors duration-300 hover:border-accent/50 hover:text-accent sm:left-2"
            >
              <Icon name="arrow-left" className="h-5 w-5" />
            </button>

            <div className="relative h-full w-full max-w-5xl">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 64rem"
                className="object-contain"
              />
            </div>

            <button
              type="button"
              onClick={() =>
                setActive((current) =>
                  current === null ? current : (current + 1) % photos.length
                )
              }
              aria-label="Next photo"
              className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg border border-line bg-carbon/90 text-frost transition-colors duration-300 hover:border-accent/50 hover:text-accent sm:right-2"
            >
              <Icon name="arrow-right" className="h-5 w-5" />
            </button>
          </div>

          <div className="mx-auto mt-3 w-full max-w-2xl pb-2 text-center sm:mt-4">
            <h3 className="font-display text-lg font-semibold text-frost sm:text-xl">
              {photo.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-mist">
              {photo.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
