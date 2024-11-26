import Image from 'next/image'

export function Logo () {
    return (
        <Image
            alt="Logo de NantesJS - Communauté nantaise des utilisateurs de JavaScript"
            className="logo"
            height={500}
            priority={true}
            src="/nantesjs-logo.svg"
            width={500}
        />
    )
}
