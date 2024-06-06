import React from "react";

const Heading = ({ heading, className }: { heading: string, className:string }) => {
  return <h1 className={className}>{heading}</h1>;
};

export default Heading;
