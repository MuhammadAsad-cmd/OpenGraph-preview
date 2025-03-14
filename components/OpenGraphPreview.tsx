import PreviewIcon from "@/icons/PreviewIcon";
import Image from "next/image";
import React from "react";

const OpenGraphPreview = () => {
  return (
    <>
      <div>
        <div className="rounded-2xl border border-gray-200 bg-white px-4 py-6 text-left shadow-sm transition duration-200 ease-in-out hover:shadow-lg focus:shadow-lg sm:px-6 sm:py-8">
          <h1 className="mb-2 flex gap-2 text-xl leading-6 font-extrabold text-[#35199d]">
            Preview
            <PreviewIcon />
          </h1>
          <p className="mb-4 max-w-2xl text-base leading-5 text-stone-700">
            See how your website will look on social media platforms. This live
            preview ensures your metadata aligns with your content and branding.
          </p>

          <div className="flex flex-col space-y-4 md:space-y-0">
            {/* Facebook Preview */}
            <div className="w-full">
              <h3 className="mb-2 font-medium text-stone-900 uppercase">
                Facebook
              </h3>
              <div className="w-full cursor-pointer font-sans">
                <div className="rounded-md border border-gray-300">
                  <div className="w-full">
                    <Image
                      width={300}
                      height={300}
                      className="block h-full w-full rounded-t-md object-cover"
                      src="/images/meta.png"
                      alt="Facebook Preview"
                    />
                  </div>
                </div>
                <div className="rounded-b-md border border-gray-300 bg-gray-100 px-3 py-2 break-words antialiased">
                  <div className="truncate text-xs leading-4 text-gray-600 uppercase">
                    asad-portfolio-ai.vercel.app
                  </div>
                  <div className="mt-1 text-lg font-semibold text-gray-900">
                    Muhammad Asad - Front End Developer
                  </div>
                  <div className="mt-1 truncate text-sm text-gray-600">
                    Showcasing the work of Muhammad Asad, a web developer
                    passionate about creating cutting-edge digital solutions and
                    intuitive user interfaces.
                  </div>
                </div>
              </div>
            </div>

            {/* Twitter (X) Preview */}
            <div className="mt-2 w-full">
              <h3 className="mb-2 font-medium text-stone-900 uppercase">
                X (formerly Twitter)
              </h3>
              <div className="relative max-w-full cursor-pointer overflow-hidden rounded-lg border border-gray-300 font-sans text-black">
                <div className="bg-cover bg-center">
                  <div className="w-full">
                    <Image
                      width={300}
                      height={300}
                      className="h-full w-full object-cover"
                      src="/images/meta.png"
                      alt="Twitter Preview"
                    />
                  </div>
                </div>
                <div className="bg-opacity-40 absolute bottom-2 left-2 rounded bg-black px-2 py-1 text-xs text-white">
                  asad-portfolio-ai.vercel.app
                </div>
              </div>
            </div>

            {/* LinkedIn Preview */}
            <div className="mt-2 w-full">
              <h3 className="mb-2 font-medium text-stone-900 uppercase">
                LinkedIn
              </h3>
              <div className="max-w-full cursor-pointer overflow-hidden rounded-md border border-gray-300 shadow-md">
                <div className="bg-cover bg-center">
                  <div className="w-full">
                    <Image
                      width={300}
                      height={300}
                      className="h-full w-full object-cover"
                      src="/images/meta.png"
                      alt="LinkedIn Preview"
                    />
                  </div>
                </div>
                <div className="bg-white p-3 break-words antialiased">
                  <div className="text-lg font-semibold text-gray-900">
                    Muhammad Asad - Front End Developer
                  </div>
                  <div className="truncate text-xs text-gray-500 uppercase">
                    asad-portfolio-ai.vercel.app
                  </div>
                </div>
              </div>
            </div>

            {/* Discord Preview */}
            <div className="mt-2 w-full">
              <h3 className="mb-2 font-medium text-stone-900 uppercase">
                Discord
              </h3>
              <div className="grid max-w-full cursor-pointer items-start overflow-hidden rounded-md border-l-4 border-gray-800 bg-gray-800 font-sans text-white">
                <div className="p-4">
                  <div className="text-xs font-normal">
                    Muhammad Asad Portfolio
                  </div>
                  <div className="mt-2 text-lg font-semibold text-blue-400">
                    Muhammad Asad - Front End Developer
                  </div>
                  <div className="mt-2 text-sm font-normal text-gray-300">
                    Showcasing the work of Muhammad Asad, a web developer
                    passionate about creating cutting-edge digital solutions and
                    intuitive user interfaces.
                  </div>
                  <div className="mt-4 overflow-hidden rounded">
                    <Image
                      width={300}
                      height={300}
                      src="/images/meta.png"
                      alt="Discord Preview"
                      className="block w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenGraphPreview;
