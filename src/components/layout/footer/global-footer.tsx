import { LogoIcon } from "@/components/icons/logoIcon"
import { SocialIcon } from "@/components/icons/social-icon"
import Link from "next/link"
import { SubscribeForm } from "./components/subscribe-from"

export function Footer() {
  return (
    <div className='bg-[var(--primary-black)] w-full md:h-[514px] rounded-t-[45px] px-[60px] not-md:px-[20px] py-[50px]'>
      <div className='flex justify-between mb-[65px] not-md:flex-col not-md:items-center'>
        <LogoIcon theme='light' />
        <nav className='flex gap-10 not-md:gap-5 md:underline text-[var(--primary-white)] text-[18px] not-md:flex-col not-md:py-[50px] not-md:text-center'>
          <Link href='/about'>About us</Link>
          <Link href='/services'>Services</Link>
          <Link href='/use-cases'>Use Cases</Link>
          <Link href='/pricing'>Pricing</Link>
          <Link className='not-md:hidden' href='/blog'>
            Blog
          </Link>
        </nav>
        <div className='flex gap-5'>
          <a href='https://linkedin.com' target='_blank'>
            <SocialIcon socialType='linkedin' />
          </a>
          <a href='https://facebook.com' target='_blank'>
            <SocialIcon socialType='facebook' />
          </a>
          <a href='https://x.com' target='_blank'>
            <SocialIcon socialType='twitter' />
          </a>
        </div>
      </div>
      <div className='flex justify-between items-center border-b-2 border-solid border-b-[var(--primary-white)] pb-[50px] not-md:flex-col'>
        <div className='text-[18px] flex flex-col gap-5 text-[var(--primary-white)] not-md:items-center not-md:pb-[50px] not-md:text-center'>
          <p className='text-[20px] font-bold bg-[var(--primary-green)] text-[var(--primary-black)] w-fit px-2 rounded-[7px] not-md:mb-[50px]'>
            Contact us:
          </p>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p className='whitespace-pre-line  not-md:text-center'>
            Address: 1234 Main St{"\n"} Moonstone City, Stardust State 12345
          </p>
        </div>
        <SubscribeForm />
      </div>
      <div className='pt-[40px] flex gap-10 not-md:gap-5 text-[var(--primary-white)] text-[18px] not-md:flex-col not-md:items-center not-md:text-center'>
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <Link href={"/"} className='md:underline'>
          Privacy Policy
        </Link>
      </div>
    </div>
  )
}
