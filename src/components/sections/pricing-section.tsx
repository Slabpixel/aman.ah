import Container from "@/components/sections/container";
import Image from "next/image";

const features = [
  "Real-time Expense Tracking",
  "One-Click Audit Reports",
  "Standard Transparency",
  "User Seats",
  "Digital Receipt Vault",
  "OCR Receipt Vault",
];

const enterpriseFeatures = [
  "Public Transparency Portal",
  "API & Bank Integration",
  "Immutable Audit Logs",
  "Enterprise-Grade Security",
  "Approval Workflows",
  "Dedicated Priority Support",
];

export default function PricingSection() {
  return (
    <Container>
      <div className="space-y-18 max-w-250 mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex max-lg:flex-col gap-4 items-center justify-between">
            <h2 className=" text-[2.5rem] md:text-5xl xl:text-[3.5rem] text-center lg:text-left leading-none pb-2 grow tracking-[-0.04em] text-transparent bg-linear-to-r from-28% from-foreground to-foreground/60 bg-clip-text">
              Transparent Pricing
            </h2>

            <label className="inline-flex gap-6 items-center cursor-pointer">
              <span className="select-none text-xl tracking-[-0.02em] text-foreground/60">Monthly</span>
              <input type="checkbox" value="" className="sr-only peer" defaultChecked />
              <div className="relative w-6 h-3 bg-input peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[-4px] after:inset-s-[-8px] after:bg-primary after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              <span className="select-none text-xl tracking-[-0.02em] text-foreground">Anually</span>
            </label>

          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-muted p-3 pb-4 md:p-4 flex flex-col gap-4 md:gap-6">
              <div className="p-4 md:p-5 overflow-hidden flex flex-col justify-between items-start bg-white rounded gap-16 min-h-68">
                <div className="flex flex-col gap-2.5">
                  <p className="text-foreground/60 tracking-[-0.04em]">Essential Plan</p>
                  <p className="text-2xl xl:text-3xl tracking-[-0.03em]">
                    Establish basic financial trust.
                  </p>
                  <div className="flex gap-1.5 max-lg:mask-r-to-80% overflow-hidden text-nowrap flex-nowrap">
                    <span className="py-1.5 px-2 bg-foreground/10 rounded text-xs text-foreground/60 tracking-[-0.04em]">
                      Small NGOs
                    </span>
                    <span className="py-1.5 px-2 bg-foreground/10 rounded text-xs text-foreground/60 tracking-[-0.04em]">
                      Startups
                    </span>
                    <span className="py-1.5 px-2 bg-foreground/10 rounded text-xs text-foreground/60 tracking-[-0.04em]">
                      Individuals Projects
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-[2rem] tracking-[-0.04em] inline-flex items-baseline gap-1">$70<span className="text-foreground/60 text-base tracking-[-0.04em]">/ month</span></p>
                  <button className="flex gap-2.5 items-center rounded bg-foreground px-4 py-3 text-background">
                    Start Essential Plan
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="20" height="20" rx="10" fill="white" fillOpacity="0.1" />
                      <path d="M13.891 6.7719V11.3835C13.8766 11.7437 13.5884 12.032 13.2281 12.0464C12.8678 12.032 12.5796 11.7437 12.5652 11.3835L12.5796 8.34272L7.23304 13.6893C6.97364 13.9487 6.57013 13.9487 6.31073 13.6893C6.05133 13.4299 6.05133 13.0263 6.31073 12.7669L11.6573 7.4204L8.61651 7.43482C8.25623 7.4204 7.96801 7.13218 7.9536 6.7719C7.96801 6.41162 8.25623 6.1234 8.61651 6.10899H13.2281C13.5884 6.1234 13.8766 6.41162 13.891 6.7719Z" fill="white" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-y-2 gap-x-3 md:px-5 md:pb-6">
                {features.map((feature) => (
                  <span className="inline-flex items-center gap-3 text-foreground/60 text-sm tracking-[-0.03em] truncate text-nowrap leading-normal" key={feature}>
                    <svg className="shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="16" height="16" rx="8" fill="#D9D9D9" />
                      <path opacity="0.6" d="M11.4403 4.96733C11.6685 5.14667 11.7174 5.47276 11.5544 5.70102L7.38049 11.4402C7.28267 11.5543 7.15223 11.6358 7.00549 11.6521C6.84245 11.6684 6.69571 11.6032 6.58158 11.5054L4.49462 9.41841C4.29897 9.20646 4.29897 8.88037 4.49462 8.66841C4.70658 8.47276 5.03267 8.47276 5.24462 8.66841L6.89136 10.3315L10.7066 5.08146C10.8859 4.8532 11.212 4.80428 11.4403 4.96733Z" fill="#101010" />
                    </svg>

                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl bg-muted p-3 pb-4 md:p-4 flex flex-col gap-4 md:gap-6">
              <Image src="/card-bg.svg" fill alt="Governance Plan" className="object-cover" />
              <div className="relative overflow-hidden bg-background/50 backdrop-blur-xs border border-background/20 p-4 md:p-5 flex flex-col justify-between items-start rounded gap-16 min-h-68">
                <div className="flex flex-col gap-2.5">
                  <p className="text-foreground/60 tracking-[-0.04em]">Governance Plan</p>
                  <p className="text-2xl xl:text-3xl tracking-[-0.03em]">
                    Benchmark for accountability.
                  </p>
                  <div className="relative flex flex-nowrap max-lg:mask-r-to-80% overflow-hidden text-nowrap gap-1.5">
                    <span className="py-1.5 px-2 bg-foreground/10 rounded text-xs text-foreground/60 tracking-[-0.04em]">
                      Large Organizations
                    </span>
                    <span className="py-1.5 px-2 bg-foreground/10 rounded text-xs text-foreground/60 tracking-[-0.04em]">
                      International NGOs
                    </span>
                    <span className="py-1.5 px-2 bg-foreground/10 rounded text-xs text-foreground/60 tracking-[-0.04em]">
                      Governments
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-[2rem] tracking-[-0.04em] inline-flex items-baseline gap-1">$70<span className="text-foreground/60 text-base tracking-[-0.04em]">/ month</span></p>
                  <button className="flex gap-2.5 items-center rounded bg-foreground px-4 py-3 text-background">
                    Get Custom Quote
                    <svg className="shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="20" height="20" rx="10" fill="white" fillOpacity="0.1" />
                      <path d="M13.891 6.7719V11.3835C13.8766 11.7437 13.5884 12.032 13.2281 12.0464C12.8678 12.032 12.5796 11.7437 12.5652 11.3835L12.5796 8.34272L7.23304 13.6893C6.97364 13.9487 6.57013 13.9487 6.31073 13.6893C6.05133 13.4299 6.05133 13.0263 6.31073 12.7669L11.6573 7.4204L8.61651 7.43482C8.25623 7.4204 7.96801 7.13218 7.9536 6.7719C7.96801 6.41162 8.25623 6.1234 8.61651 6.10899H13.2281C13.5884 6.1234 13.8766 6.41162 13.891 6.7719Z" fill="white" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="relative grid grid-cols-2 gap-y-2 gap-x-3 md:px-5 md:pb-6">
                {enterpriseFeatures.map((enterpriseFeature) => (
                  <span className="inline-flex items-center gap-3 text-background text-sm tracking-[-0.03em] truncate text-nowrap leading-normal" key={enterpriseFeature}>
                    <svg className="shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="16" height="16" rx="8" fill="white" fillOpacity="0.4" />
                      <path d="M11.4403 4.96733C11.6685 5.14667 11.7174 5.47276 11.5544 5.70102L7.38049 11.4402C7.28267 11.5543 7.15223 11.6358 7.00549 11.6521C6.84245 11.6684 6.69571 11.6032 6.58158 11.5054L4.49462 9.41841C4.29897 9.20646 4.29897 8.88037 4.49462 8.66841C4.70658 8.47276 5.03267 8.47276 5.24462 8.66841L6.89136 10.3315L10.7066 5.08146C10.8859 4.8532 11.212 4.80428 11.4403 4.96733Z" fill="white" />
                    </svg>


                    {enterpriseFeature}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-xl md:text-2xl tracking-[-0.02em]">Plans feature military encryption and secure storage.</p>
        </div>
        <svg className="w-full" width="1000" height="1" viewBox="0 0 1000 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" d="M0 0.5H1000" stroke="#033F36" />
        </svg>

        <div className="flex max-md:flex-col justify-between gap-8">
          <div className="flex gap-1.5">
            <button className="aspect-square rounded-full size-4 bg-input cursor-pointer"></button>
            <button className="aspect-square rounded-full size-4 bg-input cursor-pointer"></button>
            <button className="rounded-full w-9 h-4 bg-primary cursor-pointer"></button>
            <button className="aspect-square rounded-full size-4 bg-input cursor-pointer"></button>
          </div>
          <div className="flex flex-col max-w-180">
            <div className="relative max-h-61">
              <p className="text-5xl leading-[1.2] tracking-[-0.02em] text-transparent bg-linear-to-r from-30% from-foreground to-foreground/60 bg-clip-text line-clamp-4">Since implementing Aman.ah, our internal audit process—which used to take weeks—is now completed in hours. Transparency is no longer a burden; it is our greatest competitive advantage.</p>
              <div className="absolute bottom-0 w-full h-1/2 backdrop-blur-xs bg-linear-to-b from-background-light to-background">
              </div>
              <Image src="/woman.png" alt="woman" width={200} height={200} className="absolute -bottom-32 right-0" />
            </div>
            <p className="mt-8 text-3xl tracking-[-0.02em]">Ayu Awaad</p>
            <p className="text-foreground/70 mt-2 text-xl">
              Chief Financial Officer, CV. Abang Branang
            </p></div>
        </div>
      </div>
    </Container>
  );
}
