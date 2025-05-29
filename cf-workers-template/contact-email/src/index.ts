import { Hono, Context, Next } from 'hono'
import { contactRouter } from '@/route/contact'
import { allowedOrigin, devOrigin } from '@/config'

export type Env = {
  RESEND_API_KEY: string
}

const app = new Hono<{
  Bindings: Env
}>()

app.get('/favicon.ico', (c) => {
  return new Response('', { status: 204 })
})

const generalMiddleware = async (
  c: Context,
  next: Next
): Promise<Response | void> => {
  try {
    if (c.req.path === '/favicon.ico') {
      return new Response('', { status: 204 })
    }
    const ip = c.req.header('cf-connecting-ip') || 'Unknown IP'
    console.log('IP:', ip)
    console.log(c.req.header)

    await next()
  } catch (error) {
    console.error(error)
    return c.text('Internal Server Error', 500)
  }
}

app.options('*', (c: Context) => {
  const origin = c.req.header('Origin') || ''
  if (c.env.NODE_ENV !== 'production') {
    devOrigin.forEach((dev) => allowedOrigin.push(dev))
  }
  if (!allowedOrigin.includes(origin)) {
    return new Response(null, { status: 403 })
  }

  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  })
})

app.use('*', async (c: Context, next: Next): Promise<Response | void> => {
  const origin = c.req.header('origin') || ''
  if (c.env.NODE_ENV !== 'production') {
    devOrigin.forEach((dev) => allowedOrigin.push(dev))
  }
  console.log('Allowed Origin:', allowedOrigin)
  if (!allowedOrigin.includes(origin)) {
    return c.text('Forbidden', 403)
  }

  const ip = c.req.header('cf-connecting-ip') || 'Unknown IP'
  if (
    !(
      c.req.header('sec-fetch-mode') === 'cors' &&
      (c.req.header('sec-fetch-site') === 'same-site' ||
        c.req.header('sec-fetch-site') === 'cross-site') &&
      c.req.header('referer') === `${origin}/`
    )
  ) {
    console.error('🚨 not allowed ip', ip)
    return c.text(
      `⚠️ What are you looking for?\n☢️ Reported Your IP: ${ip}`,
      403
    )
  }
  console.log('✅️ Access from:', ip)

  c.header('Access-Control-Allow-Origin', origin)
  c.header('Access-Control-Allow-Methods', 'GET, POST')

  await generalMiddleware(c, next)
})
app.route('/contact', contactRouter)

export default app
