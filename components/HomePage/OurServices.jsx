"use client";
import quoteIcon from "../../public/quote-blue.svg";
import quote from "../../public/quote.svg";
import Image from "next/image";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import useIsClient from "../../Hook/useClient";

const clientTestimonials = [
  {
    id: 1,
    clientText: `Plaza Protection has offered valued security patrol services to our customers by making sure that their professional team is on the ground when a situation arises. They are quick to respond to all alerts and handle the matter in a professional manner, we would highly recommend their security patrol services to any organization that wants to work with a professional security guard company. `,
    clientName: "Andre Walington",
    clientRole: "Carnegie Foundation",
  },

  {
    id: 2,
    clientText: `I would like to thank Plaza Protection for providing excellent security guard services to our company. They made sure that our apartments were safe and secure for our residents. The guards are always professional and do an excellent job of meeting our expectations. I would highly recommend Plaza Protection to any company that is looking to hire a professional security patrol company. `,
    clientName: "Nick L.",
    clientRole: "Folsom Residential ",
  },
  {
    id: 3,
    clientText: `Plaza Protection has been providing excellent security patrol services to our residential community in the Bay Area. From the very beginning, they understood our needs and worked with our staff to address security concerns. Plaza Protection security guards are professional and well-trained. I always recommend Plaza Protection to anyone looking for extra protection for their community. `,
    clientName: "Steven H.",
    clientRole: "Country Club Villa",
  },
];

const OurServices = () => {
  const isClient = useIsClient();
  return (
    <div className="relative mx-4 sm:mx-6 xl:mx-10 my-10 2xl:my-[60px] 2xl:max-w-[1440px] 2xl:mx-auto pt-8 pb-[142px] px-0 sm:pt-10 sm:pb-[150px] sm:px-6 xl:px-8 2xl:pt-20 2xl:pb-[190px] 2xl:px-[70px] rounded-[40px]">
     
      <div className="text-center">
        <Tag title={"Don’t trust us? Trust businesses like yours"} />
        <Heading title={"Hear What Our Clients Say"} />
      </div>
      {
        isClient && <Splide
          aria-label="My Favorite Images"
          options={{
            type: "loop",
            perMove: 1,
            rewind: true,
            perPage: 1,
            gap: "24px",
            autoplay: false,
            arrows: true,
            pagination: false,
            breakpoints: {
              768: { pagination: true },

            },
            classes: {
              arrow: "custom-arrow",
              prev: "custom-prev",
              next: "custom-next",
            },
            interval: 3000,
            pagination: false,
          }}
          className="relative overflow-visible dots:absolute dots:right-0 dots:-bottom-[92px]  dots:p-0 dots:min-w-[300px] dots:justify-center  dots:items-center  dots:gap-4 dot:!bg-[#88C0FF] dot:w-2 dot:h-2 activeDot:scale-100 activeDot:!bg-[#1355FF] dot:shadow-none dot:outline-none mt-[60px]"
        >
          {clientTestimonials.map((testimonial, index) => (
            <SplideSlide key={index} >
              <div className="relative px-4 py-8 sm:py-10 sm:px-8 xl:p-10 2xl:p-[60px] bg-[#F7FDFF] border border-[#1355FF] ">
                   <Image src={quoteIcon} alt="quote" className="w-auto h-10" />
                    <p className="text-[#171A1D] font-dmSans font-normal  text-xl leading-8 xl:text-3xl xl:!leading-[48px] tracking-[-0.5px] mt-6 mb-6">
                        {testimonial.clientText}
                    </p>
                   <div className="h-[1px] w-full xl:max-w-[780px] bg-[#1355FF]/10"></div>
                   <h3 className="text-[#1A1A1A] font-dmSans font-semibold text-xl  mt-6 mb-1">
                    {testimonial.clientName}
                   </h3>
                   <p className="text-[#666666] font-dmSans font-normal text-base">
                    {testimonial.clientRole}
                   </p>

                   <Image src={quote} alt="quote" className="hidden xl:block absolute bottom-0 xl:bottom-10 2xl:bottom-[52px] right-[60px]" />
              </div>
            </SplideSlide>
          ))}
          </Splide>
      }

    </div>
  );
};

export default OurServices;
