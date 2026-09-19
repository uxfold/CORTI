import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  fade,
  title,
  accent,
  align = "center",
  className,
}: {
  fade?: string;
  title: ReactNode;
  accent?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {fade ? <p className="fade-word uppercase">{fade}</p> : null}
      <h2 className="relative text-3xl font-bold tracking-tight text-ink md:text-5xl">
        {accent ? (
          <>
            <span className="text-gold">{accent} </span>
            {title}
          </>
        ) : (
          title
        )}
      </h2>
      <div
        className={cn(
          "gold-rule mt-5",
          align === "center" ? "mx-auto" : "mx-0",
        )}
      />
    </div>
  );
}
