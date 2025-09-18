import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import Navbar from "../Pages/Navbar";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="font-poppins w-full sticky top-0 bg-white shadow-sm z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-[#40BFFF] p-2 rounded-md">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <span className="text-lg font-bold">E-Comm</span>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:block">
          <Navbar />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            <span className="text-sm">Items</span>
            <span className="text-sm opacity-60">$0.00</span>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-xl" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t">
          <Navbar />
        </div>
      )}
    </header>
  );
}
