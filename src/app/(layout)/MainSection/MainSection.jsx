import './MainSection.css'

export function MainSection ({ classname, children }) {
    return (
        <section className="main-section">
            {children}
        </section>
    )
}
