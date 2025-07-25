"use client";
import { useState } from "react";
import Image from "next/image";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";
import Input from "../../utils/Input";
import Textarea from "../../utils/Textarea";
import Dropdown from "../../utils/Dropdown";
import { nanoid } from "nanoid";
import Button from "../../utils/Button";
import right from "../../public/right.svg";
import Call from "../../public/Call.svg";
import Mail from "../../public/Mail.svg";
import Location from "../../public/Location.svg";
const ContactForm = () => {
  const contactDetails = [
    {
      icon: Call,
      alt: "24/7 Phone Call Support Icon",
      label: "Get in touch with us now",
      value: "1-844-55-557-5292",
      border: true,
    },
    {
      icon: Mail,
      alt: "Email Contact Icon",
      label: "Email:",
      value: "contact@plazaprotection.com",
      border: true,
    },
    {
      icon: Location,
      alt: "Office Location Icon",
      label: "Address",
      value: (
        <>
          Plaza Protection 1900 Camden Ave San Jose,
          <br className="hidden xl:block" /> CA 95124 United States
        </>
      ),
      border: false,
    },
  ];
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
    <div className="mx-0 sm:mx-6  xl:mx-10 2xl:container 2xl:mx-auto mb-10 2xl:mb-20 py-10 px-4 sm:px-6 xl:px-10 2xl:p-20 rounded-[40px] flex flex-col xl:flex-row items-start gap-8 xl:gap-10 2xl:gap-20 bg-[#EDF5FF]">
      <div className="w-full xl:w-[calc(50%-20px)] 2xl:w-[calc(50%-40px)]">
        <Tag title={"Quick View CONTACT Us"} />
        <Heading
          className={"!mt-4"}
          title={
            "Contact Us Today to Discuss Your Security Needs and Ensure Your Peace of Mind"
          }
        />
        <p className="mt-6 font-dmSans text-lg 2xl:text-xl 2xl:!leading-8 font-normal text-[#374049]">
          Whether you're looking for personal or business protection, we are
          here to provide reliable and professional services. Let us help you
          safeguard what matters most.
        </p>

        <div className="mt-8 px-4 rounded-3xl bg-[#EDF5FF]/20">
          {contactDetails.map((item, index) => (
            <div
              key={index}
              className={`py-4 flex items-center gap-6 ${
                item.border ? "border-b border-[#1355FF]/10" : ""
              }`}
            >
              <div className=" min-w-[50px] h-50px inline-flex items-center justify-center">
                <Image src={item.icon} width={32} height={32} alt={item.alt} />
              </div>
              <div>
                <p className="font-dmSans text-base font-normal text-[#374049]">
                  {item.label}
                </p>
                <h3 className="mt-2 font-dmSans text-xl font-semibold text-[#171A1D] tracking-[-0.5px] break-all ">
                  {item.value}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full xl:w-[calc(50%-20px)] 2xl:w-[calc(50%-40px)] p-4 md:p-6 2xl:p-8 rounded-2xl  md:rounded-3xl bg-[#F0F4FF] shadow-[0_5px_15px_0_rgba(19,85,255,0.2)]"
      >
        <h2 className="mb-6 font-dmSans text-[32px] !leading-10 font-semibold text-[#222A5B]">
          Get Free Quote
        </h2>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full">
            <Input
              placeholder={"Your Name"}
              onChange={handleInputChange}
              value={freeQuote.userName}
              name={"userName"}
              className={"!py-[15px] px-6 border-[#7198FE]/50"}
            />
          </div>
          <div className="w-full">
            <Input
              placeholder={"Company Name"}
              onChange={handleInputChange}
              value={freeQuote.companyName}
              name={"companyName"}
              className={"!py-[15px] px-6 border-[#7198FE]/50"}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 mt-4 ">
          <div className="w-full">
            <Input
              placeholder={"Email"}
              onChange={handleInputChange}
              value={freeQuote.userEmail}
              name={"userEmail"}
              className={"!py-[15px] px-6 border-[#7198FE]/50"}
            />
          </div>
          <div className="w-full">
            <Input
              placeholder={"Phone Number"}
              onChange={handleInputChange}
              value={freeQuote.phoneNumber}
              name={"phoneNumber"}
              className={"!py-[15px] px-6 border-[#7198FE]/50"}
            />
          </div>
        </div>
        {/* <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6  mt-4">
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
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6  mt-4">
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
            placeholder={"Write Your Message"}
            value={freeQuote.userMessage}
            name={"userMessage"}
            className={"!py-[17px] border-[#7198FE]/50"}
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-6 2xl:mt-8 ">
          <Button
            variant="blue"
            icon={
              <Image src={right} alt="Right arrow icon" className="w-4 h-4" />
            }
            style={"min-w-full sm:!min-w-[175px]"}
            name="Submit"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
