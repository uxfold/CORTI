import { faqs } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-line rounded-lg border border-line bg-paper">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span className="font-medium">{item.q}</span>
              <span
                className={cn(
                  "grid size-8 shrink-0 place-items-center rounded-pill bg-mist text-lg leading-none",
                  isOpen && "bg-gold",
                )}
              >
                {isOpen ? "–" : "+"}
              </span>
            </button>
            {isOpen ? (
              <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
