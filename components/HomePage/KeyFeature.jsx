"use client";
import lineShape from "../../public/line-shape.svg";
import bottomShape from "../../public/bottom-shape.svg";
import Image from "next/image";
import thirdParty from "../../public/license-third-02.svg";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";

const featureData = [
  {
    id: 1,
    title: "Security Guard Tracking",
    description:
      "Monitor the real-time GPS location and movement of guards on your site via the live map in our client portal.",
    image: thirdParty,
    span: " col-span-4",
  },
  {
    id: 2,
    title: "Viewing Schedules",
    description:
      "Stay in the loop—view schedules, post orders, and request special coverage on the go.",
    image: thirdParty,
    span: "col-span-4",
  },
  {
    id: 3,
    title: "Live Dashboard",
    description:
      "Collaborate with us seamlessly—co-manage patrol operations in real-time with secure access to our live dashboard.",
    image: thirdParty,
    span: "col-span-4",
  },
  {
    id: 4,
    title: "Real-Time Reporting",
    description:
      "Access detailed reports and visitor logs anytime, anywhere, through the Plaza Protection client portal.",
    image: thirdParty,
    span: "col-span-3",
  },
  {
    id: 5,
    title: "Managing Visitors On Site",
    description:
      "Streamline visitor management with real-time tracking and access control for efficient, secure site access.",
    image: thirdParty,
    span: "col-span-3",
  },
  {
    id: 6,
    title: "Streamlined Site Tours",
    description:
      "Step into the future with QR, NFC, and virtual tags for secure site tours and patrols on predefined routes.",
    image: thirdParty,
    span: "col-span-3",
  },
  {
    id: 7,
    title: "Coordinate With Guards",
    description:
      "Enhance communication with your security guards, streamlining real-time updates and efficient teamwork.",
    image: thirdParty,
    span: "col-span-3",
  },
];

const KeyFeature = () => {
  return (
   <div className="w-full pr-[calc((100%-1440px)/2)]">
      <div className="relative rounded-tr-[40px] rounded-br-[40px] bg-[#0A2540] mt-20 pb-[154px]  ">
      <Image
        src={lineShape}
        className="z-0 absolute top-0 left-0 w-[431px] h-[357px]"
        alt="lineShape"
      />
      <Image
        src={bottomShape}
        className="z-0 absolute bottom-0 left-0 w-[462px] h-[465px]"
        alt="bottomShape"
      />

      <div className=" ml-auto max-w-[1440px] py-20 px-[60px] relative z-10">
        <Tag
          title={"What sets us apart"}
          className={"!bg-none !text-[#B9D8FF]"}
        />
        <Heading
          title={"Reinventing Security with Innovative Guard Management"}
          className={"!text-white"}
        />
        <div className="w-full grid grid-cols-12 gap-6 mt-[60px]">
          {featureData.map((item) => (
            <div
              key={item.id}
              className={`${item.span} p-8 rounded-2xl bg-[#07213B]`}
            >
              <Image
                src={item.image}
                width={48}
                height={48}
                alt={item.title}
                className="w-12 h-12"
              />
              <h2 className="mt-8 mb-4 font-urbanist text-[22px] font-bold text-[#21A9ED]">
                {item.title}
              </h2>
              <p className="font-jakarta font-normal text-base leading-7 text-[#EDF5FF]/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
   </div>
  );
};

export default KeyFeature;
