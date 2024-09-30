"use client";
import Image from "next/image";
import ACMPCCOELogo from "@/assets/amc-pccoe-logo.png";
import Link from "next/link";
import { useState } from "react";
import LinkItem from "./NavbarLinkItem";
import { FaChevronDown } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-zinc-900 shadow-md sticky top-0 z-10 h-13.8 px-3">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between px-3 text-white">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href={"/"} passHref>
            <div className="flex items-center space-x-2 cursor-pointer py-0 mt-0">
              <Image
                src={ACMPCCOELogo}
                alt="Logo"
                width={53}
                height={53}
                priority
              />
              <h1
                className="text-lg font-bold"
                style={{
                  color: "#05609D",
                  textShadow: "1px 1px 3px rgba(5,96,157,0.6)",
                }}
              >
                PCCOE ACM
              </h1>
            </div>
          </Link>

          {/* Hamburger Menu Icon for Small Screens */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="block text-gray-800 text-white hover:text-blue-500 focus:outline-none"
            >
              {menuOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 6 6 18M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row items-center justify-center text-center space-x-0 lg:space-x-6 space-y-2 lg:space-y-0 text-sm xl:text-base mt-2 lg:mt-0`}
        >
          {/* <a href="/">
            <FaHome href="/" />
            {/* <LinkItem  href="/" label="Home" /> 
          </a> */}
          <LinkItem href="/" label="Home" />

          <li className="relative group flex justify-center">
            <button className="flex items-center focus:outline-none">
              About
              <FaChevronDown className="w-4 h-4 ml-1" />
            </button>
            <ul className="absolute left-1/2 transform -translate-x-1/2 mt-8 w-44 bg-blue-950 shadow-lg p-2 rounded-lg z-20 border-1 border-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200
                bg-gradient-to-b from-blue-800 to-blue-950 shadow-[inset_0_-5px_10px_rgba(0,0,0,0.6),_0_5px_10px_rgba(0,0,0,0.4)]">              <LinkItem href="/about/pccoe" label="PCCOE" />
              <LinkItem href="/about/global" label="Global" />
            </ul>
          </li>

          <li className="relative group flex justify-center">
            <button className="flex items-center focus:outline-none">
              Events
              <FaChevronDown className="w-4 h-4 ml-1" />
            </button>
            <ul className="absolute left-1/2 transform -translate-x-1/2 mt-8 w-44 bg-blue-950 shadow-lg p-2 rounded-lg z-20 border-1 border-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200
                bg-gradient-to-b from-blue-800 to-blue-950 shadow-[inset_0_-5px_10px_rgba(0,0,0,0.6),_0_5px_10px_rgba(0,0,0,0.4)]">
            <LinkItem href="/events/anantya" label="Anantya" />
              <LinkItem href="/events/others" label="Regular Activities" />
            </ul>
          </li>

          <li className="relative group flex justify-center">
            <button className="flex items-center focus:outline-none">
              Achievements
              <FaChevronDown className="w-4 h-4 ml-1" />
            </button>
            <ul className="absolute left-1/2 transform -translate-x-1/2 mt-8 w-44 bg-blue-950 shadow-lg p-2 rounded-lg z-20 border-1 border-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200
                bg-gradient-to-b from-blue-800 to-blue-950 shadow-[inset_0_-5px_10px_rgba(0,0,0,0.6),_0_5px_10px_rgba(0,0,0,0.4)]">              <LinkItem href="/achievements/team_achievements" label="Team" />
              <LinkItem href="/achievements/individual" label="Individual" />
            </ul>
          </li>
          <li className="relative group flex justify-center">
            <button className="flex items-center focus:outline-none">
              Team
              <FaChevronDown className="w-4 h-4 ml-1" />
            </button>
            <ul className="absolute left-1/2 transform -translate-x-1/2 mt-8 w-44 bg-blue-950 shadow-lg p-2 rounded-lg z-20 border-1 border-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200
                bg-gradient-to-b from-blue-800 to-blue-950 shadow-[inset_0_-5px_10px_rgba(0,0,0,0.6),_0_5px_10px_rgba(0,0,0,0.4)]">              <LinkItem href="/team/core" label="Core Team" />
              <LinkItem href="/team/web" label="Web Team" />
            </ul>
          </li>
          <li className="relative group flex justify-center">
            <button className="flex items-center focus:outline-none">
              Cesa Insider
              <FaChevronDown className="w-4 h-4 ml-1" />
            </button>
            <ul className="absolute left-1/2 transform -translate-x-1/2 mt-8 w-44 bg-blue-950 shadow-lg p-2 rounded-lg z-20 border-1 border-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200
                bg-gradient-to-b from-blue-800 to-blue-950 shadow-[inset_0_-5px_10px_rgba(0,0,0,0.6),_0_5px_10px_rgba(0,0,0,0.4)]">              <LinkItem
                href="https://pccoe.acm.org/assets/CESA%20Insider%20Issue%2001.pdf"
                label="Issue 1"
              />
              <LinkItem
                href="https://pccoe.acm.org/assets/CESA%20Insider%20Issue%2002.pdf"
                label="Issue 2"
              />
            </ul>
          </li>

          <LinkItem href="/summer_school" label="ACM Summer School" />

          <LinkItem href="/contactus" label="Contact Us" />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
