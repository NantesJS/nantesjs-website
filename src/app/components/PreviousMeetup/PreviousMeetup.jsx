import Image from 'next/image'
import Link from 'next/link'
import { MeetupDate } from '@/app/components'
import { MainSection } from '@/app/(layout)'

import './PreviousMeetup.css'

export function PreviousMeetup ({ meetup }) {
    const { date, id, image, title, sponsor, hosting } = meetup

    const talks = meetup.talks.map((talk) => ({
        ...talk,
        speakers: talk.speakers.map((speaker) => speaker.name).join(', ')
    }))

    return (
        <MainSection className="previous-meetup">
            <div>
                <MeetupDate date={date} />
                <Image
                    src={`/images/meetups/${image}`}
                    alt=""
                    width={100}
                    height={100}
                />
            </div>
            <section>
                <h2>
                    <Link href={`/meetup/${id}`}>{title}</Link>
                </h2>
                {talks.map((talk) => (
                    <article key={`${talk.title}-talk`}>
                        <strong>{talk.title}</strong>
                        <p>{talk.speakers}</p>
                    </article>
                ))}
            </section>
            <div>
                {sponsor && (
                    <p>
                        Sponsorisé par <strong>{sponsor.name}</strong>
                    </p>
                )}
                <p>
                    Hébergé par <strong>{hosting.name}</strong>
                </p>
            </div>
        </MainSection>
    )
}
