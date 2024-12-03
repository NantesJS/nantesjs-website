import { Fira_Sans, Montserrat } from 'next/font/google'

export const firaSans = Fira_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-title',
  weight: ['400', '500'],
})

export const montserrat = Montserrat({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500'],
})
