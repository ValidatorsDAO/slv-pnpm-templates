import { setRequestLocale } from 'next-intl/server'
import { createMetadata, PageProps } from '@/lib/pages'
import StakingHeroRow from './StakingHeroRow'
import CTARow from '@/components/rows/CTARow'
import VLDAirdropRow from '@/components/rows/VLDAirdropRow'
import Why1SOLnot1elSOLRow from '@/app/[locale]/(default)/staking/Why1SOLnot1elSOLRow'
import ElsolMetricsRow from '@/components/rows/ElsolMetricsRow'
import InstantLiquidityRow from '@/components/rows/InstantLiquidityRow'
import ProductsSlideRow from '@/components/rows/ProductsSlideRow'
import HavingLiquidityRow from './HavingLiquidityRow'
import DirectStakingRow from './DirectStakingRow'
import { DEFAULT_PATHS } from '../defaultNavs'
import MobileSuggestPhantom from '@/components/solana/MobileSuggestPhantom'

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  return await createMetadata({
    locale,
    jsonNamespaces: ['staking'],
    pathname: DEFAULT_PATHS.staking
  })
}

export default async function StakingPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <MobileSuggestPhantom pathname={DEFAULT_PATHS.staking} locale={locale} />
      <DirectStakingRow />
      <StakingHeroRow />
      <ElsolMetricsRow />
      <Why1SOLnot1elSOLRow />
      <InstantLiquidityRow />
      <HavingLiquidityRow />
      <VLDAirdropRow />
      <ProductsSlideRow />
      <CTARow />
    </>
  )
}
