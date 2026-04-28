 'use client'

import Container from "@/components/sections/container";
import StaggerText from "@/components/stagger-text";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const templates = [
  {
    title: "Gain financial clarity.",
    body: "Track transactions precisely and keep stakeholders aligned with live reporting.",
  },
  {
    title: "Keep your budget on track.",
    body: "Prevent overspending with proactive controls and structured approvals.",
  },
  {
    title: "Build trust accountability.",
    body: "Automate financial reporting to ensure every cent is visible.",
  },
  {
    title: "Gain financial clarity.",
    body: "Detect irregular flows quickly with standardized governance checks.",
  },
  {
    title: "Build trust accountability.",
    body: "Enable transparent disbursements with policy-backed workflows.",
  },
  {
    title: "Keep your budget on track.",
    body: "Prevent overspending with proactive controls and structured approvals.",
  },
];

export default function TemplatesSection() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!gridRef.current) return;

      const columnOffsets = [-40, -128, -320];
      const columnTravel = [-120, 100, -180];
      const cards = gsap.utils.toArray<HTMLElement>("[data-template-card]");

      cards.forEach((card, index) => {
        const column = index % 3;
        const startY = columnOffsets[column];
        const endY = startY + columnTravel[column];

        gsap.set(card, { y: startY });
        gsap.to(card, {
          y: endY,
          ease: "none",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: gridRef, revertOnUpdate: true },
  );

  return (
    <Container className="md:py-23 flex flex-col items-center">
      <div className="relative z-2 flex flex-col items-center gap-4 md:gap-6 max-w-200">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-[3.5rem] tracking-[-0.04em]">
          100+ Financial Management Templates
        </h2>
        <p className="opacity-80 text-base md:text-lg tracking-[-0.02em] leading-normal">Model-Based & Fully Customizable</p>
      </div>
      <div
        ref={gridRef}
        className="relative left-1/2 -translate-x-1/2 mx-auto grid items-center justify-center gap-6 max-h-150 w-max min-w-250 grid-cols-3 justify-items-center [&>article]:w-[337px]"
      >
        {templates.map((card, idx) => (
          <article
            key={`${card.title}-${idx}`}
            data-template-card
            className="rounded-lg bg-muted transition-transform"
          >
            <Image src="/card-g.svg" alt="template" width={337} height={300} />
            <div className="flex flex-col gap-4 px-5">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="26" height="26" rx="8.66675" fill="white" />
                <path d="M6.49937 7.22229H7.2216H18.7773H19.4995V7.94452V12.8421C19.1158 12.5036 18.5967 12.2779 18.055 12.2779V8.66675H7.94383V12.2779C7.37959 12.2779 6.88305 12.5036 6.49937 12.8421V7.94452V7.22229ZM6.49937 14.4446C6.49937 13.948 6.7702 13.4741 7.2216 13.2032C7.65042 12.955 8.21466 12.955 8.66606 13.2032C9.09488 13.4741 9.38828 13.948 9.38828 14.4446C9.38828 14.9637 9.09488 15.4376 8.66606 15.7085C8.21466 15.9567 7.65042 15.9567 7.2216 15.7085C6.7702 15.4376 6.49937 14.9637 6.49937 14.4446ZM11.555 14.4446C11.555 13.948 11.8258 13.4741 12.2772 13.2032C12.706 12.955 13.2703 12.955 13.7217 13.2032C14.1505 13.4741 14.4439 13.948 14.4439 14.4446C14.4439 14.9637 14.1505 15.4376 13.7217 15.7085C13.2703 15.9567 12.706 15.9567 12.2772 15.7085C11.8258 15.4376 11.555 14.9637 11.555 14.4446ZM18.055 13.0001C18.5516 13.0001 19.0255 13.2935 19.2964 13.7224C19.5446 14.1737 19.5446 14.738 19.2964 15.1668C19.0255 15.6182 18.5516 15.889 18.055 15.889C17.5359 15.889 17.062 15.6182 16.7911 15.1668C16.5429 14.738 16.5429 14.1737 16.7911 13.7224C17.062 13.2935 17.5359 13.0001 18.055 13.0001ZM15.1661 18.778H10.8327L11.555 16.6113H14.4439L15.1661 18.778ZM6.49937 16.6113H9.38828L10.1105 18.778H5.77714L6.49937 16.6113ZM20.2217 18.778H15.8883L16.6106 16.6113H19.4995L20.2217 18.778Z" fill="#101010" />
              </svg>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl leading-[1.1] line-clamp-1 tracking-[-0.02em]">
                  {card.title}
                </h3>
                <p className="text-foreground/80 tracking-[-0.01em] leading-[1.4]">
                  {card.body}
                </p>
              </div>
            </div>
            <div className="mt-6 flex gap-2 px-5 pb-5">
              <Link href="#" className="group rounded-[3px] bg-foreground py-1.5 px-2 text-[0.8125rem] text-background flex gap-2 items-center">
                <StaggerText text="Use template" />
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="14" height="14" rx="7" fill="white" fillOpacity="0.1" />
                  <path d="M7.45653 4.26075V6.54336H9.73914C9.99593 6.54336 10.1957 6.74309 10.1957 6.99988C10.1957 7.25668 9.99593 7.4564 9.73914 7.4564H7.45653V9.73901C7.45653 9.99581 7.2568 10.1955 7 10.1955C6.74321 10.1955 6.54348 9.99581 6.54348 9.73901V7.4564H4.26087C4.00408 7.4564 3.80435 7.25668 3.80435 6.99988C3.80435 6.74309 4.00408 6.54336 4.26087 6.54336H6.54348V4.26075C6.54348 4.00396 6.74321 3.80423 7 3.80423C7.2568 3.80423 7.45653 4.00396 7.45653 4.26075Z" fill="white" />
                </svg>
              </Link >
              <Link href="#" className="group rounded-[3px] bg-background py-1.5 px-2 flex gap-2 items-center text-[0.8125rem]">
                <StaggerText text="See Example" />
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="14" height="14" rx="7" fill="#101010" fillOpacity="0.1" />
                  <path d="M9.15422 6.67176C9.33968 6.85722 9.33968 7.14255 9.15422 7.32801L6.41509 10.0671C6.24389 10.2383 5.9443 10.2383 5.7731 10.0671C5.58764 9.88168 5.58764 9.59635 5.7731 9.41089L8.18411 6.99988L5.7731 4.58888C5.58764 4.40342 5.58764 4.11809 5.7731 3.93263C5.9443 3.76143 6.24389 3.76143 6.41509 3.93263L9.15422 6.67176Z" fill="#101010" />
                </svg>
              </Link >
            </div>
          </article>
        ))}
      </div>
      <div className="absolute top-0 mx-auto w-full left-1/2 max-w-324 -translate-x-1/2 h-135 bg-linear-to-b from-53% from-background to-background/0 to-89%" />
      <div className="absolute bottom-0 mx-auto w-full left-1/2 max-w-324 -translate-x-1/2 h-58.5 bg-linear-to-t from-45% from-background to-background/0" />
      <div className="absolute h-12 px-4 inset-x-0 z-5 bottom-22 flex justify-center gap-2">
        <div className="p-2 rounded-md h-full max-md:w-full max-md:overflow-x-scroll items-center text-nowrap bg-foreground flex gap-2">
          <Link className="group py-2 px-4 rounded-xs text-background bg-background/20" href="#"><StaggerText text="All" /></Link>
          <Link className="group py-2 px-2 rounded-xs text-background/60 hover:text-background hover:bg-background/20" href="#"><StaggerText text="Cash Flow" /></Link>
          <Link className="group py-2 px-2 rounded-xs text-background/60 hover:text-background hover:bg-background/20" href="#"><StaggerText text="Audit-Ready" /></Link>
          <Link className="group py-2 px-2 rounded-xs text-background/60 hover:text-background hover:bg-background/20" href="#"><StaggerText text="Budgeting" /></Link>
          <Link className="group py-2 px-2 rounded-xs text-background/60 hover:text-background hover:bg-background/20" href="#"><StaggerText text="Forecasting" /></Link>
          <Link className="group py-2 px-2 rounded-xs text-background/60 hover:text-background hover:bg-background/20" href="#"><StaggerText text="Small Business" /></Link>
        </div>
        <button className="p-2 shrink-0 flex items-center justify-center aspect-square rounded-md bg-foreground cursor-pointer">
          <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.09379 0L15.0938 0C15.5 0 15.875 0.25 16.0313 0.625C16.1875 1 16.0938 1.4375 15.8125 1.71875L10.0938 7.40625V13C10.0938 13.4062 9.84379 13.7812 9.46879 13.9375C9.09379 14.0938 8.68754 14 8.37504 13.7188L6.37504 11.7188C6.18754 11.5312 6.09379 11.2812 6.09379 11L6.09379 7.40625L0.375042 1.71875C0.093792 1.4375 4.19617e-05 1 0.156292 0.625C0.312542 0.25 0.687542 0 1.09379 0Z" fill="white" />
          </svg>
        </button>
      </div>

    </Container>
  );
}
