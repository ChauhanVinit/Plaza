"use client";
import { useEffect } from "react";

const RequestQuoteForm = () => {
  useEffect(() => {
    // Load Pipedrive form script dynamically
    const script = document.createElement("script");
    script.src = "https://webforms.pipedrive.com/f/loader";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="xxs:container 2xl:max-w-[1440px] mx-4 xxs:mx-auto  xl:px-10 xl:py-20 2xl:p-20 mb-10 xl:mb-20 xl:bg-[#EDF5FF]/40 rounded-[40px]">
      <div
        className="pipedriveWebForms bg-white py-8 px-4 sm:px-0 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-[#E5E7EB] mx-auto  max-w-[580px]"
        data-pd-webforms="https://webforms.pipedrive.com/f/ctsaBF7z4k5UwFt2BkGMdiBP8TJSgch1V6qPCnkyC7dmotBUGp9x52iNkmvQjIeCuD"
      ></div>
    </div>
  );
};

export default RequestQuoteForm;

