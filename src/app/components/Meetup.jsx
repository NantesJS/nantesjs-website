import { MainSection } from '@/app/(layout)'
import { MeetupDetails, MeetupTitle } from '@/app/components'

import './Meetup.css'

export async function Meetup ({ meetup }) {
    return (
        <MainSection className="meetup">
            <MeetupTitle meetup={meetup} />
            <MeetupDetails meetup={meetup} />
        </MainSection>
    )
}
