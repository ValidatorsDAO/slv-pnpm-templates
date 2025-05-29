import appInfo from '@appInfo'

type VideoJsonLdProps = {
  content: string
  title: string
  date?: string
}

function findAllYoutubeUrls(text: string): string[] {
  const r =
    /(https?:\/\/(?:www\.)?youtube\.com\/watch\?v=[\w-]+|https?:\/\/youtu\.be\/[\w-]+)/g
  const m = text.match(r)
  return m || []
}

function extractYoutubeId(url: string): string | null {
  const m = url.match(/(?:v=|youtu\.be\/)([\w-]+)/)
  return m ? m[1] : null
}

export default function VideoJsonLd({
  content,
  title,
  date
}: VideoJsonLdProps) {
  const youtubeUrls = findAllYoutubeUrls(content)
  const videoObjects = youtubeUrls
    .map((url) => extractYoutubeId(url))
    .filter((id): id is string => Boolean(id))
    .map((id) => ({
      '@type': 'VideoObject',
      name: title,
      description: 'This page contains a YouTube video.',
      thumbnailUrl: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
      uploadDate: date
        ? new Date(date).toISOString()
        : new Date().toISOString(),
      embedUrl: `https://www.youtube.com/embed/${id}`,
      publisher: {
        '@type': 'Organization',
        name: appInfo.copyright,
        logo: {
          '@type': 'ImageObject',
          url: `https://${
            process.env.NODE_ENV === 'production'
              ? appInfo.domain
              : 'localhost:4242'
          }/logo.svg`
        }
      }
    }))

  if (videoObjects.length === 0) {
    return null
  }

  const videoJsonLd = {
    '@context': 'https://schema.org',
    '@graph': videoObjects
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
    />
  )
}
