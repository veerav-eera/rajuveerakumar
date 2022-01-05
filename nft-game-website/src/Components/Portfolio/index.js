import React from 'react'
import {
    Section,
    SectionContainer,
    Column1,
    Column2,
    Imagediv,
    Image
} from '../Section/sectionelement'

import {
    SectionTitle,
    Languagediv,
    LanguageIcon,
    Projectlist,
    ProjectName, 
} from './portfolocomponents'

import Buliding from '../../Images/Buliding.png'

const PortfolioSection = ({id}) => {
        return (
            <>
                <Section id={id} lightbg={true}>
                    <SectionContainer>
                        <Column1>
                            <Imagediv>
                                <Image src={Buliding} alt='building block' />
                            </Imagediv>
                        </Column1>
                        <Column2>
                            <SectionTitle>
                                Ongoing projects
                            </SectionTitle>
                            <Languagediv>
                                <LanguageIcon>
                                    Python
                                </LanguageIcon>
                                <Projectlist>
                                    <ProjectName>
                                        Athena
                                    </ProjectName>
                                </Projectlist>
                            </Languagediv>
                        </Column2>
                    </SectionContainer>
                </Section>
            </>
        )

}

export default PortfolioSection
