import { getSortedMeetupListByYear } from '@/lib'
import { Meetup, PreviousMeetup, Sponsors } from '@/app/components'
import { MainSection } from '@/app/(layout)'
import Link from 'next/link'
import { getPreviousYears } from '@/lib/getSortedMeetupListByYear.js'

export default function Page () {
    const [ nextMeetup, ...meetupList ] = getSortedMeetupListByYear()

    const previousYears = getPreviousYears()

    return (
        <>
            <Meetup meetup={nextMeetup} />
            <Sponsors />
            <MainSection>
                <h2>Évènements passés</h2>
            </MainSection>
            {meetupList.map((meetup) => (
                <PreviousMeetup key={meetup.id} meetup={meetup} />
            ))}
            <MainSection>
                <h2>Consulter les évènements des autres années</h2>
            </MainSection>
            <MainSection className="previous-years">
                {previousYears.map((year) => (
                    <Link key={year} href={`/year/${year}`}>{year}</Link>
                ))}
            </MainSection>
        </>
    )
}

