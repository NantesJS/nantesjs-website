import { MeetupDetails, MeetupTitle } from '@/app/components'
import { getSortedMeetupListByYear } from '@/lib'

export default function Page () {
    const [ nextMeetup, ...meetupList ] = getSortedMeetupListByYear()

    return (
        <>
            <MeetupTitle meetup={nextMeetup} />
            <MeetupDetails meetup={nextMeetup} />
        </>
    )
}

