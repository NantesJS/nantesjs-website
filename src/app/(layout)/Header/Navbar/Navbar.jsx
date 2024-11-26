'use client'

import Link from 'next/link'
import { ExternalLink } from 'react-feather'
import { NavLink } from './NavLink/index.js'
import './Navbar.css'

export function Navbar () {
    const cfpLink =
        'https://conference-hall.io/public/event/DWIXMKeUnghfgJHerwEh'

    return (
        <nav>
            <ul>
                <li>
                    <NavLink>Évènements</NavLink>
                </li>
                <li>
                    <NavLink slug="contributeurs">Contributeurs</NavLink>
                </li>
                <li>
                    <NavLink slug="code-de-conduite">Code de conduite</NavLink>
                </li>
                <li>
                    <NavLink slug="a-propos">À propos</NavLink>
                </li>
                <li className="cfp-link">
                    <Link href={cfpLink} target="_blank">
                        Proposer un sujet
                        <ExternalLink width={20} />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
