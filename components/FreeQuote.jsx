"use client";
import { useState } from "react";
import Image from "next/image";
import Shutterstock from "@/public/Shutterstock.png";
import lineShape from "@/public/line-shape-08.svg";
import right from "@/public/right.svg";
import Tag from "@/utils/Tag";
import Heading from "@/utils/Heading";
import Input from "@/utils/Input";
import Textarea from "@/utils/Textarea";
import { nanoid } from "nanoid";
import Dropdown from "@/utils/Dropdown";
import Button from "@/utils/Button";
const FreeQuote = () => {
  const ServicesOptions = [
    
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

  const [freeQuote, setFreeQuote] = useState({
    userName: "",
    companyName: "",
    userEmail: "",
    name: "",
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
    <div className="relative max-h-[612px] max-w-[1440px] mx-auto  mb-40   px-[60px] bg-[#0C2459] rounded-[40px] ">
      <Image
        src={lineShape}
        className="z-0 absolute top-0 left-0 max-h-[612px] "
        alt="lineShape"
      />
      <div className="relative flex items-start">
        <div className=" pt-20 pb-24 pr-8 w-[30%] ">
          <Tag title={"Security you can blindly trust"} className={'!bg-gradient-to-t from-[#E2EAFF] to-[#E2EAFF]'} />
          <Heading
            title={"Plaza Protection : Securing San Jose Inside Out"}
            className={"!max-w-[326px] !text-white"}
          />
          <p className="mt-6 font-jakarta font-normal text-base leading-7 text-white max-w-[326px]">
            Serving the San Jose area, our expert team is ready to protect what
            matters most. Contact us today for a free risk assessment!
          </p>
          <div className="mt-10 inline-flex items-center gap-4">
            <Button
                variant="custom"
        
                style={"!min-w-[190px]  !text-white !bg-transparent !rounded-2xl"}
                name={"About Us"}
              />
          </div>
        </div>
        <div className="relative pt-8 pr-[11px] w-[30%]  ">
          <Image
            src={Shutterstock}
            alt="Shutterstock"
            className="w-full h-[580px] object-cover"
          />
        </div>
        <div className="relative pt-20 w-[40%]  ">
          <div className="p-8 rounded-3xl bg-[#F0F4FF] shadow-[0px_5px_15px_0px_rgba(19,85,255,0.2)]">
            <h2 className="mb-6 font-urbanist text-[32px] font-bold text-[#222A5B]">
              Get Free Quote
            </h2>
            <div className="w-full flex gap-6 ">
              <div className="w-1/2">
                <Input
                  placeholder={"Your Name"}
                  onChange={handleInputChange}
                  value={freeQuote.userName}
                  name={"userName"}
                  className={"!py-[15px] px-6 border-[#7198FE]/50"}
                />
              </div>
              <div className="w-1/2">
                <Input
                  placeholder={"Company Name"}
                  onChange={handleInputChange}
                  value={freeQuote.companyName}
                  name={"companyName"}
                  className={"!py-[15px] px-6 border-[#7198FE]/50"}
                />
              </div>
            </div>
            <div className="w-full flex gap-6 mt-4">
              <div className=" w-1/2">
                <Input
                  placeholder={"Email"}
                  onChange={handleInputChange}
                  value={freeQuote.userEmail}
                  name={"userEmail"}
                  className={"!py-[15px] px-6 border-[#7198FE]/50"}
                />
              </div>
              <div className=" w-1/2">
                <Input
                  placeholder={"Your Name"}
                  onChange={handleInputChange}
                  value={freeQuote.name}
                  name={"name"}
                  className={"!py-[15px] px-6 border-[#7198FE]/50"}
                />
              </div>
            </div>
            <div className="w-full flex gap-6 mt-4">
              <div className="w-1/2">
                <Dropdown options={ServicesOptions} height="h-[55px]" placeholder="Select Services" />
              </div>
              <div className="w-1/2">
                <Dropdown options={facilityOptions} height="h-[55px]" placeholder="Type Of Facility" />
              </div>
            </div>
            <div className="w-full flex gap-6 mt-4">
              <div className="w-1/2">
                <Dropdown options={areaOptions} height="h-[55px]" placeholder="Select Area" />
              </div>
              <div className="w-1/2"> 
                <Dropdown options={durationOptions} height="h-[55px]" placeholder="Duration Of Service" />
              </div>
            </div>
            <div className="w-full  mt-4">
              <Textarea
                placeholder={"Write Your Message"}
                value={freeQuote.userMessage}
                name={"userMessage"}
                className={"!py-[17px] border-[#7198FE]/50"}
              />
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Button
                variant="blue"
                icon={<Image src={right} alt="right" className="w-4 h-4" />}
                style={"!min-w-[175px] !rounded-2xl  "}
                name="Submit"
              />
              <span className="font-jakarta text-base font-semibold text-[#1D2939]">
                Or
              </span>
              <Button
                variant="custom"
                style={"!min-w-[135px] !bg-transparent !rounded-2xl"}
                name={"Contact Us"}
                path="/Contact-Us"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeQuote;
