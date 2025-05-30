"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Button from "../../utils/Button";
import Footer from "../../components/Footer";
import Input from "../../utils/Input";
import Textarea from "../../utils/Textarea";
import Dropdown from "../../utils/Dropdown";
import { nanoid } from "nanoid";
import right from "../../public/right.svg";
import SecurityTrustBanner from "@/components/SecurityTrustBanner";

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

const RequestAQuote = () => {
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

  const SecurityTrustData = {
    title: (
      <>
        Plaza Protection : <br /> Securing San Jose Inside Out
      </>
    ),
    btnText: "Contact Us",
  };

  return (
    <>
      <Header ContactUsBtn={true} />

      <div className="w-full text-center mt-[100px] mb-[116px]">
        <h1 className="mb-8 font-dmSans text-[56px]  !leading-[64px] font-semibold text-[#222A5B] tracking-[-1px]">
          Request A Quote
        </h1>
        <p className="max-w-[1160px] mx-auto font-dmSans text-xl !leading-8 font-normal text-[#6B7280]">
          Select the security service you are interested in, fill out the form
          below to request a quote customized to your needs, & we will get back
          to you as soon as possible.
        </p>
      </div>
      <div className="w-full max-w-[1440px] mx-auto p-20 mb-20 bg-[#EDF5FF]/40 rounded-[40px]">
        <div className="p-8 rounded-3xl bg-[#F0F4FF] shadow-[0_5px_15px_0_rgba(19,85,255,0.2)]">
          <h2 className="mb-6 font-dmSans text-[32px] !leading-10 font-semibold text-[#222A5B] tracking-[-1px]">
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
              <Dropdown
                options={ServicesOptions}
                height="h-[55px]"
                placeholder="Select Services"
              />
            </div>
            <div className="w-1/2">
              <Dropdown
                options={facilityOptions}
                height="h-[55px]"
                placeholder="Type Of Facility"
              />
            </div>
          </div>
          <div className="w-full flex gap-6 mt-4">
            <div className="w-1/2">
              <Dropdown
                options={areaOptions}
                height="h-[55px]"
                placeholder="Select Area"
              />
            </div>
            <div className="w-1/2">
              <Dropdown
                options={durationOptions}
                height="h-[55px]"
                placeholder="Duration Of Service"
              />
            </div>
          </div>
          <div className="w-full  mt-4">
            <Textarea
              placeholder={"Assignment Details"}
              value={freeQuote.userMessage}
              name={"userMessage"}
              className={"!py-[17px] border-[#7198FE]/50"}
            />
          </div>
          <div className="mt-8 inline-flex gap-4 items-center">
            <Button
              variant="blue"
              icon={<Image src={right} alt="right" className="w-4 h-4" />}
              style={"!min-w-[175px] !rounded-2xl  "}
              name="Submit"
            />
            {/* <span className="font-jakarta font-semibold text-base text-[#1D2939]">
            Or
          </span>
          <Button
            variant="custom"
            style={"!min-w-[135px] !bg-transparent !rounded-2xl"}
            name="Contact Us"
            path="/Contact-Us"
          /> */}
          </div>
        </div>
      </div>

      <SecurityTrustBanner {...SecurityTrustData} />
      <Footer />
    </>
  );
};

export default RequestAQuote;
