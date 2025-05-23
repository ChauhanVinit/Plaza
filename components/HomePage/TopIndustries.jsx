"use client";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import carnegie from "../../public/carnegie.svg";
import club from "../../public/club.svg";
import essex from "../../public/essex.svg";
import walmart from "../../public/walmart.svg";
import useIsClient from "../../Hook/useClient";
const images = [
  { src: walmart, alt: "Walmart" },
  { src: essex, alt: "Essex" },
  { src: carnegie, alt: "Carnegie" },
  { src: club, alt: "Club" },
  { src: essex, alt: "Essexx" },
];

const TopIndustries = () => {
  const isClient = useIsClient();
  return (
    <div className="max-w-[1300px] mx-auto p-20 grid grid-cols-12 items-center ">
      <div className="col-span-4">
        <h3 className="font-urbanist text-3xl font-bold !leading-10 text-[#171A1D]">
        Trusted By San Jose’s Leading Industries
        </h3>
      </div>

      <div className="col-span-8  overflow-hidden">
        {isClient && (
          <Splide
            aria-label="My Favorite Images"
            options={{
              type: "loop",
              perMove: 1,
              rewind: true,
              perPage: 4,
              gap: "48px",
              autoplay: true,
              arrows: false,
              interval: 2000,
              pagination: false,
            }}
            className="dots:absolute dots:right-auto dots:left-[calc(100%+80px)] dots:p-0 dots:min-w-[300px] dots:justify-start dot:!bg-[#DDE6F0] dot:w-2.5 dot:h-2.5 activeDot:scale-100 activeDot:!bg-[#9DBBC2] dot:shadow-none dot:outline-none"
          >
            {images.map((item) => (
              <SplideSlide key={item.alt}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  className="w-auto h-[70px]"
                />
              </SplideSlide>
            ))}
          </Splide>
        )}
      </div>
    </div>
  );
};

export default TopIndustries;
