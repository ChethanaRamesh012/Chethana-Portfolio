import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { SiLeetcode, SiChessdotcom, SiNotion } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div >
      <nav className="flex items-center justify-between py-4 px-5">
        {/* Logo */}
        <div className="flex items-center">
          
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center gap-4 text-3xl">
          <a
            href="https://www.linkedin.com/in/chethanaramesh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-5xl text-[#0A66C2]" />
          </a>
          <a
            href="https://github.com/ChethanaRamesh012/Chethana-Ramesh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-5xl text-gray-500" />
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden z-50">
          <button onClick={toggleNavbar}>
            {isOpen ? (
              <FaTimes className="text-4xl text-white-800" />
            ) : (
              <FaBars className="text-4xl text-white-800" />
            )}
          </button>
        </div>
      </nav>

      {/* Animated Mobile Dropdown */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        } w-full flex flex-col items-center gap-6 `}
      >
        <a
          href="https://www.linkedin.com/in/parithosh-d/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-6xl text-[#0A66C2]" />
        </a>
        <a
          href="https://github.com/parithoshd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-6xl text-gray-500" />
        </a>
        <a
          href="https://leetcode.com/u/parithoshd22/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode className="text-6xl text-[#FFA116]" />
        </a>
        <a
          href="https://www.chess.com/member/blitzstar911"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiChessdotcom className="text-6xl text-[#4CAF50]" />
        </a>
        <a
          href="https://tough-soap-163.notion.site/LeetCode-183b988dca6a805cb46eeedf22cc5d48"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiNotion className="text-6xl" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
