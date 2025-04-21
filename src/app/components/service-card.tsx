import { UiLink } from "@/components/ui/ui-link";
import Link from "next/link";

const STYLE_TYPES = {
  type1: {
    variant: "variant3",
    background: "bg-[#F3F3F3]",
    textBg: "bg-[var(--primary-green)]",
  },
  type2: {
    variant: "variant3",
    background: "bg-[var(--primary-green)]",
    textBg: "bg-[var(--primary-white)]",
  },
  type3: {
    variant: "variant2",
    background: "bg-[var(--primary-black)]",
    textBg: "bg-[var(--primary-white)]",
  },
  type4: {
    variant: "variant2",
    background: "bg-[var(--primary-black)]",
    textBg: "bg-[var(--primary-green)]",
  },
} as const;

type StyleType = keyof typeof STYLE_TYPES;

interface ServiceCardProps {
  styleType: StyleType;
  img: string;
  link: string;
  text: string;
}

export function ServiceCard({ styleType, img, link, text }: ServiceCardProps) {
  const { variant, background, textBg } = STYLE_TYPES[styleType];

  return (
    <div
      className={`flex gap-5 border-2 border-solid border-[var(--primary-black)] border-b-[8px] w-[600px] h-[310px] rounded-[45px] justify-between p-[50px] ${background}`}
    >
      <div className="max-w-[50%] flex flex-col justify-between">
        <p
          className={`text-[30px] font-bold rounded-[7px] w-fit p-1 ${textBg}`}
        >
          {text}
        </p>
        <Link href={link}>
          <UiLink text="Learn more" variant={variant} />
        </Link>
      </div>
      <div className="flex justify-center items-center max-w-[50%]">
        <img src={img} alt="card image" />
      </div>
    </div>
  );
}
