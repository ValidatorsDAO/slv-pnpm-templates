import { blurDataURL } from '@/lib/utils'
import Image from 'next/image'
import { PoweredBySolana } from '@/assets/img'
import { SOLANA_COM_LINK } from '@/constants/links'

export default function PoweredBySolanaBadge() {
  return (
    <>
      <a href={SOLANA_COM_LINK} target="_blank" rel="noopener noreferrer">
        <Image
          src={PoweredBySolana}
          alt="Powered by Solana"
          width={200}
          height={95}
          unoptimized
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </a>
    </>
  )
}
