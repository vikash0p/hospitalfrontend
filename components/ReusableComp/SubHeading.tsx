import React from "react";

const SubHeading = ({ sub, className }: { sub: string , className:string}) => {
  return <p className={className}>{sub}</p>;
};

export default SubHeading;
