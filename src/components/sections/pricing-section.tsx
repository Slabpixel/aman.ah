import Container from "@/components/sections/container";

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
      <div className="space-y-12">
        <div className="flex items-center justify-between">
          <h2 className="text-[clamp(2.2rem,5vw,3.5rem)] tracking-[-0.03em]">
            Transparent Pricing
          </h2>
          <span className="text-foreground/70">Monthly / Annualy</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-muted p-5">
            <p className="text-foreground/60">Essential Plan</p>
            <p className="mt-2 text-5xl leading-[1.05] tracking-[-0.02em]">
              Establish basic financial trust.
            </p>
            <p className="mt-8 text-4xl">$70 / month</p>
            <div className="text-foreground/70 mt-6 grid grid-cols-2 gap-2 text-sm">
              {features.map((feature) => (
                <p key={feature}>+ {feature}</p>
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-linear-to-br from-[#C3FC29] to-[#005FFB] p-5 text-background">
            <p className="text-background/80">Governance Plan</p>
            <p className="mt-2 text-5xl leading-[1.05] tracking-[-0.02em]">
              Benchmark for accountability.
            </p>
            <p className="mt-8 text-4xl">Start from $500</p>
            <div className="mt-6 grid grid-cols-2 gap-2 text-sm text-background/90">
              {enterpriseFeatures.map((feature) => (
                <p key={feature}>+ {feature}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-10">
          <blockquote className="max-w-[720px] text-[clamp(2rem,4.5vw,4rem)] leading-[1.1] tracking-[-0.03em]">
            Since implementing Aman.ah, our internal audit process which used to
            take weeks is now completed in hours.
          </blockquote>
          <p className="mt-8 text-3xl tracking-[-0.02em]">Ayu Awaad</p>
          <p className="text-foreground/70 mt-2 text-xl">
            Chief Financial Officer, CV. Abang Branang
          </p>
        </div>
      </div>
    </Container>
  );
}
