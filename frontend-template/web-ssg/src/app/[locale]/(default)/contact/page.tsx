import { setRequestLocale } from 'next-intl/server'
import { createMetadata, PageProps } from '@/lib/pages'
import ContactHeroRow from './ContactHeroRow'
import { DEFAULT_PATHS } from '../defaultNavs'
import ContactFormRow from './ContactFormRow'

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  return await createMetadata({
    locale,
    jsonNamespaces: ['contact'],
    pathname: DEFAULT_PATHS.contact
  })
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <ContactHeroRow />
      <ContactFormRow />
    </>
  )
}
