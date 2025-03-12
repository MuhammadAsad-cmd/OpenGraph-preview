import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="relative bg-white">
        {/* <div className="relative top-1/2 mt-60 -mb-48 -translate-y-1/2">
          <div className="max-w-8xl mx-auto flex px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-purple-500 px-8 py-11 text-white sm:px-16 sm:py-12 md:px-24 md:py-14 lg:px-32 lg:py-16 xl:px-40 xl:py-20">
              <h2 className="font-heading mb-4 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-none md:text-5xl lg:mb-8">
                Automated Open Graph Images for Your Content
              </h2>
              <p className="relative mt-4 mb-6 text-lg sm:mt-5 sm:mb-7 md:mt-6 md:mb-8 lg:mt-7 lg:mb-9 xl:mt-8 xl:mb-10">
                For businesses and content creators, generating unique Open
                Graph (OG) images for all content types is a demanding task.
                OpenGraph.xyz simplifies this by automating dynamic OG image
                creation, enhancing your online presence and audience
                engagement. Start streamlining effortlessly today!
              </p>
              <a
                target=""
                className="relative z-10 mt-6 w-auto self-start rounded-md bg-indigo-600 px-10 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                rel="noreferrer"
                href="https://opengraph.enter.nl/register"
              >
                Get Started for Free
              </a>
            </div>
          </div>
        </div> */}
        {/* <div className="max-w-8xl mx-auto flex flex-col flex-wrap gap-11 px-4 pt-11 pb-10 sm:flex-row sm:gap-12 sm:px-6 sm:pt-12 sm:pb-11 md:gap-14 md:pt-14 md:pb-12 lg:gap-16 lg:px-8 lg:pt-16 lg:pb-14 xl:gap-20 xl:pt-20 xl:pb-16">
          <div className="flex-1">
            <Link href="/">
              <Image
                height={118}
                width={216}
                alt="OpenGraph Icon Isolated"
                className="max-w-28 text-transparent"
                src="/images/logo.svg"
              />
            </Link>
          </div>
          <div className="flex flex-col flex-wrap gap-11 sm:flex-row sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20" />
          <div>
            <div className="mb-4 text-2xl font-bold text-stone-900 md:mb-5">
              Product
            </div>
            <ul className="relative flex flex-col">
              <li className="relative mb-3.5 min-w-[108px] text-xs md:mb-4 md:text-sm">
                <a
                  className="text-base font-medium hover:underline"
                  href="/automated-open-graph-images"
                >
                  Automate OG Images
                </a>
              </li>
              <li className="relative mb-3.5 min-w-[108px] text-xs md:mb-4 md:text-sm">
                <a
                  className="text-base font-medium hover:underline"
                  href="/metadata-site-audit"
                >
                  Metadata Site Audit
                </a>
              </li>
              <li className="relative mb-3.5 min-w-[108px] text-xs md:mb-4 md:text-sm">
                <a
                  className="text-base font-medium hover:underline"
                  href="/alt-text-generator"
                >
                  Alt Text Generator
                </a>
              </li>
              <li className="relative mb-3.5 min-w-[108px] text-xs md:mb-4 md:text-sm">
                <a
                  className="text-base font-medium hover:underline"
                  href="/meta-title-description-generation"
                >
                  Metadata Generator
                </a>
              </li>
              <li className="relative mb-3.5 min-w-[108px] text-xs md:mb-4 md:text-sm">
                <a
                  className="text-base font-medium hover:underline"
                  href="/pricing"
                >
                  Pricing
                </a>
              </li>
              <li className="relative mb-3.5 min-w-[108px] text-xs md:mb-4 md:text-sm">
                <a
                  target=""
                  className="text-base font-medium hover:underline"
                  rel="noreferrer"
                  href="https://opengraph.enter.nl/register"
                >
                  Sign up
                </a>
              </li>
              <li className="relative mb-3.5 min-w-[108px] text-xs md:mb-4 md:text-sm">
                <a
                  className="text-base font-medium hover:underline"
                  rel="noreferrer"
                  href="https://opengraph.enter.nl/login"
                >
                  Sign in
                </a>
              </li>
              <div className="flex gap-4"></div>
            </ul>
          </div>
          <div>
            <div className="mb-4 text-2xl font-bold text-stone-900 md:mb-5">
              Resources
            </div>
            <ul className="relative flex flex-col">
              <li className="relative mb-3.5 min-w-[108px] text-xs md:mb-4 md:text-sm">
                <a
                  className="text-base font-medium hover:underline"
                  href="/blog"
                >
                  Blog
                </a>
              </li>
              <li className="relative mb-3.5 min-w-[108px] text-xs md:mb-4 md:text-sm">
                <a
                  className="text-base font-medium hover:underline"
                  href="/inspiration"
                >
                  Inspiration
                </a>
              </li>
              <li className="relative mb-3.5 min-w-[108px] text-xs md:mb-4 md:text-sm">
                <a
                  className="text-base font-medium hover:underline"
                  href="/faq"
                >
                  FAQ
                </a>
              </li>
              <li className="relative mb-3.5 min-w-[108px] text-xs md:mb-4 md:text-sm">
                <a
                  target="_blank"
                  className="text-base font-medium hover:underline"
                  rel="noreferrer"
                  href="https://docs.opengraph.xyz/"
                >
                  Docs
                </a>
              </li>
              <div className="flex gap-4"></div>
            </ul>
          </div>
          <div>
            <div className="mb-4 text-2xl font-bold text-stone-900 md:mb-5">
              Company
            </div>
            <ul className="relative flex flex-col">
              <li className="relative mb-3.5 min-w-[108px] text-xs md:mb-4 md:text-sm">
                <a
                  className="text-base font-medium hover:underline"
                  href="/about"
                >
                  About
                </a>
              </li>
              <li className="relative mb-3.5 min-w-[108px] text-xs md:mb-4 md:text-sm">
                <a
                  className="text-base font-medium hover:underline"
                  href="/page/terms-of-service"
                >
                  Terms of Service
                </a>
              </li>
              <li className="relative mb-3.5 min-w-[108px] text-xs md:mb-4 md:text-sm">
                <a
                  className="text-base font-medium hover:underline"
                  href="/page/privacy-policy"
                >
                  Privacy Policy
                </a>
              </li>
              <div className="flex gap-4"></div>
            </ul>
          </div>
          <div>
            <div className="mb-4 text-2xl font-bold text-stone-900 md:mb-5">
              Follow Us
            </div>
            <ul className="relative flex flex-col">
              <div className="flex gap-4">
                <li>
                  <a
                    target="_blank"
                    aria-label="Twitter"
                    className=""
                    rel="noreferrer"
                    href="https://twitter.com/bobsingor"
                  >
                    <img
                      alt="Twitter X Icon"
                      loading="lazy"
                      width="30"
                      height="30"
                      decoding="async"
                      data-nimg="1"
                      src="/_next/image?url=https%3A%2F%2Ftheopengraph.cdn.prismic.io%2Ftheopengraph%2FZgPVcMcYqOFdyGyU_x-twitter.svg%3Fauto%3Dcompress%2Cformat&amp;w=64&amp;q=75"
                    />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    aria-label="LinkedIn"
                    className=""
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/bobsingor/"
                  >
                    <img
                      alt="LinkedIn Icon"
                      loading="lazy"
                      width="30"
                      height="30"
                      decoding="async"
                      data-nimg="1"
                      src="/_next/image?url=https%3A%2F%2Ftheopengraph.cdn.prismic.io%2Ftheopengraph%2FZgPVOscYqOFdyGyT_linkedin-in.svg%3Fauto%3Dcompress%2Cformat&amp;w=64&amp;q=75"
                    />
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div> */}
        <div className="flex items-center justify-center bg-[#f6f8f9] pt-3.5 text-center text-[13.5px] md:py-4 md:text-[14px]">
          <div className="max-w-8xl mx-auto flex">
            Copyright © 2025 Asad.dev All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
