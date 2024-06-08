'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import { MdLocationPin } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
import { MdCurrencyRupee } from "react-icons/md";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { IoIosStar } from "react-icons/io";
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { BsGithub } from 'react-icons/bs';
interface prof{

  name: string;
  position: string;
  img: string;
  add1: string;
  time: string;
  price: string;
  rating: number;

}
const DoctorCard = ({data}:{data:prof}) => {
//   console.log("🚀 ~ file: DoctorCard.tsx:16 ~ data:", data);
  return (
    <Card className="w-[300px]">
      <Image
        src={data.img}
        alt={"myImages"}
        width={400}
        height={400}
        className="w-full h-80"
      />
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">{data.name} </CardTitle>
        <CardDescription> {data.position}</CardDescription>
        <div className="flex justify-between items-center ">
          <div className="flex gap-1 text-yellow-500 text-xl">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>
          <div className="flex gap-1">
            <h6>{data.rating} </h6>
            <span>Star</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className='space-y-2'>
        <div className="flex gap-1">
          <MdLocationPin className="text-2xl text-primary" />
          <h6>{data.add1} </h6>
        </div>
        <div className="flex gap-1">
          <MdAccessTimeFilled className="text-2xl text-primary" />
          <h6>{data.time} </h6>
        </div>
        <div className="flex gap-1">
          <MdCurrencyRupee className="text-2xl text-primary" />
          <p>{data.price}00 / Visit </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center text-xl gap-3 ">
            <Link href={'/'} className="p-3 rounded-full bg-primary/10 dark:bg-primary/50 hover:bg-primary hover:dark:bg-white hover:dark:text-black transition-colors duration-500 hover:text-white "><FaFacebook/> </Link>
            <Link href={'/'} className="p-3 rounded-full bg-primary/10 dark:bg-primary/50 hover:bg-primary hover:dark:bg-white hover:dark:text-black transition-colors duration-500 hover:text-white "><FaLinkedin /> </Link>
            <Link href={'/'} className="p-3 rounded-full bg-primary/10 dark:bg-primary/50 hover:bg-primary hover:dark:bg-white hover:dark:text-black transition-colors duration-500 hover:text-white "><BsGithub /> </Link>
            <Link href={'/'} className="p-3 rounded-full bg-primary/10 dark:bg-primary/50 hover:bg-primary hover:dark:bg-white hover:dark:text-black transition-colors duration-500 hover:text-white "><FaTwitter /> </Link>
      </CardFooter>
    </Card>
  );
}

export default DoctorCard
