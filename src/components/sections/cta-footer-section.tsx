import Link from "next/link";
import Image from "next/image";
import Container from "@/components/sections/container";

export default function CtaFooterSection() {
  return (
    <Container>
      <div className="relative space-y-8 overflow-hidden">
        <div className="pointer-events-none absolute -bottom-20 left-1/2 h-64 w-[95%] -translate-x-1/2 rounded-[999px] bg-linear-to-r from-[#C3FC29]/55 via-[#cde6ff]/35 to-[#005FFB]/60 blur-3xl" />
        <div className="text-center">
          <h2 className="text-[clamp(3rem,8vw,5rem)] tracking-[-0.03em]">
            Stop Hiding
            <br />
            Start Winning.
          </h2>
        </div>
        <div className="relative rounded-xl border border-border bg-background/90 p-6">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-6">
            <Image src="/icon.svg" alt="aman.ah" width={280} height={80} />
            <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm md:text-base">
              <span>Product</span>
              <span>Governance</span>
              <span>Resources</span>
              <span>Company</span>
            </div>
          </div>
          <div className="text-foreground/60 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5 text-sm">
            <p>© 2025 aman.ah Technologies.</p>
            <div className="flex gap-4">
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
