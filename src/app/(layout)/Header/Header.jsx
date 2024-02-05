import Link from 'next/link'
import { Logo, Navbar, SocialLink } from '@/app/components'
import { socialLinks } from '@/app/(layout)/utils'
import './Header.css'

export function Header () {
    return (
        <header>
            <section>
                <Link href="/">
                    <Logo/>
                </Link>
                <div className="navbar-group">
                    <div className="navbar-social">
                        {socialLinks.map((link) => (
                            <SocialLink key={link.label} href={link.href} label={link.label} icon={link.icon} />
                        ))}
                    </div>
                    <Navbar/>
                </div>
            </section>
        </header>
    )
}
