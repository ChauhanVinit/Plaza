"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "../public/pps-logo.png";
import callRinging from "../public/call-ringing.svg";
import login from "../public/login.svg";
import down from "../public/down.svg";
import menu from "../public/menu.svg";
import close from "../public/Close.svg";
import Link from "next/link";
import Button from "../utils/Button";
import UnarmedSecurity from "../public/UnarmedSecurity.svg";
import RemoteGuarding from "../public/fire.svg";
import tvSmart from "../public/tv-smart.svg";
import car from "../public/car-03.svg";
import fire from "../public/Services/Fire-risk.svg";

const Header = ({ ContactUsBtn }) => {
  const tobarData = [
    {
      id: 1,
      name: "Services",
      subnavs: [
        {
          id: "unarmedSecurity",
          name: "Unarmed Security",
          desc:"Plaza Protection provides top-tier security services across the ",
          icon: UnarmedSecurity,
          path: "/Unarmed-Security",
        },
        {
          id: "fire-Watch",
          name: "Fire Watch",
          desc:"Plaza Protection provides top-tier security services across the ",
          icon: fire,
          path: "/Fire-Watch",
        },
        {
          id: "RemoteGuarding",
          name: "Remote Guarding Service",
          desc:"Plaza Protection provides top-tier security services across the ",
          icon: tvSmart,
          path: "/Remote-Guarding-Service",
        },
        {
          id: "Vehiclepatrol",
          name: "Vehicle patrol",
          desc:"Plaza Protection provides top-tier security services across the ",
          icon: car,
          path: "/Vehicle-patrol",
        },
        {
          id: "CCTV-Installation",
          name: "CCTV Installation",
          desc:"Plaza Protection provides top-tier security services across the ",
          icon: RemoteGuarding,
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

    {
      id: 3,
      name: "Resources",
      subnavs: [
        {
          id: "blog",
          name: "Blog",
          path: "/Blog",
        },
        {
          id: "aboutUs",
          name: "About Us",
          path: "/About-us",
        },
        {
          id: "help-center",
          name: "Help Center",
          path: "/Help-Center",
        },
      ],
    },
    { id: 4, name: "Contact Us", path: "/Contact-Us", subnavs: [] },
  ];                                                                                                        

  const [openSubnav, setOpenSubnav] = useState(null);

  const handleSubNavHover = (id) => {
    setOpenSubnav(id);
  };

  const handleSubNavLeave = () => {
    setOpenSubnav(null);
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const renderNavLink = (nav) => {
    return (
      <Link
        className="w-full xl:w-auto px-3 xl:px-[14px] py-4 xl:py-7  border-b xl:border-none border-[#1355FF]/5 text-base leading-5 font-jakarta font-semibold text-[#1D2939] "
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
        className="w-full xl:w-auto  cursor-pointer  relative group"
        onMouseEnter={() => handleSubNavHover(nav.id)}
        onMouseLeave={handleSubNavLeave}
      >
        <button className="w-full border-b   xl:border-none border-[#1355FF]/5 justify-between  inline-flex gap-2 items-center  px-3 xl:px-[14px] py-4 xl:py-7 text-base leading-5 font-jakarta font-semibold text-[#1D2939] ">
          {nav.name}
          <Image
            src={down}
            alt="down"
            className={`transition ease-out duration-100 relative top-[3px] w-4 h-4 ${
              openSubnav === nav.id
                ? "rotate-0 xl:rotate-180"
                : " rotate-[270deg] xl:rotate-0 "
            }`}
          />
        </button>
        {openSubnav === nav.id && (
          <div className="bg-white w-full xl:w-auto text-nowrap flex flex-col  absolute top-[calc(100%+0px)] shadow-md p-2 rounded-lg z-50">
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
      <div className="2xl:max-w-[1440px] 2xl:mx-auto bg-z flex items-center p-4  2xl:px-[15px] 2xl:py-3 ">
        <div className="inline-flex items-center gap-[10px] py-3">
          <Image src={Logo} alt="Logo" className="w-auto h-12" />
        </div>
        <div
          className={`absolute top-[calc(100%+0px)] p-4 xl:p-0 left-0 w-full  xl:relative grow flex flex-col items-start xl:flex-row xl:items-center bg-white smooth shadow-md  xl:shadow-none ${
            menuOpen ? "scale-100" : "xl:scale-100 scale-0 z-40"
          } `}
        >
          <div className="w-full xl:w-auto xl:ml-auto 2xl:ml-[180px] mr-auto flex flex-col xl:flex-row items-start xl:items-center">
            {tobarData.map((nav) =>
              nav.subnavs.length ? renderSubnavs(nav) : renderNavLink(nav)
            )}
          </div>
          <div
            className={`flex flex-col xl:flex-row items-start xl:items-center  ${
              ContactUsBtn ? "gap-10" : " gap-4 xl:gap-3"
            } `}
          >
            <div className="mt-4 xl:mt-0 flex items-center px-0 xl:px-1 gap-3">
              <button className="h-10 w-10 bg-[#D7E8FF]/50 inline-flex items-center justify-center">
                <Image
                  src={callRinging}
                  className="w-5 h-5"
                  alt="callRinging"
                />
              </button>
              <div>
                <p
                  className="font-urbanist text-base leading-normal font-semibold 
            text-[#1D2939]"
                >
                  +1 844-557-5292
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
                <div className=" hidden xl:block h-7 w-[1px] bg-[#E6E6E6]"></div>
                <Link
                  href={"/Request-A-Quote"}
                  // target="_blank"
                  className=" xl:px-5 py-1 inline-flex items-center gap-3 "
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

        <button
          onClick={handleMenu}
          className="ml-auto xl:hidden inline-flex items-center justify-center h-10 w-10 bg-[#1355FF]"
        >
          <Image src={menuOpen ? close : menu} className="w-5 h-5" alt="Menu" />
        </button>
      </div>
    </div>
  );
};

export default Header;
