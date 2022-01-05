import React, { useState, useEffect } from 'react'
import {
    Navbar2,
    Nav,
    NavbarContainer,
    NavbarLogo,
    LinksDiv,
    LinksList,
    Linklistitems
} from './NavbarElements'
const Navbar = ({toggle}) => {
    const [scrollNav, setscrollnav] = useState(false);

    const changenav = () => {

        if (window.scrollY >= 80) {
            setscrollnav(true)
        } else {
            setscrollnav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changenav)
    }, []);
    return (
        <Navbar2 >
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavbarLogo onClick={toggle}>
                        Raju Veerakumar
                    </NavbarLogo>
                </NavbarContainer>
                <LinksDiv>
                    <LinksList>
                        <Linklistitems to={'about'} activeClass="active" spy={true} smooth={true} offset={0} duration={500}>
                            About
                        </Linklistitems>
                    </LinksList>
                    <LinksList>
                        <Linklistitems to={'Contact'} spy={true} smooth={true} offset={0} duration={500}>
                            Contact
                        </Linklistitems>
                    </LinksList>
                    <LinksList>
                        <Linklistitems to={'portfolio'} spy={true} smooth={true} offset={0} duration={500}>
                            Portfolio
                        </Linklistitems>
                    </LinksList>
                </LinksDiv>
            </Nav>
        </Navbar2>
    )
}

export default Navbar