import React from "react";
import lineShape from "../public/line-shape-08.svg";
import Image from "next/image";
import Tag from "../utils/Tag";
import Heading from "../utils/Heading";
import Button from "../utils/Button";
const SecurityTrustBanner = ({title,btnText}) => {
  return (
    <div className="relative max-w-[1440px] mx-auto mb-20 p-20 rounded-[40px] bg-[#0C2459] text-center">
      <Image
        src={lineShape}
        className="z-0 absolute top-0 left-0 max-h-[612px] "
        alt="lineShape"
      />
      <div className="relative">
        <Tag
          title={"Security you can blindly trust"}
          className={"!bg-gradient-to-t from-[#E2EAFF] to-[#E2EAFF]"}
        />
        <Heading
          className={"!mt-6 !text-white !max-w-[723px] mx-auto"}
          title={title}
        />
        <p
          className="mt-6 mb-10 font-dmSans text-base !leading-7 font-normal text-white 
          max-w-[723px] mx-auto"
        >
          Serving the San Jose area, our expert team is ready to protect what
          matters most. Contact us today for a free risk assessment!
        </p>

        <Button
          variant="custom"
          style={"!min-w-[190px] !text-white !bg-transparent !rounded-2xl"}
          name={btnText}
        />
      </div>
    </div>
  );
};

export default SecurityTrustBanner;
