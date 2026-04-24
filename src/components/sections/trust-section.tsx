import Image from "next/image";
import Container from "@/components/sections/container";

export default function TrustSection() {
  return (
    <Container parentClassName="bg-[url('/gradient-bottom.svg')] 2xl:bg-size-[auto_300px] bg-contain bg-no-repeat bg-bottom" className="flex flex-col gap-16 md:pt-30 md:pb-52.5">
      <div className="relative w-full flex flex-col gap-59">
        <span className="relative text-3xl md:text-[2.5rem] w-fit tracking-[-0.02em] text-transparent bg-linear-to-r from-30% from-foreground to-foreground/60 bg-clip-text">
          aman.ah
        </span>
        <div className="relative z-1 flex flex-col gap-6 md:gap-8">
          <div className="relative rounded-md md:rounded-xl overflow-hidden size-15 md:size-22.5">
            <Image src="icon.svg" alt="icon" width={90} height={90} />
            <div className="absolute w-full bottom-0 h-1/2 bg-background/16 border-t border-background backdrop-blur-xs z-1" />
          </div>
          <div className="relative max-h-61 max-w-225">
            <p className="text-3xl md:text-4xl lg:text-5xl leading-[1.2] tracking-[-0.02em] text-transparent bg-linear-to-r from-30% from-foreground to-foreground/60 bg-clip-text line-clamp-4">Financial leakage is a breach of trust and growth. aman.ah is a technological fortress ensuring Governance, Risk, and Compliance (GRC) are embedded into your financial operations. We bridge operational complexity with institutional transparency. Your visibility into every transaction, approval, and adjustment — in one unified system. Trusted across regulated environments.</p>
            <div className="absolute bottom-0 w-full h-1/2 backdrop-blur-xs bg-linear-to-b from-background-light to-background">
            </div>
          </div>
        </div>
        <Image className="absolute top-0 right-0 max-lg:mt-16 max-lg:left-0" src="/template.svg" alt="template" width={599} height={558} />
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
          <span className="text-[clamp(1rem,17.2vw,17rem)] tracking-[-0.04em] text-transparent bg-linear-to-r from-30% from-foreground to-foreground/60 bg-clip-text">
            2,873.929
          </span>
          <span className=" text-sm sm:text-base md:text-lg lg:text-2xl text-center tracking-[-0.02em] text-transparent bg-linear-to-r from-30% from-foreground to-foreground/60 bg-clip-text">
            Managed Assets (Billion IDR) monitored by our anti-leakage system.
          </span>
        </div>
      </div>
    </Container>
  );
}
