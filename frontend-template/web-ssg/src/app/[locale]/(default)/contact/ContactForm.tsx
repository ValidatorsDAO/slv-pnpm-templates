'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useLocale, useTranslations } from 'next-intl'

import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { useEffect, useState } from 'react'
import { useAtom } from 'jotai/react'
import {
  contactFormAtom,
  contactFormAtomDefault,
  ContactFormData
} from '@/store/form/contactForm'

const contactApiURL =
  process.env.NODE_ENV === 'production'
    ? 'https://contact-email-api.slv.dev/contact/send'
    : 'http://localhost:4422/contact/send'

export default function ContactForm() {
  const t = useTranslations()
  const locale = useLocale()
  const [isSucceeded, setSucceeded] = useState(false)

  const [storedData, setStoredData] = useAtom(contactFormAtom)

  const FormSchema = z.object({
    name: z.string().min(1, { message: t('contact.ContactFormRow.nameError') }),
    email: z
      .string()
      .email({ message: t('contact.ContactFormRow.emailError') }),
    message: z
      .string()
      .min(1, { message: t('contact.ContactFormRow.messageError') })
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: storedData
  })
  const { isSubmitting, isValid } = form.formState

  useEffect(() => {
    const subscription = form.watch((values) => {
      setStoredData(values as ContactFormData)
    })
    return () => subscription.unsubscribe()
  }, [form.watch, setStoredData])

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const response = await fetch(contactApiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ locale, ...data })
      })
      if (!response.ok) {
        throw new Error('Failed to send message')
      }
      setStoredData(contactFormAtomDefault)
      form.reset(contactFormAtomDefault)
      setSucceeded(true)
      toast(t('contact.ContactFormRow.successTitle'), {
        description: `${t('contact.ContactFormRow.successMessage', {
          name: data.name
        })}`
      })
      setTimeout(() => setSucceeded(false), 4200)
    } catch (error) {
      console.error(error)
      toast(t('contact.ContactFormRow.errorTitle'), {
        description: `${t('contact.ContactFormRow.errorMessage')}`
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl tracking-tight">
              {t('contact.ContactFormRow.title')}
            </CardTitle>
            <CardDescription>
              {t('contact.ContactFormRow.description')}
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="name">
                    {t('contact.ContactFormRow.name')}
                  </Label>
                  <FormControl>
                    <Input
                      id="name"
                      placeholder={t('contact.ContactFormRow.namePlaceholder')}
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 dark:text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="email">
                    {t('contact.ContactFormRow.email')}
                  </Label>
                  <FormControl>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 dark:text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="message">
                    {t('contact.ContactFormRow.message')}
                  </Label>
                  <FormControl>
                    <Textarea
                      id="message"
                      placeholder={t('contact.ContactFormRow.message')}
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 dark:text-red-400" />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            {isSucceeded ? (
              <p className="w-full rounded-sm bg-green-600 px-2 py-1.5 text-center text-white shadow-2xl">
                {t('contact.ContactFormRow.successTitle')}
              </p>
            ) : (
              <Button
                className="w-full"
                type="submit"
                disabled={isSubmitting || !isValid}
              >
                {isSubmitting
                  ? `${t('contact.ContactFormRow.submit')}...`
                  : t('contact.ContactFormRow.submit')}
              </Button>
            )}
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}
