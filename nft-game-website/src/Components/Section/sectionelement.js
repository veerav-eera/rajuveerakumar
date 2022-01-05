import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'



export const Section = styled.div`
display:flex;
height:800px;
width:100%;
background: ${({lightbg})=> lightbg ? '#F5EFED': ''};
`
export const SectionContainer = styled.div`
margin-top:0;
display:grid;
height:100%;
width:100%;
grid-template-columns: 40% 40%;
column-gap: 5%;
justify-content: space-around;
`
export const Column1 = styled.div`
height: 100%;
width:100% ;
margin:5%;
display:flex;
justify-content:center;
align-items: center;
`
export const Imagediv = styled.div`
height: 50%;
width: 90%;
display:flex;
justify-content:center;
align-items: center;
`
export const Image = styled.img`
border-radius: 4px;
padding: 5px;
width: 100%;
`
export const Column2 = styled.div`
height: 100%
width:40% ;
margin:5%;
`
export const TextDisplay = styled.div`
display:flex;
justify-content: flex-start;
flex-direction: column;
height:100%;
`
export const Titletext = styled.h1`
font-size:60px;
color:#1B264D;
padding-bottom: 10px;
border-bottom: 5px solid #CBA135;
`
export const Description = styled.p`
padding:20px 20px 20px 0px;
color: #1B264D;
`
export const RequestbuttonDiv = styled.div`
display:flex;
justify-content: center;
align-items:center;
`
export const SendRequestButton = styled(LinkS)`
background: #1B264D;
height:30px;
display: flex;
justify-content: center;
align-items: center;
color:#F5EFED;
padding: 5px 15px;
border-radius: 5px;
font-size: 15px;
cursor: pointer;

transition-property: color , font-size , background , outline , border-radius ;
transition-duration: 0.5s,0.5s,0.5s,0.5s,0.5s;
transition-timing-function: ease-in-out;
&:hover{
    color: #780000;
    font-size:15px;
    background:#F5EFED;
    outline:none;
    border-radius:5px;
    border:3px solid #CBA135;

}
`