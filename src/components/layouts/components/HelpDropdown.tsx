import React from "react";

import Archive from "../../../../public/archive.svg";
import Code from "../../../../public/code.svg";
import Contact from "../../../../public/contact.svg";
import Discover from "../../../../public/discover.svg";
import Document from "../../../../public/doc.svg";
import HelpSmall from "../../../../public/help-small.svg";
import Help from "../../../../public/help.svg";
import Quote from "../../../../public/quote.svg";
import Sales from "../../../../public/sales.svg";
import Smile from "../../../../public/smile.svg";

type HelpDropdownProperties = {
  isOpen: boolean;
  toggleDropdown: () => void;
};

const HelpDropdown: React.FC<HelpDropdownProperties> = ({
  isOpen,
  toggleDropdown,
}) => {
  return (
    <div className="relative">
      <div onClick={toggleDropdown} className="">
        <Help />
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-[250px] origin-top-right divide-y divide-gray-100 rounded-md bg-white pt-[15px] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-[6px] px-[15px]">
            <p className="text-sm text-black">what&rsquo;s New</p>
          </div>
          <div className="p-2">
            <div className="flex items-center gap-[8px] rounded-sm px-[9px] hover:bg-gray-100">
              <HelpSmall />
              <a href="#" className="block px-4 py-2 text-sm text-black">
                Help and documentation
              </a>
            </div>
            <div className="flex items-center gap-[8px] rounded-sm px-[9px] hover:bg-gray-100">
              <Code />
              <a href="#" className="block px-2 py-2 text-sm text-black">
                API Documentation
              </a>
            </div>
            <div className="flex items-center gap-[8px] rounded-sm px-[9px] hover:bg-gray-100">
              <Document />
              <a href="#" className="block px-4 py-2 text-sm text-black">
                Documentation
              </a>
            </div>
          </div>
          <div className="p-[6px] px-[15px]">
            <p className="text-sm text-black">Help</p>
          </div>
          <div className="p-2">
            <div className="flex items-center gap-[8px] rounded-sm px-[9px] hover:bg-gray-100">
              <Quote />
              <a href="#" className="block px-4 py-2 text-sm text-black">
                Ask a question
              </a>
            </div>
            <div className="flex items-center gap-[8px] rounded-sm px-[9px] hover:bg-gray-100">
              <Sales />
              <a href="#" className="block px-4 py-2 text-sm text-black">
                Contact Sales
              </a>
            </div>
            <div className="flex items-center gap-[8px] rounded-sm px-[9px] hover:bg-gray-100">
              <Archive />
              <a href="#" className="block px-4 py-2 text-sm text-black">
                Apps & Integration
              </a>
            </div>
            <div className="flex items-center gap-[8px] rounded-sm px-[9px] hover:bg-gray-100">
              <Smile />
              <a href="#" className="block px-4 py-2 text-sm text-black">
                Help & Support
              </a>
            </div>
          </div>
          <hr />
          <div className="p-2">
            <div className="flex items-center gap-[8px] rounded-sm px-[9px] hover:bg-gray-100">
              <Contact />
              <a href="#" className="block px-4 py-2 text-sm text-black">
                Contact Us
              </a>
            </div>
            <div className="flex items-center gap-[8px] rounded-sm px-[9px] hover:bg-gray-100">
              <Discover />
              <a href="#" className="block px-4 py-2 text-sm text-black">
                Community
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpDropdown;
