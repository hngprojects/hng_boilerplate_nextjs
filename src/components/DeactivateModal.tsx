import Image from "next/image"; // Import Image component for optimization
import { FC, useEffect, useRef } from "react";

// Define the props interface
interface DeactivateModalProperties {
  isOpen: boolean;
  onClose: () => void;
  onDeactivate: () => void;
}

const DeactivateModal: FC<DeactivateModalProperties> = ({
  isOpen,
  onClose,
  onDeactivate,
}) => {
  // Create a ref to the modal container
  const modalReference = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalReference.current &&
        !modalReference.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#FAFAFA] bg-opacity-50 z-50">
      <div
        ref={modalReference}
        role="dialog"
        className="bg-[#FFFFFF] rounded-md shadow-lg p-6 w-[424px] flex flex-col items-center relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#0A0A0A] text-2xl hover:text-gray-900"
        >
          &times;
        </button>
        <Image
          src="/logo.png"
          alt="Logo"
          width={48}
          height={48}
          className="mb-4"
        />{" "}
        {/* Use Image component */}
        <h1 className="text-xl font-semibold text-center text-[#0A0A0A]">
          Deactivate Microsoft Teams?
        </h1>
        <p className="text-sm font-normal mt-4 text-center">
          Enhance team communication and project management with Microsoft Teams
        </p>
        <button
          onClick={onDeactivate}
          className="w-full mt-6 px-4 py-2 bg-[#DC2626] text-white rounded-md hover:bg-red-700"
        >
          Deactivate
        </button>
      </div>
    </div>
  );
};

export default DeactivateModal;
