import styled from 'styled-components';
import { Link as LinkScroll,animateScroll as scroll  } from 'react-scroll'

export const Navbar2 = styled.div`
position: sticky;
position: -webkit-sticky;
top: 0;
z-index:10;
`
export const Nav = styled.div`
 background-color: ${({scrollNav})=>(scrollNav ? '#1B264D':'rgba(245,239,237,0)' )};
 height:60px;
 display: flex;
 align-items: center;
 justify-content: center;
 transition-property:background-color;
 transition-duration: 0.5s;
 transition-timing-function: ease-in-out;
 z-index:10;
 
`
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height:80px;
z-index:1;
width:100%;
padding:0 24px;
`
export const NavbarLogo = styled.div`
height: 70px;
Margin:5px;
display:flex;
align-items:center;
justify-self: flex-start;
font-weight: 900;
font-size: 2rem;
color:#F5EFED;
`

export const LinksDiv = styled.ul`
display: flex;
height: 80px;
width:100%;
align-items: center;
justify-content: center;
flex-direction: row;
list-style:none;
justify-content: flex-end;

@media screen and(max-width : 768px){
    display:none;
}
`
export const LinksList = styled.li`
float: right;
height:60px;
margin: 5px;
display:flex;
align-items:center;
padding: 0 30px;
font-size:1.2rem;

&:hover{
    Border-bottom:3px solid #CBA135;
}

`
export const Linklistitems = styled(LinkScroll)`
color: #F5EFED;
cursor:pointer;

&:active{
    Border-bottom:3px solid #CBA135;
}
`