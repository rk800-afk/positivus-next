import { LogoIcon } from "@/components/icons/logoIcon";
import { UiButton } from "@/components/ui/button/ui-button";
import { MobileNav } from "@/components/ui/mobile-nav/mobile-nav";
import Link from "next/link";

export function GlobalHeader() {
  return (
    <header className="w-[100%] flex justify-between items-center">
      <div className="flex gap-1 items-center">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z"
            fill="black"
          />
        </svg>
        <LogoIcon></LogoIcon>
      </div>
      <div className="flex gap-10 items-center not-xl:hidden">
        <nav className="flex gap-10">
          <Link href="/about">About us</Link>
          <Link href="/services">Services</Link>
          <Link href="/use-cases">Use Cases</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        <UiButton>Request a quote</UiButton>
      </div>
      <div className="xl:hidden flex items-center">
        <MobileNav></MobileNav>
      </div>
    </header>
  );
}
