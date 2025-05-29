export enum DEFAULT_PATHS {
  home = '/',
  staking = '/staking',
  doc = '/doc/general/getting-started',
  news = '/news',
  privacy = '/legal/privacy-policy'
}

export const defaultHeaderNav = [
  {
    path: DEFAULT_PATHS.doc,
    label: 'doc.title'
  },
  {
    path: DEFAULT_PATHS.staking,
    label: 'staking.title'
  },
  {
    path: DEFAULT_PATHS.news,
    label: 'news.title'
  }
]

export const defaultFooterNav1 = [
  {
    path: DEFAULT_PATHS.doc,
    label: 'doc.title'
  },
  {
    path: DEFAULT_PATHS.staking,
    label: 'staking.title'
  }
]

export const defaultFooterNav2 = [
  {
    path: DEFAULT_PATHS.news,
    label: 'news.title'
  },
  {
    path: DEFAULT_PATHS.privacy,
    label: 'legal.privacy'
  }
]
