import React from 'react'
import {
    HeroContainer,
    HeroBg,
    VideoBg
} from "./Herocomponents"

import video from '../../Videos/BGvideo.mp4'
const Hero = () => {
    return (
            <HeroContainer id = "home">
                <HeroBg>
                    <VideoBg autoplay loop muted src={video} type='video/mp4'/>
                </HeroBg>
            </HeroContainer>
    )
}

export default Hero
