import { MainSection } from '@/app/(layout)'

import './MeetupDetails.css'

export function MeetupDetails ({ meetup }) {
    return (
        <MainSection className="meetup-details">
            {meetup.talks.map((talk, index) => (
                <article key={index}>
                    <h2>{talk.title}</h2>
                    <p>{talk.description}</p>
                    {talk.requirements && (
                        <>
                            <h3>Prérequis</h3>
                            <ul>
                                {talk.requirements.map((requirement) => (
                                    <li key={requirement}>{requirement}</li>
                                ))}
                            </ul>
                        </>
                    )}
                    <h4>Speakers</h4>
                    {talk.speakers.map((speaker) => (
                        <p key={speaker.id}>{speaker.name}</p>
                    ))}
                </article>
            ))}
        </MainSection>
    )
}
