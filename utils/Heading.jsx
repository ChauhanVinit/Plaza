"use client"
const Heading = ({title,className}) => {
  return (
    <>
      <h1 className={`mt-6 font-urbanist text-[40px] leading-[48px] font-bold  text-[#171A1D] ${className}  `}>
        {title}
      </h1>
    </>
  );
};

export default Heading;
