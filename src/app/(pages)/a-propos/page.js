import { MainSection } from '@/app/(layout)'
import Image from 'next/image'

export default function Page () {
    return (
        <MainSection className="full-text">
            <h1>Communauté nantaise des utilisateurs de javascript</h1>
            {/* eslint-disable-next-line @stylistic/max-len */}
            <p>NantesJS est un groupe nantais informel entre utilisateurs et passionnés de JavaScript/ECMAScript. Son but est de favoriser les échanges et rencontres des utilisateurs/développeurs autour de cette technologie, de ses possibilités, de son avenir...
            </p>
            <section>
                <Image
                    src='/images/grue.jpg'
                    alt="La grue titan jaune, vue du quai de la Fosse, à nantes"
                    width={100} height={100}
                />
                <Image
                    src='/images/elephant.jpg'
                    alt="Le Grand éléphant des machines de l'île à nantes"
                    width={100} height={100}
                />
            </section>
            <h2>Les rencontres JS nantaises</h2>
            {/* eslint-disable-next-line @stylistic/max-len */}
            <p>La première rencontre a eu lieu en Janvier 2012. Depuis cette date, les rencontres se sont faites sur une base irrégulomadaire. Les rencontres seront programmées 1 fois par mois, le 3e jeudi du mois !
            </p>
            <p>Sponsors et autres donateurs anonymes, n&#39;hésitez pas à vous manifester 😄</p>
            <h2>Retrouvez-nous sur les réseaux</h2>
            {/* eslint-disable-next-line @stylistic/max-len */}
            <p>Parce qu&#39;une communauté ne vit que par les discussions et les rencontres régulières de ses membres, participez à l&#39;organisation et à la vie de NantesJS sur les différents groupes de discussion et réseaux
            </p>
        </MainSection>
    )
}
