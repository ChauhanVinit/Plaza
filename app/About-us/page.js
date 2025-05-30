"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../utils/Button";
import streethouse from "../../public/AboutUs/street-house.png";
import Ourmission from "../../public/AboutUs/Our-mission.svg";
import Overview from "../../public/AboutUs/Overview.svg";
import Image from "next/image";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";
import SurveillanceSystems from "../../public/AboutUs/Surveillance-Systems.svg";
import LiveGPS from "../../public/AboutUs/Live-GPS-Tracking.svg";
import IncidentReporting from "../../public/AboutUs/Incident-Reporting.svg";
import TopIndustries from "../../components/HomePage/TopIndustries";
import OurServices from "../../components/HomePage/OurServices";
import SecurityTrustBanner from "@/components/SecurityTrustBanner";

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
];

const ourTechnologies = [
  {
    icon: SurveillanceSystems,
    alt: "SurveillanceSystems",
    title: "Surveillance Systems",
    description:
      "High-definition cameras and motion detectors create a seamless security network.",
  },
  {
    icon: LiveGPS,
    alt: "Live GPS Tracking",
    title: "Live GPS Tracking",
    description:
      "Our guards are equipped with GPS devices, ensuring efficient, on-schedule mobile and full coverage.",
  },
  {
    icon: IncidentReporting,
    alt: "Incident Reporting",
    title: "Incident Reporting",
    description: "Real-time alerts enable fast response and full transparency.",
  },
];
  const SecurityTrustData = {
    title: (
      <>
        Plaza Protection : <br /> Trusted Security Guard Company
      </>
    ),
    btnText: "Request A Quote",
  };

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="max-w-[1360px] mx-auto mt-[100px] mb-40">
        <div className="text-center">
          <h1 className="font-dmSans text-[56px] !leading-[64px] font-semibold text-[#222A5B] mb-8 tracking-[-1px] max-w-[1162px] mx-auto">
            Welcome To Plaza Protection – Your Trusted Security Partner In The
            San Jose Bay Area
          </h1>
          <p className="font-dmSans text-lg !leading-[30px] font-normal text-[#6B7280] max-w-[1050px] mx-auto">
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

      <div className="max-w-[1440px] mx-auto mb-20 p-20 rounded-[40px] bg-[#EDF5FF]">
        <Tag title={"Quick view about us"} />
        <Heading
          className={"!mt-4 !text-[#222A5B]"}
          title={"Our core values"}
        />

        <div className="grid grid-cols-12 gap-6 mt-10">
          {coreValues.map((item, index) => (
            <div key={index} className="col-span-6 p-4">
              <Image
                src={item.icon}
                alt={item.title}
                className="object-cover"
              />
              <div className="mt-8">
                <h3 className="font-dmSans text-[#171A1D] font-semibold text-[32px] !leading-10 tracking-[-1px]">
                  {item.title}
                </h3>
                <p className="mt-4 font-dmSans font-normal text-base  text-[#374049]">
                  {item.descriptionA}
                </p>
                <p className="mt-4 font-dmSans font-normal text-base text-[#374049]">
                  {item.descriptionB}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto mb-20 p-20 rounded-[40px] bg-[#F0F6FF] grid grid-cols-12 gap-20">
        <div className="col-span-6">
          <Tag title={"our technologies"} />
          <Heading
            className={"!mt-4 !text-[#222A5B]"}
            title={"Real-Time Protection with Cutting-Edge Technology"}
          />
          <p className="mt-6 font-dmSans text-base  font-normal text-[#374049] max-w-[550px]">
            Our commitment to excellence ensures a safe, secure environment for
            all, giving you peace of mind under our vigilant protection.
          </p>
          <p className="mt-8 font-dmSans text-base  font-normal text-[#374049] max-w-[550px]">
            At Plaza Protection, we integrate cutting-edge technology with our
            expert security services to offer comprehensive protection. Our use
            of advanced security systems ensures that your property and assets
            are always under vigilant surveillance, providing real-time
            monitoring and rapid response capabilities.
          </p>

          <div className="mt-8 px-4 rounded-3xl bg-[#EDF5FF]/20">
            {ourTechnologies.map((item, index) => (
              <div
                key={index}
                className="py-4 flex items-center gap-6 border-b border-[#1355FF]/10"
              >
                <div className="w-[50px] h-50px inline-flex items-center justify-center">
                  <Image
                    src={item.icon}
                    width={32}
                    height={32}
                    alt={item.alt}
                  />
                </div>
                <div>
                  <h3 className="font-dmSans text-base font-semibold text-[#374049] tracking-[-0.5px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-dmSans text-sm font-normal text-[#171A1D] capitalize max-w-[440px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-6">
          <Image src={streethouse} alt="streethouse" className="object-cover" />
        </div>
      </div>

      <SecurityTrustBanner {...SecurityTrustData} />
      <Footer />
    </>
  );
};

export default AboutUs;
