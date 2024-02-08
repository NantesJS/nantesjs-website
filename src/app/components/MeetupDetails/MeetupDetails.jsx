import Image from 'next/image'
import { MainSection } from '@/app/(layout)'
import { MeetupDate } from './MeetupDate'
import './MeetupDetails.css'

/**
 * MeetupDetails is a functional component that displays details of a meetup
 * including its image, title, sponsors, hosting details, and date
 */

export function MeetupDetails () {
    return (
        <MainSection className="meetup-details">
            <Image src="/meetup-images/accessibility.png" alt="Logo accessibilité" width={100} height={100}/>
            <section>
                <h1>Meetup #77</h1>
                <p>Sponsorisé par <strong>NantesJS</strong></p>
                <p>Hébergé par <strong>Epitech</strong></p>
            </section>
            <MeetupDate />
        </MainSection>
    )
}
