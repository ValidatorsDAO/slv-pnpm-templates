import { Font } from '@react-email/components'

type Props = {
  lang: 'ja' | 'en'
}

export default function Fonts({ lang }: Props) {
  return (
    <>
      {lang === 'en' && (
        <Font
          fontFamily="Inter"
          fallbackFontFamily="sans-serif"
          webFont={{
            url: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap',
            format: 'woff2'
          }}
          fontWeight={300}
          fontStyle="normal"
        />
      )}

      {lang === 'ja' && (
        <Font
          fontFamily="Noto Sans JP"
          fallbackFontFamily="sans-serif"
          webFont={{
            url: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;500;700&display=swap',
            format: 'woff2'
          }}
          fontWeight={300}
          fontStyle="normal"
        />
      )}
    </>
  )
}
