'use client'

import { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'
import appInfo from '@appInfo'
import { Link } from '@/i18n/routing'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'

type Props = {
  pathname: string
  locale: string
}

export default function MobileSuggestPhantom({ pathname, locale }: Props) {
  const toastShown = useRef(false)
  const t = useTranslations()
  const [show, setShow] = useState(false)

  const appUrl = encodeURIComponent(`https://${appInfo.domain}`)
  const redirectLink = encodeURIComponent(
    `https://${appInfo.domain}/${locale}${pathname}`
  )
  const linkHref = `https://phantom.app/ul/browse/${redirectLink}?ref=${appUrl}`

  useEffect(() => {
    if (typeof window === 'undefined' || toastShown.current) {
      return
    }

    const userAgent = window.navigator.userAgent
    const isMobile = /Mobi|Android/i.test(userAgent)
    const isPhantom = /Phantom/i.test(userAgent)

    if (isMobile && !isPhantom) {
      toastShown.current = true
      setShow(true)
      toast(t('common.openInPhantomTitle'), {
        duration: 42000,
        closeButton: true,
        action: (
          <Link href={linkHref} target="_blank" rel="noopener noreferrer">
            <Button>{t('common.openInPhantomButton')}</Button>
          </Link>
        )
      })
    }
  }, [t, linkHref])

  return (
    <>
      {show && (
        <div className="mx-auto flex max-w-7xl flex-row items-center justify-between gap-3 p-6">
          <p className="text-sm">{t('common.openInPhantomTitle')}</p>
          <Link href={linkHref} target="_blank" rel="noopener noreferrer">
            <Button>{t('common.openInPhantomButton')}</Button>
          </Link>
        </div>
      )}
    </>
  )
}
