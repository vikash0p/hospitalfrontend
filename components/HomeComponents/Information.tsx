"use client";
import Heading from "../ReusableComp/Heading";
import SubHeading from "../ReusableComp/SubHeading";
import * as React from "react";
import { MoveRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cat } from "@/utils/data";
import Link from "next/link";

const Information = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-10 justify-center items-center`">
      <div>
        <Heading heading={"Explore By Categories"} className={"heading1"} />
        <SubHeading
          sub={
            "Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation."
          }
        />
      </div>
      <div className="flex  gap-5 justify-center flex-wrap">
        {cat.map((value) => {
          return (
            <Card className="w-[250px] space-y-2 pt-4" key={value.head}>
              <p className="text-4xl text-primary p-3 rounded-full bg-primary/10 inline-block ms-5 ">
                {value.icon}{" "}
              </p>
              <CardHeader className="space-y-3">
                <CardTitle>{value.head} </CardTitle>
                <CardDescription>{value.sub}</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter>
                <Link href={value.link} className="flex flex-row gap-2 font-bold text-primary" >Find here  <MoveRight /> </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Information;
