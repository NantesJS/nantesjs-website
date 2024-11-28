import Link from 'next/link'
import { ExternalLink } from 'react-feather'
import { MainSection } from '@/app/(layout)'
import { MeetupDetails, MeetupTitle } from '@/app/components'

import './Meetup.css'

export async function Meetup ({ meetup }) {
    return (
        <MainSection className="meetup">
            <MeetupTitle meetup={meetup} />
            <MeetupDetails meetup={meetup} />
            <p className="reservation">
                <Link href={meetup.ticketsUrl}>
                    Réserver votre place
                    <ExternalLink />
                </Link>
            </p>
        </MainSection>
    )
}
