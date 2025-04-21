"use client";
import { LogoIcon } from "@/components/icons/logoIcon";
import { UiButton } from "@/components/ui/button/ui-button";
import { MobileNav } from "@/components/ui/mobile-nav/mobile-nav";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function GlobalHeader() {
  const pathname = usePathname();

  return (
    <header className="w-[100%] flex justify-between items-center">
      <LogoIcon theme="dark" />
      <div className="flex gap-10 items-center not-xl:hidden">
        <nav className="flex text-[20px] gap-10">
          <Link
            href="/about"
            className={clsx("p-1 rounded-[6px]", {
              "bg-[var(--primary-green)]": pathname.includes("/about"),
            })}
          >
            About us
          </Link>
          <Link
            href="/services"
            className={clsx("p-1 rounded-[6px]", {
              "bg-[var(--primary-green)]": pathname.includes("/services"),
            })}
          >
            Services
          </Link>
          <Link
            href="/use-cases"
            className={clsx("p-1 rounded-[6px]", {
              "bg-[var(--primary-green)]": pathname.includes("/use-cases"),
            })}
          >
            Use Cases
          </Link>
          <Link
            href="/pricing"
            className={clsx("p-1 rounded-[6px]", {
              "bg-[var(--primary-green)]": pathname.includes("/pricing"),
            })}
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className={clsx("p-1 rounded-[6px]", {
              "bg-[var(--primary-green)]": pathname.includes("/blog"),
            })}
          >
            Blog
          </Link>
        </nav>
        <UiButton>Request a quote</UiButton>
      </div>
      <div className="xl:hidden flex items-center">
        <MobileNav></MobileNav>
      </div>
    </header>
  );
}
