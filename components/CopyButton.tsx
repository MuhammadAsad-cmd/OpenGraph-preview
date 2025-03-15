import CopyIcon from "@/icons/CopyIcon";
import CopytoClip from "@/icons/CopytoClip";
import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { dracula } from "@uiw/codemirror-theme-dracula";

const CopyButton = ({metaData}:any) => {
  const code = `<!-- HTML Meta Tags -->
  <title>${metaData?.title}</title>
  <meta name="description" content="${metaData?.description}">
  
  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="${metaData?.ogUrl}">
  <meta property="og:type" content="${metaData?.ogType}">
  <meta property="og:title" content="${metaData?.ogTitle}">
  <meta property="og:description" content="${metaData?.ogDescription}">
  <meta property="og:image" content="${metaData?.ogImage}">
  
  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="${metaData?.twitterCard}">
  <meta property="twitter:domain" content="${metaData?.twitterDomain}">
  <meta property="twitter:url" content="${metaData?.twitterUrl}">
  <meta name="twitter:title" content="${metaData?.twitterTitle}">
  <meta name="twitter:description" content="${metaData?.twitterDescription}">
  <meta name="twitter:image" content="${metaData?.twitterImage}">
  
  <!-- Meta Tags Generated via https://open-graph-preview-gamma.vercel.app -->`;
  
  return (
    <>
      <div className="rounded-2xl border border-solid border-gray-200 bg-white px-4 py-6 text-left shadow-sm transition duration-200 ease-in-out hover:shadow-lg focus:shadow-lg sm:px-6 sm:py-8">
        <h2 className="mb-2 flex gap-2 text-xl leading-6 font-extrabold text-[#35199d]">
          Copy
          <CopyIcon />
        </h2>
        <p className="mb-4 max-w-2xl text-base leading-5 text-stone-700">
          Copy the HTML meta tags for your site. Insert these tags in your
          site's head section for improved social sharing and SEO.
        </p>
        <div className="relative mb-5 flex cursor-pointer flex-col items-center rounded-lg border border-solid border-yellow-300 bg-yellow-50 px-6 py-4 text-center shadow-lg transition-all duration-150 ease-in-out hover:shadow-md md:flex-row md:text-left">
          <div className="relative">
            <div className="ml-0">
              <h3 className="mt-0 text-base font-medium text-yellow-800">
                NEW: Automate Your Open Graph Images{" "}
              </h3>
              <span className="block text-yellow-700">
                Efficiently generate stylish Open Graph images with our tool.
                Choose a template and instantly create consistent, engaging
                visuals for social media!
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 text-sm">
          <div className="w-full overflow-auto rounded-md bg-[#2a2734] p-4">
            <pre className="bg-[#2A2734] text-[#9A86FD]">
            
    
            </pre>
            <div className="w-full max-w-2xl mx-auto mt-5 shadow-lg rounded-md">
      <CodeMirror
        value={code}
        extensions={[html()]}
        theme={dracula} // Dark theme
        readOnly={true} // Makes it non-editable
        basicSetup={{
          lineNumbers: true,
          highlightActiveLine: false,
        }}
      />
    </div>
          </div>
          <div className="mt-4">
            {/* <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none">
             <CopiedIcon/>
              <span>Copied</span>
            </button> */}
            <button onClick={(e)=>window.navigator.clipboard.writeText(code)} className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none">
              <CopytoClip />
              <span>Copy To Clipboard</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CopyButton;
