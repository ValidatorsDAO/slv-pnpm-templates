import {
  Html,
  Body,
  Container,
  Section,
  Text,
  Tailwind,
  Img,
  Hr
} from '@react-email/components'
import { ContactRequestBody } from '@/route/contact/index'
import Header from '@/email/utils/Header'
import { logoUrl, orgName } from '@/config'

interface Props {
  contactRequestBody: ContactRequestBody
}

export default function ContactFormEmail({ contactRequestBody }: Props) {
  const { name, email, message, locale } = contactRequestBody
  const isJa = locale === 'ja'

  const texts = {
    greeting: isJa
      ? `${name}様、お問い合わせありがとうございます。`
      : `Thank you for contacting us, ${name}.`,
    received: isJa
      ? '以下の内容を受け取りました。'
      : 'We have received your message:',
    nameLabel: isJa ? 'お名前' : 'Name',
    emailLabel: isJa ? 'メールアドレス' : 'Email',
    messageLabel: isJa ? 'メッセージ' : 'Message',
    footer: isJa
      ? '後ほど担当者よりご連絡いたします。'
      : 'Our team will reach out to you shortly.'
  }

  return (
    <Tailwind>
      <Html lang={isJa ? 'ja' : 'en'}>
        <Header lang={isJa ? 'ja' : 'en'} />
        <Body className="bg-zinc-950 font-sans">
          <Container className="mx-auto max-w-lg px-4 py-6">
            <Section className="pb-8 pt-20">
              <Img src={logoUrl} className="w-28" />
            </Section>
            <Section className="">
              <Text className={`text-2xl font-bold tracking-tight text-white`}>
                {texts.received}
              </Text>
            </Section>

            <Text className="pb-3 text-zinc-100">{texts.greeting}</Text>

            <Hr className="color-zinc-500 border-zinc-500" />

            <Section className="">
              <Text className="text-zinc-300">
                <strong className="text-zinc-100">{texts.nameLabel}:</strong>{' '}
                {name}
              </Text>
              <Text className="text-zinc-300">
                <strong className="text-zinc-100">{texts.emailLabel}:</strong>{' '}
                {email}
              </Text>
              <Text className="text-zinc-300">
                <strong className="text-zinc-100">{texts.messageLabel}:</strong>
                <br />
                {message}
              </Text>
            </Section>

            <Hr className="color-zinc-500 border-zinc-500" />

            <Text className="pt-3 text-zinc-100">{texts.footer}</Text>
            <Text className="pt-3 text-xs text-zinc-300">
              ※ This mail is for test purpose.
            </Text>

            <Text className="py-12 text-sm text-zinc-400">
              © {new Date().getFullYear()} {orgName}
            </Text>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  )
}
