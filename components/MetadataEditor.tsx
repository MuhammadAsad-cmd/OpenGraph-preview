import EditIcon from "@/icons/EditIcon";
import UploadIcon from "@/icons/UploadIcon";
import Image from "next/image";
import React from "react";

const MetadataEditor = () => {
  return (
    <>
      <div className="rounded-2xl border border-solid border-gray-200 bg-white px-4 py-6 text-left shadow-sm transition duration-200 ease-in-out hover:shadow-lg focus:shadow-lg sm:px-6 sm:py-8">
        <h1 className="mb-2 flex gap-2 text-xl leading-6 font-extrabold text-[#35199d]">
          Edit
          <EditIcon />
        </h1>
        <p className="mb-4 text-base leading-5 text-[#44403C]">
          Customize how your content appears on search engines and social
          platforms. Modify the title, description, and image to optimize
          visibility and engagement.
        </p>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-stone-700"
            >
              Title
            </label>
            <div className="mt-1">
              <input
                id="title"
                className="focus:ring-indigborder-indigo-500 block w-full rounded-md border border-[#D1D5DB] px-3 py-2 shadow-sm transition duration-300 ease-in-out outline-none hover:border-indigo-500 focus:border-indigo-500 focus:ring"
                type="text"
                placeholder="Muhammad Asad - Front End Developer"
              />
            </div>
            <p className="mt-2 text-sm text-stone-500" id="email-description">
              <span className="font-medium text-stone-700">Recommended:</span>{" "}
              60 characters
            </p>
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-stone-700"
            >
              Description
            </label>
            <div className="mt-1">
              <textarea
                id="description"
                className="focus:ring-indigborder-indigo-500 block w-full rounded-md border border-[#D1D5DB] px-3 py-2 shadow-sm transition duration-300 ease-in-out outline-none hover:border-indigo-500 focus:border-indigo-500 focus:ring"
                placeholder="Showcasing the work of Muhammad Asad, a web developer
                    passionate about creating cutting-edge digital solutions and
                    intuitive user interfaces."
              ></textarea>
            </div>
            <p className="mt-2 text-sm text-stone-500" id="email-description">
              <span className="font-medium text-stone-700">Recommended:</span>{" "}
              155 - 160 characters
            </p>
          </div>
          <label
            htmlFor="image"
            className="m-0 block p-0 text-sm font-medium text-stone-700"
          >
            Image
          </label>

          <div className="mt-2 mb-0 flex flex-row gap-3">
            <Image
              width={48}
              height={48}
              className="block h-12 w-12 rounded-md object-cover"
              src="/images/meta.png"
              alt="img"
            />
            <button className="flex w-full cursor-pointer items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none">
              <UploadIcon />
              Change Image
            </button>
          </div>
          <p className="mt-2 text-sm text-stone-500">
            <span className="font-medium text-stone-700">Recommended:</span>{" "}
            1200x630px
          </p>
        </form>
      </div>
    </>
  );
};

export default MetadataEditor;
