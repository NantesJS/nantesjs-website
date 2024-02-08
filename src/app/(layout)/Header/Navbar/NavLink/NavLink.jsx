import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'

export function NavLink ({ active = false, children, slug }) {
    const segmentList = useSelectedLayoutSegments()
    const [segment] = segmentList.filter((el) => !el.match(/[()]/gm))
    const isHomepage = !slug && segmentList.length === 0

    const isActive = slug && slug === segment || isHomepage

    return (
        <Link href={`/${slug ?? ''}`} className={isActive ? 'active' : null}>
            {children}
        </Link>
    )
}
