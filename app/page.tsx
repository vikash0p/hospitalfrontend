import Brands from '@/components/HomeComponents/Brands'
import HomeHero from '@/components/HomeComponents/HomeHero'
import Information from '@/components/HomeComponents/Information'
import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-screen '>
       <HomeHero />
       <Brands />
       <Information />
    </div>
  )
}

export default Home
