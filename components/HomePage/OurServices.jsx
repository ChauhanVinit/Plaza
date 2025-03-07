"use client";
import client01 from "../../public/client01.svg";
import lineShape02 from "../../public/line-shape02.svg";
import Image from "next/image";
import Tag from "@/utils/Tag";
import Heading from "@/utils/Heading";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import useIsClient from "@/Hook/useClient";

const clientTestimonials = [
  {
    id: 1,
    clientImage: client01,
    clientText: `Plaza Protection Has Offered Valued Security Patrol
      Services To Our Customers By Making Sure That Their
      Professional Team Is On The Ground When A Situation Arises.
      They Are Quick To Respond To All Alerts And Handle the
      matter in a professional manner, we would highly
      Recommend Their Security Patrol Services To Any
      Organization That Wants To Work With A Professional
      Security Guard Company.`,
    clientName: "Andre Walington",
    clientRole: "Carnegie Foundation",
  },

  {
    id: 2,
    clientImage: client01,
    clientText: `Plaza Protection Has Consistently Delivered Excellent
      Security Services. Their Team's Quick Response To 
      Emergencies And Proactive Approach Has Ensured A Safe
      Environment For Our Organization.`,
    clientName: "Andre Walington",
    clientRole: "Carnegie Foundation",
  },
  {
    id: 3,
    clientImage: client01,
    clientText: `Working With Plaza Protection Has Been Seamless.
      Their Professionalism And Dedication Are Unmatched. 
      Highly Recommend Their Services To Any Organization.`,
    clientName: "Andre Walington",
    clientRole: "Carnegie Foundation",
  },
  {
    id: 4,
    clientImage: client01,
    clientText: `Exceptional Service And Support! Plaza Protection 
      Goes Above And Beyond To Meet Our Security Needs. 
      Truly A Reliable Security Partner.`,
    clientName: "Andre Walington",
    clientRole: "Carnegie Foundation",
  },
];

const OurServices = () => {
  const isClient = useIsClient();
  return (
    <div className="relative max-w-[1440px] mx-auto py-[160px] px-[120px] bg-[#FCFDFF] rounded-[40px] mb-20">
      <Image
        src={lineShape02}
        className="z-0 absolute top-[160px] -left-60 w-[548px]  h-[640px]"
        alt="lineShape"
      />
      <Tag title={"Don’t trust us? Trust businesses like yours"} />
      <Heading title={"Hear What Our Clients Say About Our Services"} />
       {
        isClient &&  <Splide
        aria-label="My Favorite Images"
        options={{
          type: "loop",
          perMove: 1,
          rewind: true,
          perPage: 1,
          gap: "24px",
          autoplay: false,
          arrows: true,
          classes: {
            arrow: "custom-arrow", 
            prev: "custom-prev",  
            next: "custom-next", 
          },
          interval: 3000,
          pagination: false,
        }}
        className="dots:absolute dots:right-auto dots:left-[calc(100%+80px)] dots:p-0 dots:min-w-[300px] dots:justify-start dot:!bg-[#DDE6F0] dot:w-2.5 dot:h-2.5 activeDot:scale-100 activeDot:!bg-[#9DBBC2] dot:shadow-none dot:outline-none mt-20"
      >
        {clientTestimonials.map((testimonial, index) => (
          <SplideSlide key={index} >
            <div className="flex items-center gap-[200px] pb-[110px]">
              <div className=" relative w-[30%]">
                <Image
                  src={testimonial.clientImage}
                  className="min-w-[344px] h-[399px]"
                  alt={`client${testimonial.id}`}
                />

                <div className="min-w-[222px] border border-[#B9D8FF] absolute right-0 bottom-3  p-[18.17px] bg-[#EDF5FF]  rounded-bl-[18.17px] rounded-tr-[18.17px] ">
                  <h3 className="mb-1 font-urbanist font-bold text-xl !leading-6 text-[#1355FF]">
                    {testimonial.clientName}
                  </h3>
                  <p className="font-jakarta text-sm font-semibold text-[#11205A] !leading-[18px]">
                    {testimonial.clientRole}
                  </p>
                </div>
              </div>
              <div className="py-[22px] w-[70%]">
                <p className=" max-w-[656px] font-urbanist text-2xl leading-[43px] font-semibold">
                  <span className="text-[50px]">“</span>
                  {testimonial.clientText}
                </p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
       }
     
    </div>
  );
};

export default OurServices;
