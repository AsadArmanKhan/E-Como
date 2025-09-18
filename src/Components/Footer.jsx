import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="font-poppins w-screen sm:w-full bg-[#BCDDFE] text-[#22262A]">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 py-10 px-6">
        {/* Footer E-Comm Info */}
        <div>
          <div className="flex items-center gap-2">
            <div className="bg-[#40BFFF] p-2 rounded-md flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-lg font-bold">E-Comm</span>
          </div>
          <p className="mt-3 text-xs leading-relaxed max-w-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer.
          </p>
        </div>

        {/* Footer Follow Us */}
        <div>
          <h3 className="text-lg font-medium">Follow Us</h3>
          <p className="mt-3 text-xs leading-relaxed max-w-xs">
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </p>
          <div className="flex gap-4 mt-3">
            <FaFacebookF className="text-[#385C8E] cursor-pointer" />
            <FaTwitter className="text-[#03A9F4] cursor-pointer" />
          </div>
        </div>

        {/* Footer Contact Us */}
        <div>
          <h3 className="text-lg font-medium">Contact Us</h3>
          <p className="mt-3 text-sm leading-relaxed">
            E-Comm , 4578 <br /> Marmora Road, <br /> Glasgow D04 89GR
          </p>
        </div>
      </div>

      {/*All The Links Section */}
      <div className="container mx-auto grid md:grid-cols-4 gap-8 px-6 py-8">
        <div>
          <h4 className="font-medium mb-3">Information</h4>
          <ul className="space-y-2 text-sm flex flex-col ">
            <Link>About Us</Link>
            <Link>Information</Link>
            <Link>Privacy PoLinkcy</Link>
            <Link>Terms & Conditions</Link>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3">Service</h4>
          <ul className="space-y-2 text-sm flex flex-col">
            <Link>About Us</Link>
            <Link>Information</Link>
            <Link>Privacy PoLinkcy</Link>
            <Link>Terms & Conditions</Link>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3">My Account</h4>
          <ul className="space-y-2 text-sm flex flex-col">
            <Link>About Us</Link>
            <Link>Information</Link>
            <Link>Privacy PoLinkcy</Link>
            <Link>Terms & Conditions</Link>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3">Our Offers</h4>
          <ul className="space-y-2 text-sm flex flex-col">
            <Link>About Us</Link>
            <Link>Information</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms & Conditions</Link>
          </ul>
        </div>
      </div>

      {/* Footer Bottom bar */}
      <div className="border-t border-gray-300 mt-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-6">
          <p className="text-xs text-gray-600">
            © 2018 Ecommerce theme by www.bisenbaev.com
          </p>
          <div className="flex justify-center items-center gap-4 mt-3 md:mt-0">
            <img
              src="https://pngimg.com/d/visa_PNG32.png"
              alt="Visa"
              className="h-15 w-15"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDgySQ9hrqMG7QxsHMrF99ABm6eUlY5_gPyg&s"
              alt="Paypal"
              className="h-6 w-15"
            />
            <img
              src="https://financialit.net/sites/default/files/1609314895logo-mastercard-mobile_1_4.png"
              alt="Mastercard"
              className="h-6 w-15"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Western_Union_logo.svg/1280px-Western_Union_logo.svg.png"
              alt="Western Union"
              className="h-6 w-15"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
