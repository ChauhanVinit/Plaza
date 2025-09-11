export const metadata = {
    title: "Client Portal | San Jose Bay Area Security Patrol Experts | Plaza Protection",
    description:
        "Client portal gives your clients the ability to stay abreast of security guard performance at their premises from anywhere in the world.",
    keywords: [
        "Security client portal",
        "Real-time security monitoring",
        "Security report access",
        "Client security dashboard",

    ],
    metadataBase: new URL("https://www.plazaprotection.com"),
    alternates: {
        canonical: "/faq",
    },
    openGraph: {
        title: "FAQ | Plaza Protection | San Jose Bay Area Security Experts",
        description:
            "Client portal gives your clients the ability to stay abreast of security guard performance at their premises from anywhere in the world.",
        url: "https://www.plazaprotection.com/faq",
        siteName: "PlazaProtection",
        images: [
            {
                url: "https://plazaprotection.com/includes/img/plazaprotection.png",
                width: 1200,
                height: 630,
                alt: "Plaza Protection",
            },
        ],
        locale: "en_US",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        site: "@plazaprotection",
        creator: "@plazaprotection",
        title: "FAQ | Plaza Protection",
        description:
            "Client portal gives your clients the ability to stay abreast of security guard performance at their premises from anywhere in the world.",
        images: ["https://plazaprotection.com/includes/img/plazaprotection.png"],
    },
    icons: {
        icon: "/favicon.ico",
    },
};
import Heading from '@/utils/Heading'
import React from 'react'
import Button from "../../utils/Button";
import right from "../../public/right.svg";
import Image from "next/image";
import rightDark from "../../public/right-dark.svg";
import Overview from '../../public/Client portal/Overview.png'
import clientPortalA from '../../public/Client portal/Client-portal-image-01.png'
import clientPortalB from '../../public/Client portal/Client-portal-image-02.png'
import clientPortalC from '../../public/Client portal/Client-portal-image-03.png'
import clientPortalD from '../../public/Client portal/Client-portal-image-04.png'
import SiteTours from '../../public/Client portal/Site-Tours.svg'
import LatestIncidents from '../../public/Client portal/Latest-Incidents.svg'
import ViewPostOrders from '../../public/Client portal/View-Post-Orders.svg'
import TakeControl from '../../public/Client portal/Take-Control.svg'
import RealTimeReporting from '../../public/Client portal/Real-Time-Reporting.svg'
import StreamlinedSharing from '../../public/Client portal/Streamlined-Sharing.svg'
import AlwaysStayInLoop from '../../public/Client portal/Always-Stay-In-Loop.svg'
import EnsureGuardSafety from '../../public/Client portal/Ensure-Guard-Safety.svg'
import FreeQuote from '@/components/FreeQuote';

const Clientportal = () => {

    const clientPortalData = [
        {
            image: clientPortalA,
            title: `Real-Time Security Insights\n at Your Fingertips`,
            desc: "Plaza Protection client portal has a one-stop solution to all your worries - Live Dashboard. With a secure login, you will have full access to the dashboard. On its easy-to-navigate interface, you will be able to view live on-site metrics & gain insight into real-time intelligence about the security situation on-site.",
            features: [
                {
                    icon: SiteTours,
                    subTitle: "Latest Site Tours",
                    subDesc: "Led using QR/NFC/virtual tags."
                },
                {
                    icon: LatestIncidents,
                    subTitle: "Latest Incidents",
                    subDesc: "Easy to understand live metrics."
                },
            ]
        },
        {
            image: clientPortalB,
            title: `Seamless Scheduling for Stronger Security Operations`,
            desc: "Effective security guard scheduling is the key to success as it lies at the heart of all security operations. Using the Plaza Protection client portal you no longer need to sit on the side lines but actively view schedules as well as request special coverage with automated security guard scheduling software equipped portal.",
            features: [
                {
                    icon: ViewPostOrders,
                    subTitle: "View Post Orders",
                    subDesc: "Confirm details in real-time."
                },
                {
                    icon: TakeControl,
                    subTitle: "Take Control",
                    subDesc: "Simplify complex schedules."
                },
            ]
        },
        {
            image: clientPortalC,
            title: `Guard Tours: Reported\n in Real Time`,
            desc: "Receive comprehensive reports & visitor logs, anywhere & anytime using the Plaza Protection client portal. You can access all the detailed incidents, site tours, daily activity reports shared by security guards in real-time using their patrol mobile app, so you can stay updated on the progress made on-site.",
            features: [
                {
                    icon: RealTimeReporting,
                    subTitle: "Real-Time Reporting",
                    subDesc: "Faster, functional, & effective"
                },
                {
                    icon: StreamlinedSharing,
                    subTitle: "Streamlined Sharing",
                    subDesc: "Access reports on the go."
                },
            ]
        },
        {
            image: clientPortalD,
            title: `24/7 Live GPS Guard Tracking
`,
            desc: "Track the GPS location & movement of the guards assigned to your site on the live map of the Plaza Protection client portal. View geofence, a virtually built perimeter to mark authorized & restricted areas. And invite your team member to the client portal to track history & to oversee your property’s security operations.",
            features: [
                {
                    icon: AlwaysStayInLoop,
                    subTitle: "Always Stay In Loop",
                    subDesc: "Take better decisions every day."
                },
                {
                    icon: EnsureGuardSafety,
                    subTitle: "Ensure Guard Safety",
                    subDesc: "Security is our top priority."
                },
            ]
        },
    ];

    return (
        <>
            <div className='w-full xxs:container px-4 xxs:px-0 xxs:mx-auto lg:max-w-full lg:pr-0 lg:pl-[calc((100%-1080px)/2)] xl:pl-[calc((100%-1280px)/2)] 2xl:pl-[calc((100%-1440px)/2)]  py-8 sm:py-10  xl:pt-14 xl:pb-20'>
                <div className='grid grid-cols-11 gap-8 sm:gap-10 lg:gap-12 '>
                    <div className='col-span-11 lg:col-span-4'>
                        <Heading title={`Plaza Protection\n Client Portal`} className={'!mt-0 !mb-8 !text-[#222A5B] lg:whitespace-pre-line  2xl:!text-[56px] 2xl:!leading-[64px] !text-4xl xl:!text-5xl'} />
                        <p className="font-dmSans text-lg 2xl:text-xl 2xl:!leading-8 px-4 rounded border-l-[3px] border-l-[#B0BABF] font-normal text-[#45535E] ">
                            Your Security, Your Control — Anytime, Anywhere
                            Experience real-time insights and seamless management of your security operations with our intuitive client portal. Stay connected, informed, and in control 24/7.
                        </p>

                        <div className=" w-full mt-12 flex sm:flex-row flex-col items-center gap-4">
                            <Button
                                icon={<Image src={right} alt="Right arrow icon" className="w-4 h-4" />}
                                variant="blue"
                                style={"w-full sm:max-w-[243px]"}
                                name="Request Quote"
                                path="/request-quote"
                            />

                            <Button
                                variant="custom"
                                icon={
                                    <Image
                                        src={rightDark}
                                        alt="Right arrow icon"
                                        className="w-4 h-4"
                                    />
                                }
                                style={"w-full sm:max-w-[162px]"}
                                name="Contact Us"
                                path="/contact-us"
                            />
                        </div>
                    </div>
                    {/* <div className=' hidden lg:block col-span-1'></div> */}
                    <div className='col-span-11 lg:col-span-7 relative'>
                        <Image src={Overview} alt='Plaza Protection Overview Image' className='object-cover' />
                        <div className=' hidden lg:block absolute right-0 top-0 h-full w-2/5 bg-gradient-to-r from-[rgba(255,255,255,0)_24%] to-[rgba(255,255,255,1)_89%]'></div>
                    </div>
                </div>
            </div>

            <div className='w-full px-4 xxs:px-0 xxs:container  mb-8 sm:mb-10 xl:mb-20 xxs:mx-auto'>
                {clientPortalData.map((item, index) => (
                    <div
                        key={index}
                        className={`grid grid-cols-11 gap-8 sm:gap-10 lg:gap-0 py-8 sm:py-10 xl:py-20 px-0 sm:px-6 xl:px-10 2xl:px-16 items-center `}
                    >

                        {index % 2 === 1 ? (
                            <>

                                <div className='col-span-11 lg:col-span-5'>
                                    <Heading title={item.title} className="!mt-0 !text-[#222A5B] 2xl:whitespace-pre-line" />
                                    <p className='text-lg 2xl:text-xl 2xl:!leading-8 font-dmSans font-normal text-[#333333] mt-6'>
                                        {item.desc}
                                    </p>

                                    <div className="grid grid-cols-2 gap-6 lg:gap-8 mt-6 lg:mt-10 p-4">
                                        {item.features.map((subItem, i) => (
                                            <div key={i} className='col-span-2 sm:col-span-1'>
                                                <div className='w-[58px] h-[58px] bg-[#EBF4FF] rounded-2xl inline-flex items-center justify-center mb-6'>
                                                    <Image src={subItem.icon} alt={subItem.subTitle} className="w-8 h-8" />
                                                </div>
                                                <h4 className="text-lg 2xl:text-xl  font-dmSans font-semibold text-[#1A1A1A] tracking-[-0.5px] mb-2">
                                                    {subItem.subTitle}
                                                </h4>
                                                <p className="font-dmSans text-base text-[#666666] font-normal">
                                                    {subItem.subDesc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='hidden lg:block col-span-1'></div>


                                <div className='col-span-11 lg:col-span-5'>
                                    <Image src={item.image} alt={item.title} />
                                </div>
                            </>
                        ) : (
                            <>

                                <div className='hidden lg:block col-span-11 lg:col-span-5'>
                                    <Image src={item.image} alt={item.title} />
                                </div>

                                <div className='hidden lg:block col-span-1'></div>


                                <div className='col-span-11 lg:col-span-5'>
                                    <Heading title={item.title} className="!mt-0 !text-[#222A5B] 2xl:whitespace-pre-line" />
                                    <p className='text-lg 2xl:text-xl 2xl:!leading-8 font-dmSans font-normal text-[#333333] mt-6'>
                                        {item.desc}
                                    </p>

                                    <div className="grid grid-cols-2 gap-6 lg:gap-8 mt-6 lg:mt-10 p-4">
                                        {item.features.map((subItem, i) => (
                                            <div key={i} className='col-span-2 sm:col-span-1'>
                                                <div className='w-[58px] h-[58px] bg-[#EBF4FF] rounded-2xl inline-flex items-center justify-center mb-6'>
                                                    <Image src={subItem.icon} alt={subItem.subTitle} className="w-8 h-8" />
                                                </div>
                                                <h4 className="text-lg 2xl:text-xl  font-dmSans font-semibold text-[#1A1A1A] tracking-[-0.5px] mb-2">
                                                    {subItem.subTitle}
                                                </h4>
                                                <p className="font-dmSans text-base text-[#666666] font-normal">
                                                    {subItem.subDesc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>


                                <div className=' block lg:hidden col-span-11 lg:col-span-5'>
                                    <Image src={item.image} alt={item.title} />
                                </div>


                            </>
                        )}
                    </div>
                ))}
            </div>
            <FreeQuote />

        </>
    )
}

export default Clientportal