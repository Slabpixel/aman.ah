import Image from "next/image";
import Container from "@/components/sections/container";
import StaggerText from "@/components/stagger-text";
import Line from "../../../public/line.svg";

export default function OversightSection() {
  return (
    <Container className="relative lg:px-12 xl:px-12.5">
      <div className="rounded-2xl bg-muted p-6 md:p-10 lg:p-15 xl:p-25 flex flex-col gap-25">
        <div className="flex flex-col-reverse md:flex-row justify-between gap-8">
          <div className="max-w-140 flex flex-col items-start justify-between gap-4">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] tracking-[-0.04em]">
                <span className="text-transparent bg-linear-to-r from-10% from-foreground to-foreground/60 to-45% bg-clip-text">The Gold Standard for</span><br />
                Financial Oversight.
              </h2>
              <p className="text-foreground/70 tracking-[-0.01em] leading-[1.6]">
                Embed financial control in design. aman.ah integrates governance for
                traceable, regulator-ready transactions.
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="rounded-md bg-foreground/5 flex items-center gap-2 pl-2.5 pr-3 py-2 tracking-[-0.02em] leading-[1.4]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="18" height="18" rx="6" fill="white" />
                    <path d="M4.5 5H5H13H13.5V5.5V8.89062C13.2344 8.65625 12.875 8.5 12.5 8.5V6H5.5V8.5C5.10938 8.5 4.76562 8.65625 4.5 8.89062V5.5V5ZM4.5 10C4.5 9.65625 4.6875 9.32812 5 9.14062C5.29688 8.96875 5.6875 8.96875 6 9.14062C6.29688 9.32812 6.5 9.65625 6.5 10C6.5 10.3594 6.29688 10.6875 6 10.875C5.6875 11.0469 5.29688 11.0469 5 10.875C4.6875 10.6875 4.5 10.3594 4.5 10ZM8 10C8 9.65625 8.1875 9.32812 8.5 9.14062C8.79688 8.96875 9.1875 8.96875 9.5 9.14062C9.79688 9.32812 10 9.65625 10 10C10 10.3594 9.79688 10.6875 9.5 10.875C9.1875 11.0469 8.79688 11.0469 8.5 10.875C8.1875 10.6875 8 10.3594 8 10ZM12.5 9C12.8438 9 13.1719 9.20312 13.3594 9.5C13.5312 9.8125 13.5312 10.2031 13.3594 10.5C13.1719 10.8125 12.8438 11 12.5 11C12.1406 11 11.8125 10.8125 11.625 10.5C11.4531 10.2031 11.4531 9.8125 11.625 9.5C11.8125 9.20312 12.1406 9 12.5 9ZM10.5 13H7.5L8 11.5H10L10.5 13ZM4.5 11.5H6.5L7 13H4L4.5 11.5ZM14 13H11L11.5 11.5H13.5L14 13Z" fill="#101010" />
                  </svg>

                  Immutable Finance Architecture
                </span>
                <span className="rounded-md bg-foreground/5 flex items-center gap-2 pl-2.5 pr-3 py-2 tracking-[-0.02em] leading-[1.4]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="18" height="18" rx="6" fill="white" />
                    <path d="M4.5 5H5H13H13.5V5.5V8.89062C13.2344 8.65625 12.875 8.5 12.5 8.5V6H5.5V8.5C5.10938 8.5 4.76562 8.65625 4.5 8.89062V5.5V5ZM4.5 10C4.5 9.65625 4.6875 9.32812 5 9.14062C5.29688 8.96875 5.6875 8.96875 6 9.14062C6.29688 9.32812 6.5 9.65625 6.5 10C6.5 10.3594 6.29688 10.6875 6 10.875C5.6875 11.0469 5.29688 11.0469 5 10.875C4.6875 10.6875 4.5 10.3594 4.5 10ZM8 10C8 9.65625 8.1875 9.32812 8.5 9.14062C8.79688 8.96875 9.1875 8.96875 9.5 9.14062C9.79688 9.32812 10 9.65625 10 10C10 10.3594 9.79688 10.6875 9.5 10.875C9.1875 11.0469 8.79688 11.0469 8.5 10.875C8.1875 10.6875 8 10.3594 8 10ZM12.5 9C12.8438 9 13.1719 9.20312 13.3594 9.5C13.5312 9.8125 13.5312 10.2031 13.3594 10.5C13.1719 10.8125 12.8438 11 12.5 11C12.1406 11 11.8125 10.8125 11.625 10.5C11.4531 10.2031 11.4531 9.8125 11.625 9.5C11.8125 9.20312 12.1406 9 12.5 9ZM10.5 13H7.5L8 11.5H10L10.5 13ZM4.5 11.5H6.5L7 13H4L4.5 11.5ZM14 13H11L11.5 11.5H13.5L14 13Z" fill="#101010" />
                  </svg>
                  Regulatory Frameworks
                </span>
              </div>
            </div>
            <button className="group cursor-pointer flex gap-2.5 items-center rounded bg-foreground px-4 py-3 text-background">
              <StaggerText text="Get Started" />
              <svg className="transition-transform duration-300 group-hover:rotate-45" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" rx="10" fill="white" fillOpacity="0.1" />
                <path d="M13.891 6.7719V11.3835C13.8766 11.7437 13.5884 12.032 13.2281 12.0464C12.8678 12.032 12.5796 11.7437 12.5652 11.3835L12.5796 8.34272L7.23304 13.6893C6.97364 13.9487 6.57013 13.9487 6.31073 13.6893C6.05133 13.4299 6.05133 13.0263 6.31073 12.7669L11.6573 7.4204L8.61651 7.43482C8.25623 7.4204 7.96801 7.13218 7.9536 6.7719C7.96801 6.41162 8.25623 6.1234 8.61651 6.10899H13.2281C13.5884 6.1234 13.8766 6.41162 13.891 6.7719Z" fill="white" />
              </svg>
            </button>
          </div>
          <div className="relative overflow-hidden aspect-square w-full max-w-87.5 rounded-lg bg-background p-6">
            <Image
              src="/docs.svg"
              alt="Docs"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 max-lg:gap-4 items-center">
          <div className="flex max-lg:flex-col gap-4 items-center lg:items-stretch">
            <div className="flex lg:flex-col gap-10 justify-between">
              <div className="flex flex-col gap-0.5">
                <svg className="mb-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="18" height="18" rx="6" fill="white" />
                  <path d="M4.5 5H5H13H13.5V5.5V8.89062C13.2344 8.65625 12.875 8.5 12.5 8.5V6H5.5V8.5C5.10938 8.5 4.76562 8.65625 4.5 8.89062V5.5V5ZM4.5 10C4.5 9.65625 4.6875 9.32812 5 9.14062C5.29688 8.96875 5.6875 8.96875 6 9.14062C6.29688 9.32812 6.5 9.65625 6.5 10C6.5 10.3594 6.29688 10.6875 6 10.875C5.6875 11.0469 5.29688 11.0469 5 10.875C4.6875 10.6875 4.5 10.3594 4.5 10ZM8 10C8 9.65625 8.1875 9.32812 8.5 9.14062C8.79688 8.96875 9.1875 8.96875 9.5 9.14062C9.79688 9.32812 10 9.65625 10 10C10 10.3594 9.79688 10.6875 9.5 10.875C9.1875 11.0469 8.79688 11.0469 8.5 10.875C8.1875 10.6875 8 10.3594 8 10ZM12.5 9C12.8438 9 13.1719 9.20312 13.3594 9.5C13.5312 9.8125 13.5312 10.2031 13.3594 10.5C13.1719 10.8125 12.8438 11 12.5 11C12.1406 11 11.8125 10.8125 11.625 10.5C11.4531 10.2031 11.4531 9.8125 11.625 9.5C11.8125 9.20312 12.1406 9 12.5 9ZM10.5 13H7.5L8 11.5H10L10.5 13ZM4.5 11.5H6.5L7 13H4L4.5 11.5ZM14 13H11L11.5 11.5H13.5L14 13Z" fill="#101010" />
                </svg>
                <h3 className="text-lg leading-[1.6] tracking-[-0.03em] max-lg:line-clamp-1">Audit-Grade Ledger</h3>
                <p className="text-foreground/80 text-sm tracking-[-0.02em] line-clamp-2 leading-normal">
                  Transactions logged, every rupiah timestamped.
                </p>
              </div>
              <div className="flex flex-col gap-0.5">
                <svg className="mb-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="18" height="18" rx="6" fill="white" />
                  <path d="M4.5 5H5H13H13.5V5.5V8.89062C13.2344 8.65625 12.875 8.5 12.5 8.5V6H5.5V8.5C5.10938 8.5 4.76562 8.65625 4.5 8.89062V5.5V5ZM4.5 10C4.5 9.65625 4.6875 9.32812 5 9.14062C5.29688 8.96875 5.6875 8.96875 6 9.14062C6.29688 9.32812 6.5 9.65625 6.5 10C6.5 10.3594 6.29688 10.6875 6 10.875C5.6875 11.0469 5.29688 11.0469 5 10.875C4.6875 10.6875 4.5 10.3594 4.5 10ZM8 10C8 9.65625 8.1875 9.32812 8.5 9.14062C8.79688 8.96875 9.1875 8.96875 9.5 9.14062C9.79688 9.32812 10 9.65625 10 10C10 10.3594 9.79688 10.6875 9.5 10.875C9.1875 11.0469 8.79688 11.0469 8.5 10.875C8.1875 10.6875 8 10.3594 8 10ZM12.5 9C12.8438 9 13.1719 9.20312 13.3594 9.5C13.5312 9.8125 13.5312 10.2031 13.3594 10.5C13.1719 10.8125 12.8438 11 12.5 11C12.1406 11 11.8125 10.8125 11.625 10.5C11.4531 10.2031 11.4531 9.8125 11.625 9.5C11.8125 9.20312 12.1406 9 12.5 9ZM10.5 13H7.5L8 11.5H10L10.5 13ZM4.5 11.5H6.5L7 13H4L4.5 11.5ZM14 13H11L11.5 11.5H13.5L14 13Z" fill="#101010" />
                </svg>
                <h3 className="text-lg leading-[1.6] tracking-[-0.03em] max-lg:line-clamp-1">AI Fraud Monitoring</h3>
                <p className="text-foreground/80 text-sm tracking-[-0.02em] line-clamp-2 leading-normal">
                  Our system scans for anomalies and stops leaks.
                </p>
              </div>
            </div>
            <div className="py-16 max-lg:hidden">
              <Line />
            </div>
            <div className="lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="160" height="80" viewBox="0 0 160 80" fill="none">
                <path opacity="0.2" d="M0.500006 0L0.500005 40L159.5 40L159.5 6.95011e-06" stroke="#033F36" />
                <path opacity="0.2" d="M99.5 40L99.5 80" stroke="#033F36" />
                <path opacity="0.2" d="M59.5 40L59.5 80" stroke="#033F36" />
              </svg>
            </div>
          </div>
          <Image src="/phone-0.png" alt="Phone mockup" width={1000} height={800} className="object-contain object-center" />
          <div className="flex max-lg:flex-col gap-4 items-center lg:items-stretch">
            <div className="py-16 max-lg:hidden">
              <Line className="rotate-180" />
            </div>
            <div className="lg:hidden">
              <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" width="160" height="80" viewBox="0 0 160 80" fill="none">
                <path opacity="0.2" d="M0.500006 0L0.500005 40L159.5 40L159.5 6.95011e-06" stroke="#033F36" />
                <path opacity="0.2" d="M99.5 40L99.5 80" stroke="#033F36" />
                <path opacity="0.2" d="M59.5 40L59.5 80" stroke="#033F36" />
              </svg>
            </div>
            <div className="flex lg:flex-col gap-10 justify-between">
              <div className="flex flex-col gap-0.5">
                <svg className="mb-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="18" height="18" rx="6" fill="white" />
                  <path d="M4.5 5H5H13H13.5V5.5V8.89062C13.2344 8.65625 12.875 8.5 12.5 8.5V6H5.5V8.5C5.10938 8.5 4.76562 8.65625 4.5 8.89062V5.5V5ZM4.5 10C4.5 9.65625 4.6875 9.32812 5 9.14062C5.29688 8.96875 5.6875 8.96875 6 9.14062C6.29688 9.32812 6.5 9.65625 6.5 10C6.5 10.3594 6.29688 10.6875 6 10.875C5.6875 11.0469 5.29688 11.0469 5 10.875C4.6875 10.6875 4.5 10.3594 4.5 10ZM8 10C8 9.65625 8.1875 9.32812 8.5 9.14062C8.79688 8.96875 9.1875 8.96875 9.5 9.14062C9.79688 9.32812 10 9.65625 10 10C10 10.3594 9.79688 10.6875 9.5 10.875C9.1875 11.0469 8.79688 11.0469 8.5 10.875C8.1875 10.6875 8 10.3594 8 10ZM12.5 9C12.8438 9 13.1719 9.20312 13.3594 9.5C13.5312 9.8125 13.5312 10.2031 13.3594 10.5C13.1719 10.8125 12.8438 11 12.5 11C12.1406 11 11.8125 10.8125 11.625 10.5C11.4531 10.2031 11.4531 9.8125 11.625 9.5C11.8125 9.20312 12.1406 9 12.5 9ZM10.5 13H7.5L8 11.5H10L10.5 13ZM4.5 11.5H6.5L7 13H4L4.5 11.5ZM14 13H11L11.5 11.5H13.5L14 13Z" fill="#101010" />
                </svg>
                <h3 className="text-lg leading-[1.6] tracking-[-0.03em] max-lg:line-clamp-1">Compliance Sync</h3>
                <p className="text-foreground/80 text-sm tracking-[-0.02em] line-clamp-2 leading-normal">
                  Frameworks align with KPK, OJK, and BPK.
                </p>
              </div>
              <div className="flex flex-col gap-0.5">
                <svg className="mb-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="18" height="18" rx="6" fill="white" />
                  <path d="M4.5 5H5H13H13.5V5.5V8.89062C13.2344 8.65625 12.875 8.5 12.5 8.5V6H5.5V8.5C5.10938 8.5 4.76562 8.65625 4.5 8.89062V5.5V5ZM4.5 10C4.5 9.65625 4.6875 9.32812 5 9.14062C5.29688 8.96875 5.6875 8.96875 6 9.14062C6.29688 9.32812 6.5 9.65625 6.5 10C6.5 10.3594 6.29688 10.6875 6 10.875C5.6875 11.0469 5.29688 11.0469 5 10.875C4.6875 10.6875 4.5 10.3594 4.5 10ZM8 10C8 9.65625 8.1875 9.32812 8.5 9.14062C8.79688 8.96875 9.1875 8.96875 9.5 9.14062C9.79688 9.32812 10 9.65625 10 10C10 10.3594 9.79688 10.6875 9.5 10.875C9.1875 11.0469 8.79688 11.0469 8.5 10.875C8.1875 10.6875 8 10.3594 8 10ZM12.5 9C12.8438 9 13.1719 9.20312 13.3594 9.5C13.5312 9.8125 13.5312 10.2031 13.3594 10.5C13.1719 10.8125 12.8438 11 12.5 11C12.1406 11 11.8125 10.8125 11.625 10.5C11.4531 10.2031 11.4531 9.8125 11.625 9.5C11.8125 9.20312 12.1406 9 12.5 9ZM10.5 13H7.5L8 11.5H10L10.5 13ZM4.5 11.5H6.5L7 13H4L4.5 11.5ZM14 13H11L11.5 11.5H13.5L14 13Z" fill="#101010" />
                </svg>
                <h3 className="text-lg leading-[1.6] tracking-[-0.03em] max-lg:line-clamp-1">Multi-Level Auth</h3>
                <p className="text-foreground/80 text-sm tracking-[-0.02em] line-clamp-2 leading-normal">
                  Secure funds with a tamper-proof chain.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row-reverse justify-between gap-8">
          <div className="max-w-140 flex flex-col items-start justify-between gap-4">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] tracking-[-0.04em]">
                <span className="text-transparent bg-linear-to-r from-10% from-foreground to-foreground/60 to-45% bg-clip-text">Radical Transparency.</span><br />
                Total Control
              </h2>
              <p className="text-foreground/70 tracking-[-0.01em] leading-[1.6]">
                Embed financial control in design. aman.ah integrates governance for
                traceable, regulator-ready transactions.
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="rounded-md bg-foreground/5 flex items-center gap-2 pl-2.5 pr-3 py-2 tracking-[-0.02em] leading-[1.4]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="18" height="18" rx="6" fill="white" />
                    <path d="M4.5 5H5H13H13.5V5.5V8.89062C13.2344 8.65625 12.875 8.5 12.5 8.5V6H5.5V8.5C5.10938 8.5 4.76562 8.65625 4.5 8.89062V5.5V5ZM4.5 10C4.5 9.65625 4.6875 9.32812 5 9.14062C5.29688 8.96875 5.6875 8.96875 6 9.14062C6.29688 9.32812 6.5 9.65625 6.5 10C6.5 10.3594 6.29688 10.6875 6 10.875C5.6875 11.0469 5.29688 11.0469 5 10.875C4.6875 10.6875 4.5 10.3594 4.5 10ZM8 10C8 9.65625 8.1875 9.32812 8.5 9.14062C8.79688 8.96875 9.1875 8.96875 9.5 9.14062C9.79688 9.32812 10 9.65625 10 10C10 10.3594 9.79688 10.6875 9.5 10.875C9.1875 11.0469 8.79688 11.0469 8.5 10.875C8.1875 10.6875 8 10.3594 8 10ZM12.5 9C12.8438 9 13.1719 9.20312 13.3594 9.5C13.5312 9.8125 13.5312 10.2031 13.3594 10.5C13.1719 10.8125 12.8438 11 12.5 11C12.1406 11 11.8125 10.8125 11.625 10.5C11.4531 10.2031 11.4531 9.8125 11.625 9.5C11.8125 9.20312 12.1406 9 12.5 9ZM10.5 13H7.5L8 11.5H10L10.5 13ZM4.5 11.5H6.5L7 13H4L4.5 11.5ZM14 13H11L11.5 11.5H13.5L14 13Z" fill="#101010" />
                  </svg>

                  Immutable Finance Architecture
                </span>
                <span className="rounded-md bg-foreground/5 flex items-center gap-2 pl-2.5 pr-3 py-2 tracking-[-0.02em] leading-[1.4]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="18" height="18" rx="6" fill="white" />
                    <path d="M4.5 5H5H13H13.5V5.5V8.89062C13.2344 8.65625 12.875 8.5 12.5 8.5V6H5.5V8.5C5.10938 8.5 4.76562 8.65625 4.5 8.89062V5.5V5ZM4.5 10C4.5 9.65625 4.6875 9.32812 5 9.14062C5.29688 8.96875 5.6875 8.96875 6 9.14062C6.29688 9.32812 6.5 9.65625 6.5 10C6.5 10.3594 6.29688 10.6875 6 10.875C5.6875 11.0469 5.29688 11.0469 5 10.875C4.6875 10.6875 4.5 10.3594 4.5 10ZM8 10C8 9.65625 8.1875 9.32812 8.5 9.14062C8.79688 8.96875 9.1875 8.96875 9.5 9.14062C9.79688 9.32812 10 9.65625 10 10C10 10.3594 9.79688 10.6875 9.5 10.875C9.1875 11.0469 8.79688 11.0469 8.5 10.875C8.1875 10.6875 8 10.3594 8 10ZM12.5 9C12.8438 9 13.1719 9.20312 13.3594 9.5C13.5312 9.8125 13.5312 10.2031 13.3594 10.5C13.1719 10.8125 12.8438 11 12.5 11C12.1406 11 11.8125 10.8125 11.625 10.5C11.4531 10.2031 11.4531 9.8125 11.625 9.5C11.8125 9.20312 12.1406 9 12.5 9ZM10.5 13H7.5L8 11.5H10L10.5 13ZM4.5 11.5H6.5L7 13H4L4.5 11.5ZM14 13H11L11.5 11.5H13.5L14 13Z" fill="#101010" />
                  </svg>
                  Regulatory Frameworks
                </span>
              </div>
            </div>
            <button className="group cursor-pointer active:scale-95 transition-transform flex gap-2.5 items-center rounded bg-foreground px-4 py-3 text-background">
              <StaggerText text="Get Started" />
              <svg className="group-hover:rotate-45 transition-transform duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" rx="10" fill="white" fillOpacity="0.1" />
                <path d="M13.891 6.7719V11.3835C13.8766 11.7437 13.5884 12.032 13.2281 12.0464C12.8678 12.032 12.5796 11.7437 12.5652 11.3835L12.5796 8.34272L7.23304 13.6893C6.97364 13.9487 6.57013 13.9487 6.31073 13.6893C6.05133 13.4299 6.05133 13.0263 6.31073 12.7669L11.6573 7.4204L8.61651 7.43482C8.25623 7.4204 7.96801 7.13218 7.9536 6.7719C7.96801 6.41162 8.25623 6.1234 8.61651 6.10899H13.2281C13.5884 6.1234 13.8766 6.41162 13.891 6.7719Z" fill="white" />
              </svg>
            </button>
          </div>
          <div className="relative aspect-square w-full max-w-87.5 rounded-lg bg-background p-6">
            <Image
              src="/cursor.svg"
              alt="Cursor"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
