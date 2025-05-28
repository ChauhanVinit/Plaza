"use client";
import { useState } from "react";
import Image from "next/image";
import lineShape from "../public/line-shape-08.svg";
import Tag from "../utils/Tag";
import Heading from "../utils/Heading";
import Input from "../utils/Input";
import Textarea from "../utils/Textarea";
import { nanoid } from "nanoid";
import Dropdown from "../utils/Dropdown";
import Button from "../utils/Button";
const FreeQuote = () => {
  const ServicesOptions = [
    {
      id: nanoid(),
      name: "Unarmed Security",
    },
    {
      id: nanoid(),
      name: "Fire Watch",
    },
    {
      id: nanoid(),
      name: "Remote Monitoring",
    },
    {
      id: nanoid(),
      name: "Vehicle Patrol",
    },
  ];
  const facilityOptions = [
    {
      id: nanoid(),
      name: "Vehicle Patrol",
    },
    {
      id: nanoid(),
      name: "Foot Patrol",
    },
    {
      id: nanoid(),
      name: "Fire Watch",
    },
  ];
  const areaOptions = [
    {
      id: nanoid(),
      name: "Vehicle Patrol",
    },
    {
      id: nanoid(),
      name: "Foot Patrol",
    },
    {
      id: nanoid(),
      name: "Fire Watch",
    },
  ];
  const durationOptions = [
    {
      id: nanoid(),
      name: "6 months",
    },
    {
      id: nanoid(),
      name: "1 Year",
    },
    {
      id: nanoid(),
      name: "2 Years",
    },
    {
      id: nanoid(),
      name: "3 Years",
    },
    {
      id: nanoid(),
      name: "5 Years",
    },
  ];

  const [freeQuote, setFreeQuote] = useState({
    userName: "",
    companyName: "",
    userEmail: "",
    userAddress: "",
    userMessage: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name in freeQuote) {
      setFreeQuote({
        ...freeQuote,
        [name]: value,
      });
    }
  };

  return (
    <div className="relative h-[568px] max-w-[1200px] mx-auto mb-[220px] px-[60px] bg-[#0C2459] rounded-[40px] ">
      <Image
        src={lineShape}
        className="z-0 absolute top-0 left-0 max-h-[612px] "
        alt="lineShape"
      />
      <div className="relative flex gap-5 items-start">
        <div className="py-[60px] w-1/3">
          <Tag
            title={"Security you can blindly trust"}
            className={"!bg-gradient-to-t from-[#E2EAFF] to-[#E2EAFF]"}
          />
          <Heading
            title={"Plaza Protection Securing San Jose Inside Out"}
            className={" !text-white"}
          />
          <p className="mt-6 font-dmSans font-normal text-xl !leading-8  text-white max-w-[351px]">
            Serving the San Jose area, our expert team is ready to protect what matters most. Contact us today for a free risk assessment!
          </p>
          <div className="mt-10 inline-flex items-center gap-4">
            <Button
              variant="custom"
              path={"Contact-Us"}
              style={"!min-w-[190px]  !text-white !bg-transparent "}
              name={"Contact Us"}
            />
          </div>
        </div>

        <div className="relative -right-[108px]  pt-[60px] grow">
          <div
            className="p-8 rounded-[40px] border-[3px] border-[#FFFFFF] 
          bg-[linear-gradient(180deg,_#EBF0FF_23%,_#7198FE_100%)] shadow-[0px_4px_4px_0px_rgba(19,85,255,0.15)] backdrop-blur-[192px]"
          >
            <h2 className="mb-6 font-dmSans text-[32px] !leading-10 font-semibold text-[#171A1D] tracking-[-1px] capitalize">
              Get free quote
            </h2>
            <div className="w-full flex gap-4 ">
              <div className="w-1/2">
                <Input
                  placeholder={"Your Name"}
                  onChange={handleInputChange}
                  value={freeQuote.userName}
                  name={"userName"}
                />
              </div>
              <div className="w-1/2">
                <Input
                  placeholder={"Company Name"}
                  onChange={handleInputChange}
                  value={freeQuote.companyName}
                  name={"companyName"}
                />
              </div>
            </div>
            <div className="w-full flex gap-4 mt-4">
              <div className=" w-1/2">
                <Input
                  placeholder={"Email"}
                  onChange={handleInputChange}
                  value={freeQuote.userEmail}
                  name={"userEmail"}
                />
              </div>
              <div className=" w-1/2">
                <Input
                  placeholder={"Your Address"}
                  onChange={handleInputChange}
                  value={freeQuote.userAddress}
                  name={"userAddress"}
                />
              </div>
            </div>
            <div className="w-full flex gap-4 mt-4">
              <div className="w-1/2">
                <Dropdown
                  options={ServicesOptions}
                  placeholder="Select Services"
                />
              </div>
              <div className="w-1/2">
                <Dropdown
                  options={facilityOptions}
                  placeholder="Type Of Facility"
                />
              </div>
            </div>
            <div className="w-full flex gap-4 mt-4">
              <div className="w-1/2">
                <Dropdown options={areaOptions} placeholder="Select Area" />
              </div>
              <div className="w-1/2">
                <Dropdown
                  options={durationOptions}
                  placeholder="Duration Of Service"
                />
              </div>
            </div>
            <div className="w-full  mt-4">
              <Textarea
                placeholder={"Assignment Details"}
                value={freeQuote.userMessage}
                name={"userMessage"}
              />
            </div>

            <div className="mt-8">
              <Button variant="blue" style={"!w-full"} name="submit free quote" />
            </div>
          </div>
        </div>
      </div>                                                                                         
    </div>
  );
};

export default FreeQuote;
