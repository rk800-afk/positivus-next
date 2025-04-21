import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center text-[20px] justify-center gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--primary-white)] hover:bg-[var(--primary-black)]/5 text-[var(--primary-black)] border border-black",
        black: "bg-[var(--primary-black)] hover:bg-[var(--primary-black)]/70 text-[var(--primary-white)]",
        green: "bg-[var(--primary-green)] hover:bg-[var(--primary-green)]/85 text-[var(--primary-black)]"
      },
      size: {
        default: "rounded-[14px] px-[35px] py-[20px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const UiButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, onClick, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        onClick={onClick}
        ref={ref}
        {...props}
      />
    );
  }
);
UiButton.displayName = "UiButton"

export { UiButton, buttonVariants }
