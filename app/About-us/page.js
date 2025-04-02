"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../utils/Button";
import collectionIcon from "../../public/AboutUs/collection.svg";
import streethouse from "../../public/AboutUs/street-house.png";
import JoyandFreedom from "../../public/AboutUs/JoyandFreedom.svg";
import Easeofuse from "../../public/AboutUs/Easeofuse.svg";
import Performance from "../../public/AboutUs/Performance.svg";
import lineShape from "../../public/line-shape-08.svg";
import Image from "next/image";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";
const statsData = [
  {
    value: "5",
    unit: "K+",
    title: "Site Tours Conducted",
    description:
      "Our guards are certified and skilled to provide superior protection.",
    bgColor: "bg-[#FEFCEB]",
    position: "relative top-10",
  },
  {
    value: "2",
    unit: "K+",
    title: "Hourly Reports",
    description:
      "Our guards are certified and skilled to provide superior protection.",
    bgColor: "bg-[#F5F6FF]",
  },
  {
    value: "4",
    unit: "K+",
    title: "Incidents Reported",
    description:
      "Our guards are certified and skilled to provide superior protection.",
    bgColor: "bg-[#FFF5F5]",
    position: "relative top-10",
  },
  {
    value: "3",
    unit: "K+",
    title: "Pass-Downs Generated",
    description:
      "Our guards are certified and skilled to provide superior protection.",
    bgColor: "bg-[#F0FEF1]",
  },
];

const coreValues = [
  {
    icon: Easeofuse,
    title: "Ease Of Use",
    description:
      "At Plaza Protection, we understand that the presence of firearms can make people uneasy. That’s why our highly trained guards provide top-tier security without the need for weapons",
  },
  {
    icon: Performance,
    title: "Performance",
    description:
      "At Plaza Protection, we understand that the presence of firearms can make people uneasy. That’s why our highly trained guards provide top-tier security without the need for weapons",
  },
  {
    icon: JoyandFreedom,
    title: "Joy And Freedom",
    description:
      "At Plaza Protection, we understand that the presence of firearms can make people uneasy. That’s why our highly trained guards provide top-tier security without the need for weapons",
  },
];

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="max-w-[1360px] mx-auto my-24 ">
        <div className="max-w-[1186px] mx-auto text-center">
          <h1 className="font-urbanist text-[56px] !leading-[64px] font-bold text-[#222A5B] mb-8">
          Welcome to Plaza Protection – Your Trusted Security Partner In The San Jose Bay Area
          </h1>
          <p className="font-jakarta text-lg !leading-[30px] font-normal text-[#6B7280] ">
          At Plaza Protection, we specialize in delivering top-tier security guard services designed to safeguard people, property, and businesses throughout the San Jose Bay Area. With years of expertise and a dedicated team of highly trained security professionals, we are committed to providing customized solutions tailored to the unique needs of our clients.
          </p>
        </div>
        <div className="w-full mt-14  inline-flex justify-center items-center  gap-4">
          <Button
            variant="blue"
            style={"!min-w-[243px]"}
            name="Request Quote"
          />

          <Button variant="custom" style={"!min-w-[162px]"} name="Contact Us"  path="/Contact-Us" />
        </div>
      </div>

      <div className="max-w-[1021px] mx-auto mb-[280px] grid grid-cols-12 gap-5">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className={`${stat.position || ""} col-span-3 p-5 rounded-2xl ${
              stat.bgColor
            } border border-[#F1F1F1]`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white">
                <Image
                  src={collectionIcon}
                  width={18.95}
                  height={18.95}
                  alt="collection"
                />
              </div>
              <div className="inline-flex items-center gap-1">
                <span className="font-urbanist text-[32px] !leading-9 font-bold text-[#171A1D] min-w-11">
                  {stat.value}
                </span>
                <span className="font-jakarta text-xl !leading-6 font-bold text-[#171A1D]">
                  {stat.unit}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-urbanist text-xl !leading-6 font-bold text-[#171A1D] max-w-28">
                {stat.title}
              </h3>
              <p className="mt-2 font-jakarta text-sm !leading-[18px] text-[#374049]">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-[1440px] mx-auto mb-20 p-20 rounded-[40px] bg-[#EDF5FF] grid grid-cols-12 gap-20">
        <div className="col-span-6">
          <Tag title={"Quick view about us"} />
          <Heading
            className={"!mt-4"}
            title={
              "Guarding San Jose Bay Area With Plaza Protection’s Expert Security "
            }
          />
          <p className=" mt-6 font-jakarta text-base !leading-7 font-normal text-[#374049]">
            Our commitment to excellence ensures a safe, secure environment for
            all, giving you peace of mind under our vigilant protection.
          </p>
          <p className=" mt-6 font-jakarta text-base !leading-7 font-normal text-[#374049]">
            Abyssale was born from a designer's frustration. As a product
            designer, our CEO & co-founder Alessandro Stigliani spent countless
            hours creating marketing visuals alongside his core product design
            work.
          </p>

          <div className="mt-8 px-4 rounded-3xl bg-[#EDF5FF]/20">
            <div className="py-4 flex items-center gap-6 border-b border-[#1355FF]/10 ">
              <div className="w-[50px] h-50px inline-flex items-center justify-center">
                <Image
                  src={collectionIcon}
                  width={24}
                  height={24}
                  alt="collection"
                />
              </div>
              <div>
                <p className="font-jakarta text-base !leading-5 font-normal text-[#374049]">
                Experience
                </p>
                <h3 className="mt-2 font-urbanist text-lg font-bold text-[#171A1D] !leading-[22px]">
                10+ Years
                </h3>
              </div>
            </div>
            <div className="py-4 flex items-center gap-6 border-b border-[#1355FF]/10 ">
              <div className="w-[50px] h-50px inline-flex items-center justify-center">
                <Image
                  src={collectionIcon}
                  width={24}
                  height={24}
                  alt="collection"
                />
              </div>
              <div>
                <p className="font-jakarta text-base !leading-5 font-normal text-[#374049]">
                Headquarter
                </p>
                <h3 className="mt-2 font-urbanist text-lg font-bold text-[#171A1D] !leading-[22px]">
                San Jose, CA
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <Image src={streethouse} alt="streethouse" className="object-cover" />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto mb-20 p-20 rounded-[40px] bg-[#EBFFF1]">
        <Tag title={"Quick view about us"} />
        <Heading className={"!mt-4"} title={"Our core values"} />

        <div className="grid grid-cols-12 gap-6 mt-10">
          {coreValues.map((item, index) => (
            <div key={index} className="col-span-4 p-4">
              <Image src={item.icon} alt={item.title} />
              <div className="mt-8">
                <h3 className="font-urbanist text-[#171A1D] font-bold text-[32px] leading-[38px]">
                  {item.title}
                </h3>
                <p className="mt-4 font-jakarta font-normal text-base !leading-7 text-[#374049]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
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
            title={<>Plaza Protection : <br /> Securing San Jose Inside Out</>}
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
            name={"Request A Quote"}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
