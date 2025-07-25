"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "../utils/Button";
import Input from "../utils/Input";
import Textarea from "../utils/Textarea";
import Dropdown from "../utils/Dropdown";
import { nanoid } from "nanoid";
import right from "../public/right.svg";

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
    name: "Remote Guarding Service",
  },
  {
    id: nanoid(),
    name: "Vehicle Patrol",
  },
  {
    id: nanoid(),
    name: "CCTV Installation",
  },
];
const facilityOptions = [
  {
    id: nanoid(),
    name: "Residential Communities",
  },
  {
    id: nanoid(),
    name: "Commercial Buildings",
  },
  {
    id: nanoid(),
    name: "Construction Sites",
  },
  {
    id: nanoid(),
    name: "Shopping Centers",
  },
  {
    id: nanoid(),
    name: "Healthcare Facilities",
  },
];
const areaOptions = [
  { id: nanoid(), name: "Downtown San Jose" },
  { id: nanoid(), name: "Willow Glen" },
  { id: nanoid(), name: "Cambrian Park" },
  { id: nanoid(), name: "Almaden Valley" },
  { id: nanoid(), name: "Berryessa" },
  { id: nanoid(), name: "Evergreen" },
  { id: nanoid(), name: "Rose Garden" },
  { id: nanoid(), name: "North San Jose" },
  { id: nanoid(), name: "West San Jose" },
  { id: nanoid(), name: "East San Jose" },
  { id: nanoid(), name: "South San Jose" },
];
const durationOptions = [
  { id: nanoid(), name: "15 Days" },
  { id: nanoid(), name: "1 Month" },
  { id: nanoid(), name: "3 Months" },
  { id: nanoid(), name: "6 Months" },
  { id: nanoid(), name: "1 Year" },
  { id: nanoid(), name: "2 Years" },
  { id: nanoid(), name: "3 Years" },
  { id: nanoid(), name: "5 Years" },
];
const RequestQuoteForm = () => {
  const [freeQuote, setFreeQuote] = useState({
    userName: "",
    companyName: "",
    userEmail: "",
    phoneNumber: "",
    userMessage: "",
    service: "",
    facility: "",
    area: "",
    duration: "",
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
  const handleDropdownChange = (name, value) => {
    setFreeQuote((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submit

    // validate inputs if needed

    console.log("Submitted:", freeQuote);

    // Reset all fields after submit
    setFreeQuote({
      userName: "",
      companyName: "",
      userEmail: "",
      phoneNumber: "",
      userMessage: "",
      service: "",
      facility: "",
      area: "",
      duration: "",
    });
  };
  return (
    <div className="2xl:max-w-[1440px] 2xl:mx-auto px-4 sm:px-6 xl:px-10 2xl:p-20 mb-10  2xl:mb-20 2xl:bg-[#EDF5FF]/40 rounded-[40px]">
      <form
        onSubmit={handleSubmit}
        className="p-4 md:p-6 2xl:p-8 rounded-2xl  md:rounded-3xl bg-[#F0F4FF] shadow-[0_5px_15px_0_rgba(19,85,255,0.2)]"
      >
        <h2 className="mb-6 font-dmSans text-[28px] !leading-9  md:text-[32px] md:!leading-10 font-semibold text-[#222A5B] tracking-[-1px]">
          Get Free Quote
        </h2>
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 ">
          <div className="w-full  md:w-1/2">
            <Input
              placeholder={"Your Name"}
              onChange={handleInputChange}
              value={freeQuote.userName}
              name={"userName"}
              className={"!py-[15px] px-6 border-[#7198FE]/50"}
            />
          </div>
          <div className="w-full  md:w-1/2">
            <Input
              placeholder={"Company Name"}
              onChange={handleInputChange}
              value={freeQuote.companyName}
              name={"companyName"}
              className={"!py-[15px] px-6 border-[#7198FE]/50"}
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 mt-4">
          <div className="w-full  md:w-1/2">
            <Input
              placeholder={"Email"}
              onChange={handleInputChange}
              value={freeQuote.userEmail}
              name={"userEmail"}
              className={"!py-[15px] px-6 border-[#7198FE]/50"}
            />
          </div>
          <div className="w-full  md:w-1/2">
            <Input
              placeholder={"Phone Number"}
              onChange={handleInputChange}
              value={freeQuote.phoneNumber}
              name={"phoneNumber"}
              className={"!py-[15px] px-6 border-[#7198FE]/50"}
            />
          </div>
        </div>
        {/* <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 mt-4">
          <div className="w-full  md:w-1/2">
            <Dropdown
              options={ServicesOptions}
              height="h-[55px]"
              placeholder="Select Services"
              name="service"
              onSelect={handleDropdownChange}
              value={freeQuote.service}
            />
          </div>
          <div className="w-full  md:w-1/2">
            <Dropdown
              options={facilityOptions}
              height="h-[55px]"
              placeholder="Type Of Facility"
              name="facility"
              onSelect={handleDropdownChange}
              value={freeQuote.facility}
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 mt-4">
          <div className="w-full  md:w-1/2">
            <Dropdown
              options={areaOptions}
              height="h-[55px]"
              placeholder="Select Area"
              name="area"
              onSelect={handleDropdownChange}
              value={freeQuote.area}
            />
          </div>
          <div className="w-full  md:w-1/2">
            <Dropdown
              options={durationOptions}
              height="h-[55px]"
              placeholder="Duration Of Service"
              name="duration"
              onSelect={handleDropdownChange}
              value={freeQuote.duration}
            />
          </div>
        </div> */}
        <div className="w-full  mt-4">
          <Textarea
            placeholder={"Assignment Details"}
            value={freeQuote.userMessage}
            name={"userMessage"}
            onChange={handleInputChange}
            className={"!py-[17px] border-[#7198FE]/50"}
          />
        </div>
        <div className="mt-6 2xl:mt-8 ">
          <Button
            bgtransparent={"sm:!rounded-2xl"}
            variant="blue"
            icon={
              <Image src={right} alt="Right arrow icon" className="w-4 h-4" />
            }
            style={"!w-full sm:max-w-[175px]   "}
            name="Submit"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default RequestQuoteForm;
