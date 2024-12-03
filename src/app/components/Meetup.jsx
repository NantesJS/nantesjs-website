import Link from 'next/link'
import { ExternalLink, Eye } from 'react-feather'
import { MainSection } from '@/app/(layout)'
import { MeetupDetails, MeetupTitle } from '@/app/components'

import './Meetup.css'

export async function Meetup({ meetup }) {
  const next = meetup.status === 'next'

  return (
    <MainSection className="meetup">
      <MeetupTitle meetup={meetup} />
      <MeetupDetails meetup={meetup} />
      {next && (
        <p className="reservation">
          <Link
            href={meetup.ticketsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
                        Réserver votre place
            <ExternalLink />
          </Link>
          <Link
            href={`/posters/meetup-${meetup.id}-poster.jpg`}
            target="_blank"
            rel="noopener noreferrer"
            className="meetup-poster"
          >
                        Voir l&#39;affiche
            <Eye />
          </Link>
        </p>
      )}
    </MainSection>
  )
}
