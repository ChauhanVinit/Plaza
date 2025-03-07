"use client"
const Heading = ({title,className}) => {
  return (
    <>
      <h1 className={`mt-6 font-urbanist text-[40px] leading-[48px] font-bold  text-[#222A5B] ${className}  `}>
        {title}
      </h1>
    </>
  );
};

export default Heading;
