import { getMeetupData } from '@/lib'
import { MeetupDetails, MeetupTitle } from '@/app/components'

/*
 * Set the title of the page to be the post title, note that we no longer use
 * e.g. next/head in app dir, and this can be async just like the server
 */
export async function generateMetadata ({ params }) {
    const { id } = await params
    const postData = await getMeetupData(id)

    return {
        title: postData.title
    }
}

export default async function Post ({ params }) {
    const { id } = await params
    const meetup = await getMeetupData(id)

    return (
        <>
            <MeetupTitle meetup={meetup} />
            <MeetupDetails meetup={meetup} />
        </>
    )
}
