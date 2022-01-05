import { React, useState } from 'react'
import Hero from '../Components/Hero/index';
import Navbar from '../Components/Navbar/Index'
import InfoSection from '../Components/Section/index'
import FormSection from '../Components/Form';
import PortfolioSection from '../Components/Portfolio';


const Home = () => {

    return (
        <>
            <Navbar/>
            <Hero/>
            <InfoSection id='about' />
            <FormSection id='Contact'/>
            <PortfolioSection id='portfolio'/>
        </>
    )
}

export default Home
