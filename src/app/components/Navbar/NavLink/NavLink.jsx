import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export function NavLink ({ slug = null, children }) {
    const segment = useSelectedLayoutSegment()
    const isActive = slug === segment ?? slug === null

    return (
        <Link href={`/${slug ?? ''}`} className={isActive ? 'active' : null}>
            {children}
        </Link>
    )
}
