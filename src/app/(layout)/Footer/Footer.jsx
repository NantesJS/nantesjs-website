import Link from 'next/link'
import Image from 'next/image'
import { Heart } from 'react-feather'
import { Logo } from '@/app/components'

import './Footer.css'

export function Footer() {
  return (
    <footer>
      <Logo />
      <p>
        <Heart />
        <span>
          <Link href="/">NantesJS</Link>&nbsp;- © 2011-2024
        </span>
        <a href="https://www.netlify.com">
          <Image
            src="https://www.netlify.com/img/global/badges/netlify-light.svg"
            alt="Deploys by Netlify"
            width={110}
            height={50}
          />
        </a>
      </p>
    </footer>
  )
}
