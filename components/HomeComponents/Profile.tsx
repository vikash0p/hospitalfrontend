"use client";
import Image from "next/image";
import React from "react";
import { HomeAccordion } from "./HomeAccordion";

const Profile = () => {
  return (
    <div className="max-w-7xl  m-auto  grid grid-cols-1 lg:grid-cols-2 items-center ">
      <div className=" w-full h-[75%] ">
        <Image
          src={
            "/hospitalHome/vaccine-development-amico.8030b02644c0a7af8287582885d32572.svg"
          }
          alt="profileImage"
          width={500}
          height={500}
          className="w-80 h-80 object-cover md:w-96 md:h-96  "
        />
      </div>
      <div className=" pt-14 lg:pt-0">
        <HomeAccordion />
      </div>
    </div>
  );
};

export default Profile;
