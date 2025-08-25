"use client";
import React, { useState } from "react";
import Heading from "@/utils/Heading";
import Image from "next/image";
import searchIcon from "../../public/search.svg";
import down from "../../public/arrow-down.svg";
import Link from "next/link";

const FaqContent = () => {
  const faqsData = [
    {
      question: "Do you offer customizable security solutions?",
      answer:
        "Yes, we provide security guard and patrol services that are tailored to your specific needs. Our team works with you to understand your requirements and develop a custom security solution that fits your unique situation.",
    },
    {
      question: "How can I monitor the security activity at my property?",
      answer:
        "We offer a client portal that provides real-time visibility into security activities. This portal allows you to see security teams, incident logs, battery status, live tracking, guard schedules, and patrol activities.",
    },
    {
      question: "Which areas or regions do you serve?",
      answer:
        "Our services are available throughout the San Jose Bay Area and surrounding areas.",
    },
    {
      question: "What kind of security services do you offer?",
      answer:
        "We offer vehicle patrol, foot patrol, fire watch, licensed guard programs, security guard training, CCTV installations, and security equipment.",
    },
    {
      question: "How can I connect with Plaza Protection to discuss my security needs?",
      answer: (
        <>
          You can book your free consultation by{" "}
          <Link
            href="/request-quote"
            target="_blank"
            className="text-blue-600 underline"
          >
            clicking here
          </Link>{" "}
          to get in touch with our team.
        </>
      ),
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  // filter FAQs by question (and optionally answer text)
  const filteredFaqs = faqsData.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (typeof item.answer === "string" &&
        item.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <div className="mx-4 sm:mx-6 xl:mx-10 2xl:container 2xl:mx-auto my-8 sm:my-10 lg:my-20  text-center">
        <Heading title={"Plaza Protection FAQ : Questions We Hear Most"} />
        <p className="font-dmSans text-[18px] leading-7 text-[#6B7280] mt-8 max-w-[1050px] mx-auto">
          Find clear answers to the most common questions about Plaza
          Protection’s security guard services. If you’re looking for details on
          a specific service, visit our individual service pages — each one
          includes tailored FAQs to address the most common questions for that
          service.
        </p>

        {/* Search bar */}
        <div className="w-full mt-14 px-6 py-5 rounded-[50px] border border-[#B2B2B2] max-w-[475px] mx-auto inline-flex items-center gap-6">
          <input
            type="search"
            placeholder="Search Question"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="grow border-0 outline-none placeholder:text-[#999999] text-base text-[#171A1D] font-medium !bg-transparent"
          />
          <Image src={searchIcon} alt="Search" className="w-6 h-6" />
        </div>
      </div>

      {/* FAQ list */}
      <div className="mx-0 sm:mx-6 xl:mx-10 2xl:container 2xl:mx-auto px-4 py-6 sm:py-10 sm:px-8 xl:p-10 2xl:p-20 bg-[#EDF5FF] rounded-[40px]">
        <div className="rounded-[20px] overflow-hidden px-4 sm:px-6 xl:px-10 py-2 bg-white">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, index) => (
              <div
                key={index}
                onClick={() => toggle(index)}
                className="flex items-start justify-between gap-4 xl:gap-6 cursor-pointer py-4 xl:py-8 border-b border-[#E2E8F0] last:border-0"
              >
                <div>
                  <div
                    className={`flex items-start gap-4 justify-between ${openIndex === index ? "pb-2" : "pb-0"
                      }`}
                  >
                    <h3 className="font-dmSans font-semibold text-xl text-[#0C2459] tracking-[-0.5px]">
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`transition-all duration-200 overflow-hidden cubic-bezier(0.4, 0, 0.68, 0.06) ${openIndex === index
                      ? "max-h-[280px] opacity-100"
                      : "max-h-0 opacity-0"
                      }`}
                  >
                    <p className="font-dmSans text-base font-normal text-[#344054]">
                      {item.answer}
                    </p>
                  </div>
                </div>

                <div>
                  <Image
                    src={down}
                    alt="Plus Icon"
                    className={`min-w-6 h-6 transition-all duration-200 cubic-bezier(0.4, 0, 0.68, 0.06) ${openIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                  />
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-8">
              No results found for "{searchTerm}"
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default FaqContent;
