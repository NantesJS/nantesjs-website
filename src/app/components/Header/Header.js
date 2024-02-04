import { Logo, Navbar } from '@/app/components'
import './Header.css'
import Link from 'next/link'

export function Header() {
    return (
        <header>
            <section>
                <Link href="/">
                    <Logo />
                </Link>
                <Navbar />
            </section>
        </header>
    )
}
