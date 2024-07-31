import { Instagram, Linkedin } from "lucide-react";
import React from "react";

const EditFooter: React.FC = () => {
  return (
    <div className="bg-gray-50 p-6 text-gray-800 lg:w-4/5">
      <div className="mb-4 flex justify-center space-x-4 text-gray-600">
        <button className="hover:text-gray-500">
          <Linkedin size={24} />
        </button>
        <button className="hover:text-gray-500">
          <Instagram size={24} />
        </button>
        <button className="hover:text-gray-500">
          <Linkedin size={24} />
        </button>
        <button className="hover:text-gray-500">
          <Linkedin size={24} />
        </button>
        <button className="hover:text-gray-500">
          <Linkedin size={24} />
        </button>
      </div>
      <div className="py-10">
        <p className="border-b border-dashed border-gray-300 pb-12 text-center text-sm text-gray-500 md:text-left">
          Thank you for choosing Boilerplate. Need help?
          <a href="#" className="ml-2 text-black underline">
            Contact our customer support
          </a>
        </p>
        <p className="pt-10 text-center text-sm text-gray-600 md:text-left">
          You are receiving this email because you signed up at Boilerplate.com.
          Want to change how you receive these emails?
        </p>
        <p className="mt-10 text-center text-sm text-gray-600 md:text-left">
          You can{" "}
          <a href="#" className="font-semibold text-black">
            update your preferences
          </a>{" "}
          or{" "}
          <a href="#" className="font-semibold text-black">
            unsubscribe from this list
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default EditFooter;
