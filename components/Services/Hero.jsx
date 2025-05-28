"use client";
import Button from "../../utils/Button";
import Image from "next/image";
// import Schedule from "../../public/Services/Schedule.svg";

const scrollIntoData = [
  { id: "why-choose", title: "Why Choose Us" },
  { id: "key-features", title: "Key Features" },
  { id: "highlights", title: "Highlights" },
];

const Hero = ({ title, desc, img }) => {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 100;
      const topPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="w-full pl-[calc((100%-1360px)/2)] mt-24 mb-10">
      <div className="relative max-w-[785px]">
        <h1 className="font-urbanist text-[56px] !leading-[64px] font-bold text-[#222A5B] mb-8 capitalize">
          {title}
        </h1>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <p className="px-4 rounded border-l-[3px] border-l-[#B0BABF] font-jakarta text-lg !leading-[30px] font-normal text-[#6B7280] max-w-[604px] ">
            {desc}
          </p>
          <div className="mt-14 inline-flex items-center gap-4">
            <Button
              variant="blue"
              style={"!min-w-[243px]"}
              name="Request Quote"
              path="/Request-A-Quote"
            />

            <Button
              variant="custom"
              style={"!min-w-[162px]"}
              name="Contact Us"
              path="/Contact-Us"
            />
          </div>

          <div className="inline-flex items-center px-4 border border-[#E9E9E9] rounded-full gap-2 mt-[72px] mb-[88px]  min-h-[68px]">
            {scrollIntoData.map((item) => (
              <button
                key={item.id}
                className="relative px-[15px] font-jakarta font-semibold !leading-5 text-base text-[#45535E] after:absolute after:h-5 after:w-[1px] after:bg-[#D7D7D7] after:-right-[3px] after:top-0 after:last:hidden"
                onClick={() => handleScrollToSection(item.id)}
              >
                {item.title}
              </button>                                           
            ))}
          </div>
        </div>
        <div className="col-span-6 relative -top-10">
          <Image src={img} alt="GuardImage" fill className="object-cover" />

          {/* <div className="absolute bottom-[167px] z-10  left-[68px]  bg-white p-[22px] rounded-[19.4px] border-2 border-white shadow-[0px_80.93px_109.5px_0px_rgba(0,0,0,0.1)] blur-[14.28] min-w-[238px]">
            <div className="flex items-center justify-between mb-[14px]">
              <h3 className="font-jakarta font-bold text-base text-[#1E294C]">
                Time Card
              </h3>
              <div className="w-[34px] h-[34px] inline-flex items-center justify-center bg-[#F9F5F4] rounded-full">
                <Image
                  src={Schedule}
                  alt="Schedule"
                  width={21.45}
                  height={21.45}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <div className="w-3/5">
                  <h3 className="font-jakarta text-[10px] leading-[13px] font-bold text-[#4C6395] mb-1">
                    Regular hours
                  </h3>
                  <p className="font-jakarta font-bold text-xs text-[#0C2459]">
                    06:25:00
                  </p>
                </div>
                <div className="w-2/5">
                  <h3 className="font-jakarta text-[10px] leading-[13px] font-bold text-[#4C6395] mb-1">
                    Regular hours
                  </h3>
                  <p className="font-jakarta font-bold text-xs text-[#0C2459]">
                    06:25:00
                  </p>
                </div>
              </div>
              <div className="flex items-center  mt-3">
                <div className="w-3/5">
                  <h3 className="font-jakarta text-[10px] leading-[13px] font-bold text-[#4C6395] mb-1">
                    Unpaid break hours
                  </h3>
                  <p className="font-jakarta font-bold text-xs text-[#0C2459]">
                    01:12:00
                  </p>
                </div>
                <div className="w-2/5">
                  <h3 className="font-jakarta text-[10px] leading-[13px] font-bold text-[#4C6395] mb-1">
                    Total Hours
                  </h3>
                  <p className="font-jakarta font-bold text-xs text-[#0C2459]">
                    01:12:00
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="absolute bottom-[18px] z-10 left-[153px]  bg-white p-4 rounded-[19.4px] border-2 border-white shadow-[0px_80.93px_109.5px_0px_rgba(0,0,0,0.1)] blur-[14.28] min-w-[180px]">
            <div className="flex items-center justify-between mb-[14px]">
              <h3 className="font-jakarta font-bold text-xs text-[#1E294C]">
                Time Card
              </h3>
              <div className="w-[26px] h-[26px] inline-flex items-center justify-center bg-[#F9F5F4] rounded-full">
                <Image src={Schedule} alt="Schedule" width={16} height={16} />
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <div className="w-3/5">
                  <h3 className="font-jakarta text-[8px] leading-[10px] font-bold text-[#4C6395] mb-1">
                    Regular hours
                  </h3>
                  <p className="font-jakarta font-bold text-[10px] !leading-3 text-[#0C2459]">
                    06:25:00
                  </p>
                </div>
                <div className="w-2/5">
                  <h3 className="font-jakarta text-[8px] leading-[10px] font-bold text-[#4C6395] mb-1">
                    Regular hours
                  </h3>
                  <p className="font-jakarta font-bold text-[10px] !leading-3 text-[#0C2459]">
                    06:25:00
                  </p>
                </div>
              </div>
              <div className="flex items-center  mt-3">
                <div className="w-3/5">
                  <h3 className="font-jakarta text-[8px] leading-[10px] font-bold text-[#4C6395] mb-1">
                    Unpaid break hours
                  </h3>
                  <p className="font-jakarta font-bold text-[10px] !leading-3 text-[#0C2459]">
                    01:12:00
                  </p>
                </div>
                <div className="w-2/5">
                  <h3 className="font-jakarta text-[8px] leading-[10px] font-bold text-[#4C6395] mb-1">
                    Total Hours
                  </h3>
                  <p className="font-jakarta font-bold text-[10px] !leading-3 text-[#0C2459]">
                    01:12:00
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
