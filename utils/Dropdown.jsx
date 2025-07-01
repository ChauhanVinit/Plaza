"use client";
import { useState, useRef, useEffect } from "react";
import Caret from "../public/right-02.svg";
import Image from "next/image";

const Dropdown = ({
  options,
  className = "",
  height = "",
  btnStyle = "",
  placeholder,
  name,
  onSelect,
  value, 
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionSelect = (option) => {
    if (onSelect) onSelect(name, option.name);
    setMenuOpen(false);
  };

  const selectedOption = value || placeholder; 

  return (
    <div className={`relative ${className}`} ref={menuRef}>
      <button
        onClick={toggleMenu}
        type="button"
        className={`w-full flex bg-white rounded items-center justify-between px-5 border border-[#7198FE]/50 font-dmSans tracking-[-0.5px] text-base font-medium ${
          selectedOption === placeholder ? "text-[#45535E]" : "text-[#171A1D]"
        } gap-2 smooth ${btnStyle} ${height || "h-[50px]"}`}
      >
        {selectedOption}
        <Image
          src={Caret}
          className={`rotate-0 w-4 h-4 smooth ${menuOpen ? "rotate-180" : ""}`}
          alt="Caret Icon"
        />
      </button>

      {menuOpen && (
        <div className="flex flex-col gap-1 origin-top absolute top-[calc(100%+3px)] w-full bg-white z-40 border border-[#7198FE]/50 rounded-xl p-3 shadow-[0_6px_8px_-6px_rgba(0,0,0,0.08),0_8px_16px_-6px_rgba(0,0,0,0.08)] smooth max-h-36 overflow-y-auto invisible-scroll">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionSelect(option)}
              type="button"
              className={`outline-none p-2 rounded-md hover:bg-[#EDEFFE] w-full text-left text-[#171A1D] text-sm font-dmSans tracking-[-0.5px] font-semibold smooth ${
                selectedOption === option.name ? "bg-[#EDEFFE]" : "bg-[#EDEFFE]/40"
              }`}
            >
              {option.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};



export default Dropdown;

