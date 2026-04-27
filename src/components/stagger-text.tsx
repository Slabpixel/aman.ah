import { cn } from "@/lib/utils";

interface StaggerTextProps {
  text: string;
  className?: string;
  step?: number;
}

export default function StaggerText({
  text,
  className,
  step = 0.012,
}: StaggerTextProps) {
  return (
    <span className={cn("relative inline-block overflow-hidden align-middle", className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="inline-block whitespace-pre">
        {[...text].map((char, index) => (
          <span
            key={`${char}-${index}`}
            className="inline-block translate-y-0 [text-shadow:0_1.3em_currentColor] transition-transform duration-600 ease-[cubic-bezier(0.625,0.05,0,1)] hover:translate-y-[-1.3em] group-hover:translate-y-[-1.3em]"
            style={{ transitionDelay: `${index * step}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </span>
  );
}
