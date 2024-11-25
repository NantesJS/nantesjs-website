import Image from 'next/image'
import Link from 'next/link'
import { MeetupDate } from '@/app/components'
import { MainSection } from '@/app/(layout)'

import './PreviousMeetup.css'

export function PreviousMeetup ({ meetup }) {
    const { date, id, image, title, talks, sponsor, venue } = meetup

    return (
        <MainSection className="previous-meetup">
            <div>
                <MeetupDate date={date}/>
                <Image
                    src={`/images/meetups/${image}`}
                    alt=""
                    width={100}
                    height={100}
                />
            </div>
            <section>
                <h2>
                    <Link href={`/meetups/${id}`}>{title}</Link>
                </h2>
                {talks.map((talk) => (
                    <article key={talk.id}>
                        {talk.title && <strong>{talk.title}</strong>}
                        {talk.speakers && <p>{talk.speakers}</p>}
                    </article>
                ))}
            </section>
            <div>
                <p>Sponsorisé par <strong>{sponsor.name}</strong></p>
                <p>Hébergé par <strong>{venue.name}</strong></p>
            </div>
        </MainSection>
    )
}
