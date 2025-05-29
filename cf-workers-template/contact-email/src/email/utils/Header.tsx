import { Head } from '@react-email/components'
import Fonts from './Fonts'

type Props = {
  lang: 'ja' | 'en'
}

export default function Header({ lang }: Props) {
  return (
    <Head>
      <Fonts lang={lang} />
    </Head>
  )
}
