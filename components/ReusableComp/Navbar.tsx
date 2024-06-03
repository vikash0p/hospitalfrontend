"use client";
import { navLinks } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { Settings, Search, Sidebar } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./ModeToggle";
import { useTheme } from "next-themes";
import { SideBar } from "./SideBar";
import { User } from "./User";
import { SearchBar } from "./SearchBar";

const Navbar = () => {
  const { theme } = useTheme();
  useEffect(()=>{
  localStorage.getItem("theme");
  document.documentElement.getAttribute("data-theme");

  },[theme])

  return (
    <div className="max-w-7xl m-auto h-20 sticky top-0 left-0 right-0">
      <div className=" w-full h-full flex  flex-col lg:flex-row justify-between items-center">
        {/* first */}
        <div className="flex  items-center gap-12">
          <Link href={"/"} className="">
            <Image
              src={
                theme === "light"
                  ? "/hospitalHome/download.png"
                  : "/hospitalHome/download (1).png"
              }
              alt="LogoImage"
              width={500}
              height={500}
              sizes="(min-width: 560px) 112px, calc(100vw - 428px)"
              priority
              className="object-contain w-28 h-14"
            />
          </Link>
          <div className="">
            {navLinks.map((link) => {
              return (
                <Link href={link.to} key={link.to} className="px-4 text-xl">
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
        {/* second */}
        <div className="flex flex-row gap-4 items-center cursor-pointer">
          <SideBar />
          <SearchBar />

          <div>
            <User />
          </div>
          <div className="size-10 rounded-full bg-primary flex flex-col justify-center items-center border border-primary ">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
