"use client";
import Link from "next/link";
const Button = ({
  name,
  icon,
  type = "button",
  style = "",
  variant = "blue",
  onClick,
  path,                                                                            
}) => {
  const isBlueVariant = variant === "blue";
  const buttonClasses = `cursor-pointer text-base font-semibold inline-flex justify-center items-center font-dmSans capitalize py-2 px-2 h-16 ${style} 
    ${
      isBlueVariant
        ? "bg-[#1355FF] hover:bg-[#222A5B] transition-all duration-300  ease-in-out relative  overflow-hidden  px-1 py-8 text-lg  leading-4 font-bold text-white  group transform rounded-[2px]"
        : "bg-white border border-[#98A2B3] text-[#1D2939] "
    }
  `;
                                                                                                                                                                         
  const buttonContent = (
    <>
      {isBlueVariant ? (
        <>
          <div className="transition-all duration-300  ease-in-out  absolute inset-0 flex items-center justify-center  translate-y-0 group-hover:-translate-y-full z-10 ">
            <span className="transition-all duration-300  ease-in-out translate-y-0 group-hover:-translate-y-full inline-flex items-center gap-2">
              {name}
              {icon && <span className="relative top-[2px]">{icon}</span>}
            </span>
          </div>
          <div className="transition-all duration-300  ease-in-out absolute inset-0 flex items-center justify-center  translate-y-full group-hover:translate-y-0 z-10 ">
            <span className="transition-all duration-300  ease-in-out translate-y-full group-hover:translate-y-0 inline-flex items-center gap-2">
              {name}
              {icon && <span className="relative top-[2px]">{icon}</span>}
            </span>
          </div>
        </>
      ) : (
        <span className="inline-flex items-center gap-2">
          {name}
          {icon && icon}
        </span>
      )}
    </>
  );

  return path ? (
    <Link href={path} target="_blank" className={buttonClasses}>
      {buttonContent}
    </Link>
  ) : (
    <button onClick={onClick} type={type} className={buttonClasses}>
      {buttonContent}
    </button>
  );
};

export default Button;
