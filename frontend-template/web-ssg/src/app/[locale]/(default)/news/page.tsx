import { setRequestLocale } from 'next-intl/server'
import { createMetadata, PageProps } from '@/lib/pages'
import { getArticleForIndex } from '@/lib/articles'
import ArticleIndex from '@/components/articles/ArticleIndex'
import { DEFAULT_PATHS } from '@/app/[locale]/(default)/defaultNavs'

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  return await createMetadata({
    locale,
    jsonNamespaces: ['news'],
    pathname: DEFAULT_PATHS.news
  })
}

export default async function NewsPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const articlesData = getArticleForIndex(
    'news',
    ['title', 'thumbnail', 'date'],
    locale
  )

  return (
    <>
      <ArticleIndex articlesData={articlesData} />
    </>
  )
}
