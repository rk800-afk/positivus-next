import { ArrowIcon } from "../icons/arrow-icon";

const LINK_VARIANTS = {
  variant1: {
    icon: "bg-[var(--primary-white)] text-[var(--primary-green)]",
    textStyle: "text-[var(--primary-white)]",
  },
  variant2: {
    icon: "bg-[var(--primary-white)] text-[var(--primary-black)]",
    textStyle: "text-[var(--primary-white)]",
  },
  variant3: {
    icon: "bg-[var(--primary-black)] text-[var(--primary-green)]",
    textStyle: "text-[var(--primary-black)]",
  },
  variant4: {
    icon: "bg-[var(--primary-white)] text-[var(--primary-white)]",
    textStyle: "text-[var(--primary-black)]",
  },
  variant5: {
    icon: "bg-[var(--primary-green)] text-[var(--primary-black)]",
    textStyle: "text-[var(--primary-black)]",
  },
  variant6: {
    icon: "bg-[var(--primary-green)] text-[var(--primary-white)]",
    textStyle: "text-[var(--primary-white)]",
  },
} as const;

type LinkVariant = keyof typeof LINK_VARIANTS;

interface UiLinkProps {
  variant: LinkVariant;
  text: string;
  className?: string;
}

export function UiLink({ variant, text, className = "" }: UiLinkProps) {
  const { icon, textStyle: textStyle } = LINK_VARIANTS[variant];

  return (
    <div className={`flex gap-4 items-center ${className}`}>
      <div
        className={`rounded-[50%] w-[41px] h-[41px] flex items-center justify-center ${icon}`}
      >
        <ArrowIcon />
      </div>
      <p className={`${textStyle} text-[20px]`}>{text}</p>
    </div>
  );
}
