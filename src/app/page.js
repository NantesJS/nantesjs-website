import { getSortedMeetupListByYear } from '@/lib'
import { Meetup, PreviousMeetup, Sponsors } from '@/app/components'
import { MainSection } from '@/app/(layout)'
import Link from 'next/link'
import { getPreviousYears } from '@/lib/getSortedMeetupListByYear.js'

export default function Page () {
    const [ nextMeetup, ...meetupList ] = getSortedMeetupListByYear()
    const previousList = meetupList.map((meetup) => {
        const talks = meetup.talks.map((talk) => ({
            ...talk,
            speakers: talk.speakers.map((speaker) => speaker.name).join(', ')
        }))

        return { ...meetup, talks }
    })

    const test = getPreviousYears()
    console.log(test)

    return (
        <>
            <Meetup meetup={nextMeetup} />
            <Sponsors />
            <MainSection>
                <h2>Évènements passés</h2>
            </MainSection>
            {previousList.map((meetup) => (
                <PreviousMeetup key={meetup.id} meetup={meetup} />
            ))}
            <MainSection>
                <h2>Consulter les évènements des autres années</h2>
            </MainSection>
            <MainSection className="previous-years">
                {/* {years.map((year) => (*/}
                {/*    <Link href={`/year/${year}`}>{year}</Link>*/}
                {/* ))}*/}
            </MainSection>
        </>
    )
}

