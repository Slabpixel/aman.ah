"use client";

import Image from "next/image";
import Container from "@/components/sections/container";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

const TOTAL_TEXT = "2,873.929";
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

function LastDigitTicker({ value }: { value: string }) {
  const wrapperRef = useRef<HTMLSpanElement | null>(null);
  const numberRef = useRef<HTMLSpanElement | null>(null);
  const reelRef = useRef<HTMLSpanElement | null>(null);

  const baseText = value.slice(0, -1);
  const digitSequence = [6, 7, 8, 9];

  useGSAP(
    () => {
      if (!wrapperRef.current || !reelRef.current || !numberRef.current) return;

      // Start on "6" and roll in the opposite direction up to "9".
      gsap.set(reelRef.current, { yPercent: 0 });
      gsap.set(numberRef.current, {
        scale: 1.5,
        filter: "blur(15px)",
        transformOrigin: "center center",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(numberRef.current, {
        scale: 1,
        filter: "blur(0px)",
        duration: 0.80,
        ease: "power2.out",
      }).to(
        reelRef.current,
        {
          yPercent: -300,
          duration: 1.05,
          ease: "power2.out",
        },
        "-=0.35",
      );
    },
    { scope: wrapperRef, dependencies: [value], revertOnUpdate: true },
  );

  return (
    <span ref={wrapperRef} className="inline-flex items-center leading-none">
      <span ref={numberRef} className="inline-flex items-center leading-none">
        <span>{baseText}</span>
        <span className="relative mask-y-from-50% inline-flex h-[1em] w-[0.62em] overflow-hidden align-middle">
          <span ref={reelRef} className="absolute inset-0 flex w-full flex-col">
            {digitSequence.map((digit) => (
              <span key={digit} className="flex h-[1em] w-full items-center justify-center leading-none">
                {digit}
              </span>
            ))}
          </span>
        </span>
      </span>
    </span>
  );
}

export default function TrustSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const copy = sectionRef.current?.querySelector<HTMLElement>("[data-trust-copy]");
      if (!copy) return;
      const title = sectionRef.current?.querySelector<HTMLElement>("[data-trust-title]");
      if (!title) return;
      const splitTitle = new SplitText(title, { type: "chars" });
      const split = new SplitText(copy, { type: "lines" });

      gsap.set(split.lines, { filter: "blur(10px)" });
      gsap.to(split.lines, {
        filter: "blur(0px)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: copy,
          start: "top 95%",
          end: "bottom 40%",
          scrub: true,
        },
      });

      gsap.from(splitTitle.chars, {
        autoAlpha: 0,
        x: 32,
        stagger: 0.1,
        scrollTrigger: {
          trigger: title,
          start: "top 95%",
          end: "bottom 40%",
        },
      });

      gsap.from("[data-trust-image]", {
        xPercent: 100,
        ease: "circ.inOut",
        duration: 0.75,
        scrollTrigger: {
          trigger: title,
          start: "top 95%",
          end: "bottom 40%",
        },
      });

      return () => {
        split.revert();
      };
    },
    { scope: sectionRef, revertOnUpdate: true },
  );

  return (
    <Container parentClassName="bg-[url('/gradient-bottom.svg')] 2xl:bg-size-[auto_300px] bg-contain bg-no-repeat bg-bottom" className="flex flex-col gap-16 md:pt-30 md:pb-52.5">
      <section ref={sectionRef} className="space-y-19">
        <div className="relative w-full flex flex-col gap-59">
          <span data-trust-title className="relative text-3xl md:text-[2.5rem] w-fit tracking-[-0.02em] text-foreground">
            aman.ah
          </span>
          <div className="relative z-1 flex flex-col gap-6 md:gap-8">
            <div className="relative rounded-md md:rounded-xl overflow-hidden size-15 md:size-22.5">
              <Image src="icon.svg" alt="icon" width={90} height={90} />
              <div className="absolute w-full bottom-0 h-1/2 bg-background/16 border-t border-background backdrop-blur-xs z-1" />
            </div>
            <div className="relative max-h-61 max-w-225 text-foreground">
              <p data-trust-copy className="text-3xl md:text-4xl lg:text-5xl leading-[1.2] tracking-[-0.02em] overflow-x-visible">Financial leakage is a breach of trust and growth. aman.ah is a technological fortress ensuring Governance, Risk, and Compliance (GRC) are embedded into</p>
            </div>
          </div>
          <Image data-trust-image className="absolute top-0 right-0 max-lg:mt-16 max-lg:left-0" src="/template.svg" alt="template" width={599} height={558} />
        </div>
        <div className="relative z-1 flex flex-col gap-13 md:gap-20 lg:gap-30">
          <div className="flex justify-between">
            <span className="text-sm sm:text-base line-clamp-1 lg:text-2xl tracking-[-0.02em] text-transparent bg-linear-to-r from-30% from-foreground to-foreground/60 bg-clip-text">
              Your reliable ally in your organization or government.
            </span>
            <span className="text-sm sm:text-base line-clamp-1 lg:text-2xl shrink-0 tracking-[-0.02em] text-transparent bg-linear-to-r from-30% from-foreground to-foreground/60 bg-clip-text">
              Trusted since 1990
            </span>
          </div>
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-9 items-center">
            <span className="text-[clamp(1rem,17.2vw,17rem)] tracking-[-0.04em] text-transparent bg-linear-to-r from-30% from-foreground to-foreground/60 bg-clip-text align-middle">
              <span className="text-foreground">
                <LastDigitTicker value={TOTAL_TEXT} />
              </span>
            </span>
            <span className=" text-sm sm:text-base md:text-lg lg:text-2xl text-center tracking-[-0.02em] text-transparent bg-linear-to-r from-30% from-foreground to-foreground/60 bg-clip-text">
              Managed Assets (Billion IDR) monitored by our anti-leakage system.
            </span>
          </div>
        </div>
      </section>
    </Container>
  );
}
