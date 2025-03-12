import MenuIcon from "@/icons/MenuIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="sticky inset-x-0 top-[-1px] z-50  duration-200 ease-in shadow-lg bg-[#36169a]">
        <div className="relative">
          <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-4 sm:px-6 md:px-8">
            <div className="flex px-2 md:px-0">
              <Link href="/">
                <span className="sr-only">OpenGraph</span>
                <div className="relative h-8 w-12 rounded-full bg-white px-2 py-0 sm:h-10 sm:w-16">
                  <Image
                    width={64}
                    height={64}
                    alt="OpenGraph"
                    className="absolute inset-0 object-contain p-1 h-full w-full text-transparent"
                    src="/images/logo.svg"
                  />
                </div>
              </Link>
            </div>
            <div className="-my-2 -mr-2 flex md:hidden">
              <button
                className="inline-flex items-center justify-center rounded-md p-2 transition cursor-pointer duration-150 focus:outline-none  text-white hover:bg-[#FAFAFA40] hover:bg-opacity-25 hover:text-white focus:text-white"
                type="button"
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon />
              </button>
            </div>
            <nav className="hidden md:flex md:flex-row md:items-center md:gap-4">
              <Link
                className="whitespace-nowrap text-base font-medium  text-white hover:text-white"
                href="#"
              >
                Product
              </Link>
              <Link
                className="whitespace-nowrap text-base font-medium  text-white hover:text-white"
                href="#"
              >
                Pricing
              </Link>
              <Link
                className="whitespace-nowrap text-base font-medium  text-white hover:text-white"
                href="#"
              >
                About
              </Link>
              <Link
                className="whitespace-nowrap text-base font-medium  text-white hover:text-white"
                href="#"
              >
                Blog
              </Link>
              <Link
                className="whitespace-nowrap text-base font-medium  text-white hover:text-white"
                href="#"
              >
                Inspiration
              </Link>
              <Link
                className="whitespace-nowrap text-base font-medium  text-white hover:text-white"
                href="#"
              >
                FAQ
              </Link>
              <Link
                className="whitespace-nowrap text-base font-medium text-white hover:text-white"
                rel="noreferrer"
                href="https://opengraph.enter.nl/login"
              >
                Sign in
              </Link>
              <Link
                className="bg-white hover:bg-opacity-90 shadow-sm py-[10px] px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                href="https://opengraph.enter.nl/register"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </div>
        <div className="fixed top-px left-px w-px h-0 p-0 m-[-1px] overflow-hidden clip-rect text-nowrap border-0 hidden"></div>
      </header>
    </>
  );
};

export default Navbar;
