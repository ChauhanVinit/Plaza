"use client";
import Button from "../../utils/Button";
import Image from "next/image";
import right from "../../public/right.svg";
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
    <div className="w-full max-w-[1440px] mx-auto mt-20 mb-[140px]">
      <div className="flex w-full items-start relative overflow-visible">
        <div className="w-[490px] relative z-10 mt-[38px]">
          <h1 className="font-dmSans text-[64px] !leading-[72px] font-semibold text-[#222A5B] mb-8 capitalize tracking-[-1px]  -mr-96">
            {title}
          </h1>
          <p className="font-dmSans text-xl !leading-8 px-4 rounded border-l-[3px] border-l-[#B0BABF] font-normal text-[#45535E] -mr-14">
            {desc}
          </p>
          <div className="w-full mt-12 inline-flex items-center gap-4">
            <Button
              icon={<Image src={right} alt="right" className="w-4 h-4" />}
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

          <div className="inline-flex items-center px-4 border border-[#E9E9E9] rounded-full gap-2 mt-12 min-h-[62px]">
            {scrollIntoData.map((item) => (
              <button
                key={item.id}
                className="relative px-[14px] font-dmSans font-semibold  text-base text-[#666666] tracking-[-0.5px] after:absolute after:h-5 after:w-[1px] after:bg-[#D7D7D7] after:-right-[3px] after:top-0 after:last:hidden"
                onClick={() => handleScrollToSection(item.id)}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-shrink-0 z-0">
          <Image src={img} alt="GuardImage" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
