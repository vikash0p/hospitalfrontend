import AboutDoctor from '@/components/HomeComponents/AboutDoctor'
import Brands from '@/components/HomeComponents/Brands'
import HomeHero from '@/components/HomeComponents/HomeHero'
import Information from '@/components/HomeComponents/Information'
import OurMission from '@/components/HomeComponents/OurMission'
import Profession from '@/components/HomeComponents/Profession'
import Profile from '@/components/HomeComponents/Profile'
import Footer from '@/components/ReusableComp/Footer'
import React from 'react'

const Home = () => {
  return (
    <div className="w-full h-screen ">
      <HomeHero />
      <Brands />
      <Information />
      <AboutDoctor />
      <OurMission />
      <Profession />
      <Profile />
      <Footer />
    </div>
  );
}

export default Home
