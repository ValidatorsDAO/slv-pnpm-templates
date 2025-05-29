import { Inter, Noto_Sans_JP } from 'next/font/google'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import '../globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { cn } from '@/lib/utils'

import { locales } from '@/app/config'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp'
})

type Props = {
  children: React.ReactNode
  params: Promise<{
    locale: string
  }>
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const messages = await getMessages({ locale })
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(`${inter.variable} ${notoSansJP.variable}`)}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <NextIntlClientProvider messages={messages}>
            {children}
            <Toaster />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
