"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "../public/pps-logo.svg";
import callRinging from "../public/call-ringing.svg";
import login from "../public/login.svg";
import down from "../public/down.svg";
import downBlue from "../public/Down-blue.svg";
import menu from "../public/menu.svg";
import close from "../public/Close.svg";
import Link from "next/link";
import Button from "../utils/Button";
import UnarmedSecurity from "../public/UnarmedSecurity.svg";
import RemoteGuarding from "../public/fire.svg";
import tvSmart from "../public/tv-smart.svg";
import car from "../public/car-03.svg";
import fire from "../public/Services/Fire-risk.svg";
import Services from "../public/work-history.svg";
import Industries from "../public/building-06.svg";
import Resources from "../public/resources-add.svg";
import contractsUs from "../public/contracts.svg";
import UnarmedImg from "../public/Unarmed-Security.png";
import FireWatchImg from "../public/Fire-Watch-img.png";
import RemoteGuardingImg from "../public/Remote-Guarding-Service-Img.png";
import VehiclepatrolImg from "../public/Vehicle-patrol-Img.png";
import CCTVInstallationImg from "../public/CCTV-Installation-Img.png";
import ResidentialCommunitiesImg from "../public/Residential-Communities-Img.png";
import CommercialBuildingsImg from "../public/Commercial-Buildings-img.png";
import ConstructionSitesImg from "../public/Construction-Sites-Img.png";
import ShoppingCentersImg from "../public/Shopping-Centers-img.png";
import HealthcareFacilitiesImg from "../public/Healthcare-Facilities-img.png";
import SubNavBg from "../public/SubNav-Background-image.png";
import HelpcenterIcon from "../public/Help center.svg";
import blogIcon from "../public/Blog.svg";
import AboutusIcon from "../public/About us.svg";
import IllustrationA from "../public/Illustration-01.png";
import IllustrationB from "../public/Illustration-02.png";
import arrowright from "../public/arrow-right.svg";
const Header = ({ ContactUsBtn }) => {
  const tobarData = [
    {
      id: 1,
      name: "Services",
      icon: Services,
      subnavs: [
        {
          id: "unarmedSecurity",
          name: "Unarmed Security",
          desc: "Plaza Protection provides top-tier security services across the ",
          subIcon: UnarmedSecurity,
          img: UnarmedImg,
          path: "/Unarmed-Security",
        },
        {
          id: "fire-Watch",
          name: "Fire Watch",
          desc: "Plaza Protection provides top-tier security services across the ",
          subIcon: fire,
          img: FireWatchImg,
          path: "/Fire-Watch",
        },
        {
          id: "RemoteGuarding",
          name: "Remote Guarding Service",
          desc: "Plaza Protection provides top-tier security services across the ",
          subIcon: tvSmart,
          img: RemoteGuardingImg,
          path: "/Remote-Guarding-Service",
        },
        {
          id: "Vehiclepatrol",
          name: "Vehicle patrol",
          desc: "Plaza Protection provides top-tier security services across the ",
          subIcon: car,
          img: VehiclepatrolImg,
          path: "/Vehicle-patrol",
        },
        {
          id: "CCTV-Installation",
          name: "CCTV Installation",
          desc: "Plaza Protection provides top-tier security services across the ",
          subIcon: RemoteGuarding,
          img: CCTVInstallationImg,
          path: "/CCTV-Installation",
        },
      ],
    },
    {
      id: 2,
      name: "Industries",
      icon: Industries,
      subnavs: [
        {
          id: "residential-Communities",
          name: "Residential Communities",
          desc: "Plaza Protection provides top-tier security services across the ",
          subIcon: UnarmedSecurity,
          img: ResidentialCommunitiesImg,
          path: "/Residential-Communities",
        },
        {
          id: "commercial-Buildings",
          name: "Commercial Buildings",
          desc: "Plaza Protection provides top-tier security services across the ",
          subIcon: fire,
          img: CommercialBuildingsImg,
          path: "Commercial-Buildings",
        },
        {
          id: "construction-Sites",
          name: "Construction Sites",
          desc: "Plaza Protection provides top-tier security services across the ",
          subIcon: tvSmart,
          img: ConstructionSitesImg,
          path: "/Construction-Sites",
        },
        {
          id: "shopping-Center",
          name: "Shopping Centers",
          desc: "Plaza Protection provides top-tier security services across the ",
          subIcon: car,
          img: ShoppingCentersImg,
          path: "/Shopping-Centers",
        },
        {
          id: "healthcare-facilities",
          name: "Healthcare Facilities",
          desc: "Plaza Protection provides top-tier security services across the ",
          subIcon: RemoteGuarding,
          img: HealthcareFacilitiesImg,
          path: "/Healthcare-Facilities",
        },
      ],
    },

    {
      id: 3,
      name: "Resources",
      icon: Resources,
      subnavs: [
        {
          id: "blog",
          name: "Blog",
          desc: "Connect to your warehouse",
          subIcon: blogIcon,
          path: "/Blog",
        },
        {
          id: "aboutUs",
          name: "About Us",
          desc: "Keep data clean & usable",
          subIcon: AboutusIcon,
          path: "/About-us",
        },
        {
          id: "help-center",
          desc: "Protect customer data",
          subIcon: HelpcenterIcon,
          name: "Help Center",
          path: "/Help-Center",
        },
      ],
    },
    {
      id: 4,
      name: "Contact Us",
      icon: contractsUs,
      path: "/Contact-Us",
      subnavs: [],
    },
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

  return (
    <div className="w-full sticky top-0 z-[999] bg-white">
      <div className="2xl:max-w-[1440px] 2xl:mx-auto bg-white flex items-center    relative p-4 xl:px-0 xl:pt-1 xl:pb-0">
        <div className="xl:hidden">
          <Image src={Logo} alt="Logo" className="w-auto h-10" />
        </div>
        <div
          className={`bg-white p-4 xl:px-[15px] xl:py-0  absolute top-[calc(100%+0px)]  left-0  w-full h-[90vh] xl:h-auto  xl:relative grow flex flex-col items-start xl:flex-row xl:items-center  smooth shadow-md  xl:shadow-none ${
            menuOpen ? "scale-100" : "xl:scale-100 scale-0 z-40"
          } `}
        >
          <div className="hidden xl:block">
            <Image src={Logo} alt="Logo" className="w-auto h-12" />
          </div>

          <div className="w-full xl:w-auto xl:ml-auto 2xl:ml-[180px] mr-auto flex flex-col xl:flex-row items-start xl:items-center">
            {tobarData.map((nav) =>
              nav.subnavs.length ? (
                <div
                  key={nav.id}
                  className="w-full xl:w-auto"
                  onMouseEnter={() => handleSubNavHover(nav.id)}
                  onMouseLeave={handleSubNavLeave}
                >
                  <button
                    className={`w-full mb-2 bg-[#1355FF]/5 xl:bg-white  inline-flex gap-2 items-center px-3 xl:px-[14px] py-6 rounded-2xl xl:py-7 text-base font-dmSans font-semibold tracking-[-0.5px] relative xl:after:content-[''] xl:after:absolute xl:after:h-[3px] xl:after:rounded-[50px]   xl:after:bottom-0 xl:after:left-1/2 xl:after:-translate-x-1/2 xl:after:bg-[#1355FF] ${
                      openSubnav === nav.id
                        ? "text-[#1355FF] after:w-[20px]"
                        : "text-[#1A1A1A] after:w-0"
                    } `}
                  >
                    <Image
                      src={nav.icon}
                      alt={`${nav.name} icon`}
                      className="w-4 h-4"
                    />
                    {nav.name}
                    <Image
                      src={openSubnav === nav.id ? downBlue : down}
                      alt="down"
                      className={`ml-auto xl:ml-0 relative top-[2px] w-4 h-4 ${
                        openSubnav === nav.id ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {openSubnav === nav.id && (
                    <div className="absolute top-full left-0 w-full z-50 bg-white px-12 pb-12 pt-6 shadow-sm">
                      <div className="py-2 border-b border-[#7198FE]/10">
                        <h3 className="font-dmSans text-sm !leading-6 tracking-[1px] text-[#666666] font-bold uppercase">
                          {nav.name}
                        </h3>
                      </div>

                      {nav.name !== "Resources" ? (
                        <div className="mt-6 flex items-center gap-6 ">
                          {tobarData
                            .find((item) => item.id === nav.id)
                            ?.subnavs.map((sub) => (
                              <Link
                                key={sub.id}
                                href={sub.path}
                                className=" group  relative flex-1  rounded-2xl bg-[linear-gradient(to_bottom,_#1355FF00_0%,_#1355FF1A_100%)] hover:!bg-[linear-gradient(to_top,_#1355FF00_0%,_#1355FF1A_100%)] transition-transform duration-300 ease-in-out overflow-hidden"
                              >
                                <div
                                  className={`p-4 mb-[18px] ${
                                    nav.name == "Services"
                                      ? "mb-[18px]"
                                      : "!mb-0"
                                  }  `}
                                >
                                  <Image
                                    src={sub.subIcon}
                                    alt={sub.name}
                                    className="w-[28px] h-[28px]"
                                  />
                                  <h4 className="mt-4 mb-[2px] font-dmSans text-lg text-[#111B29 group-hover:text-[#1355FF]  font-semibold tracking-[-0.5px] transition-transform duration-300 ease-in-out">
                                    {sub.name}
                                  </h4>
                                  <p className="text-xs font-normal text-[#677489]">
                                    {sub.desc}
                                  </p>
                                </div>

                                <Image
                                  src={sub.img}
                                  alt={sub.name}
                                  className="w-full relative z-20 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                                />

                                <Image
                                  src={SubNavBg}
                                  alt="SubNavBg"
                                  className="absolute bottom-0 right-0 z-10 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                                />
                              </Link>
                            ))}
                        </div>
                      ) : (
                        <div className="mt-6 flex items-center gap-6">
                          <div className="grow">
                            {tobarData
                              .find((item) => item.id === nav.id)
                              ?.subnavs.map((sub, index, array) => (
                                <Link key={sub.id} href={sub.path} className="">
                                  <div
                                    className={`max-w-[326px] flex items-start gap-4 px-[6px] py-2 bg-white hover:bg-[#EBF1FF]/50 smooth rounded-lg ${
                                      index === array.length - 1
                                        ? "mb-0"
                                        : "mb-5"
                                    }`}
                                  >
                                    <Image
                                      src={sub.subIcon}
                                      className="w-6 h-6"
                                      alt={`${sub.name} Icon`}
                                    />
                                    <div>
                                      <h3 className="font-dmSans font-semibold text-lg tracking-[-0.5px] text-[#111B29] mb-[2px]">
                                        {sub.name}
                                      </h3>
                                      <p className="font-dmSans text-sm font-normal text-[#677489]">
                                        {sub.desc}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                          </div>
                          <div>
                            <Image
                              src={IllustrationA}
                              alt="Illustration Image"
                            />
                            <div className="mt-5 inline-flex items-center gap-[10px]">
                              <h3 className="font-dmSans font-semibold text-lg !leading-8 text-[#111B29] tracking-[-0.58px] ">
                                Watch demo video
                              </h3>
                              <Image
                                src={arrowright}
                                className="w-[18px] h-[18px]"
                                alt="arrow right icon"
                              />
                            </div>
                          </div>
                          <div>
                            <Image
                              src={IllustrationB}
                              alt="Illustration Image"
                            />
                            <div className="mt-5 inline-flex items-center gap-[10px]">
                              <h3 className="font-dmSans font-semibold text-lg !leading-8 text-[#111B29] tracking-[-0.58px] ">
                                Watch demo video
                              </h3>
                              <Image
                                src={arrowright}
                                className="w-[18px] h-[18px]"
                                alt="arrow right icon"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  className={`w-full bg-[#1355FF]/5 xl:bg-white  xl:w-auto inline-flex items-center gap-2 px-4 xl:px-[14px] py-6 xl:py-7 rounded-2xl  text-base font-dmSans font-semibold tracking-[-0.5px] text-[#1A1A1A] smooth relative  xl:after:content-['']  xl:after:absolute  xl:after:h-[3px]  xl:after:rounded-[50px]  xl:after:bottom-0  xl:after:left-1/2  xl:after:w-0  xl:after:-translate-x-1/2  xl:after:bg-[#1355FF] hover:text-[#1355FF]  xl:hover:after:w-[20px]`}
                  href={nav.path}
                  key={nav.id}
                >
                  <Image
                    src={nav.icon}
                    alt={`${nav.name} icon`}
                    className="w-4 h-4"
                  />
                  {nav.name}
                </Link>
              )
            )}
          </div>
          <div
            className={`mt-4 2xl:mt-0 w-full xl:w-auto flex justify-between items-center ${
              ContactUsBtn ? "gap-10" : "gap-4 xl:gap-3"
            } xl:static absolute bottom-6 left-0 px-4`}
          >
            <div className="mt-0 flex items-center px-0 xl:px-1 gap-3">
              <button className="h-10 w-10 bg-[#D7E8FF]/50 inline-flex items-center justify-center">
                <Image
                  src={callRinging}
                  className="w-5 h-5"
                  alt="callRinging"
                />
              </button>
              <div>
                <p className="text-base font-dmSans font-semibold tracking-[-0.5px] text-[#1A1A1A]">
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
                  className="inline-flex xl:px-5 xl:py-1  items-center gap-3 "
                >
                  <div className="w-10 h-10 inline-flex items-center justify-center bg-[#1355FF]">
                    <Image src={login} alt="login" width={20} height={20} />
                  </div>
                  <h3 className="text-base font-dmSans font-semibold tracking-[-0.5px] text-[#1A1A1A]">
                    Request Quote
                  </h3>
                </Link>
              </>
            )}
          </div>
        </div>

        <Link
          href={"/Request-A-Quote"}
          className="mr-2 ml-auto xl:hidden  p-[10px] bg-[#D7E8FF]/50 text-sm font-dmSans font-semibold tracking-[-0.5px] text-[#1A1A1A]"
        >
          Request Quote
        </Link>

        <button
          onClick={handleMenu}
          className={` xl:hidden inline-flex items-center justify-center h-10 w-10 bg-[#1355FF] ${
            menuOpen ? "bg-[#1A1A1A]" : "bg-[#1355FF]"
          } `}
        >
          <Image src={menuOpen ? close : menu} className="w-5 h-5" alt="Menu" />
        </button>
      </div>
    </div>
  );
};

export default Header;
