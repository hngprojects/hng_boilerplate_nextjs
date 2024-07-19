"use client";

import { useState } from "react";

import DeactivateModal from "../components/DeactivateModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDeactivate = () => {
    // Handle the deactivation logic here
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleOpenModal}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Deactivate Microsoft Teams
      </button>
      <DeactivateModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onDeactivate={handleDeactivate}
      />
    </div>
  );
}
