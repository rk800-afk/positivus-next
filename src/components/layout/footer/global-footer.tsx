import { SocialIcon } from "@/components/icons/social-icon"
import Link from "next/link"

export function Footer() {
  return (
    <div className='bg-[var(--primary-black)] w-full h-[514px] rounded-t-[45px] px-[60px] py-[50px]'>
      <div className='flex justify-between mb-[65px]'>
        <div></div>
        <nav className='flex gap-10 underline text-[var(--primary-white)] text-[18px]'>
          <Link href='/about'>About us</Link>
          <Link href='/services'>Services</Link>
          <Link href='/use-cases'>Use Cases</Link>
          <Link href='/pricing'>Pricing</Link>
          <Link href='/blog'>Blog</Link>
        </nav>
        <div className='flex'>
          <SocialIcon socialType='linkedin' />
          <SocialIcon socialType='facebook' />
          <SocialIcon socialType='twitter' />
        </div>
      </div>
    </div>
  )
}
