import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const items = ["HOME", "BAG", "SNEAKERS", "BELT", "CONTACT"];

  return (
    <nav className="flex justify-center flex-col md:flex-row md:gap-10 gap-4 px-6 py-4 md:py-0 text-sm">
      {" "}
      <ul className="flex flex-col md:flex-row md:gap-10 gap-4 px-6 py-4 md:py-0 text-sm font-normal">
        {" "}
        <li className="text-[#40BFFF]">HOME</li>{" "}
        <li className="hover:text-[#40BFFF] text-black cursor-pointer">
          {" "}
          BAG{" "}
        </li>{" "}
        <li className="hover:text-[#40BFFF] text-black cursor-pointer">
          {" "}
          SNEAKERS{" "}
        </li>{" "}
        <li className="hover:text-[#40BFFF] text-black cursor-pointer">
          {" "}
          BELT{" "}
        </li>{" "}
        <li className="hover:text-[#40BFFF] text-black cursor-pointer">
          {" "}
          CONTACT{" "}
        </li>{" "}
      </ul>{" "}
    </nav>
  );
}
