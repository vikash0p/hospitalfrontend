'use client'
import {type navLinksTypes, myImages} from '@/utils/types'
import { FaUserDoctor } from "react-icons/fa6";
import { ReactElement } from "react";
import { BiClinic } from "react-icons/bi";
import { GrHpeLabs } from "react-icons/gr";
import { GrEmergency } from "react-icons/gr";
import { AiOutlineInsurance } from "react-icons/ai";

export const navLinks:navLinksTypes[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/doctor", label: "Doctor" },
];

export const myImage: myImages[] = [
  {
    id: 1,
    img: "/hospitalHome/download (2).png",
  },
  {
    id: 2,
    img: "/hospitalHome/download (3).png",
  },
  {
    id: 3,
    img: "/hospitalHome/download (4).png",
  },
  {
    id: 4,
    img: "/hospitalHome/download (5).png",
  },
  {
    id: 5,
    img: "/hospitalHome/download (6).png",
  },
  {
    id: 6,
    img: "/hospitalHome/download (7).png",
  },
];


interface Category {
  id: number;
  icon: ReactElement;
  head: string;
  sub: string;
  link:string;
}

export const cat: Category[] = [
  {
    id: 1,
    icon: <FaUserDoctor />,
    head: "Doctors",
    sub: "Experienced professionals providing exceptional care.",
    link: "/",
  },
  {
    id: 2,
    icon: <BiClinic />,
    head: "Doctors",
    sub: "Experienced professionals providing exceptional care.",
    link: "/",
  },
  {
    id: 3,
    icon: <GrHpeLabs />,
    head: "Doctors",
    sub: "Experienced professionals providing exceptional care.",
    link: "/",
  },
  {
    id: 4,
    icon: <GrEmergency />,
    head: "Doctors",
    sub: "Experienced professionals providing exceptional care.",
    link: "/",
  },
  {
    id: 2,
    icon: <AiOutlineInsurance />,
    head: "Doctors",
    sub: "Experienced professionals providing exceptional care.",
    link: "/",
  },
];