export enum DEFAULT_PATHS {
  home = '/',
  doc = '/doc/general/getting-started',
  news = '/news',
  contact = '/contact',
  privacy = '/legal/privacy-policy'
}

export const defaultHeaderNav = [
  {
    path: DEFAULT_PATHS.doc,
    label: 'doc.title'
  },
  {
    path: DEFAULT_PATHS.news,
    label: 'news.title'
  },
  {
    path: DEFAULT_PATHS.contact,
    label: 'contact.title'
  }
]

export const defaultFooterNav1 = [
  {
    path: DEFAULT_PATHS.doc,
    label: 'doc.title'
  }
]

export const defaultFooterNav2 = [
  {
    path: DEFAULT_PATHS.news,
    label: 'news.title'
  },
  {
    path: DEFAULT_PATHS.contact,
    label: 'contact.title'
  },
  {
    path: DEFAULT_PATHS.privacy,
    label: 'legal.privacy'
  }
]
