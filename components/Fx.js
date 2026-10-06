"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Fx() {
  const path = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("main", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".w", {
        y: 80,
        rotateX: -70,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        delay: 0.2,
        ease: "back.out(1.6)",
      });

      gsap.set("[data-a]", { opacity: 0 });

      ScrollTrigger.batch("[data-a]", {
        start: "top 90%",
        once: true,
        onEnter: (b) =>
          gsap.fromTo(
            b,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.12,
              duration: 0.9,
              ease: "power3.out",
            }
          ),
      });

      document.querySelectorAll("[data-n]").forEach((el) => {
        const v = +el.dataset.n;
        const o = { x: 0 };

        gsap.to(o, {
          x: v,
          duration: 2,
          scrollTrigger: el,
          onUpdate: () => {
            el.textContent = v % 1
              ? o.x.toFixed(1)
              : Math.round(o.x);
          },
        });
      });

      document.querySelectorAll(".card").forEach((c) => {
        c.onpointermove = (e) => {
          const r = c.getBoundingClientRect();

          gsap.to(c, {
            rotateY: ((e.clientX - r.left) / r.width - 0.5) * 10,
            rotateX: -((e.clientY - r.top) / r.height - 0.5) * 10,
            transformPerspective: 600,
            duration: 0.3,
          });
        };

        c.onpointerleave = () =>
          gsap.to(c, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
          });
      });
    });

    return () => ctx.revert();
  }, [path]);

  return null;
}