import Link from 'next/link'
import { Logo } from '@/app/components'
import { MainSection } from '../MainSection'
import { Navbar } from './Navbar'
import { socialLinksList } from './SocialLink/socialLinksList.js'
import { SocialLink } from './SocialLink'
import './Header.css'

export function Header () {
    return (
        <header>
            <MainSection>
                <Link href="/">
                    <Logo/>
                </Link>
                <div className="navbar-group">
                    <div className="navbar-social">
                        {socialLinksList.map((link) => (
                            <SocialLink key={link.label} href={link.href} label={link.label} icon={link.icon} />
                        ))}
                    </div>
                    <Navbar/>
                </div>
            </MainSection>
        </header>
    )
}
