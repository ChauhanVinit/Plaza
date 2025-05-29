"use client";
import Image from "next/image";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";
import { useState } from "react";
import plus from "../../public/Services/plus.svg";

const faqs = [
  {
    question: "What are the responsibilities of unarmed security guards?",
    answer:
      "While unarmed security guards may not carry weapons, they typically receive training in self-defense techniques. This training equips them with skills to handle physical altercations and defend themselves or others if necessary, using non-lethal means such as hand-to-hand combat, restraining techniques, or the use of defensive tools like pepper spray.",
  },
  {
    question: "Are unarmed security guards trained in self-defense?",
    answer:
      "While unarmed security guards may not carry weapons, they typically receive training in self-defense techniques. This training equips them with skills to handle physical altercations and defend themselves or others if necessary, using non-lethal means such as hand-to-hand combat, restraining techniques, or the use of defensive tools like pepper spray.",
  },
  {
    question: "Do unarmed security guards have legal authority?",
    answer:
      "While unarmed security guards may not carry weapons, they typically receive training in self-defense techniques. This training equips them with skills to handle physical altercations and defend themselves or others if necessary, using non-lethal means such as hand-to-hand combat, restraining techniques, or the use of defensive tools like pepper spray.",
  },
  {
    question:
      "What are the qualifications required to become an unarmed security guard?",
    answer:
      "While unarmed security guards may not carry weapons, they typically receive training in self-defense techniques. This training equips them with skills to handle physical altercations and defend themselves or others if necessary, using non-lethal means such as hand-to-hand combat, restraining techniques, or the use of defensive tools like pepper spray.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto mb-[68px] p-16 bg-[#F1F3F5]/50 rounded-[40px]">
      <div className="text-center max-w-[658px] mx-auto">
        <Tag title={"Find out quick answers "} />
        <Heading
          title={
            "Frequently Asked Questions About Unarmed Security Guards Services"
          }
          className={'!text-[#222A5B]'}
        />
      </div>

      <div className="mt-[60px] flex flex-col gap-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            onClick={() => toggle(index)}
            className="bg-white p-6 rounded-2xl shadow-[0px_2px_3px_0px_rgba(0,0,0,0.07)] cursor-pointer"
          >
            <div
              className={`flex items-center justify-between ${
                openIndex === index ? "pb-4" : "pb-0"
              }`}
            >
              <h3 className="font-dmSans font-semibold text-xl  text-[#0C2459] tracking-[-0.5px]">
                {item.question}
              </h3>
              <button>
                <Image
                  src={plus}
                  alt="Plus"
                  className={`w-6 h-6 transition-all duration-200 cubic-bezier(0.4, 0, 0.68, 0.06) ${
                    openIndex === index ? " rotate-45" : "rotate-0"
                  }`}
                />
              </button>
            </div>

            <div
              className={`border-t border-[#B9CBF3]/50  transition-all duration-200 overflow-hidden cubic-bezier(0.4, 0, 0.68, 0.06) ${
                openIndex === index
                  ? "max-h-[90px] opacity-100 pt-4 "
                  : "max-h-0 opacity-0 pt-0"
              }`}
            >
              <p className="font-dmSans text-base font-normal text-[#344054]">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
