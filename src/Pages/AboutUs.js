import React from "react";
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Header from "../Components/Header";
import BannerSection from "../Components/AboutUsComponents/BannerSection";
import Banner2 from "../Components/HomepageComponents/Banner2";
import WhyUs  from '../Components/AboutUsComponents/WhyUs';
import MissionVision from "../Components/AboutUsComponents/MissionVision";
import OurTeam from "../Components/AboutUsComponents/OurTeam";



const AboutUs = () =>{
    return (
        <>
        <Header />
        <NavBar />
        <BannerSection />
        <Banner2  />
        <WhyUs />
        <MissionVision />
        <OurTeam />

        <Footer />

        </>
    )
}
export default AboutUs;