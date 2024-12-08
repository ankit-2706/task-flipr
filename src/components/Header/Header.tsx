import React from "react";
import Button from "../Buttons/PrimaryButton";
import { Logo } from "../../assets/assets";
const Header: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-36 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="h-8" />
      </div>
      <ul className="flex items-center gap-12 text-gray-700 text-base">
        <li className="hover:text-blue-500 cursor-pointer">Home</li>
        <li className="hover:text-blue-500 cursor-pointer">Services</li>
        <li className="hover:text-blue-500 cursor-pointer">About</li>
        <li className="hover:text-blue-500 cursor-pointer">Testimonials</li>
      </ul>
      <Button text="Contact" />
    </nav>
  );
};

export default Header;
