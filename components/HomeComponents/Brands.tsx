'use client'
import { myImage } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const Brands = () => {
  return (
    <div className='w-full bg-gray-200 dark:bg-gray-900 flex  h-24 justify-center items-center gap-5 flex-wrap'>
        {
            myImage.map((value)=>{
                return(
                    <div key={value.id} className=''>
                            <Image src={value.img } alt={value.img} width={300} height={300} className='object-contain w-48 size-16 object-center' />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Brands
