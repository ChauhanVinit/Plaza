"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "../utils/Button";
import Input from "../utils/Input";
import Textarea from "../utils/Textarea";
import right from "../public/right.svg";
import { toast, Toaster } from "react-hot-toast";
const RequestQuoteForm = () => {
  const [freeQuote, setFreeQuote] = useState({
    userName: "",
    companyName: "",
    userEmail: "",
    phoneNumber: "",
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
    <div className="2xl:max-w-[1440px] 2xl:mx-auto px-4 sm:px-6 xl:px-10 2xl:p-20 mb-10  2xl:mb-20 2xl:bg-[#EDF5FF]/40 rounded-[40px]">
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
           type="submit"
            bgtransparent={"sm:!rounded-2xl"}
            variant="blue"
            icon={
              <Image src={right} alt="Right arrow icon" className="w-4 h-4" />
            }
            style={"!w-full sm:max-w-[175px]   "}
            name="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default RequestQuoteForm;
