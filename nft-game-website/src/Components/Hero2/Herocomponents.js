import styled from "styled-components";

export const HeroContainer = styled.div`
background:white;
display:flex;
justify-content: center;
aligh-items:center;
padding:0 30px;
height:800px
position: relative;
z-index:1;
`

export const HeroBg = styled.div`
position:absolute;
top:0;
left:0;
right:0;
bottom:0;
width:100%
height:1005
overflow: hidden;
`

export const VideoBg = styled.video`
width:100%;
height:100%;
-o-object-fit: cover;
object-fit:cover;
background:white;

`