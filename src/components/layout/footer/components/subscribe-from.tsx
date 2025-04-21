"use client"

import { UiButton } from "@/components/ui/button/ui-button"

export function SubscribeForm() {
  return (
    <div className='px-[40px] py-[60px] not-md:px-[20px] not-md:py-[20px] flex gap-5 bg-[#292A32] rounded-[14px] not-md:flex-col not-md:w-full'>
      <input
        className='md:w-[300px] border-2 border-solid border-[var(--primary-white)] rounded-[14px] text-[var(--primary-white)] text-[18px] px-[35px] not-md:h-[72px]'
        placeholder='Email'
        type='email'
      />
      <UiButton className='md:w-[300px]' variant="green">
        Subscribe to news
      </UiButton>
    </div>
  )
}
