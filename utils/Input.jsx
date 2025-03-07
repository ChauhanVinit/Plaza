import React from "react";

const Input = ({type,placeholder,value,name,id,onChange,className}) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      className={` w-full border py-[15px] border-[#7198FE]/50  rounded-2xl bg-white px-6  outline-none ring-0 placeholder:text-[#6B7280] font-urbanist text-base font-medium text-[#171A1D] ${className} `}
    />
  );
};

export default Input;
