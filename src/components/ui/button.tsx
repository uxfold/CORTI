import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        gold: "bg-gold text-ink hover:bg-gold-deep",
        outline:
          "border-[3px] border-gold bg-paper text-ink hover:bg-gold",
        dark: "bg-ink text-paper hover:bg-ink/90",
        ghost: "bg-transparent text-ink hover:bg-mist",
      },
      size: {
        default: "h-12 rounded-pill px-6 text-sm",
        lg: "h-14 rounded-pill px-8 text-base",
        sm: "h-10 rounded-pill px-4 text-sm",
        icon: "size-12 rounded-pill",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
