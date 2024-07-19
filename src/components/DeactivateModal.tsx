import { FC, useEffect, useRef } from "react";

// Define the props interface
interface DeactivateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDeactivate: () => void;
}

const DeactivateModal: FC<DeactivateModalProps> = ({
  isOpen,
  onClose,
  onDeactivate,
}) => {
  // Create a ref to the modal container
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Define a function to handle clicks outside the modal
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    // Add event listener if the modal is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up event listener on component unmount or when `isOpen` changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Do not render anything if modal is not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#FAFAFA] bg-opacity-50 z-50">
      <div
        ref={modalRef}
        role="dialog"
        className="bg-[#FFFFFF] rounded-md shadow-lg p-6 w-[424px] flex flex-col items-center relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#0A0A0A] text-2xl hover:text-gray-900"
        >
          &times;
        </button>
        <img src="/logo.png" alt="Logo" className="mb-4" />
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
