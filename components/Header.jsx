"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/Logo.svg";
import callRinging from "@/public/call-ringing.svg";
import menu from "@/public/menu.svg";
import vehiclePatrol from "@/public/vehicle-patrol.png";
import down from "@/public/down.svg";
import Link from "next/link";

const Header = () => {
  const tobarData = [
    {
      id: 1,
      name: "Services",
      subnavs: [
        {
          id: "unarmedSecurity",
          name: "Unarmed Security",
          icon: vehiclePatrol,
          path: "/Unarmed-Security",
        },
        {
          id: "RemoteGuarding",
          name: "Remote guarding",
          icon: vehiclePatrol,
          path: "/Remote-Guarding",
        },
        {
          id: "Vehiclepatrol",
          name: "Vehicle patrol",
          icon: vehiclePatrol,
          path: "/Vehicle-patrol",
        },
        {
          id: "fire-Watch",
          name: "Fire Watch",
          icon: vehiclePatrol,
          path: "/Fire-Watch",
        },
      ],
    },
    {
      id: 2,
      name: "Industries",
      subnavs: [
        {
          id: "residential-Communities",
          name: "Residential Communities",
          path: "/Residential-Communities",
        },
        {
          id: "corporate-Buildings",
          name: "Corporate Buildings",
          path: "Corporate-Buildings",
        },
        {
          id: "construction-Sites",
          name: "Construction Sites",
          path: "/Construction-Sites",
        },
        {
          id: "shopping-Center",
          name: "Shopping Center",
          path: "/Shopping-Center",
        },
        {
          id: "hospital-Security",
          name: "Hospital Security",
          path: "/Hospital-Security",
        },
      ],
    },
    { id: 3, name: "About us", path: "/About-us", subnavs: [] },
    { id: 4, name: "Blog", path: "/Blog", subnavs: [] },
    { id: 5, name: "Contact us", path: "/Contact-Us", subnavs: [] },
  ];

  const [openSubnav, setOpenSubnav] = useState(null);

  
  const handleSubNavHover = (id) => {
    setOpenSubnav(id);
  };

  const handleSubNavLeave = () => {
    setOpenSubnav(null);
  };

  const renderNavLink = (nav) => {
    return (
      <Link
        className=" px-[14px] py-7 text-base leading-5 font-jakarta font-semibold text-[#1D2939] "
        href={nav.path}
        key={nav.id}
      >
        {nav.name}
      </Link>
    );
  };

  const renderSubnavs = (nav) => {
    return (
      <div
        key={nav.id}
        className="cursor-pointer  relative group"
        onMouseEnter={() => handleSubNavHover(nav.id)}
        onMouseLeave={handleSubNavLeave}
      >
        <button className="inline-flex gap-2 items-center  px-[14px] py-7 text-base leading-5 font-jakarta font-semibold text-[#1D2939] ">
          {nav.name}
          <Image
            src={down}
            alt="down"
            className={`transition ease-out duration-100 relative top-[3px] w-4 h-4 ${
              openSubnav === nav.id ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        {openSubnav === nav.id && (
          <div className="bg-white w-auto text-nowrap flex flex-col  absolute top-[calc(100%+0px)] shadow-lg p-2 rounded-lg">
            {nav.subnavs.map((snav) => (
              <Link
                className="text-sm  font-jakarta font-semibold text-[#1D2939] px-3 py-2 "
                href={snav.path}
                key={snav.id}
              >
                <span>{snav.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className=" w-full sticky top-0 z-[999] bg-white">
       <div className="max-w-[1440px] mx-auto bg-white flex items-center  px-[15px] py-[10px] ">
      <div className="inline-flex items-center gap-3 py-[11px]">
        <Image src={Logo} alt="Logo" className="w-[46.81px] h-[50px]" />
        <h3 className="text-[35px] leading-normal font-bold font-urbanist text-[#061237]">
          Plaza<span className="text-[#1355FF]">Protection</span>
        </h3>
      </div>
      <div className="ml-[100px] grow flex items-center">
        {tobarData.map((nav) =>
          nav.subnavs.length ? renderSubnavs(nav) : renderNavLink(nav)
        )}
      </div>
      <div className="flex items-center gap-10">
        <div className="flex px-1 gap-4">
          <button className="h-10 w-10 bg-[#D7E8FF] inline-flex items-center justify-center rounded-[60.61px]">
            <Image
              src={callRinging}
              className="w-[18.18px] h-[18.18px]"
              alt="callRinging"
            />
          </button>
          <div>
            <h3 className="font-urbanist text-base leading-normal font-semibold text-[#1355FF]">
              Help Line
            </h3>
            <p className="font-urbanist text-base leading-normal font-bold text-[#374049]">
              1-844-55-PLAZA (557-5292)
            </p>
          </div>
        </div>
        <div>
          <button className="p-3 inline-flex items-center justify-center border border-[#98A2B3] rounded-lg">
            <Image src={menu} alt="menu" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Header;
