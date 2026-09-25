"use client";

import { useEffect } from "react";

export default function MotionEnhancements() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    let revealObserver: IntersectionObserver | undefined;

    const setup = () => {
      revealObserver?.disconnect();

      if (preference.matches) {
        targets.forEach((target) => target.classList.remove("will-reveal"));
        return;
      }

      if ("IntersectionObserver" in window) {
        revealObserver = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            });
          },
          { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
        );

        targets.forEach((target) => {
          if (target.classList.contains("is-visible")) return;
          if (target.getBoundingClientRect().top <= window.innerHeight * 0.92) {
            target.classList.remove("will-reveal");
            target.classList.add("is-visible");
            return;
          }
          target.classList.add("will-reveal");
          revealObserver?.observe(target);
        });
      }
    };

    preference.addEventListener("change", setup);
    setup();

    return () => {
      revealObserver?.disconnect();
      preference.removeEventListener("change", setup);
    };
  }, []);

  return null;
}
