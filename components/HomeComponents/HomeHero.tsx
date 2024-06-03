"use client";
import Image from "next/image";
import React from "react";

const HomeHero = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 place-items-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Find Best Doctor</h1>
        <p>
          Great doctor if you need your family member to get immediate
          assistance, emergency treatment or a simple consultation.
        </p>
        <div className="w-full h-14 bg-transparent flex flex-row rounded-xl">
          <input
            type="text"
            name="search"
            id="search"
            className="w-full h-full pl-4 dark:bg-white text-black bg-gray-200 outline-none"
            placeholder="Search..."
            aria-label="Search for doctors"
          />
          <button
            type="button"
            disabled
            className="h-full px-10 rounded-r-xl bg-primary text-white"
            aria-label="Search"
          >
            Search
          </button>
        </div>
      </div>
      <div className="w-full h-full">
        <Image
          src="/hospitalHome/hero.62ecce1a743f271c332f.png"
          alt="A doctor in a hospital setting"
          width={500}
          height={500}
          className="object-cover object-center m-auto"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default HomeHero;
