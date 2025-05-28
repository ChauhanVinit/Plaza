"use client";
import Residential from "../../public/Residential.png";
import Commercial from "../../public/Commercial.png";
import Construction from "../../public/Construction.png";
import ShoppingCenter from "../../public/Shopping-Center.png";
import Healthcare from "../../public/Healthcare.png";

import Image from "next/image";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import useIsClient from "../../Hook/useClient";
import Button from "../../utils/Button";
const AboutusData = [
  {
    image: Residential,
    title: "Residential Communities",
    description:
      "Plaza Protection’s security guards are committed to protecting residential communities, providing a secure and peaceful environment for every home.",
    path: "/Residential-Communities",
  },
  {
    image: Commercial,
    title: "Commercial Buildings",
    description:
      "Plaza Protection’s security experts are skilled in addressing the unique challenges of commercial properties, safeguarding your business against.",
    path: "/Commercial-Buildings",
  },
  {
    image: Construction,
    title: "Construction Sites",
    description:
      "Plaza Protection security guards safeguard construction sites by preventing theft, monitoring activity, and maintaining a safe environment for your crew and assets.",
    path: "/Construction-Sites",
  },
  {
    image: ShoppingCenter,
    title: "Shopping Center",
    description:
      "Plaza Protection security guards ensure the safety of shopping centers by preventing theft, monitoring visitor activity, and maintaining a secure environment for shoppers, staff, and businesses.",
    path: "/Shopping-Centers",
  },
  {
    image: Healthcare,
    title: "Healthcare Facilities",
    description:
      "Plaza Protection security guards safeguard healthcare facilities by preventing unauthorized access, monitoring activity, and maintaining a safe and secure environment for patients, staff, and visitors.",
    path: "/Healthcare-Facilities",
  },
];
const AboutUs = () => {
  const isClient = useIsClient();

  return (
    <div className="w-full pl-[calc((100%-1440px)/2)] ">
      <div className="rounded-tl-[40px] rounded-bl-[40px]  relative  -mt-[116px]  pl-[60px] py-20 bg-[#EDF5FF]">
        <Tag title={"Quick view about us"} />

        <Heading title={"Trusted Security Services For Every Industry"} />
        {isClient && (
          <Splide
            aria-label="My Favorite Images"
            options={{
              type: "loop",
              perMove: 1,
              rewind: true,
              perPage: 3,
              gap: "24px",
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
                      alt={item.title}
                      className=" w-full h-auto"
                    />
                  </div>

                  <h2 className="mt-8 mb-4 font-dmSans text-2xl font-semibold text-[#171A1D] tracking-[-0.5px]">
                    {item.title}
                  </h2>
                  <p className="mb-8 font-dmSans text-base  font-normal text-[#45535E]">
                    {item.description}
                  </p>
                  <div>
                    <Button
                      variant="custom"
                      style={"!bg-transparent min-w-[158px]  !text-center"}
                      name={"Learn More"}
                      path={item.path}
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
