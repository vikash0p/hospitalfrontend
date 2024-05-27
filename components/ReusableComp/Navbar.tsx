'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-16 bg-slate-300'>
        <div className="flex  flex-col lg:flex-row justify-around items-center">
          <Link href={'/'} className="">
            <Image
            src={"/hospitalHome/download.png"}
            alt='Logo'
            width={5001}
            height={500}
            className='object-contain w-28 h-14'
             />
          </Link>
          <div className="">
            
          </div>
        </div>
    </div>
  )
}

export default Navbar
