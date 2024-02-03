import Image from 'next/image'

export function Logo() {
    return (
        <Image
            src="/nantesjs-logo.svg"
            alt="Logo de NantesJS - Communauté nantaise des utilisateurs de JavaScript"
            height={500}
            width={500}
            className='logo'
        />
    )
}
