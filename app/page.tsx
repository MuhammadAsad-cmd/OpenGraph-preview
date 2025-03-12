import CopyButton from "@/components/CopyButton";
import MetadataEditor from "@/components/MetadataEditor";
import OpenGraphPreview from "@/components/OpenGraphPreview";
import Arrow from "@/icons/Arrow";
import Herosvg from "@/icons/Herosvg";

const Home = () => {
  return (
    <>
      <div className="wrapper flex min-h-screen flex-col">
        <Herosvg />
        <main className="flex-grow">
          <div className="bg-[#36169a]">
            <div className="max-w-container relative mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-20">
              <div className="mx-auto text-center lg:px-24">
                <div className="relative mb-8 inline-block">
                  <span className="mb-4 inline-block font-medium text-[#8673C2] uppercase">
                    The Easiest Way to
                  </span>
                  <h1 className="font-heading text-4xl leading-10 font-black tracking-tight text-white">
                    Preview and Generate Open Graph Meta Tags
                  </h1>
                  <Arrow />
                </div>
                <div>
                  <form className="mx-auto flex w-full gap-4 sm:max-w-2xl">
                    <div className="relative flex-1 text-left">
                      <label htmlFor="website" className="sr-only">
                        Website
                      </label>
                      <input
                        name="website"
                        className="block h-[42px] w-full rounded-md border-gray-300 bg-white px-3 py-2 shadow-sm outline-none focus:border-none focus:ring-1 focus:ring-indigo-500 sm:text-base"
                        type="text"
                        placeholder="Enter Website Url to preview metadata"
                      />
                    </div>
                    <div>
                      <button className="flex cursor-pointer items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none">
                        <span className="flex-shrink-0">Check Website</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-container mx-auto space-y-10 px-4 py-12 sm:space-y-12 sm:px-6 lg:space-y-16 lg:px-8 lg:py-20">
            <div className="relative grid grid-cols-1 grid-rows-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8 xl:grid-cols-3 xl:gap-x-8">
              <div className="col-span-1 col-start-1 xl:col-span-2">
                <div className="grid grid-cols-1 gap-y-8 lg:gap-x-8 xl:grid-cols-2 xl:gap-x-8">
                  <MetadataEditor />
                  <CopyButton />
                </div>
              </div>
              <OpenGraphPreview />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
