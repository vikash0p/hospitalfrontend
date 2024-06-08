'use client'
import { prof } from '@/utils/data';
import React from 'react'
import DoctorCard from './DoctorCard';

const Profession = () => {
  return (
    <div className='py-24'>
      <div className="text-center">
        <p className="text-primary bg-primary/10 inline-block px-2 py-1 rounded-full">Find Doctors</p>
        <h5 className="text-3xl font-bold">Find Your Specialists</h5>
        <p className="lg:w-1/2 m-auto">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
      </div>
      <div className='max-w-7xl m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-20'>
        {
            prof.map((value, index)=>{
                return(
                    <DoctorCard  data={value} key={index} />
                )
            })
        }
      </div>
    </div>
  );
}

export default Profession
