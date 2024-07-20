import React from 'react';
import Help from "../../../../public/help.svg"
import HelpSmall from "../../../../public/help-small.svg"
import Code from "../../../../public/code.svg"
import Doc from "../../../../public/doc.svg"
import Quote from "../../../../public/quote.svg"
import Sales from "../../../../public/sales.svg"
import Archive from "../../../../public/archive.svg"
import Smile from "../../../../public/smile.svg"
import Contact from "../../../../public/contact.svg"
import Discover from "../../../../public/discover.svg"




type HelpDropdownProps = {
    isOpen: boolean;
    toggleDropdown: () => void;
};

const HelpDropdown: React.FC<HelpDropdownProps> = ({ isOpen, toggleDropdown }) => {


    return (
        <div className="relative">
            <div
                onClick={toggleDropdown}
                className="">
                <Help />
            </div>

            {isOpen && (
                <div className="absolute w-[250px] pt-[15px] right-0 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="p-[6px] px-[15px]">
                        <p className="text-sm text-black">what's New</p>
                    </div>
                    <div className="p-2">
                        <div className="flex gap-[8px] hover:bg-gray-100 rounded-sm  px-[9px] items-center">
                            <HelpSmall />
                            <a href="#" className="block px-4 py-2 text-sm text-black ">Help and documentation</a>
                        </div>
                        <div className="flex gap-[8px] hover:bg-gray-100 rounded-sm  px-[9px] items-center">
                            <Code />
                            <a href="#" className="block px-2 py-2 text-sm text-black ">API Documentation</a>
                        </div>
                        <div className="flex gap-[8px] hover:bg-gray-100 rounded-sm  px-[9px] items-center">
                            <Doc />
                            <a href="#" className="block px-4 py-2 text-sm text-black ">Documentation</a>
                        </div>
                    </div>
                    <div className="p-[6px] px-[15px]">
                        <p className="text-sm text-black">Help</p>
                    </div>
                    <div className="p-2">
                        <div className="flex gap-[8px] hover:bg-gray-100 rounded-sm  px-[9px] items-center">
                            <Quote />
                            <a href="#" className="block px-4 py-2 text-sm text-black ">Ask a question</a>
                        </div>
                        <div className="flex gap-[8px] hover:bg-gray-100 rounded-sm  px-[9px] items-center">
                            <Sales />
                            <a href="#" className="block px-4 py-2 text-sm text-black ">Contact Sales</a>
                        </div>
                        <div className="flex gap-[8px] hover:bg-gray-100 rounded-sm  px-[9px] items-center">
                            <Archive />
                            <a href="#" className="block px-4 py-2 text-sm text-black ">Apps & Integration</a>
                        </div>
                        <div className="flex gap-[8px] hover:bg-gray-100 rounded-sm  px-[9px] items-center">
                            <Smile />
                            <a href="#" className="block px-4 py-2 text-sm text-black ">Help & Support</a>
                        </div>
                    </div>
                    <hr />
                    <div className="p-2">
                        <div className="flex gap-[8px] hover:bg-gray-100 rounded-sm  px-[9px] items-center">
                            <Contact />
                            <a href="#" className="block px-4 py-2 text-sm text-black ">Contact Us</a>
                        </div>
                        <div className="flex gap-[8px] hover:bg-gray-100 rounded-sm  px-[9px] items-center">
                            <Discover />
                            <a href="#" className="block px-4 py-2 text-sm text-black ">Community</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HelpDropdown;
