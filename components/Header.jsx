"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "../public/pps-logo.png";
import callRinging from "../public/call-ringing.svg";
import login from "../public/login.svg";
import vehiclePatrol from "../public/vehicle-patrol.png";
import down from "../public/down.svg";
import Link from "next/link";
import Button from "../utils/Button";
const Header = ({ ContactUsBtn }) => {
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
          id: "fire-Watch",
          name: "Fire Watch",
          icon: vehiclePatrol,
          path: "/Fire-Watch",
        },
        {
          id: "RemoteGuarding",
          name: "Remote Guarding Service",
          icon: vehiclePatrol,
          path: "/Remote-Guarding-Service",
        },
        {
          id: "Vehiclepatrol",
          name: "Vehicle patrol",
          icon: vehiclePatrol,
          path: "/Vehicle-patrol",
        },
        {
          id: "CCTV-Installation",
          name: "CCTV Installation",
          icon: vehiclePatrol,
          path: "/CCTV-Installation",
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
          id: "commercial-Buildings",
          name: "Commercial Buildings",
          path: "Commercial-Buildings",
        },
        {
          id: "construction-Sites",
          name: "Construction Sites",
          path: "/Construction-Sites",
        },
        {
          id: "shopping-Center",
          name: "Shopping Centers",
          path: "/Shopping-Centers",
        },
        {
          id: "healthcare-facilities",
          name: "Healthcare Facilities",
          path: "/Healthcare-Facilities",
        },
      ],
    },
   
    { id: 3, name: "Contact Us", path: "/Contact-Us", subnavs: [] },
    { id: 4, name: "About Us", path: "/About-us", subnavs: [] },
    { id: 5, name: "Blog", path: "/Blog", subnavs: [] },
    
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
        className="px-[14px] py-7 text-base leading-5 font-jakarta font-semibold text-[#1D2939] "
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
    <div className="w-full sticky top-0 z-[999] bg-white">
      <div className="max-w-[1440px] mx-auto bg-white flex items-center  px-[15px] py-3 ">
        <div className="inline-flex items-center gap-[10px] py-3">
          <Image src={Logo} alt="Logo" className="w-[182px] h-12" />
        </div>
        <div className="ml-[180px] mr-auto flex items-center">
          {tobarData.map((nav) =>
            nav.subnavs.length ? renderSubnavs(nav) : renderNavLink(nav)
          )}
        </div>
        <div
          className={`flex items-center  ${ContactUsBtn ? "gap-10" : "gap-3"} `}
        >
          <div className="flex items-center px-1 gap-3">
            <button className="h-10 w-10 bg-[#D7E8FF]/50 inline-flex items-center justify-center">
              <Image src={callRinging} className="w-5 h-5" alt="callRinging" />
            </button>
            <div>
              <p
                className="font-urbanist text-base leading-normal font-semibold 
            text-[#1D2939]"
              >
                1-844-55-557-5292
              </p>
            </div>
          </div>

          {ContactUsBtn ? (
            <Button
              variant="custom"
              style={"!min-w-[162px]"}
              name="Contact Us"
              path="/Contact-Us"
            />
          ) : (
            <>
              <div className="h-7 w-[1px] bg-[#E6E6E6]"></div>
              <Link
                href={"/Request-A-Quote"}
                // target="_blank"
                className="px-5 py-1 inline-flex items-center gap-3 "
              >
                <div className="w-10 h-10 inline-flex items-center justify-center bg-[#1355FF]">
                  <Image src={login} alt="login" width={20} height={20} />
                </div>
                <h3 className="font-urbanist text-base font-semibold text-[#1D2939]">
                  Request Quote
                </h3>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
