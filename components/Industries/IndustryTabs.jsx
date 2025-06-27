"use client";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import useIsClient from "../../Hook/useClient";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Heading from "../../utils/Heading";
const IndustryTabs = ({data, title, desc}) => {
    const isClient = useIsClient();
  return (
   <div className="mx-4 sm:mx-6 xl:mx-10 2xl:max-w-[1440px] 2xl:mx-auto mb-10 2xl:mb-20 bg-[#F0F6FF] rounded-[40px] px-4 pt-10 pb-[122px] sm:px-6 xl:px-8 2xl:p-20">
        <Heading
          className="!mb-6 !mt-0 !text-[#222A5B] !text-center !tracking-[-2px]"
          title={title}
        />
        <p className="text-center font-dmSans text-lg 2xl:text-xl 2xl:!leading-8 text-[#333333] font-normal max-w-[1126px] mx-auto">
         {desc}
        </p>

        <div className="mt-8 xl:mt-10 2xl:mt-14">
          <TabGroup>
            <TabList className="mx-auto max-w-[390px] lg:max-w-full flex flex-col lg:flex-row lg:items-center gap-8 p-4">
              {data.map((item, index) => (
                <Tab
                  key={index}
                  className="inline-flex items-center gap-2 flex-1 !text-left rounded border-b-2 border-transparent focus-visible:outline-none data-[selected]:border-[#1355FF]"
                  role="tab"
                >
                  <div className="h-[58px] w-[58px] inline-flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      height={32}
                      width={32}
                    />
                  </div>
                  <span className="font-dmSans text-xl font-semibold text-[#171A1D] tracking-[-0.5px]">
                    {item.label}
                  </span>
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              {data.map((item, index) => (
                <TabPanel key={index}>
                  {/* Desktop grid view */}
                  <div className="hidden lg:grid grid-cols-12 gap-6 mt-10 2xl:mt-[60px]">
                    {[item.image1, item.image2, item.image3].map((image, i) => (
                      <div key={i} className="col-span-4">
                        <Image
                          src={image}
                          alt={item.label}
                          className="h-full w-full  rounded-3xl"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Mobile slider view */}
                  {isClient && (
                    <div className="industries-slider block lg:hidden mt-8">
                      <Splide
                        aria-label="My Favorite Images"
                        options={{
                          type: "loop",
                          perMove: 1,
                          rewind: true,
                          perPage: 1,
                          gap: "24px",
                          pagination: true,
                          autoplay: false,
                          arrows: true,
                          interval: 3000,
                          breakpoints: {
                            1040: {
                              perPage: 1,
                            },
                          },
                          classes: {
                            arrow: "custom-arrow",
                            prev: "slider-prev",
                            next: "slider-next",
                          },
                        }}
                        // className="dots:absolute dots:right-0 dots:-bottom-16 sm:dots:-bottom-[72px] dots:p-0 dots:min-w-[300px] dots:justify-center dots:items-center dots:gap-4 dot:!bg-[#88C0FF] dot:w-2 dot:h-2 activeDot:scale-100 activeDot:!bg-[#1355FF] dot:shadow-none dot:outline-none"
                      >
                        {[item.image1, item.image2, item.image3].map(
                          (image, imgIndex) => (
                            <SplideSlide key={imgIndex}>
                              <Image
                                src={image}
                                alt={item.label}
                                className="h-full w-auto mx-auto lg:w-full shadow-[0_21px_32px_0_rgba(0,88,250,0.1)] rounded-3xl"
                              />
                            </SplideSlide>
                          )
                        )}
                      </Splide>
                    </div>
                  )}
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </div>
  )
}

export default IndustryTabs
