'use client'

import { ContactEmailImg } from '@/assets/img'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ContactForm from './ContactForm'

export default function ContactFormRow() {
  const t = useTranslations()

  return (
    <>
      <div className="relative mx-auto max-w-7xl p-3">
        <div className="absolute top-0 left-0 -z-10">
          <Image
            src={ContactEmailImg}
            alt="Background"
            className="h-48 w-48 sm:h-64 sm:w-64 md:h-96 md:w-96 lg:h-[336px] lg:w-[336px]"
            unoptimized
            width={256}
            height={256}
          />
        </div>

        <div className="relative mx-auto max-w-lg py-24 md:py-48">
          <ContactForm />
        </div>
      </div>
    </>
  )
}
