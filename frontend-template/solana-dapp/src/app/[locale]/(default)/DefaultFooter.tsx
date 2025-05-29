'use client'

import appInfo from '@appInfo'
import LogoHorizontalLink from '@/components/common/LogoHorizontalLink'
import {
  DiscordIconLink,
  GitHubLink,
  TwitterIconLink,
  YouTubeLink
} from '@/components/common/icons'

import { LanguageToggle } from '@/components/config/LanguageToggle'
import { ModeToggle } from '@/components/config/ModeToggle'
import { defaultFooterNav1, defaultFooterNav2 } from './defaultNavs'
import { Link, usePathname } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { useLocale, useTranslations } from 'next-intl'
import GreenHostingBadge from '@/components/common/GreenHostingBadge'
import {
  ELSOL_WEB_LINK,
  ERPC_WEB_LINK,
  VALIDATORS_DAO_WEB_LINK,
  VALIDATORS_SOLUTIONS_WEB_LINK
} from '@/constants/links'
import PoweredBySolanaBadge from '@/components/common/PoweredBySolanaBadge'

export default function DefaultFooter() {
  const t = useTranslations()
  const locale = useLocale()
  const pathname = usePathname()
  const isActivePath = (path: string) => pathname.includes(path)

  return (
    <>
      <footer className="mx-auto flex w-full max-w-7xl flex-col gap-10 border-t border-zinc-200 px-6 pt-10 pb-8 dark:border-zinc-500">
        <div className="flex w-full flex-col items-stretch justify-between gap-8 sm:flex-row">
          <div className="flex w-full items-center justify-between sm:min-h-40 sm:flex-col sm:items-start">
            <LogoHorizontalLink className="w-24" />
            <div className="flex flex-row items-center gap-4">
              <GitHubLink />
              <TwitterIconLink />
              <DiscordIconLink />
              <YouTubeLink />
            </div>
          </div>
          <div className="flex w-full flex-col gap-3">
            {defaultFooterNav1.map((navItem) => (
              <Link
                href={navItem.path}
                key={navItem.label}
                className={cn(
                  isActivePath(navItem.path)
                    ? 'text-blue-500 dark:text-blue-300'
                    : 'text-zinc-500 dark:text-zinc-300',
                  'flex items-center gap-4 py-2 text-sm hover:opacity-70'
                )}
              >
                {t(navItem.label)}
              </Link>
            ))}
          </div>
          <div className="flex w-full flex-col gap-3">
            {defaultFooterNav2.map((navItem) => (
              <Link
                href={navItem.path}
                key={navItem.label}
                className={cn(
                  isActivePath(navItem.path)
                    ? 'text-blue-500 dark:text-blue-300'
                    : 'text-zinc-500 dark:text-zinc-300',
                  'flex items-center gap-4 py-2 text-sm hover:opacity-70'
                )}
              >
                {t(navItem.label)}
              </Link>
            ))}
          </div>
          <div className="flex w-full flex-col gap-8">
            <div className="max-w-40 sm:ml-auto">
              <PoweredBySolanaBadge />
            </div>
            <div className="max-w-40 sm:ml-auto">
              <GreenHostingBadge />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-row items-center justify-center">
          <div className="grid">
            <p className="text-sm tracking-tight text-zinc-400 dark:text-zinc-300">
              © {new Date().getFullYear()} {appInfo.copyright}
            </p>
          </div>
          <div className="flex flex-grow" />
          <div className="flex flex-row items-start justify-center gap-3">
            <LanguageToggle />
            <ModeToggle />
          </div>
        </div>
      </footer>
    </>
  )
}
