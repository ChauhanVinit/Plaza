"use client";
import { useEffect } from "react";
import Image from "next/image";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";
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

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://webforms.pipedrive.com/f/loader";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="mx-0 sm:mx-6 xl:mx-10 2xl:container 2xl:mx-auto mb-10 2xl:mb-20 py-10 px-4 sm:px-6 xl:px-10 2xl:p-20 rounded-[40px] flex flex-col xl:flex-row items-start gap-8 xl:gap-10 2xl:gap-20 bg-[#EDF5FF]">
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
              className={`py-4 flex items-center gap-6 ${item.border ? "border-b border-[#1355FF]/10" : ""
                }`}
            >
              <div className="min-w-[50px] h-50px inline-flex items-center justify-center">
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


      <div className="w-full xl:w-[calc(50%-20px)] 2xl:w-[calc(50%-40px)] p-4 md:p-6 2xl:p-8 rounded-2xl md:rounded-3xl bg-[#F0F4FF] shadow-[0_5px_15px_0_rgba(19,85,255,0.2)] border border-[#E5E7EB] max-w-[580px] mx-auto">

        <div
          className="pipedriveWebForms"
          data-pd-webforms="https://webforms.pipedrive.com/f/ctsaBF7z4k5UwFt2BkGMdiBP8TJSgch1V6qPCnkyC7dmotBUGp9x52iNkmvQjIeCuD"
        ></div>
      </div>
    </div>
  );
};

export default ContactForm;

