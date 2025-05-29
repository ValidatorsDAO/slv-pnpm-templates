import { atomWithStorage } from 'jotai/utils'

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export const contactFormAtomDefault = {
  name: '',
  email: '',
  message: ''
}

export const contactFormAtom = atomWithStorage<ContactFormData>(
  'contactFormData',
  contactFormAtomDefault,
  undefined,
  { getOnInit: true }
)
