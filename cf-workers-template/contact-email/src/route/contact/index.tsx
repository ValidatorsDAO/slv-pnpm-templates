import { Hono, Context } from 'hono'
import { Env } from '@/index'
import { Resend } from 'resend'
import { fromEmail, bccEmail, orgName } from '@/config'
import ContactFormEmail from '@/email/ContactFormEmail'

export interface ContactRequestBody {
  name: string
  email: string
  message: string
  locale: string
}

const contactRouter = new Hono<{ Bindings: Env }>()

contactRouter.post('/send', async (c: Context) => {
  try {
    const { name, email, message, locale } =
      await c.req.json<ContactRequestBody>()

    const resend = new Resend(c.env.RESEND_API_KEY)

    const res = await resend.emails.send({
      from: fromEmail,
      to: [email],
      bcc: [bccEmail],
      subject:
        locale === 'ja'
          ? `お問い合わせありがとうございます | ${orgName}`
          : `Thank you for contacting us | ${orgName}`,
      react: (
        <ContactFormEmail
          contactRequestBody={{ name, email, message, locale }}
        />
      )
    })
    console.log(res)

    if (res.error) {
      console.error(res.error)
      return c.text('Internal Server Error', 500)
    }

    return c.json({ message: 'Success' }, 200)
  } catch (error) {
    console.error(error)
    return c.text('Internal Server Error', 500)
  }
})

export { contactRouter }
