"use client";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";
import Button from "../../utils/Button";
import ResidentialCommunities from "../../public/Services/Residential Communities.png";
import CommercialBuilding from "../../public/Services/Commercial Building.png";
import ConstructionSite from "../../public/Services/Construction Site.png";
import ShoppingMall from "../../public/Services/Shopping Mall.png";
import Image from "next/image";

const IndustriesWeServe = () => {
  const cardItems = [
    {
      src: ResidentialCommunities,
      alt: "Residential Communities",
      title: "Residential Communities",
    },
    {
      src: CommercialBuilding,
      alt: "Commercial Building",
      title: "Commercial Building",
    },
    {
      src: ConstructionSite,
      alt: "Construction Site",
      title: "Construction Site",
    },
    { src: ShoppingMall, alt: "Shopping Mall", title: "Shopping Mall" },
  ];

  return (
    <div className="max-w-[1440px] mx-auto py-20 px-16 bg-[#E7E7FF]/20 rounded-[40px]">
      <div className="flex justify-between items-end">
        <div>
          <Tag title={"Industries where we served"} />
          <Heading title={"Industries We Serve"} className={"!mb-6"} />
          <p className="font-jakarta font-normal text-lg !leading-8 text-[#374049] max-w-[915px]">
            Unarmed security guard services provide vital protection through
            professional presence, conflict resolution, and vigilant
            surveillance. These guards are trained to de-escalate situations,
            manage access control.
          </p>
        </div>
        <div>
          <Button
            variant="custom"
            style={"!min-w-[162px] !bg-transparent"}
            name="Contact Us"
            path="/Contact-Us"
          />
        </div>
      </div>

      <div className="mt-[60px] flex items-center gap-6">
        {cardItems.map((item, index) => (
          <div
            key={index}
            className="flex-1 relative rounded-2xl overflow-hidden"
          >
            <Image src={item.src} alt={item.alt} />
            <div className="absolute bottom-0 h-1/2 bg-[linear-gradient(to_bottom,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0.7)_41%,_rgba(255,255,255,1)_88%)] w-full"></div>
            <div className="absolute bottom-4 w-full p-[10px] text-center">
              <h3 className="font-urbanist text-xl !leading-6 font-bold text-[#171A1D]">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesWeServe;
