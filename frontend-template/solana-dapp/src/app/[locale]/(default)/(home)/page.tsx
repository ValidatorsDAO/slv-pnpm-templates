import { setRequestLocale } from 'next-intl/server'
import { createMetadata, PageProps } from '@/lib/pages'
import { getArticleForIndex } from '@/lib/articles'
import ArticleIndex from '@/components/articles/ArticleIndex'
import HomeHeroRow from './HomeHeroRow'
import CTARow from '@/components/rows/CTARow'
import VLDAirdropRow from '@/components/rows/VLDAirdropRow'
import ProductsSlideRow from '@/components/rows/ProductsSlideRow'
import EasyStartValidatorRow from './EasyStartValidatorRow'
import AdaptiveSolutionsRow from './AdaptiveSolutionsRow'
import QualityOperationsRow from './QualityOperationsRow'
import RocketStartRow from './RocketStartRow'
import GlobalEdgeServersRow from './GlobalEdgeServersRow'
import { DEFAULT_PATHS } from '../defaultNavs'
import GlobalDCPartnerRow from './GlobalDCPartnerRow'

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  return await createMetadata({
    locale,
    jsonNamespaces: ['(home)'],
    pathname: DEFAULT_PATHS.home
  })
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const newsData = getArticleForIndex(
    'news',
    ['title', 'thumbnail', 'date'],
    locale
  )

  return (
    <>
      <HomeHeroRow />
      <GlobalDCPartnerRow />
      <EasyStartValidatorRow />
      <AdaptiveSolutionsRow />
      <QualityOperationsRow />
      <RocketStartRow />
      <GlobalEdgeServersRow />
      <VLDAirdropRow />
      <ProductsSlideRow />
      <CTARow />
      <div className="py-48">
        <ArticleIndex articlesData={newsData} showItemsNum={3} />
      </div>
    </>
  )
}
