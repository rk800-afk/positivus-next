import { LogoIcon } from "@/components/icons/logoIcon"
import { UiButton } from "@/components/ui/button/ui-button"
import { MobileNav } from "@/components/ui/mobile-nav/mobile-nav"
import Link from "next/link"

export function GlobalHeader() {
  return (
    <header className='w-[100%] flex justify-between items-center'>
      <LogoIcon theme='dark' />
      <div className='flex gap-10 items-center not-xl:hidden'>
        <nav className='flex gap-10'>
          <Link href='/about'>About us</Link>
          <Link href='/services'>Services</Link>
          <Link href='/use-cases'>Use Cases</Link>
          <Link href='/pricing'>Pricing</Link>
          <Link href='/blog'>Blog</Link>
        </nav>
        <UiButton>Request a quote</UiButton>
      </div>
      <div className='xl:hidden flex items-center'>
        <MobileNav></MobileNav>
      </div>
    </header>
  )
}
