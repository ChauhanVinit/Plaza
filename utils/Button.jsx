"use client";

import Link from "next/link";

const Button = ({ 
  name, 
  icon, 
  type = "button", 
  style = "", 
  variant = "blue", 
  onClick, 
  path // New prop for navigation
}) => {
  const isBlueVariant = variant === "blue";

  const buttonClasses = `cursor-pointer text-base font-semibold inline-flex justify-center items-center font-jakarta py-2 px-2 h-16 ${style} 
    ${isBlueVariant ? 
      'relative overflow-hidden px-1 py-8 text-lg shadow-[0_10px_25px_0_rgba(19,85,255,0.4)] hover:shadow-none leading-4 font-bold text-white transition-all duration-200 ease-in-out group transform' : 
      'bg-white border border-[#98A2B3] text-[#1D2939] '
    }
  `;

  const buttonContent = (
    <>
      {isBlueVariant ? (
        <>
          <div className="absolute inset-0 bg-[#1355FF] flex items-center justify-center transition-transform duration-200 ease-linear translate-y-0 group-hover:-translate-y-full z-10">
            <span className="transition-transform duration-200 ease-linear translate-y-0 group-hover:-translate-y-full inline-flex items-center gap-2">
              {name}
              {icon && <span className="relative top-[2px]">{icon}</span>}
            </span>
          </div>
          <div className="absolute inset-0 bg-[#222A5B] flex items-center justify-center transition-transform duration-200 ease-linear translate-y-full group-hover:translate-y-0 z-10">
            <span className="transition-transform duration-200 ease-linear translate-y-full group-hover:translate-y-0 inline-flex items-center gap-2">
              {name}
              {icon && <span className="relative top-[1px]">{icon}</span>}
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




