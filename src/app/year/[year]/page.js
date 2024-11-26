import { getMeetupsByYear } from '@/lib'

import { PreviousMeetup } from '@/app/components'

/*
 * Set the title of the page to be the post title, note that we no longer use
 * e.g. next/head in app dir, and this can be async just like the server
 */
export async function generateMetadata ({ params }) {
    const { year } = await params

    return {
        title: `Meetups pour l'année ${year}`
    }
}

export default async function Post ({ params }) {
    const { year } = await params
    const meetupList = getMeetupsByYear(parseInt(year, 10))

    return (
        <>
            {meetupList.map((meetup) => (
                <PreviousMeetup key={meetup.id} meetup={meetup} />
            ))}
        </>
    )
}
