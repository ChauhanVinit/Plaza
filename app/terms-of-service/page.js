"use client"
import React from 'react'
import FreeQuote from '@/components/FreeQuote'
import Heading from '@/utils/Heading'
import Link from 'next/link'
import { useState } from 'react'

const Terms = () => {
  const termsData = [
    {
      title: "Introduction",
      active: true,
      content: (
        <p className="mt-4 font-sans text-lg !leading-8 font-normal text-[#333333]">
          By visiting {" "}
          <Link href="https://www.plazaprotection.com/" target='_blank' className="text-[#3355FF] font-medium hover:underline">
            www.plazaprotection.com
          </Link>{" "} and accessing the information, resources, services, products, and tools we provide, you understand and agree to accept and adhere to the following terms and conditions as stated in this policy. If you do not agree to be bound by these Terms of Use in their entirety, you may not access or use the Service.
        </p>
      ),
    },
    {
      title: "Modification Of Terms Of Use",
      content: (
        <p className="font-sans mt-4 text-lg !leading-8 font-normal text-[#333333]">
          We reserve the right to change this User Agreement from time to time without notice. You acknowledge and agree that it is your responsibility to review this User Agreement periodically to familiarize yourself with any modifications. Your continued use of this site after such modifications will constitute acknowledgment and agreement of the modified terms and conditions.
        </p>
      ),
    },
    {
      title: "Rules For User Conduct And Use Of The Service:",
      content: (
        <>
          <p className="font-sans mt-4 text-lg !leading-8 font-normal text-[#333333]">
            By visiting {" "}
            <Link href="https://www.plazaprotection.com/" target='_blank' className="text-[#3355FF] font-medium hover:underline">
              www.plazaprotection.com
            </Link>{" "}  and accessing the information, resources, services, products, and tools we provide for you, either directly or indirectly, you agree to use these Resources only for the purposes intended as permitted by the terms of this User Agreement, and applicable laws, regulations and generally accepted online practices or guidelines. You agree that failure to adhere to any of these conditions constitutes a material breach of these Terms.
          </p>

          <div className='pl-4'>
            <p className="font-sans mt-4 text-lg !leading-8 font-normal text-[#333333]">
              1. To access our Resources, you may be required to provide certain information about yourself as part of the registration process, or as part of your ability to use the Services. You agree that any information you provide will always be accurate, correct, and up to date and won’t provide false or inaccurate information.
            </p>
            <p className="font-sans mt-4 text-lg !leading-8 font-normal text-[#333333]">
              2. You are responsible for maintaining the confidentiality of any login information associated with any account you use to access our Resources. Accordingly, you are responsible for all activities that occur under your account(s).

            </p>
            <p className="font-sans mt-4 text-lg !leading-8 font-normal text-[#333333]">
              3. The users you add or invite on our system may work with other clients, and we are not responsible for any loss incurred as a result of such activity.

            </p>
            <p className="font-sans mt-4 text-lg !leading-8 font-normal text-[#333333]">
              4. Accessing any of our Resources by any means other than through the means we provide, is strictly prohibited. You specifically agree not to access any of our Resources through any automated, unethical or unconventional means.

            </p>
            <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">
              5. Attempting to copy, duplicate, reproduce, sell, trade, or resell our Resources is strictly prohibited.


            </p>
            <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">
              6. You are solely responsible for any consequences, losses, or damages that we may directly or indirectly incur or suffer due to any unauthorized activities conducted by you, as explained above, and may incur criminal or civil liability.


            </p>
            <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">
              7. You agree to indemnify and hold harmless {" "}
              <Link href="https://www.plazaprotection.com/" target='_blank' className="text-[#3355FF] font-medium hover:underline">
                www.plazaprotection.com
              </Link>{" "} and its parent company and affiliates, and their directors, officers, managers, employees, donors, agents, licensors, from and against all losses, expenses, damages and costs, including reasonable attorneys' fees, resulting from any violation of this User Agreement or the failure to fulfill any obligations relating to your account incurred by you or any other person using your account. We reserve the right to take over the exclusive defense of any claim for which we are entitled to indemnification under this User Agreement. In such event, you shall provide us with such cooperation as is reasonably requested by us.


            </p>
          </div>
        </>
      ),
    },
    {
      title: "Price For The Use Of Service",
      content: (
        <>
          <p className="font-dmSans mt-4 text-lg !leading-8 font-bold text-[#333333]">
            The price details as provided at the time of the registration are bound by the following terms:

          </p>


          <div className='pl-4'>
            <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">
              1. The prices to be paid under this Agreement are as detailed in the Order. If the price of any service is omitted, you shall pay Plaza Protection’s standard price for the relevant Service current at the time of performance of the Services.
            </p>
            <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">
              2. In the event prices are stated to include duties and taxes, these have been calculated on rates applicable at the time of quotation. Prices shall be adjusted to take into account the number of duties and taxes paid or payable.

            </p>
            <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">
              3. Any tax, impost, duty or other levies are to be borne by you. If any such sums are required by law to be withheld, collected or paid, Plaza Protection will be entitled to add those amounts to the price.
            </p>
            <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">
              4. Any charges not expressly included in the price are payable by you.
            </p>
            <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">
              5. Plaza Protection reserves the right to raise invoices to be paid for progress claims. Progress claim invoices for Services may be raised by Plaza Protection in accordance with the payment schedule referred to in an Order or, in the absence of any such payment schedule, progress claims may be made by Plaza Protection at its option.
            </p>
            <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">
              6. Any quotations given by Plaza Protection are subject to written confirmation given by Guardcorp.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Payment For The Use Of Service",
      content: (
        <>
          <p className="font-dmSans mt-4 text-lg !leading-8 font-bold text-[#333333]">
            The payment details as provided at the time of the registration are bound by the following terms:

          </p>
          <div className='pl-4'>
            <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">
              1. You shall pay the full price of the Services at the time of Order unless otherwise provided in an Order or specifically agreed in writing by Plaza Protection.

            </p>
            <div className="mt-4">
              <p className='font-dmSans text-lg !leading-8 font-normal text-[#333333]'>2. Payment shall be made within fourteen (14) days of delivery of an invoice by Plaza Protection by:</p>
              <div className='pl-4'>
                <p className="font-dmSans mt-2 text-lg !leading-8 font-normal text-[#333333]">
                  a. cheque, electronic funds transfer, direct deposit, cash funds; or

                </p>
                <p className="font-dmSans mt-2 text-lg !leading-8 font-normal text-[#333333]">
                  b. an irrevocable letter of credit issued or confirmed by a bank on terms and conditions acceptable to Plaza Protection.

                </p>
              </div>


            </div>
            <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">
              3. All prices are in American dollars.

            </p>
            <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">
              4. In case your payment method is declined, we will try to process the payment 2 more times after 3 consecutive days. If the payment is declined, then we will deactivate your account. You will be required to update your payment method before you can access our services. If the account remains inactive for 3 months, we will remove the account permanently from our system.

            </p>
            <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">
              5. If the user chooses to end the relationship by canceling the Services, he is solely responsible to close the account. Not doing so will result in loss, which is the sole responsibility of the user.

            </p>
            <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">
              6. In case the user chooses to resume the services after cancellation at any time in the past, the process for charging will resume.

            </p>
            <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">
              7. In case of non-payment, the user’s access to the Plaza Protection platform is suspended till the time the payment is made. The access is restored on payment.

            </p>
            <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">
              8. In case of dissatisfaction with the service, a refund can only be requested within 72hrs from the date and time of payment, the customer needs to explain in detail to the customer care executive why he is not satisfied so that the concerns are addressed or the money may be refunded.

            </p>
          </div>
        </>
      ),
    },
    {
      title: "Posting And Conduct Restrictions",
      content: (
        <>
          <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">
            You are solely responsible for the User Content that you post, upload, link to or otherwise make available via the Service.


          </p>
          <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">
            You agree that we are only acting as a passive conduit for the online distribution and publication of your User Content. The Company, however, reserves the right to remove any User Content from the Service at its sole discretion. We grant you permission to use and access the Service, subject to the following express conditions surrounding User Content. You agree that failure to adhere to any of these conditions constitutes a material breach of these Terms.


          </p>
          <div className="mt-4">
            <p className='font-dmSans text-lg !leading-8 font-bold text-[#333333]'>By transmitting and submitting any User Content while using the Service, you agree as follows:</p>

            <div className='pl-4'>
              <p className='font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]'>1. There will be no tolerance for objectionable content and abusive users. We may provide various open communication tools on our website and apps, such as blog comments, blog posts, public chat, forums, message boards, newsgroups, product ratings, reviews, various social media services, messenger chats & reports etc. You understand that generally we do not pre-screen or monitor content posted by users of these various communication tools, which means that if you choose to use these tools to submit any type of content to our website, then it is your responsibility to use these tools responsibly and ethically. By posting information or otherwise using any open communication tools as mentioned, you agree that you will not upload, post, share or otherwise distribute any content that:</p>
              <div className='pl-4'>
                <p className='font-dmSans mt-2 text-lg !leading-8 font-normal text-[#333333]'>
                  a. Is illegal, threatening, defamatory, abusive, harassing, degrading, intimidating, fraudulent, deceptive, invasive, racist, or contains any type of suggestive, inappropriate, or explicit language.

                </p>
                <p className='font-dmSans mt-2 text-lg !leading-8 font-normal text-[#333333]'>
                  b. Infringes on any trademark, patent, trade secret, copyright, or other proprietary rights of any party.


                </p>
                <p className='font-dmSans mt-2 text-lg !leading-8 font-normal text-[#333333]'>
                  c. Contains any type of unauthorized or unsolicited advertising.



                </p>
                <p className='font-dmSans mt-2 text-lg !leading-8 font-normal text-[#333333]'>
                  d. Impersonates any person or entity, including any {" "}
                  <Link href="https://www.plazaprotection.com/" target='_blank' className="text-[#3355FF] font-medium hover:underline">
                    www.plazaprotection.com
                  </Link>{" "} employees or representatives.




                </p>
              </div>

              <p className='font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]'>2. You will not submit content that is copyrighted or subject to third party proprietary rights, including privacy, publicity, trade secret, or others unless you are the owner of such rights or have the appropriate permission from their rightful owner to specifically submit such content.</p>
              <p className='font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]'>3. We have the right at our sole discretion to remove any content that we feel in our judgment does not comply with this User Agreement, along with any content that we feel is otherwise offensive, harmful, objectionable, inaccurate, or violates any 3rd party copyrights or trademarks. We are not responsible for any delay or failure in removing such content. If you post content that we choose to remove, you hereby consent to such removal, and consent to waive any claim against us.</p>
              <p className='font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]'>4. We do not assume any liability for any content posted by you or any other 3rd party users of our website. However, any content posted by you using any open communication tools on our website, provided that it doesn't violate or infringe on any 3rd party copyrights or trademarks, becomes the property of www.plazaprotection.com, and as such, gives us a perpetual, irrevocable, worldwide, royalty-free, exclusive license to reproduce, modify, adapt, translate, publish, publicly display and/or distribute as we see fit. This only refers and applies to content posted via open communication tools as described, and does not refer to information that is provided as part of the registration process, necessary to use our Resources. All information provided as part of our registration process is covered by our privacy policy.</p>
              <p className='font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]'>5. Any concerns arising out of the use of the services provided by Plaza Protection is required to be addressed/resolved with the team of Plaza Protection through direct contact or through mediatory, unless such effort has been made to resolve the matter, the user must not go online and post negative reviews on social networks or anywhere else on the internet.
              </p>
              <p className='font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]'>6. By posting any User Content via the Service, you expressly grant, and you represent and warrant that you have the right to grant, to the Company a royalty-free, sublicensable, transferable, perpetual, irrevocable, non-exclusive, worldwide license to use, reproduce, modify, publish, list information regarding, edit, translate, distribute, publicly perform, publicly display, and make derivative works of all such User Content and your name, voice, and/or likeness as contained in your User Content, if applicable, in whole or in part, and in any form, media or technology, whether now known or hereafter developed, for use in connection with the Service.
              </p>
              <p className='font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]'>7. We might use your company logo, name, and images, or any other copyright content from your website on our website, blogs or any other medium or social media channels for marketing purposes only. In case of any objection or if you want us to remove this content or information, reach out to us to get the information or content removed.</p>
            </div>
          </div>
        </>

      ),
    },
    {
      title: "Limited Representation & Warranty",
      content: (
        <>
          <p className="font-dmSans mt-4 text-lg !leading-8 font-bold text-[#333333]">
            Plaza Protection warrants for 60 days after the date that security services are provided that it will perform the security services:


          </p>

          <div className='pl-4'>
            <p className="font-dmSans mt-2 text-lg !leading-8 font-normal text-[#333333]">
              a. In accordance with the contract;

            </p>
            <p className="font-dmSans mt-2 text-lg !leading-8 font-normal text-[#333333]">
              b. Using guards that are duly licensed in accordance with all applicable legal requirements; have the commercially reasonable experience, qualifications and ability to provide the security services, and have been thoroughly screened by the company; and


            </p>
            <p className="font-dmSans mt-2 text-lg !leading-8 font-normal text-[#333333]">
              c. In a timely and professional manner in accordance with generally recognized industry standards for similar services.



            </p>
          </div>
          <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">Plaza Protection makes no other representations or warranties and all other representations or warranties, express and implied, are expressly disclaimed.</p>
        </>
      ),
    },
    {
      title: "Limitation of Liability",
      content: (
        <>
          <p className="font-dmSans mt-4 text-lg !leading-8 font-bold text-[#333333]">In no event will Plaza Protection be liable to the client or any third party for:
          </p>
          <div className='pl-4'>
            <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">
              1. Any incidental, consequential, or indirect damages including, but not limited to, damages for loss of profits, business interruption, loss of programs or information, and the like) arising out of the use of or inability to use the service, or any information, or transactions provided on the service, or downloaded from the service, or any delay of such information or service. even if Plaza protection or its authorized representatives have been advised of the possibility of such damages, or


            </p>
            <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">
              2. Any claim attributable to errors, omissions, or other inaccuracies in the service and/or materials or information downloaded through the service. because some states do not allow the exclusion or limitation of liability for consequential or incidental damages, the above limitation may not apply to you. in such states, Plaza Protection liability is limited to the greatest extent permitted by law.
            </p>
            <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">3. Plaza Protection makes no representations whatsoever about any other web site which you may access through this one or which may link to this site. when you access a non-Plaza Protection website, please understand that it is independent of Plaza Protection and that plazaprotection.com has no control over the content on that web site. Also, a link to a plazaprotection.com web site does not mean that Plaza Protection endorses or accepts any responsibility for the content or the use of such web site.</p>
          </div>
        </>
      ),
    },
    {
      title: "Copyrights, Trademarks And Intellectual Property",
      content: (
        <>
          <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">
            You acknowledge and agree that we and our licensors retain ownership of all intellectual property rights of any kind related to the Service, including applicable copyrights, trademarks, and other proprietary rights. Other product and company names that are mentioned on the Service may be trademarks of their respective owners. We reserve all rights that are not expressly granted to you under these Terms of Use.

          </p>
          <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">
            All content such as image, text, icons, and such are provided by the contractors and subcontractors hired by Plaza Protection. In case of any conflict with any copyrights or trademark incidents that may arise, Plaza Protection will investigate the incidents and remove such material from the site. However, Plaza Protection is not directly responsible for the use of such copyright and trademark violations. All content and materials available on {" "}
            <Link href="https://www.plazaprotection.com/" target='_blank' className="text-[#3355FF] font-medium hover:underline">
              www.plazaprotection.com
            </Link>{" "}, including but not limited to text, graphics, website name, code, images, and logos are the intellectual property of {" "}
            <Link href="https://www.plazaprotection.com/" target='_blank' className="text-[#3355FF] font-medium hover:underline">
              www.plazaprotection.com
            </Link>{" "} and are protected by applicable copyright and trademark law. Any inappropriate use, including but not limited to the reproduction, distribution, display or transmission of any content on this site is strictly prohibited unless specifically authorized by {" "}
            <Link href="https://www.plazaprotection.com/" target='_blank' className="text-[#3355FF] font-medium hover:underline">
              www.plazaprotection.com
            </Link>{" "}

          </p>
        </>
      ),
    },
    {
      title: "Termination of Use",
      content: (
        <>
          <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">
            You agree that we may, at our sole discretion, suspend or terminate your access to all or part of our website and Resources with or without notice and for any reason, including, without limitation, breach of this User Agreement. Any suspected illegal, fraudulent or abusive activity may be grounds for terminating your relationship and may be referred to appropriate law enforcement authorities. Upon suspension or termination, your right to use the Resources we provide will immediately cease, and we reserve the right to remove or delete any information that you may have on file with us, including any account or login information.

          </p>

        </>
      ),
    },
    {
      title: "Governing Law",
      content: (
        <>
          <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">
            {" "}
            <Link href="https://www.plazaprotection.com/" target='_blank' className="text-[#3355FF] font-medium hover:underline">
              www.plazaprotection.com
            </Link>{" "}  is controlled from our offices located in the state of CA, USA. It can be accessed in most countries around the world. As each country has laws that may differ from those of CA, by accessing our website, you agree that the statutes and laws of CA, without regard to the conflict of laws and the United Nations Convention on the International Sales of Goods, will apply to all matters relating to the use of this website and the purchase of any services through this site. Furthermore, any action to enforce this User Agreement shall be brought in the federal or state courts located in USA, CA. You hereby agree to personal jurisdiction by such courts and waive any jurisdictional, venue, or inconvenient forum objections to such courts.

          </p>

        </>
      ),
    },
    {
      title: "Force Majeure",
      content: (
        <>
          <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">
            Plaza Protection shall not be liable for any loss, damage or delay in delivery due to acts of God or causes beyond its reasonable control including acts of the Customer, acts of civil or military authority, fires, strikes, floods, epidemics, quarantine restrictions, war, riots, delays in transportation, transportation embargoes, or inability due to causes beyond its reasonable control to obtain necessary engineering talent, labor, materials or manufacturing facilities. In the event of such delay, the delivery date shall be extended for that length of time as may be reasonably necessary to compensate for the delay.

          </p>

        </>
      ),
    },
    {
      title: "Contact Information",
      content: (
        <>
          <p className="font-dmSans mt-4 text-lg !leading-8 font-normal text-[#333333]">
            If you have any questions or comments about these our Terms of Service as outlined above, you can contact us at: <Link href={'mailto:contact@plazaprotection.com'} className='underline' target='_blank' >contact@plazaprotection.com</Link>

          </p>

        </>
      ),
    },
  ];
  const slugify = (text, index) =>
    text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") + "-" + index;

  const [activeId, setActiveId] = useState(() => slugify(termsData[0].title, 0));

  const handleScrollToSection = (sectionId) => {
    setActiveId(sectionId);

    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 100;
      const topPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  };



  return (
    <>
      <div
        className="mx-4 sm:mx-6 xl:mx-10 my-10 2xl:max-w-[1440px] 2xl:mx-auto py-10 px-4 xl:py-[84px] bg-[url('/TermsImg.png')] bg-center bg-cover bg-no-repeat"

      >
        <Heading title={`Terms of Service`} className={'!mt-0 !mb-8 !text-[#222A5B] lg:whitespace-pre-line  2xl:!text-[64px] 2xl:!leading-[72px] !text-4xl lg:!text-5xl xl:!text-6xl'} />
        <p className="font-dmSans text-lg 2xl:text-xl 2xl:!leading-8 px-4 rounded border-l-[3px] border-l-[#B0BABF] font-normal text-[#45535E] max-w-[500px] !mb-8">
          By using our services, you are agreeing to these terms.
          Please read them carefully.
        </p>

        <p className='font-dmSans text-base !leading-8 font-normal text-[#333333]'>Last updated: 26 August, 2025</p>
      </div>

      <div className="mx-4 sm:mx-6 xl:mx-10 mb-10 2xl:max-w-[1440px] 2xl:mx-auto grid grid-cols-11 gap-6 lg:gap-10">
        <div className="col-span-11 md:col-span-4  xl:col-span-3 bg-gradient-to-b from-[#F0F6FF] to-[#FFFFFF] py-8 px-4 lg:p-8">
          {termsData.map((item, index) => {
            const id = slugify(item.title, index);
            return (
              <button
                key={id}
                onClick={() => handleScrollToSection(id)}
                className={`flex ${item.title.length > 25 ? "items-start" : "items-center"
                  } gap-4 ${index !== termsData.length - 1 ? "mb-6" : ""
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

        <div className="col-span-11 md:col-span-7 xl:col-span-8 bg-[#FAFAFA] py-8 px-4 lg:p-10 space-y-10">
          {termsData.map((item, index) => {
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
  )
}

export default Terms
