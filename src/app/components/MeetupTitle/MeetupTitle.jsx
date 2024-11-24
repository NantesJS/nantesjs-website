import Image from 'next/image'
import { MainSection } from '@/app/(layout)/index.js'
import { MeetupDate } from './MeetupDate'
import './MeetupTitle.css'

/**
 * MeetupTitle is a functional component that renders the title section of a meetup.
 *
 * This component displays the meetup's logo, title, sponsor and host details, and the date.
 */
export function MeetupTitle ({ meetup }) {
    const { date, image, title, sponsor, venue } = meetup

    return (
        <MainSection className="meetup-title">
            <Image
                src={image}
                alt=""
                width={100}
                height={100}
            />

            <section>
                <h1>{title}</h1>
                <p>Sponsorisé par <strong>{sponsor.name}</strong></p>
                <p>Hébergé par <strong>{venue.name}</strong></p>
            </section>

            <MeetupDate date={date} />
        </MainSection>
    )
}
