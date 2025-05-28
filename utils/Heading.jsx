"use client"
const Heading = ({title,className}) => {
  return (
    <>
      <h1 className={`mt-6 font-dmSans text-[40px] !pointer-events-none !leading-[48px] font-semibold  text-[#171A1D] capitalize ${className} tracking-[-1px] `}>
        {title}
      </h1>
    </>
  );                                              
};

export default Heading;
