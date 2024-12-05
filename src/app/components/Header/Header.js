import { Logo, Navbar } from '@/app/components'
import './Header.css'

export function Header() {
    return (
        <header>
            <section>
                <Logo />
                <Navbar />
            </section>
        </header>
    )
}
