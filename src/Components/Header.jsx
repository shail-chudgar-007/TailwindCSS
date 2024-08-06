import React from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2 items-center justify-center">
        <img src="./src/assets/Logo.svg" alt="Logo"></img>
        <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl">Hosters is hiring!</button>
      </div>
      <div>
        <FaBars />
      </div>
    </div>
  );
};

export default Header;
