"use client"
import React, { useState, useRef } from "react";
import FreeQuote from "@/components/FreeQuote";
import Heading from "@/utils/Heading";
import Link from "next/link";

const Privacy = () => {
  const privacyData = [
    {
      title: "Introduction",
      active: true,
      content: (
        <p className="mt-4 font-dmSans text-lg !leading-8 font-normal text-[#333333]">
          Plaza Protection is committed to keeping any, and all personal information collected from the individuals that visit our website and make use of our online facilities and services accurate, confidential, secure, and private. Our privacy policy has been designed and created to ensure those affiliated with our commitment and realization of our obligation of meeting the existing privacy standards. Our Privacy Policy is designed to help you understand how we collect, use, and safeguard the information you provide to us and to assist you in making informed decisions when using our Service.
        </p>
      ),
    },
    {
      title: "Information We Collect",
      content: (
        <p className="mt-4 font-dmSans text-lg !leading-8 font-normal text-[#333333]">
          Known as “personal information” or “personally identifiable information,” regulated data typically includes anything that can be used to identify an individual, and is not limited to a user’s name. We collect “Non-Personal Information” and “Personal Information.”
        </p>
      ),
    },
    {
      title: "Non Personal Information",
      content: (
        <p className="mt-4 font-dmSans text-lg !leading-8 font-normal text-[#333333]">
          Includes information that cannot be used to personally identify you,
          such as anonymous usage data, the general demographic information we
          may collect, referring/exit pages and URLs, platform types,
          preferences you submit and preferences that are generated based on the
          data you submit and the number of clicks.
        </p>
      ),
    },
    {
      title: "Personal Information",
      content: (
        <>
          <p className="mt-4 font-dmSans text-lg !leading-8 font-normal text-[#333333]">
            Includes information from you when you register on our site, place
            an order, fill out a form, or navigate our site. You may be asked to
            enter your name, email address, mailing address, phone number, or
            credit card information. You may, however, visit our site
            anonymously.
          </p>
          <div className="pl-4">
            <h5 className="mt-4 font-dmSans text-lg !leading-8 font-bold text-[#333333]">
              1. Information collected via Technology
            </h5>
            <p className="mt-2 font-dmSans text-lg !leading-8 font-normal text-[#333333]">
              To browse through our website, you do not need to submit any Personal Information. To use the Service thereafter, you do need to submit further Personal Information [,which may include: your company name, email address, & your contact number] However, in an effort to improve the quality of the Service, we track information provided to us by your browser or by our software application when you view or use the Service, such as the website you came from (known as the “referring URL”), the type of browser you use, the device from which you connected to the Service, the time and date of access, and other information that does not personally identify you. We track this information using cookies, or small text files which include an anonymous unique identifier. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser which the system remembers to process information faster. You may choose to disable cookies option by going to the preference within your web browser. We use cookies to help us remember and process the items in your shopping cart, and save your preferences for future visits and compile data about site traffic and site interaction so that we can offer better site experiences and tools in the future. We may contract with third-party service providers to assist us in better understanding our site visitors. These service providers are not permitted to use the information collected on our behalf except to help us conduct and improve our business.
            </p>
          </div>
          <div className="pl-4">
            <h5 className="mt-4 font-dmSans text-lg !leading-8 font-bold text-[#333333]">
              2. The information you provide us by registering for an account

            </h5>
            <p className="mt-2 font-dmSans text-lg !leading-8 font-normal text-[#333333]">
              In addition to the information provided automatically by your browser when you visit the Site to become a subscriber to the Service, you will need to create a personal profile. You can create a profile by registering with the Service and entering your email address, company name, number of guards, payment details, and creating a username and password. By registering, you are authorizing us to collect, store and use your information in accordance with this Privacy Policy.

            </p>
          </div>
          <div className="pl-4">
            <h5 className="mt-4 font-dmSans text-lg !leading-8 font-bold text-[#333333]">
              3. Children’s Privacy
            </h5>
            <p className="mt-2 font-dmSans text-lg !leading-8 font-normal text-[#333333]">
              We are in compliance with the requirements of COPPA (Children's Online Privacy Protection Act), we do not collect any information from anyone under 13 years of age. Our website, products, and services are all directed to people who are at least 13 years old or older. This online privacy policy applies only to information collected through our website and not to information collected offline.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Use Of Information",
      content: (
        <>
          <p className="mt-4 font-dmSans text-lg !leading-8 font-normal text-[#333333]">
            Except as otherwise stated in this Privacy Policy, we do not sell, trade, rent, or otherwise share for marketing purposes your Personal Information with third parties without your consent. Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested.

          </p>
          <p className="mt-4 font-dmSans text-lg !leading-8 font-bold text-[#333333]">
            Any of the information we collect from you may be used in one of the following ways:

          </p>
          <ul className="pl-8 list-disc">
            <li className="mt-4 font-dmSans text-lg !leading-8 font-normal text-[#333333]">
              To contact users in response to questions, solicit feedback from users, provide technical support, and inform users about promotional offers.
            </li>
            <li className="mt-2 font-dmSans text-lg !leading-8 font-normal text-[#333333]">
              To aggregate Non-Personal Information in order to track trends and analyze usage patterns on the Site.
            </li>
            <li className="mt-2 font-dmSans text-lg !leading-8 font-normal text-[#333333]">
              To improve our website, based on the information and feedback we receive from you.
            </li>
            <li className="mt-2 font-dmSans text-lg !leading-8 font-normal text-[#333333]">
              To improve customer service and personalize your experience.
            </li>
            <li className="mt-2 font-dmSans text-lg !leading-8 font-normal text-[#333333]">
              To administer a contest, promotion, survey.
            </li>
            <li className="mt-2 font-dmSans text-lg !leading-8 font-normal text-[#333333]">
              To send periodic emails for system communication purposes. The email address you provide for order processing may be used to send you information and updates pertaining to your order, in addition to receiving occasional company news, updates, related service information.
            </li>
          </ul>
          <p className="mt-4 font-dmSans text-lg !leading-8 font-normal text-[#333333]">
            Note: If at any time you would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email.





          </p>
        </>
      ),
    },
    {
      title: "How We Protect Information",
      content: (
        <p className="mt-4 font-dmSans text-lg !leading-8 font-normal text-[#333333]">
          We implement a variety of security measures to maintain the safety of your personal information from unauthorized access when you place an order or enter, submit, or access your personal information. We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Database to be only accessed by those authorized with special access rights to our systems. After a transaction, your private information such as credit cards, social security numbers, financials, etc. will be kept on file for more than 60 days in order to make it easier for you to contract on our site without the need to enter your payment information on each project you post.
        </p>
      ),
    },
    {
      title: "Data Security",
      content: (
        <>
          <p className="mt-4 font-dmSans text-lg !leading-8 font-normal text-[#333333]">
            Company hereby warrants, represents and covenants that it has and will maintain a comprehensive written information security program that complies with applicable privacy laws. Company’s information security program shall include appropriate administrative, technical, physical, organizational and operational safeguards and other security measures that ensure

          </p>
          <ul className="list-disc pl-6">
            <li className="mt-4 font-dmSans text-lg !leading-8 font-normal text-[#333333]">The safeguarding of personal information contained in both paper and electronic records;
            </li>
            <li className="mt-2 font-dmSans text-lg !leading-8 font-normal text-[#333333]">
              The security and confidentiality of personal information in a manner consistent with applicable industry standards; and
            </li>
            <li className="mt-2 font-dmSans text-lg !leading-8 font-normal text-[#333333]">
              Protection against any actual or suspected unauthorized processing, loss, use, disclosure or acquisition of or access to any personal information.
            </li>
          </ul>
          <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">
            If Company suspects or becomes aware of any unauthorized access to any client data or personal data by any unauthorized person or third party, or becomes aware of any other security breach relating to personal data held or stored by Company under this Agreement (“Data Breach”), Company shall immediately notify the client in writing and shall fully cooperate with client at company’s expense to prevent or stop such Data Breach. In the event of such Data Breach, Company shall fully and immediately comply with applicable laws, and shall take the appropriate steps to remedy such Data Breach.
          </p>
        </>
      ),
    },
    {
      title: "Changes To Our Privacy Policy",
      content: (
        <p className="mt-4 font-dmSans text-lg !leading-8 font-normal text-[#333333]">
          The Company reserves the right to change this policy and our Terms of Service at any time. We will notify you of significant changes to our Privacy Policy by sending a notice to the primary email address specified in your account or by placing a prominent notice on our site. Significant changes will go into effect 30 days following such notification. Non-material changes or clarifications will take effect immediately. You should periodically check the Site and this privacy page for updates.
        </p>
      ),
    },
    {
      title: "California Online Privacy Protection Act.",
      content: (
        <>
          <p className="mt-4 font-dmSans text-lg !leading-8 font-normal text-[#333333]">
            Because we value your privacy, we have taken the necessary precautions to be in compliance with the California Online Privacy Protection Act. We, therefore, will not distribute your personal information to outside parties without your consent. As part of the California Online Privacy Protection Act, all users of our site may make any changes to their information at any time by logging into their control panel and going to the 'Edit Profile' page.
          </p>
          <p className="mt-4 font-dmSans text-lg !leading-8 font-normal text-[#333333]">
            Please also visit our{" "}
            <Link href="/terms-of-service" className="underline">
              Terms and Conditions
            </Link>{" "}
            section establishing the use, disclaimers, and limitation of liability governing the use of our website.
          </p>
        </>
      ),
    },
  ];


const slugify = (text, index) =>
    text.toLowerCase().replace(/\s+/g, "-") + "-" + index;

  const [activeId, setActiveId] = useState(() => slugify(privacyData[0].title, 0));
  const contentRef = useRef(null);
const handleScrollToSection = (sectionId) => {
  setActiveId(sectionId);
  const section = document.getElementById(sectionId);
  if (section && contentRef.current) {
    const container = contentRef.current;
    const offset = 20;

    let topPosition = section.offsetTop - container.offsetTop - offset;

    // Only clamp if the section would push beyond the scroll area
    if (topPosition > container.scrollHeight - container.clientHeight) {
      topPosition = container.scrollHeight - container.clientHeight;
    }

    container.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  }
};


  return (
    <>
      <div className="mx-4 sm:mx-6 xl:mx-10 my-10 2xl:max-w-[1440px] 2xl:mx-auto py-10 px-4 xl:px-0 xl:py-[68px] bg-[#FAFAFA] xl:bg-[url('/PolicyImage.png')] xl:bg-center xl:bg-cover xl:bg-no-repeat">
        <Heading
          title={`Privacy Policy`}
          className={
            "!mt-0 !mb-8 !text-[#222A5B] lg:whitespace-pre-line  2xl:!text-[64px] 2xl:!leading-[72px] !text-4xl lg:!text-5xl xl:!text-6xl"
          }
        />
        <p className="font-dmSans text-lg 2xl:text-xl 2xl:!leading-8 px-4 rounded border-l-[3px] border-l-[#B0BABF] font-normal text-[#45535E] xl:max-w-[515px] !mb-8">
          This Privacy Policy is meant to help you understand what information
          we collect, why we collect it, and how we update and manage it.
        </p>
        <p className="font-dmSans text-base !leading-8 font-normal text-[#333333]">
          Last updated: 26 August, 2025
        </p>
      </div>


    <div className="mx-4 sm:mx-6 xl:mx-10 mb-10 2xl:max-w-[1440px] 2xl:mx-auto grid grid-cols-11 gap-6 lg:gap-10">
        <div className="hidden col-span-11  md:block md:col-span-4 xl:col-span-3">
          <div className="sticky top-[84px] bg-gradient-to-b from-[#F0F6FF] to-[#FFFFFF] py-8 px-4 lg:p-8 h-[calc(100vh-84px)] overflow-y-auto rounded-lg">
            {privacyData.map((item, index) => {
              const id = slugify(item.title, index);
              return (
                <button
                  key={id}
                  onClick={() => handleScrollToSection(id)}
                  className={`flex ${item.title.length > 25 ? "items-start" : "items-center"
                    } gap-4 ${index !== privacyData.length - 1 ? "mb-6" : ""
                    } text-left w-full`}
                >
                  <div
                    className={`min-w-2 h-2 rounded-full ${activeId === id ? "bg-[#1355FF]" : "bg-[#1355FF]/20"
                      } ${item.title.length > 25 ? "mt-3" : ""}`}
                  ></div>
                  <h4
                    className={`font-dmSans text-lg leading-8 ${activeId === id
                        ? "text-[#3355FF] font-bold"
                        : "text-[#666666] font-medium"
                      }`}
                  >
                    {item.title}
                  </h4>
                </button>
              );
            })}
          </div>
        </div>

        <div
          ref={contentRef}
          className="col-span-11 md:col-span-7 xl:col-span-8 bg-[#FAFAFA] py-8 px-4 lg:p-10 space-y-10 md:h-[calc(100vh-84px)] md:overflow-y-auto rounded-lg"
        >
          {privacyData.map((item, index) => {
            const id = slugify(item.title, index);
            return (
              <div key={id}>
                <h3
                  id={id}
                  className="font-dmSans text-[28px] !leading-9 sm:text-[32px] sm:!leading-10 font-semibold tracking-[-1px] text-[#1A1A1A] scroll-mt-[120px]"
                >
                  {item.title}
                </h3>
                {item.content}
              </div>
            );
          })}
        </div>
      </div>

      <FreeQuote />
    </>
  );
};

export default Privacy;
