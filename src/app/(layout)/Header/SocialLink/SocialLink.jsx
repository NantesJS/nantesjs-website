import Link from 'next/link'
import './SocialLink.css'

export function SocialLink ({ href, label, icon }) {
    return (
        <Link
            aria-label={label}
            className="social-link"
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            title={label}
        >
            {icon}
        </Link>
    )
}
