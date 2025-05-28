"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../utils/Button";
import streethouse from "../../public/AboutUs/street-house.png";
import Ourmission from "../../public/AboutUs/Our-mission.svg";
import Overview from "../../public/AboutUs/Overview.svg";
import lineShape from "../../public/line-shape-08.svg";
import Image from "next/image";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";
import SurveillanceSystems from "../../public/AboutUs/Surveillance-Systems.svg";
import LiveGPS from "../../public/AboutUs/Live-GPS-Tracking.svg";
import IncidentReporting from "../../public/AboutUs/Incident-Reporting.svg";
import TopIndustries from "../../components/HomePage/TopIndustries";
import OurServices from "../../components/HomePage/OurServices";

// const statsData = [
//   {
//     value: "5",
//     unit: "K+",
//     title: "Site Tours Conducted",
//     description:
//       "Our guards are certified and skilled to provide superior protection.",
//     bgColor: "bg-[#FEFCEB]",
//     position: "relative top-10",
//   },
//   {
//     value: "2",
//     unit: "K+",
//     title: "Hourly Reports",
//     description:
//       "Our guards are certified and skilled to provide superior protection.",
//     bgColor: "bg-[#F5F6FF]",
//   },
//   {
//     value: "4",
//     unit: "K+",
//     title: "Incidents Reported",
//     description:
//       "Our guards are certified and skilled to provide superior protection.",
//     bgColor: "bg-[#FFF5F5]",
//     position: "relative top-10",
//   },
//   {
//     value: "3",
//     unit: "K+",
//     title: "Pass-Downs Generated",
//     description:
//       "Our guards are certified and skilled to provide superior protection.",
//     bgColor: "bg-[#F0FEF1]",
//   },
// ];

const coreValues = [
  {
    icon: Ourmission,
    title: "Our Mission",
    descriptionA:
      "Our mission at Plaza Protection is to redefine security by delivering reliable, responsive, and tailored solutions that protect what matters most to you. We are dedicated to safeguarding people, properties, and businesses through a combination of expert personnel, advanced technology, and unwavering commitment to excellence.",
    descriptionB:
      "By fostering a culture of excellence, professionalism, and integrity, we aim to be the trusted partner for safety and protection in the San Jose Bay Area and beyond. At Plaza Protection, your security is our priority.",
  },
  {
    icon: Overview,
    title: "Plaza Protection Overview",
    descriptionA:
      "Plaza Protection is dedicated to delivering superior security solutions that ensure the safety of your premises, employees, and assets. Operating in the San Jose Bay Area, we offer a wide range of services including foot patrol, vehicle patrol, fire watch, and remote guarding, all tailored to meet your specific security needs. Our expert team of security professionals is highly trained and committed to providing proactive, reliable protection around the clock.",
    descriptionB:
      "By combining the latest security technology with proven strategies, Plaza Protection offers unmatched reliability and peace of mind. Whether you need on-site guards, patrols, or advanced surveillance, we are your trusted partner in security.",
  },

  // {
  //   icon: JoyandFreedom,
  //   title: "Joy And Freedom",
  //   description:
  //     "At Plaza Protection, we understand that the presence of firearms can make people uneasy. That’s why our highly trained guards provide top-tier security without the need for weapons",
  // },
];

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="max-w-[1360px] mx-auto my-24 ">
        <div className="max-w-[1186px] mx-auto text-center">
          <h1 className="font-urbanist text-[56px] !leading-[64px] font-bold text-[#222A5B] mb-8">
            Welcome To Plaza Protection – Your Trusted Security Partner In The
            San Jose Bay Area
          </h1>
          <p className="font-jakarta text-lg !leading-[30px] font-normal text-[#6B7280] ">
            At Plaza Protection, we specialize in delivering top-tier security
            guard services designed to safeguard people, property, and
            businesses throughout the San Jose Bay Area. With years of expertise
            and a dedicated team of highly trained security professionals, we
            are committed to providing customized solutions tailored to the
            unique needs of our clients.
          </p>
        </div>
        <div className="w-full mt-14  inline-flex justify-center items-center  gap-4">
          <Button
            variant="blue"
            style={"!min-w-[243px]"}
            name="Request Quote"
          />

          <Button
            variant="custom"
            style={"!min-w-[162px]"}
            name="Contact Us"
            path="/Contact-Us"
          />
        </div>
      </div>
         <TopIndustries />
          <OurServices />

      {/* <div className="max-w-[1021px] mx-auto mb-[280px] grid grid-cols-12 gap-5">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className={`${stat.position || ""} col-span-3 p-5 rounded-2xl ${
              stat.bgColor
            } border border-[#F1F1F1]`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white">
                <Image
                  src={collectionIcon}
                  width={18.95}
                  height={18.95}
                  alt="collection"
                />
              </div>
              <div className="inline-flex items-center gap-1">
                <span className="font-urbanist text-[32px] !leading-9 font-bold text-[#171A1D] min-w-11">
                  {stat.value}
                </span>
                <span className="font-jakarta text-xl !leading-6 font-bold text-[#171A1D]">
                  {stat.unit}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-urbanist text-xl !leading-6 font-bold text-[#171A1D] max-w-28">
                {stat.title}
              </h3>
              <p className="mt-2 font-jakarta text-sm !leading-[18px] text-[#374049]">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div> */}

      <div className="max-w-[1440px] mx-auto mb-20 p-20 rounded-[40px] bg-[#EBFFF1]">
        <Tag title={"Quick view about us"} />
        <Heading className={"!mt-4"} title={"Our core values"} />

        <div className="grid grid-cols-12 gap-6 mt-10">
          {coreValues.map((item, index) => (
            <div key={index} className="col-span-6 p-4">
              <Image
                src={item.icon}
                alt={item.title}
                className="object-cover"
              />
              <div className="mt-8">
                <h3 className="font-urbanist text-[#171A1D] font-bold text-[32px] leading-[38px]">
                  {item.title}
                </h3>
                <p className="mt-4 font-jakarta font-normal text-base !leading-7 text-[#374049]">
                  {item.descriptionA}
                </p>
                <p className="mt-4 font-jakarta font-normal text-base !leading-7 text-[#374049]">
                  {item.descriptionB}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto mb-20 p-20 rounded-[40px] bg-[#EDF5FF] grid grid-cols-12   gap-20">
        <div className="col-span-6">
          <Tag title={"our technologies"} />
          <Heading
            className={"!mt-4"}
            title={"Real-Time Protection with Cutting-Edge Technology"}
          />
          <p className="mt-6 font-jakarta text-base !leading-7 font-normal text-[#374049]">
            Our commitment to excellence ensures a safe, secure environment for
            all, giving you peace of mind under our vigilant protection.
          </p>
          <p className="mt-6 font-jakarta text-base !leading-7 font-normal text-[#374049]">
            At Plaza Protection, we integrate cutting-edge technology with our
            expert security services to offer comprehensive protection. Our use
            of advanced security systems ensures that your property and assets
            are always under vigilant surveillance, providing real-time
            monitoring and rapid response capabilities.
          </p>

          <div className="mt-8 px-4 rounded-3xl bg-[#EDF5FF]/20">
            <div className="py-4 flex items-center gap-6 border-b border-[#1355FF]/10 ">
              <div className="w-[50px] h-50px inline-flex items-center justify-center">
                <Image
                  src={SurveillanceSystems}
                  width={32}
                  height={32}
                  alt="SurveillanceSystems"
                />
              </div>
              <div>
                <h3 className="font-jakarta text-base !leading-5 font-bold text-[#374049]">
                  Surveillance Systems
                </h3>
                <p className="mt-2 font-urbanist text-sm font-normal text-[#171A1D] capitalize">
                  High-definition cameras and motion detectors create a seamless
                  security network.
                </p>
              </div>
            </div>
            <div className="py-4 flex items-center gap-6 border-b border-[#1355FF]/10 ">
              <div className="w-[50px] h-50px inline-flex items-center justify-center">
                <Image src={LiveGPS} width={32} height={32} alt="Live GPS" />
              </div>
              <div>
                <h3 className="font-jakarta text-base !leading-5 font-bold text-[#374049]">
                  Live GPS Tracking
                </h3>
                <p className="mt-2 font-urbanist text-sm font-normal text-[#171A1D] capitalize">
                  Our guards are equipped with GPS devices, ensuring efficient,
                  on-schedule mobile and full coverage.
                </p>
              </div>
            </div>
            <div className="py-4 flex items-center gap-6 border-b border-[#1355FF]/10 ">
              <div className="w-[50px] h-50px inline-flex items-center justify-center">
                <Image
                  src={IncidentReporting}
                  width={32}
                  height={32}
                  alt="Incident Reporting"
                />
              </div>
              <div>
                <h3 className="font-jakarta text-base !leading-5 font-bold text-[#374049]">
                  Incident Reporting
                </h3>
                <p className="mt-2 font-urbanist text-sm font-normal text-[#171A1D] capitalize">
                  Real-time alerts enable fast response and full transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <Image src={streethouse} alt="streethouse" className="object-cover" />
        </div>
      </div>

      <div className="relative max-w-[1440px] mx-auto mb-20 p-20 rounded-[40px] bg-[#0C2459] text-center">
        <Image
          src={lineShape}
          className="z-0 absolute top-0 left-0 max-h-[612px] "
          alt="lineShape"
        />
        <div className="relative">
          <Tag
            title={"Security you can blindly trust"}
            className={"!bg-gradient-to-t from-[#E2EAFF] to-[#E2EAFF]"}
          />
          <Heading
            className={"!mt-6 !text-white !max-w-[723px] mx-auto"}
            title={
              <>
                Plaza Protection : <br /> Trusted Security Guard Company
              </>
            }
          />
          <p
            className="mt-6 mb-10 font-jakarta text-base !leading-7 font-normal text-white 
      max-w-[723px] mx-auto"
          >
            Serving the San Jose area, our expert team is ready to protect what matters most. Contact us today for a free risk assessment!
          </p>

          <Button
            variant="custom"
            style={"!min-w-[190px]  !text-white !bg-transparent !rounded-2xl"}
            name={"Request A Quote"}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
