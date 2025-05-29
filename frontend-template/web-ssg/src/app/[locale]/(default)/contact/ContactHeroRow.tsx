'use client'

import { OPOSDeveloperToolkit, OPOSSagaPhone } from '@/assets/img'
import { mainShardGradation } from '@/lib/decoration'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function ContactHeroRow() {
  const t = useTranslations()

  return (
    <>
      <div className="relative mx-auto max-w-7xl p-3">
        <div className="absolute top-0 left-0 -z-10 opacity-10 dark:opacity-20">
          <Image
            src={OPOSDeveloperToolkit}
            alt="Background"
            className="h-48 w-48 sm:h-64 sm:w-64 md:h-96 md:w-96 lg:h-[336px] lg:w-[336px]"
            unoptimized
            width={256}
            height={256}
          />
        </div>

        <div className="absolute right-0 bottom-0 -z-10 opacity-20 dark:opacity-40">
          <Image
            src={OPOSSagaPhone}
            alt="Background"
            className="h-56 w-56 sm:h-64 sm:w-64 md:h-96 md:w-96 lg:h-[440px] lg:w-[440px]"
            unoptimized
            width={256}
            height={256}
          />
        </div>

        <div className="relative mx-auto grid items-center gap-8 py-24 md:grid-cols-3 md:py-48">
          <div className="grid w-full gap-4 p-4 md:col-span-2">
            <h2
              className={cn(
                'py-2 text-5xl font-bold tracking-tighter sm:text-7xl lg:text-8xl',
                mainShardGradation
              )}
            >
              {t('contact.title')}
            </h2>
            <p
              className={cn(
                'text-lg font-medium tracking-tight sm:max-w-xl sm:text-xl lg:-mt-2',
                'text-zinc-500 dark:text-zinc-300'
              )}
            >
              {t('contact.description')}
            </p>
          </div>
          <div className="mx-auto w-full max-w-xl p-4"></div>
        </div>
      </div>
    </>
  )
}
