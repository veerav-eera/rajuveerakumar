import React from 'react'
import {
    Section,
    SectionContainer,
    Column1,
    Column2,
    TextDisplay,
    Titletext,
    Description,
    RequestbuttonDiv,
    SendRequestButton,
    Imagediv,
    Image

} from './sectionelement'

import Buliding from '../../Images/Aboutme.png'

const InfoSection = ({ id }) => {

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
                        <TextDisplay>
                            <Titletext>
                                About Me
                            </Titletext>
                            <Description>
                                A year 2 singapore poly student with knowledge in Frontend Backend development.I am also currently working on a
                                Desktop assistant to help me manage workloads, deadlines and many more.
                                <br /><br />
                                I have knowledge in marketing, graphics design, product photography. With my knowledge i aim to help your company be better
                                included into the digital space.
                            </Description>
                            <RequestbuttonDiv>
                                <SendRequestButton to='Contact'>
                                    Send a request
                                </SendRequestButton>
                            </RequestbuttonDiv>
                        </TextDisplay>
                    </Column2>
                </SectionContainer>
            </Section>
        </>
    )
}

export default InfoSection
