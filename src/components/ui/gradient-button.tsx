import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98] min-h-[48px] md:min-h-[40px]",
  {
    variants: {
      variant: {
        primary: "hf-gradient text-white hover:opacity-90 hover:scale-[1.02] hf-shadow rounded-2xl hover:shadow-lg",
        secondary: "border border-hf-ink text-hf-ink bg-transparent hover:bg-hf-ink hover:text-white hover:scale-[1.02] rounded-2xl",
        outline: "border border-hf-teal text-hf-teal bg-transparent hover:bg-hf-teal/10 hover:scale-[1.02] rounded-2xl",
        hero: "hf-gradient text-white hover:opacity-90 hf-shadow-lg rounded-2xl hover:scale-[1.03] min-h-[52px] md:min-h-[48px] hover:shadow-xl",
        ghost: "text-hf-ink hover:underline hover:text-hf-teal hover:opacity-80 bg-transparent border-none shadow-none",
      },
      size: {
        default: "h-12 md:h-10 px-4 py-2",
        sm: "h-10 md:h-9 px-3 text-sm",
        lg: "h-12 md:h-11 px-8",
        xl: "h-14 px-6 md:px-8 text-base md:text-lg min-h-[52px]",
        icon: "h-12 w-12 md:h-10 md:w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const GradientButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
GradientButton.displayName = "GradientButton";

export { GradientButton, buttonVariants };