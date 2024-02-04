import { getPostData } from '@/lib/posts'

// Set the title of the page to be the post title, note that we no longer use
// e.g. next/head in app dir, and this can be async just like the server
export async function generateMetadata ({ params }) {

    const postData = await getPostData(params.id)

    return {
        title: postData.title
    }

}

export default async function Post ({ params }) {

    const postData = await getPostData(params.id)

    return (
        <>
            {/* Post Title */}
            <h1>{postData.title}</h1>

            <div
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
        </>
    )

}
