"use client";
import IndustriesOne from "../../public/Industries-image-01.svg";
import IndustriesTwo from "../../public/Industries-image-02.svg";
import Image from "next/image";
import Tag from "@/utils/Tag";
import Heading from "@/utils/Heading";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import useIsClient from "@/Hook/useClient";
import Button from "@/utils/Button";
const AboutusData = [
  {
    image: IndustriesOne,
    title: "Healthcare Facilities",
    para: "At Plaza Protection, we understand that the presence of firearms can make people uneasy. That’s why our highly trained guards provide top-tier security without the need for weapons",
  },
  {
    image: IndustriesTwo,
    title: "Healthcare Facilities",
    para: "At Plaza Protection, we understand that the presence of firearms can make people uneasy. That’s why our highly trained guards provide top-tier security without the need for weapons",
  },
  {
    image: IndustriesOne,
    title: "Healthcare Facilities",
    para: "At Plaza Protection, we understand that the presence of firearms can make people uneasy. That’s why our highly trained guards provide top-tier security without the need for weapons",
  },
  {
    image: IndustriesTwo,
    title: "Healthcare Facilities",
    para: "At Plaza Protection, we understand that the presence of firearms can make people uneasy. That’s why our highly trained guards provide top-tier security without the need for weapons",
  },
];
const AboutUs = () => {
  const isClient = useIsClient();

  return (
   <div className="w-full pl-[calc((100%-1440px)/2)] mb-20">
     <div className="rounded-tl-[40px] rounded-bl-[40px]  relative  -mt-[116px]  px-[60px] py-20 bg-[#EDF5FF]">
      <Tag title={"Quick view about us"} />

      <Heading title={"Explore Our Range Of Security Solutions"} />
      {isClient && (
        <Splide
          aria-label="My Favorite Images"
          options={{
            type: "loop",
            perMove: 1,
            rewind: true,
            perPage: 3,
            gap: "0px",
            autoplay: false,
            arrows: true,
            classes: {
              arrow: "custom-arrow",
              prev: "serv-prev",
              next: "serv-next",
            },
            interval: 3000,
            pagination: false,
          }}
          className="dots:absolute dots:right-auto dots:left-[calc(100%+80px)] dots:p-0 dots:min-w-[300px] dots:justify-start dot:!bg-[#DDE6F0] dot:w-2.5 dot:h-2.5 activeDot:scale-100 activeDot:!bg-[#9DBBC2] dot:shadow-none dot:outline-none mt-[60px] "
        >
          {AboutusData.map((item, index) => (
            <SplideSlide key={index}>
              <div className="p-4">
                <div className="overflow-hidden max-h-[350px] max-w-full shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-2xl">
                  <Image
                    src={item.image}
                    alt="ins"
                    className="object-cover min-w-[472px] h-[350px]"
                  />
                </div>

                <h2 className="mt-8 mb-4 font-urbanist text-2xl leading-[29px] font-bold text-[#171A1D]">
                  {item.title}
                </h2>
                <p className="mb-8 font-jakarta text-base leading-7 font-normal text-[#374049]">
                  {item.para}
                </p>
                <div>
                  <Button
                    variant="custom"
                    style={"!bg-transparent min-w-[158px]  !text-center"}
                    name={"View More"}
                    path="/About-us"
                  />
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      )}
    </div>
   </div>
  );
};

export default AboutUs;
