import Image from 'next/image.js'
import './MeetupDetails.css'
import { MainSection } from '@/app/(layout)'

export function MeetupDetails () {
    return (
        <MainSection>
            <Image src="/meetup-images/accessibility.png" alt="accessibilité" width={100} height={100}/>
            <section>
                <h1>Meetup XX</h1>
                <p>Sponsorisé par <strong>NantesJS</strong></p>
                <p>Hébergé par <strong>Epitech</strong></p>
            </section>
            <p>18 janv. 2024</p>
        </MainSection>
    )
}
