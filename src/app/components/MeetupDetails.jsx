export function MeetupDetails ({ meetup }) {
    const isMeetupHero = meetup.type === 'meetup-hero'

    return (
        <>
            {meetup.talks.map((talk, index) => {
                const description = isMeetupHero
                    ? (
                        <MeetupHeroDescription
                            description={talk.description}
                            final={talk.final}
                        />
                    )
                    : (
                        <p>{talk.description}</p>
                    )

                return (
                    <article key={index}>
                        {talk.title && <h2>{talk.title}</h2>}
                        {description}
                        {talk.requirements && (
                            <TalkRequirements requirements={talk.requirements} />
                        )}
                        <h4>Speakers</h4>
                        {talk.speakers.map((speaker) => (
                            <p key={speaker.id || speaker.name}>{speaker.name}</p>
                        ))}
                    </article>
                )
            })}
        </>
    )
}

const MeetupHeroDescription = ({ description, final }) => (
    <>
        <ul>
            {description.map(({ label, details }) => (
                <li key={label}>
                    <strong>{label}</strong> - {details}
                </li>
            ))}
        </ul>
        {final && <p>{final}</p>}
    </>
)

const TalkRequirements = ({ requirements }) => (
    <>
        <h3>Prérequis</h3>
        <ul>
            {requirements.map((requirement) => (
                <li key={requirement}>{requirement}</li>
            ))}
        </ul>
    </>
)
