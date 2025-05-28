"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import RequestAQuoteImage from "../../public/Request-A-Quote-Banner.png";
import Button from "../../utils/Button";
import Footer from "../../components/Footer";
import Input from "../../utils/Input";
import Textarea from "../../utils/Textarea";
import Dropdown from "../../utils/Dropdown";
import { nanoid } from "nanoid";
import right from "../../public/right.svg";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";
import lineShape from "../../public/line-shape-08.svg";
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
  return (
    <>
      <Header ContactUsBtn={true} />

      <div className="w-full text-center mt-[100px] mb-[120px]">
        <h1 className="mb-8 font-urbanist text-[56px]  leading-[64px] font-bold text-[#222A5B]">
          Request A Quote
        </h1>
        <p className="max-w-[1160px] mx-auto font-jakarta text-lg !leading-[30px] font-normal text-[#6B7280]">
          Select the security service you are interested in, fill out the form
          below to request a quote customized to your needs, & we will get back
          to you as soon as possible.
        </p>
      </div>

      <div className="max-w-[1316px] mx-auto mb-20 p-20 rounded-3xl bg-[#F0F4FF] shadow-[0_5px_15px_0_rgba(19,85,255,0.2)]">
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
            title={
              <>
                Plaza Protection : <br /> Securing San Jose Inside Out
              </>
            }
          />
          <p
            className="mt-6 mb-10 font-jakarta text-base !leading-7 font-normal text-white 
      max-w-[616px] mx-auto"
          >
            Serving the San Jose area, our expert team is ready to protect what
            matters most. Contact us today for a free risk assessment!
          </p>

          <Button
            variant="custom"
            style={"!min-w-[190px]  !text-white !bg-transparent !rounded-2xl"}
            name={"Contact Us"}
            path={"/Contact-Us"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RequestAQuote;
