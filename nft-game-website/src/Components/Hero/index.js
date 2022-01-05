import React from 'react'
import {
    Herodiv,
    Maintext,
    Description,
    ButtonLink,
    HeroText,
} from './HeroComponents'
/*

*/
const Hero = () => {
    return (
        <Herodiv>
            <HeroText>
                <Maintext>
                    Raju Veerakumar
                </Maintext>
                <Description>
                    Web-developer
                </Description>
                <ButtonLink to={'about'}>
                    About Me
                </ButtonLink>
            </HeroText>
        </Herodiv>
    )
}

export default Hero
