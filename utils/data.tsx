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
    head: "Clinics",
    sub: "Experienced professionals providing exceptional care.",
    link: "/",
  },
  {
    id: 3,
    icon: <GrHpeLabs />,
    head: "Labs",
    sub: "Experienced professionals providing exceptional care.",
    link: "/",
  },
  {
    id: 4,
    icon: <GrEmergency />,
    head: "Emergency",
    sub: "Experienced professionals providing exceptional care.",
    link: "/",
  },
  {
    id: 2,
    icon: <AiOutlineInsurance />,
    head: "Insurance",
    sub: "Experienced professionals providing exceptional care.",
    link: "/",
  },
];


export const prof = [
  {
    name: "Alex Thomas",
    position: "M.B.B.S, Urologist",
    img: "/hospitalHome/01.d8b9651b2a3ba6336221.jpg",
    add1: "63, PG Shustoke, UK",
    time: "Mon: 2:00PM - 6:00PM",
    price: "75",
    rating: 5,
  },
  {
    name: "Philip Reynolds",
    position: "M.B.B.S, Neurologist",
    img: "/hospitalHome/02.38e00cf46dc0cbd9fed3.jpg",
    add1: "63, PG Shustoke, UK",
    time: "Mon: 2:00PM - 6:00PM",
    price: "75",
    rating: 5,
  },
  {
    name: "Luke Brown",
    position: "Eye Care",
    img: "/hospitalHome/03.b192aca452235f61b392.jpg",
    add1: "63, PG Shustoke, UK",
    time: "Mon: 2:00PM - 6:00PM",
    price: "75",
    rating: 5,
  },
  {
    name: "Franklin Logan",
    position: "M.B.B.S, Gynecologist",
    img: "/hospitalHome/04.f645789423636f851180.jpg",
    add1: "63, PG Shustoke, UK",
    time: "Mon: 2:00PM - 6:00PM",
    price: "75",
    rating: 5,
  },
  {
    name: "Celia Ryan",
    position: "M.B.B.S, Psychotherapist",
    img: "/hospitalHome/05.e4b5d05f3ab9e6bad04a.jpg",
    add1: "63, PG Shustoke, UK",
    time: "Mon: 2:00PM - 6:00PM",
    price: "75",
    rating: 5,
  },
  {
    name: "Annie Martin",
    position: "M.B.B.S, Psychotherapist",
    img: "/hospitalHome/06.5f6ca505ccd7235d60cb.jpg",
    add1: "63, PG Shustoke, UK",
    time: "Mon: 2:00PM - 6:00PM",
    price: "75",
    rating: 5,
  },
  {
    name: "Nelle Arnold",
    position: "M.B.B.S, Orthopedic",
    img: "/hospitalHome/07.ab134f26065c7dbc1327.jpg",
    add1: "63, PG Shustoke, UK",
    time: "Mon: 2:00PM - 6:00PM",
    price: "75",
    rating: 5,
  },
  {
    name: "Gussie Simpson",
    position: "M.B.B.S, Dentist",
    img: "/hospitalHome/08.b123ead5517617943499.jpg",
    add1: "63, PG Shustoke, UK",
    time: "Mon: 2:00PM - 6:00PM",
    price: "75",
    rating: 5,
  },
];