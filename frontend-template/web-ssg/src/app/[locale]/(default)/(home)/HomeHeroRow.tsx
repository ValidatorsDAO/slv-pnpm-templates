'use client'

import {
  AgaveLogoHorizontal,
  AgaveLogoInvertHorizontal,
  CircleLogoHorizontal,
  CircleLogoInvertHorizontal,
  FiredancerLogoHorizontal,
  FiredancerLogoInvertHorizontal,
  JitoLogoHorizontal,
  JitoLogoInvertHorizontal,
  OPOSDeveloperToolkit,
  OPOSSagaPhone,
  SolanaLogoHorizontal,
  SolanaLogoInvertHorizontal
} from '@/assets/img'
import { Button } from '@/components/ui/button'
import appInfo from '@appInfo'

import { mainShardGradation } from '@/lib/decoration'

import { cn } from '@/lib/utils'
import { Link } from '@/i18n/routing'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { useTheme } from '@/hooks/utils/useTheme'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DEFAULT_PATHS } from '../defaultNavs'
import SLVCommands from './SLVCommands'

const logos = [
  {
    title: 'Solana',
    logo: SolanaLogoHorizontal,
    logoInvert: SolanaLogoInvertHorizontal,
    href: 'https://solana.com'
  },
  {
    title: 'Agave',
    logo: AgaveLogoHorizontal,
    logoInvert: AgaveLogoInvertHorizontal,
    href: 'https://www.anza.xyz/'
  },
  {
    title: 'Jito',
    logo: JitoLogoHorizontal,
    logoInvert: JitoLogoInvertHorizontal,
    href: 'https://www.jito.wtf/'
  },
  {
    title: 'Firedancer',
    logo: FiredancerLogoHorizontal,
    logoInvert: FiredancerLogoInvertHorizontal,
    href: 'https://jumpcrypto.com/firedancer/'
  },
  {
    title: 'Circle',
    logo: CircleLogoHorizontal,
    logoInvert: CircleLogoInvertHorizontal,
    href: 'https://www.circle.com/'
  }
]

export default function HomeHeroRow() {
  const t = useTranslations()
  const locale = useLocale()
  const { theme, mounted } = useTheme()

  return (
    <>
      <div className="relative mx-auto max-w-[1720px] p-3">
        <div className="absolute left-0 top-0 -z-10 opacity-20 dark:opacity-40">
          <Image
            src={OPOSDeveloperToolkit}
            alt="Background"
            className="h-56 w-56 sm:h-64 sm:w-64 md:h-96 md:w-96 lg:h-[512px] lg:w-[512px]"
            unoptimized
            width={256}
            height={256}
          />
        </div>

        <div className="absolute bottom-0 right-0 -z-10 opacity-20 dark:opacity-40">
          <Image
            src={OPOSSagaPhone}
            alt="Background"
            className="h-56 w-56 sm:h-64 sm:w-64 md:h-96 md:w-96 lg:h-[512px] lg:w-[512px]"
            unoptimized
            width={256}
            height={256}
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-8 py-24 sm:gap-16 md:grid-cols-2 md:py-40 lg:gap-0.5 xl:gap-8">
          <div className="mx-auto flex flex-col items-center gap-4 p-4 text-center md:items-start md:text-left xl:gap-6">
            <h1
              className={cn(
                'py-2 text-5xl font-bold tracking-tighter sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl',
                mainShardGradation
              )}
            >
              {t('(home).HomeHeroRow.title1')} <br />
              {t('(home).HomeHeroRow.title2')}
            </h1>
            <p
              className={cn(
                '-mt-4 max-w-96 text-sm font-medium tracking-tight sm:max-w-lg sm:text-lg md:text-base lg:max-w-xl xl:text-xl',
                mainShardGradation
              )}
            >
              {t('(home).HomeHeroRow.subtitle1')} <br />
              {t('(home).HomeHeroRow.subtitle2')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href={DEFAULT_PATHS.doc}>
                <Button>Getting Started</Button>
              </Link>
              <Link
                href={`${appInfo.discordInviteURL}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  <FontAwesomeIcon icon={faDiscord} className="mr-2 h-5 w-5" />
                  {t('common.joinUs')}
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start md:gap-6">
              {mounted &&
                logos.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="hover:opacity-80"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={theme === 'light' ? item.logo : item.logoInvert}
                      alt={item.title}
                      className={cn(
                        'w-16 sm:w-24 md:w-16 lg:w-24',
                        item.title === 'Jito' && 'px-3'
                      )}
                      unoptimized
                      width={256}
                    />
                  </Link>
                ))}
            </div>
          </div>
          <SLVCommands />
        </div>
      </div>
    </>
  )
}
