'use client'

import { NavLink } from '@/app/components/NavLink'
import './Navbar.css'

export function Navbar () {

    return (
        <nav>
            <ul>
                <li><NavLink>Évènements</NavLink></li>
                <li><NavLink slug='contributeurs'>Contributeurs</NavLink></li>
                <li><NavLink slug='code-de-conduite'>Code de conduite</NavLink></li>
                <li><NavLink slug='a-propos'>À propos</NavLink></li>
                <li><NavLink slug="">Proposer un sujet</NavLink></li>
            </ul>
        </nav>
    )

}
