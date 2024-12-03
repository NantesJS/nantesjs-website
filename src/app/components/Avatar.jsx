import Image from 'next/image'
import './Avatar.css'

export function Avatar({ speaker }) {
  return (
    <div className="avatar">
      <Image src={speaker.image} width={100} height={100} alt="coucou" />
      <p>{speaker.name}</p>
    </div>
  )
}
