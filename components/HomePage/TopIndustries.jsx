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
    <div className="mx-0 sm:mx-6  xl:mx-10 2xl:container 2xl:mx-auto  px-4 py-8  sm:px-6  xl:px-8  2xl:py-20 2xl:px-[70px] grid grid-cols-12 items-center gap-2 2xl:gap-0">
      <div className="col-span-12 lg:col-span-4 mb-4 lg:mb-0">
        <h3 className="font-dmSans text-[28px] sm:text-[32px] font-semibold leading-9 sm:!leading-10 text-[#171A1D] tracking-[-1px] max-w-[323px]">
          Trusted By San Jose’s Leading Industries
        </h3>
      </div>

      <div className="col-span-12 lg:col-span-8  overflow-hidden">
        {isClient && (
          <Splide
            aria-label="My Favorite Images"
            options={{
              type: "loop",
              perMove: 1,
              rewind: true,
              perPage: 4,
              autoplay: true,
              arrows: false,
              interval: 2000,
              pagination: false,
              gap: "48px",
              breakpoints: {
                1440: { gap: "32px" }, 
                1024: { gap: "24px", perPage: 3 },
                640: { gap: "16px", perPage: 2 },
              },
            }}
            className="dots:absolute dots:right-auto dots:left-[calc(100%+80px)] dots:p-0 dots:min-w-[300px] dots:justify-start dot:!bg-[#DDE6F0] dot:w-2.5 dot:h-2.5 activeDot:scale-100 activeDot:!bg-[#9DBBC2] dot:shadow-none dot:outline-none "
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
