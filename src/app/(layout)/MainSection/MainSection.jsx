import cn from 'classnames'
import './MainSection.css'

export function MainSection ({ className, children }) {
    return (
        <section className={cn('main-section', className)}>
            {children}
        </section>
    )
}
