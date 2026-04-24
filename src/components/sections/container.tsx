import { cn } from "@/lib/utils";

export default function Container({
  children,
  parentClassName,
  className,
}: {
  children: React.ReactNode;
  parentClassName?: string;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden bg-background px-5 lg:px-17.5", parentClassName)}>
      <div
        className={cn(
          "mx-auto w-full max-w-325 border-x border-border px-4 py-16 lg:px-16 xl:px-17.5 md:py-20",
          className,
        )}
      >
        {children}
      </div>
    </section>
  );
}
