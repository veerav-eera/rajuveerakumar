import styled from 'styled-components';
import { keyframes } from 'styled-components';
import HeroImage from '../../Images/HeroImg.png';
import { Link as LinkScroll } from 'react-scroll'

const Neon_flicker = keyframes`
0%, 18%, 22%, 25%, 53%, 57%, 100% {
    text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #0fa,
      0 0 80px #0fa,
      0 0 90px #0fa,
      0 0 100px #0fa,
      0 0 150px #0fa;
  }
  20%, 24%, 55% {       
    text-shadow: none;
  }
`
export const Herodiv = styled.div`
height:800px;
Width:100%;
margin-top:-60px;
background: white;
display:flex;
align-items: center;
justify-content: center;
background-image: url(${HeroImage});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`
export const HeroText = styled.div`
display:flex;
align-items: center;
Justify-content:center;
height: 200px;
flex-direction: column;
`
export const Maintext    = styled.h1`
padding-left: 25px;
text-align: center;
position: relative;
top: 45%;
color: #CBA135;
margin:0;
`

export const Description = styled.p`
text-align: center;
position: relative;
top: 45%;
font-size:70px;
color:#F5EFED;
margin:0;
`

export const ButtonLink   = styled(LinkScroll)`
background:#F5EFED;
height:40px;
display:flex;
position: relative;
align-items:center;
justify-content: center;
border-radius: 12px;
top:50%;
padding:0px 30px;
cursor:pointer;
`