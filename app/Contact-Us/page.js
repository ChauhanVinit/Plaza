"use client";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
// import bannerimageA from "../../public/Contact-Banner-image-01.png";
// import bannerimageB from "../../public/Contact-Banner-image-02.png";
// import bannerimageC from "../../public/Contact-Banner-image-03.png";
// import bannerimageD from "../../public/Contact-Banner-image-04.png";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";
import Input from "../../utils/Input";
import Textarea from "../../utils/Textarea";
import Dropdown from "../../utils/Dropdown";
import { nanoid } from "nanoid";
import Button from "../../utils/Button";
import right from "../../public/right.svg";
import lineShape from "../../public/line-shape-08.svg";
import GoogleMapComponent from "../../utils/GoogleMapComponent";
import Call from "../../public/Call.svg";
import Mail from "../../public/Mail.svg";
import Location from "../../public/Location.svg";
import ContactBanner from "../../public/Contact-01.png";
const Contact = () => {
  // const images = [bannerimageA, bannerimageB, bannerimageC, bannerimageD];

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
    <>
      <Header />
      <div className="max-w-[1360px] mx-auto mt-24 mb-[87px] ">
        <div className="max-w-[1323px] mx-auto text-center">
          <h1 className="font-urbanist text-[56px] !leading-[64px] font-bold text-[#222A5B] mb-8">
            Contact Us 
          </h1>
          <p className="font-jakarta text-lg !leading-[30px] font-normal text-[#6B7280] ">
            Whether you're looking for on-site security, patrol services, or advanced monitoring, our team is here to assist you. Reach out to us today to learn more about our services or request a quote now. We’re available 24/7 to ensure your peace of mind and protect what matters most.
          </p>
        </div>
      </div>

      {/* <div className="max-w-[957px] mx-auto  mb-[170px] grid grid-cols-12 gap-4">
        {images.map((src, index) => {
          const extraClass = index % 2 === 0 ? "relative top-10" : "";
          return (
            <div key={index} className={`col-span-3 ${extraClass}`}>
              <Image
                src={src}
                className="h-[296px] rounded-3xl"
                alt={`streethouse-${index}`}
              />
            </div>
          );
        })}
      </div> */}
       
       <div className="max-w-[1200px] mx-auto mb-20">
          <Image src={ContactBanner} alt="ContactBanner" className="object-cover rounded-[40px]" />
       </div>


      <div className="max-w-[1440px] mx-auto mb-20 p-20 rounded-[40px] grid grid-cols-12 gap-20 bg-[#EDF5FF]">
        <div className="col-span-6">
          <Tag title={"Quick View CONTACT Us"} />
          <Heading
            className={"!mt-4"}
            title={
              "Contact Us Today to Discuss Your Security Needs and Ensure Your Peace of Mind"
            }
          />
          <p className="mt-6 font-jakarta text-base !leading-7 font-normal text-[#374049]">
            Whether you're looking for personal or business protection, we are here to provide reliable and professional services. Let us help you safeguard what matters most.
          </p>

          <div className="mt-8 px-4 rounded-3xl bg-[#EDF5FF]/20">
            <div className="py-4 flex items-center gap-6 border-b border-[#1355FF]/10 ">
              <div className="w-[50px] h-50px inline-flex items-center justify-center">
                <Image
                  src={Call}
                  width={32}
                  height={32}
                  alt="Call"
                />
              </div>
              <div>
                <p className="font-jakarta text-base !leading-5 font-normal text-[#374049]">
                  Get in touch with us now
                </p>
                <h3 className="mt-2 font-urbanist text-lg font-bold text-[#171A1D] !leading-[22px]">
                  1-844-55-557-5292
                </h3>
              </div>
            </div>
            <div className="py-4 flex items-center gap-6 border-b border-[#1355FF]/10 ">
              <div className="w-[50px] h-50px inline-flex items-center justify-center">
                <Image
                  src={Mail}
                  width={32}
                  height={32}
                  alt="Mail"
                />
              </div>
              <div>
                <p className="font-jakarta text-base !leading-5 font-normal text-[#374049]">
                   Email: 
                </p>
                <h3 className="mt-2 font-urbanist text-lg font-bold text-[#171A1D] !leading-[22px]">
                  contact@plazaprotection.com
                </h3>
              </div>
            </div>
            <div className="py-4 flex items-center gap-6 ">
              <div className="w-[50px] h-50px inline-flex items-center justify-center">
                <Image
                  src={Location}
                  width={32}
                  height={32}
                  alt="Location"
                />
              </div>
              <div>
                <p className="font-jakarta text-base !leading-5 font-normal text-[#374049]">
                  Address
                </p>
                <h3 className="mt-2 font-urbanist text-lg font-bold text-[#171A1D] !leading-[22px]">
                  Plaza Protection 1900 Camden Ave San Jose, CA 95124 United
                  States
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 p-8 rounded-3xl bg-[#F0F4FF] shadow-[0_5px_15px_0_rgba(19,85,255,0.2)]">
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
              placeholder={"Write Your Message"}
              value={freeQuote.userMessage}
              name={"userMessage"}
              className={"!py-[17px] border-[#7198FE]/50"}
            />
          </div>
          <div className="mt-8">
            <Button
              variant="blue"
              icon={<Image src={right} alt="right" className="w-4 h-4" />}
              style={"!min-w-[175px] !rounded-2xl  "}
              name="Submit"
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto mb-20 rounded-[40px] overflow-hidden">
        <GoogleMapComponent />
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
                Plaza Protection : <br /> Trusted Security Guard Company
              </>
            }
          />
          <p
            className="mt-6 mb-10 font-jakarta text-base !leading-7 font-normal text-white 
      max-w-[723px] mx-auto"
          >
            Serving the San Jose area, our expert team is ready to protect what matters most. Contact us today for a free risk assessment!
          </p>

          <Button
            variant="custom"
            style={"!min-w-[190px]  !text-white !bg-transparent !rounded-2xl"}
            name={"Request A Quote"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Contact;
