import { getSortedMeetupListByYear } from '@/lib'
import { Meetup, Sponsors } from '@/app/components'

export default function Page () {
    const [ nextMeetup, ...meetupList ] = getSortedMeetupListByYear()

    return (
        <>
            <Meetup meetup={nextMeetup} />
            <Sponsors />
        </>
    )
}

