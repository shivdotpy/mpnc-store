import Image from "next/image";
import React from "react";

export const CompanyLogo = () => {
  return (
    <div className="">
      <Image
        alt="devyani"
        src={"/devyani_logo_dark.png"}
        width={200}
        height={100}
        className="inverse"
      />
    </div>
  );
};
