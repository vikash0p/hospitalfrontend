import React from "react";

const SubHeading = ({ sub }: { sub: string }) => {
  return <p className="text-center md:w-1/3 m-auto text-black/50 dark:text-white/50 ">{sub}</p>;
};

export default SubHeading;
