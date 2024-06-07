'use client'
import React from "react";
import Heading from "../ReusableComp/Heading";
import SubHeading from "../ReusableComp/SubHeading";
import { Button } from "../ui/button";
import Image from "next/image";

const AboutDoctor = () => {
  return (
    <div className=" max-w-7xl min-h-[500px] grid grid-cols-1 lg:grid-cols-2 place-items-center  gap-10 lg:gap-0 m-auto ">
      <div className="space-y-3">
        <p className="bg-primary/20 inline-block px-3 py-1 rounded-2xl">
          about dooctris
        </p>
        <Heading
          heading="Good Services And Better Health By Our Specialists"
          className="heading2"
        />
        <SubHeading
          sub={
            "Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation."
          }
          className="subHeading1"
        />
        <SubHeading
          sub={
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words."
          }
          className="subHeading1"
        />
        <Button variant={"default"}>Read More</Button>
      </div>
      <div className="relative w-80 h-96 md:w-[450px] md:h-[500px] ">
            <Image
            src={"/hospitalHome/about-2.4f696a42c208855604fb.png"}
            alt="images"
            fill
            sizes=""

             />
      </div>
    </div>
  );
};

export default AboutDoctor;
