"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../public/pps-logo.svg";
import callRinging from "../public/call-ringing.svg";
import login from "../public/login.svg";
import downBlue from "../public/Down-blue.svg";
import down from "../public/down.svg";
import menu from "../public/menu.svg";
import close from "../public/Close.svg";
import Link from "next/link";
import Button from "../utils/Button";
import UnarmedSecurity from "../public/UnarmedSecurity.svg";
import CCTV from "../public/CCTV.svg";
import tvSmart from "../public/tv-smart.svg";
import car from "../public/car-03.svg";
import fire from "../public/Services/Fire-risk.svg";
import Residentialicon from "../public/Residential.svg";
import Buildingsicon from "../public/Buildings.svg";
import Sitesicon from "../public/Sites.svg";
import ShoppingCentersicon from "../public/Shopping-Centers.svg";
import Healthcareicon from "../public/Healthcare.svg";
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
import SubNavSmallBg from "../public/SubNav-Small-BG.png";
import blogIcon from "../public/Blog.svg";
import AboutusIcon from "../public/About us.svg";
import FAQIcon from "../public/FAQ.svg";
import RequestQuoteIcon from "../public/Request-Quote.svg";
import ContactUsIcon from "../public/Contact-Us.svg";
import ClientPortalIcon from "../public/Client-Portal.svg";
import Latestvideos from "../public/Latest-videos.png"
import { usePathname } from "next/navigation";

const Header = () => {
  const navData = [
    {
      id: 1,
      name: "Services",
      subnavs: [
        {
          id: "unarmedSecurity",
          name: "Unarmed Security",
          desc: (
            <>
              Deliver professional, reliable on-site protection with a strong
              focus on
              <br className="hidden xl:block" /> safety, and service.
            </>
          ),
          subIcon: UnarmedSecurity,
          img: UnarmedImg,
          path: "/unarmed-security",
        },
        {
          id: "fire-Watch",
          name: "Fire Watch",
          desc: (
            <>
              Preventing hazards and maintaining full compliance with fire
              safety
              <br className="hidden xl:block" /> regulations.
            </>
          ),
          subIcon: fire,
          img: FireWatchImg,
          path: "/fire-watch",
        },
        {
          id: "RemoteGuarding",
          name: "Remote Guarding Service",
          desc: (
            <>
              Advanced surveillance technology with live monitoring to detect,
              respond to threats in real time.
            </>
          ),
          subIcon: tvSmart,
          img: RemoteGuardingImg,
          path: "/remote-guarding-service",
        },
        {
          id: "Vehiclepatrol",
          name: "Vehicle patrol",
          desc: "High-visibility security with routine checks, rapid response, and real-time reporting across your property.",
          subIcon: car,
          img: VehiclepatrolImg,
          path: "/vehicle-patrol",
        },
        {
          id: "CCTV-Installation",
          name: "CCTV Installation",
          desc: (
            <>
              Expert CCTV installation tailored to
              <br className="hidden xl:block" /> your property—enhancing
              visibility,
              <br className="hidden xl:block" /> deterring threats.
            </>
          ),
          subIcon: CCTV,
          img: CCTVInstallationImg,
          path: "/cctv-installation",
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
          desc: "Ensuring a safe, welcoming, and well-monitored living environment.",
          subIcon: Residentialicon,
          img: ResidentialCommunitiesImg,
          path: "/residential-communities",
        },
        {
          id: "commercial-Buildings",
          name: "Commercial Buildings",
          desc: "Ensuring safe operations, controlled access, and 24/7 protection.",
          subIcon: Buildingsicon,
          img: CommercialBuildingsImg,
          path: "/commercial-buildings",
        },
        {
          id: "construction-Sites",
          name: "Construction Sites",
          desc: (
            <>
              Keep secured, protected—day and
              <br className="hidden xl:block" /> night, start to finish.
            </>
          ),
          subIcon: Sitesicon,
          img: ConstructionSitesImg,
          path: "/construction-sites",
        },
        {
          id: "shopping-Center",
          name: "Shopping Centers",
          desc: "Provides a safe, environment for shoppers, staff, and tenants.",
          subIcon: ShoppingCentersicon,
          img: ShoppingCentersImg,
          path: "/shopping-centers",
        },
        {
          id: "healthcare-facilities",
          name: "Healthcare Facilities",
          desc: (
            <>
              Specialized security that ensures a
              <br className="hidden xl:block" /> safe, controlled environment.
            </>
          ),
          subIcon: Healthcareicon,
          img: HealthcareFacilitiesImg,
          path: "/healthcare-facilities",
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
          desc: "Expert insights and updates on security solutions from Plaza Protection.",
          subIcon: blogIcon,
          path: "https://blog.plazaprotection.com/",
        },
        {
          id: "aboutUs",
          name: "About Us",
          desc: "Discover who we are and how we deliver trusted security services.",
          subIcon: AboutusIcon,
          path: "/about-us",
        },
        {
          id: "clientPortal",
          desc: "Securely access your personalized dashboard and manage services with ease.",
          subIcon: ClientPortalIcon,
          name: "Client Portal",
          path: "/client-portal",
        },
        {
          id: "ContactUs",
          desc: "Get in touch with our team for inquiries, support, or more information.",
          subIcon: ContactUsIcon,
          name: "Contact us",
          path: "/contact-us",
        },
        {
          id: "requestQuote",
          desc: "Request a tailored security quote to match your specific requirements.",
          subIcon: RequestQuoteIcon,
          name: "Request Quote",
          path: "/request-quote",
        },
        {
          id: "faq",
          desc: "Find quick answers to frequently asked questions about our services.",
          subIcon: FAQIcon,
          name: "FAQ",
          path: "/faq",
        },
      ],
    },
    {
      id: 4,
      name: "Contact us",
      path: '/contact-us',
      subnavs: [

      ],
    },
  ];
  const [openMobNav, setOpenMobNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // const [hovered, setHovered] = useState(false);
  const [disableHover, setDisableHover] = useState(false);
  const [hoveredNavId, setHoveredNavId] = useState(null);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const pathname = usePathname();
  useEffect(() => {
    setOpenMobNav(null);
    setMenuOpen(false);
    setDisableHover(true); // disable hover immediately on route change

    const timer = setTimeout(() => {
      setDisableHover(false); // allow hover again after 300ms
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };


  return (
    <>
      <div
        className={`hidden xl:block bg-black/15 transition-all duration-200 ease-in-out ${hoveredNavId
          ? "backdrop-blur-sm visible opacity-100"
          : "backdrop-blur-none invisible opacity-0"
          } z-[998] fixed top-0 w-full h-full left-0`}
      ></div>

      <div className="w-full sticky top-0 z-[999] bg-white">
        <div className="2xl:max-w-[1440px] 2xl:mx-auto bg-white flex items-center relative p-4 xl:px-0 xl:pt-1 xl:pb-0">
          <Link href="/" className="xl:hidden">
            <Image
              src={Logo}
              alt="Plaza Protection logo – Professional Security Guard Services"
              title="Plaza Protection – Professional Security Services"
              className="w-auto h-10 xl:h-11 2xl:h-12"
            />
          </Link>
          <div
            className={`bg-white p-4 xl:px-[15px] xl:py-0 absolute left-0 w-full h-[calc(100vh-72px)] overflow-y-scroll xl:overflow-y-visible xl:h-auto xl:top-0 xl:relative grow flex flex-col justify-between xl:flex-row xl:items-center shadow-md xl:shadow-none transition-all duration-200 ease-in-out transform z-40 ${menuOpen
              ? "top-[72px] opacity-100 visible"
              : "top-[64px] opacity-0 invisible xl:opacity-100 xl:visible"
              }`}
          >
            <Link href={"/"} className="hidden xl:block">
              <Image
                src={Logo}
                alt="Plaza Protection logo – Professional Security Guard Services"
                title="Plaza Protection – Professional Security Services"
                className="w-auto h-10 xl:h-11 2xl:h-12"
              />
            </Link>

            <div className="w-full xl:w-auto xl:ml-auto 2xl:ml-[180px] mr-auto flex flex-col xl:flex-row items-start xl:items-center">
              {navData.map((nav) =>
                nav.subnavs.length ? (
                  <div
                    key={nav.id}
                    className={`${disableHover ? "" : "group"
                      } w-full xl:w-auto`}
                    onMouseEnter={() => setHoveredNavId(nav.id)}
                    onMouseLeave={() => setHoveredNavId(null)}
                  >
                    <div
                      onClick={() => setOpenMobNav(nav.id)}
                      className={` relative cursor-pointer w-full mb-2 xl:mb-0 bg-[#1355FF]/5 xl:bg-white inline-flex gap-2 items-center px-3 xl:px-[14px] py-6 rounded-2xl xl:py-7 text-base font-dmSans font-semibold tracking-[-0.5px]  xl:after:content-[''] xl:after:absolute xl:after:h-[3px] xl:after:rounded-[50px] xl:after:bottom-0 xl:after:left-1/2 xl:after:-translate-x-1/2 xl:after:bg-[#1355FF] 
                        xl:group-hover:text-[#1355FF] group-hover:after:w-[20px] text-[#1A1A1A] after:w-0 after:transition-all after:duration-250 after:ease-in-out`}
                    >

                      {nav.name}
                      <div
                        className={`w-4 h-4  absolute right-3 top-7 xl:relative xl:right-0 xl:top-[2px] transition-transform duration-200 ease-in-out ${hoveredNavId === nav.id
                          ? "rotate-0 xl:rotate-180"
                          : "rotate-0"
                          }`}
                      >
                        <Image
                          src={down}
                          alt="down"
                          className={`absolute inset-0 w-full h-full transition-opacity duration-200 ${hoveredNavId === nav.id
                            ? "opacity-100 xl:opacity-0"
                            : "opacity-100"
                            }`}
                        />

                        <Image
                          src={downBlue}
                          alt="downBlue"
                          className={`hidden xl:block absolute inset-0 w-full h-full transition-opacity duration-200 ${hoveredNavId === nav.id
                            ? "opacity-100"
                            : "opacity-0"
                            }`}
                        />
                      </div>
                    </div>
                    <div
                      className={`absolute ${openMobNav === nav.id
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                        } top-0 xl:!top-10 left-0 w-full xl:-z-[1] z-10 bg-white p-4 xl:px-12 xl:pb-12 xl:pt-6 transition-all xl:duration-150 ease-in-out xl:invisible xl:opacity-0 xl:group-hover:!top-24 xl:group-hover:opacity-100 xl:group-hover:visible xl:rounded-[40px]`}
                    >

                      {nav.name !== "Resources" ? (
                        <>
                          <div className="py-2 border-b border-[#7198FE]/10 flex items-center justify-between">
                            <h3 className="font-dmSans text-sm !leading-6 tracking-[1px] text-[#666666] font-bold uppercase">
                              {nav.name}
                            </h3>
                            <button
                              type="button"
                              onClick={() => setOpenMobNav(null)}
                              className="xl:hidden text-xs !leading-6 tracking-[1px] text-[#3355FF] font-bold "
                            >
                              Back
                            </button>
                          </div>
                          <div className="mt-4 xl:mt-6 flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-6">
                            {navData
                              .find((item) => item.id === nav.id)
                              ?.subnavs.map((sub) => (
                                <Link
                                  // onClick={() => {
                                  //   setOpenMobNav(null);
                                  //   setMenuOpen(false);
                                  // }}
                                  key={sub.id}
                                  href={sub.path}
                                >
                                  <div className="nav-item-hover-wrapper relative xl:flex-1  rounded-2xl bg-[linear-gradient(to_bottom,_#1355FF00_0%,_#1355FF1A_100%)] hover:!bg-[linear-gradient(to_top,_#1355FF00_0%,_#1355FF1A_100%)] transition-transform duration-300 ease-in-out overflow-hidden">
                                    <div
                                      className={`p-4  flex xl:flex-col gap-3 xl:gap-0 ${nav.name == "Services"
                                        ? "!mb-0 xl:!mb-[18px]"
                                        : "!mb-0"
                                        }  `}
                                    >
                                      <Image
                                        src={sub.subIcon}
                                        alt={`${sub.name} Icon`}
                                        title={`${sub.name}`}
                                        className="w-[28px] h-[28px]"
                                      />
                                      <div className="xl:mt-4">
                                        <h4 className="subnav-title mb-[2px] font-dmSans text-lg font-semibold tracking-[-0.5px] text-[#111B29] group-subnav-hover:text-[#1355FF] transition-transform duration-300 ease-in-out">
                                          {sub.name}
                                        </h4>
                                        <p className="text-sm xl:text-xs font-normal text-[#677489] xl:max-w-[217px]">
                                          {sub.desc}
                                        </p>
                                      </div>
                                    </div>

                                    <Image
                                      src={sub.img}
                                      alt={`${sub.name} illustration`}
                                      title={sub.name}
                                      className="subnav-image hidden xl:block w-full relative z-20  transition-transform duration-300 ease-in-out"
                                    />

                                    <Image
                                      src={SubNavBg}
                                      alt=""
                                      role="presentation"
                                      aria-hidden="true"
                                      className="subnav-bg hidden xl:block absolute bottom-0 right-0 z-10  transition-transform duration-300 ease-in-out"
                                    />
                                    <Image
                                      src={SubNavSmallBg}
                                      alt=""
                                      role="presentation"
                                      aria-hidden="true"
                                      className="xl:hidden absolute bottom-0 right-0 z-10"
                                    />
                                  </div>
                                </Link>
                              ))}
                          </div>
                        </>


                      ) : (
                        <div className="grid grid-cols-12 gap-6">
                          <div className="col-span-12 xl:col-span-8">
                            <div className="py-2 border-b border-[#7198FE]/10 flex items-center justify-between">
                              <h3 className="font-dmSans text-sm !leading-6 tracking-[1px] text-[#666666] font-bold uppercase">
                                {nav.name}
                              </h3>
                              <button
                                type="button"
                                onClick={() => setOpenMobNav(null)}
                                className="xl:hidden text-xs !leading-6 tracking-[1px] text-[#3355FF] font-bold "
                              >
                                Back
                              </button>
                            </div>
                            <div className="mt-4 xl:mt-6 grid grid-cols-12 gap-4">
                              {chunkArray(nav.subnavs, 3).map((group, groupIndex) => (
                                <div key={groupIndex} className="col-span-12 xl:col-span-6">
                                  {group.map((sub, index, array) => (
                                    <Link key={sub.id} href={sub.path}>
                                      <div
                                        className={`xl:max-w-[326px] flex items-start gap-4 px-[6px] py-2 bg-white hover:bg-[#EBF1FF]/50 smooth rounded-lg ${index === array.length - 1 ? "mb-0" : "mb-5"
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
                              ))}


                            </div>
                          </div>
                          <div className="col-span-12 xl:col-span-4">
                            <div className="py-2 mb-4 border-b border-[#7198FE]/10 flex items-center justify-between">
                              <h3 className="font-dmSans text-sm !leading-6 tracking-[1px] text-[#666666] font-bold uppercase">
                                Latest videos
                              </h3>

                            </div>
                            <Link href={'https://www.youtube.com/@Plazaprotection/featured'} target="_blank" >
                              <Image src={Latestvideos} alt="" className="w-auto sm:max-w-[392px]" />
                            </Link>
                          </div>
                        </div>


                      )}
                    </div>
                  </div>
                ) : (
                  <Link
                    className={`w-full bg-[#1355FF]/5 xl:bg-white  xl:w-auto inline-flex items-center gap-2 px-4 xl:px-[14px] py-6 xl:py-7 rounded-2xl text-base font-dmSans font-semibold tracking-[-0.5px] text-[#1A1A1A] smooth relative  xl:after:content-['']  xl:after:absolute  xl:after:h-[3px]  xl:after:rounded-[50px]  xl:after:bottom-0  xl:after:left-1/2  xl:after:w-0  xl:after:-translate-x-1/2  xl:after:bg-[#1355FF] xl:hover:text-[#1355FF]  xl:hover:after:w-[20px]`}
                    href={nav.path}
                    key={nav.id}
                  >

                    {nav.name}
                  </Link>
                )
              )}
            </div>
            <div
              className={`w-full xl:w-auto flex justify-between items-center ${pathname === "/request-quote"
                ? "gap-10"
                : " gap-2 xxs:gap-4 xl:gap-3"
                } px-0 mt-4 xl:mt-0`}
            >
              <a href="tel:+18445575292" className="mt-0 flex items-center px-0 xl:px-1 gap-3 group">
                <button className="h-10 min-w-10 bg-[#D7E8FF]/50 group-hover:bg-[#D7E8FF] transition-colors duration-300 ease-in-out inline-flex items-center justify-center">
                  <Image
                    src={callRinging}
                    className="w-5 h-5"
                    title="Call Plaza Protection"
                    alt="Phone number icon"
                  />
                </button>
                <div className="relative h-6 overflow-hidden flex items-center justify-center">
                  <div className="transition-all duration-300 ease-in-out translate-y-0 group-hover:-translate-y-full flex items-center justify-center">
                    <p className="text-sm  xxs:text-base font-dmSans font-semibold tracking-[-0.5px] text-[#1A1A1A]">
                      +1 844-557-5292
                    </p>
                  </div>
                  <div className="absolute top-full transition-all duration-300 ease-in-out group-hover:translate-y-[-100%] flex items-center justify-center">
                    <p className="text-sm  xxs:text-base font-dmSans font-semibold tracking-[-0.5px] text-[#1A1A1A]">
                      +1 844-557-5292
                    </p>
                  </div>
                </div>
              </a>

              {pathname === "/request-quote" ? (
                <div className="flex items-center justify-center">
                  <Button
                    variant="custom"
                    style={"xs:!min-w-[162px]"}
                    name="Contact Us"
                    path="/contact-us"
                  />
                </div>
              ) : (
                <>
                  <div className=" hidden xl:block h-7 w-[1px] bg-[#E6E6E6] hover:bg-[#d8d8d8] smooth"></div>
                  <Link
                    href="/request-quote"
                    className="inline-flex xl:px-5 xl:py-1 items-center gap-3 group"
                  >
                    <div className="w-10 h-10 inline-flex items-center justify-center bg-[#1355FF] group-hover:bg-[#222A5B] transition-colors duration-300 ease-in-out">
                      <Image
                        src={login}
                        alt="Request Quote icon"
                        title="Request a Quote"
                        width={20}
                        height={20}
                      />
                    </div>

                    <div className="relative h-6 overflow-hidden flex items-center justify-center">
                      <div className="transition-all duration-300 ease-in-out translate-y-0 group-hover:-translate-y-full flex items-center justify-center">
                        <h3 className="text-sm  xxs:text-base font-dmSans font-semibold tracking-[-0.5px] text-[#1A1A1A]">
                          Request Quote
                        </h3>
                      </div>
                      <div className="absolute top-full transition-all duration-300 ease-in-out group-hover:translate-y-[-100%] flex items-center justify-center">
                        <h3 className="text-sm  xxs:text-base font-dmSans font-semibold tracking-[-0.5px] text-[#1A1A1A]">
                          Request Quote
                        </h3>
                      </div>
                    </div>
                  </Link>
                </>
              )}
            </div>
          </div>
          <Link
            href={"/request-quote"}
            className="mr-2 ml-auto xl:hidden p-[10px] bg-[#D7E8FF]/50 text-sm font-dmSans font-semibold tracking-[-0.5px] text-[#1A1A1A]"
          >
            Request Quote
          </Link>
          <button
            onClick={handleMenu}
            className={`xl:hidden inline-flex items-center justify-center h-10 w-10 bg-[#1355FF] ${menuOpen ? "bg-[#1A1A1A]" : "bg-[#1355FF]"
              } `}
          >
            <Image
              src={menuOpen ? close : menu}
              className="w-5 h-5"
              alt={menuOpen ? "Close menu icon" : "Open menu icon"}
              title={menuOpen ? "Close menu" : "Open menu"}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;