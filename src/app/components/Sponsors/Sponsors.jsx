import { MainSection } from '@/app/(layout)/index.js'
import Image from 'next/image.js'
import ZenikaLogo from '../../../../public/images/sponsors/zenika.svg'
import ExternaticLogo from '../../../../public/images/sponsors/externatic.png'
import SfeirLogo from '../../../../public/images/sponsors/sfeir.png'
import MaltLogo from '../../../../public/images/sponsors/malt.svg'
import BamLogo from '../../../../public/images/sponsors/bam.png'

import './Sponsors.css'

export function Sponsors () {
    return (
        <>
            <MainSection>
                <h2>Sponsors</h2>
            </MainSection>
            <MainSection className="sponsors">
                <a href="https://nantes.zenika.com/#/">
                    <Image src={ZenikaLogo} alt='Logo Zenika'/>
                </a>
                <a href="https://www.externatic.fr/">
                    <Image src={ExternaticLogo} alt='Logo Externatic'/>
                </a>
                <a href="https://www.sfeir.com/">
                    <Image src={SfeirLogo} alt='Logo Sfeir'/>
                </a>
                <a href="https://www.bam.tech/">
                    <Image src={MaltLogo} alt='Logo Malt'/>
                </a>
                <a href="https://www.malt.fr/">
                    <Image src={BamLogo} alt='Logo Bam'/>
                </a>
            </MainSection>
        </>
    )
}
