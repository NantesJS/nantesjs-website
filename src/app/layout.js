import { firaSans, montserrat } from './fonts'
import { Header } from '@/app/(layout)/Header'
import './globals.css'

export const metadata = {
    title: 'NantesJS - Communauté nantaise des utilisateurs de JavaScript',
    description: 'Communauté Nantaise des utilisateurs de JavaScript',
    keywords: 'meetup, Nantes, JavaScript'
}

export default function RootLayout ({ children }) {
    return (
        <html lang="fr">
            <body className={`${montserrat.className} ${firaSans.variable}`}>
                <Header />
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}
