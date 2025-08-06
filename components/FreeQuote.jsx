"use client";
import { useState } from "react";
import Image from "next/image";
import { toast, Toaster } from "react-hot-toast";
import lineShape from "../public/line-shape-08.svg";
import Tag from "../utils/Tag";
import Heading from "../utils/Heading";
import Input from "../utils/Input";
import Textarea from "../utils/Textarea";
import Button from "../utils/Button";
import right from "../public/right.svg";

const FreeQuote = () => {
  const [freeQuote, setFreeQuote] = useState({
    userName: "",
    companyName: "",
    userEmail: "",
    phoneNumber: "",
    userMessage: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFreeQuote((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const { userName, companyName, userEmail, phoneNumber, userMessage } = freeQuote;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10,15}$/;

  if (!userName || !companyName || !userEmail || !phoneNumber || !userMessage) {
    toast.error("Please fill in all required fields.");
    return;
  }

  if (!emailRegex.test(userEmail)) {
    toast.error("Please enter a valid email address.");
    return;
  }

  if (!phoneRegex.test(phoneNumber)) {
    toast.error("Please enter a valid phone number (10–15 digits).");
    return;
  }

  try {
    const res = await fetch("/api/pipedrive", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, companyName, userEmail, phoneNumber, userMessage }),
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Thanks! We’ve got your request.");
      setFreeQuote({
        userName: "",
        companyName: "",
        userEmail: "",
        phoneNumber: "",
        userMessage: "",
      });
    } else {
      toast.error(data.message || "Something went wrong.");
    }
  } catch (err) {
    console.error(err);
    toast.error("Server error. Please try again later.");
  }
};

  return (
    <div className="relative h-auto lg:h-[450px] 2xl:h-[512px] 2xl:max-w-[1200px] mx-4 sm:mx-6 xl:mx-10 2xl:mx-auto mb-10 mt-10 lg:mt-0 lg:mb-[160px] 2xl:mb-[140px] px-4 sm:px-6 xl:px-8 2xl:px-[60px] bg-[#0C2459] rounded-[40px]">
      {/* Toast Notification Container */}
      <Toaster
        position="top-right"
        reverseOrder={true}
        toastOptions={{
          // Global default styles
          style: {
            background: "#ffffff",
            color: "#000000",
            padding: "16px",
            fontSize: "16px",
            fontWeight: "500",
            boxShadow: "0 5px 12px rgba(0,0,0,0.0.25)",
            fontFamily: 'DM Sans", sans-serif',
            borderRadius: "0px",
            padding: "12px 16px",
            fontWeight: "600",
          },

          success: {
            style: {
              borderLeft: "4px solid #00D100",
            },
            iconTheme: {
              primary: "#00D100",
              secondary: "#ffffff",
            },
          },

          error: {
            style: {
              borderLeft: "4px solid #FF0000",
            },
            iconTheme: {
              primary: "#FF0000",
              secondary: "#ffffff",
            },
          },
        }}
      />

      <Image
        src={lineShape}
        className="z-0 absolute top-0 left-0 max-h-[612px]"
        alt=""
      />
      <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-5 items-start">
        {/* Left Section */}
        <div className="pt-8 sm:pt-10 pb-0 lg:py-10 2xl:py-[60px] w-full lg:w-1/3">
          <Tag
            title={"Security you can blindly trust"}
            className={"!bg-gradient-to-t from-[#E2EAFF] to-[#E2EAFF]"}
          />
          <Heading
            title={"Plaza Protection Securing San Jose Inside Out"}
            className={"!text-white max-w-full lg:!max-w-[350px]"}
          />
          <p className="mt-6 font-dmSans font-normal text-base text-white max-w-full lg:max-w-[351px]">
            Serving the San Jose area, our expert team is ready to protect what
            matters most. Contact us today for a free risk assessment!
          </p>
          <div className="mt-10 flex">
            <Button
              variant="custom"
              bgtransparent={"!bg-transparent !text-white"}
              icon={
                <Image src={right} alt="Right arrow icon" className="w-4 h-4" />
              }
              path={"/contact-us"}
              style={"w-full sm:max-w-[190px] !text-white"}
              name={"Contact Us"}
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="relative lg:top-[60px] right-0 2xl:-right-[108px] pb-8 sm:pb-10 pt-0 lg:pb-0 lg:pt-10 2xl:pt-[60px] w-full lg:w-auto lg:grow">
          <form
            onSubmit={handleSubmit}
            className="p-4 md:p-6 2xl:p-8 rounded-2xl md:rounded-[40px] border-[3px] border-[#FFFFFF] 
            bg-[linear-gradient(180deg,_#EBF0FF_23%,_#7198FE_100%)] shadow-[0px_4px_4px_0px_rgba(19,85,255,0.15)] backdrop-blur-[192px]"
          >
            <h2 className="mb-6 font-dmSans text-[28px] !leading-9 md:text-[32px] md:!leading-10 font-semibold text-[#171A1D] tracking-[-1px] capitalize">
              Get free quote
            </h2>

            <div className="w-full flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <Input
                  placeholder="Your Name"
                  onChange={handleInputChange}
                  value={freeQuote.userName}
                  name="userName"
                />
              </div>
              <div className="w-full md:w-1/2">
                <Input
                  placeholder="Company Name"
                  onChange={handleInputChange}
                  value={freeQuote.companyName}
                  name="companyName"
                />
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-4 mt-4">
              <div className="w-full md:w-1/2">
                <Input
                  placeholder="Email"
                  onChange={handleInputChange}
                  value={freeQuote.userEmail}
                  name="userEmail"
                />
              </div>
              <div className="w-full md:w-1/2">
                <Input
                  placeholder="Phone Number"
                  onChange={handleInputChange}
                  value={freeQuote.phoneNumber}
                  name="phoneNumber"
                />
              </div>
            </div>

            <div className="w-full mt-4">
              <Textarea
                placeholder="Assignment Details"
                value={freeQuote.userMessage}
                name="userMessage"
                onChange={handleInputChange}
              />
            </div>

            <div className="mt-6 2xl:mt-8">
              <Button
                type="submit"
                icon={
                  <Image
                    src={right}
                    alt="Right arrow icon"
                    className="sm:hidden w-4 h-4"
                  />
                }
                variant="blue"
                style="!w-full"
                name="Submit Free Quote"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FreeQuote;