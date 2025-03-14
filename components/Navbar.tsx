import MenuIcon from "@/icons/MenuIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="sticky inset-x-0 top-[-1px] z-50 bg-[#36169a] shadow-lg duration-200 ease-in">
        <div className="relative">
          <div className="max-w-8xl mx-auto flex items-center justify-between px-4 py-4 sm:px-6 md:px-8">
            <div className="flex px-2 md:px-0">
              <Link href="/">
                <span className="sr-only">OpenGraph</span>
                <div className="relative h-8 w-12 rounded-full bg-white px-2 py-0 sm:h-10 sm:w-16">
                  <Image
                    width={64}
                    height={64}
                    alt="OpenGraph"
                    className="absolute inset-0 h-full w-full object-contain p-1 text-transparent"
                    src="/images/logo.svg"
                  />
                </div>
              </Link>
            </div>
            <div className="-my-2 -mr-2 flex md:hidden">
              <button
                className="hover:bg-opacity-25 inline-flex cursor-pointer items-center justify-center rounded-md p-2 text-white transition duration-150 hover:bg-[#FAFAFA40] hover:text-white focus:text-white focus:outline-none"
                type="button"
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon />
              </button>
            </div>
            <nav className="hidden md:flex md:flex-row md:items-center md:gap-4">
              <Link
                className="text-base font-medium whitespace-nowrap text-white hover:text-white"
                rel="noreferrer"
                href="https://opengraph.enter.nl/login"
              >
                Sign in
              </Link>
              <Link
                className="hover:bg-opacity-90 rounded-md bg-white px-3 py-[10px] shadow-sm focus:ring-2 focus:ring-offset-2 focus:outline-none"
                href="https://opengraph.enter.nl/register"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </div>
        <div className="clip-rect fixed top-px left-px m-[-1px] hidden h-0 w-px overflow-hidden border-0 p-0 text-nowrap"></div>
      </header>
    </>
  );
};

export default Navbar;
