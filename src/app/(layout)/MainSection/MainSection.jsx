import cn from 'classnames'
import './MainSection.css'

export function MainSection({ className, children }) {
  return (
    <div className="block-fullwidth">
      <section className={cn('main-section', className)}>
        {children}
      </section>
    </div>
  )
}
