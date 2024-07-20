import React, { useState } from "react";

import ConfirmCancelModal from "../../components/cancel-sub-modal/ConfirmCancelModal";

const AboutUs: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCancelSubscription = () => {
    // Perform cancellation logic here
    console.log("Subscription cancelled");
    setModalOpen(false);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="mb-6 text-4xl font-bold">About Us</h1>
      <p className="mb-6 text-lg">
        We are a company dedicated to providing the best services to our
        customers.
      </p>
      <button
        onClick={handleOpenModal}
        className="hover:bg-primary-dark rounded-lg bg-primary px-6 py-2 text-white"
      >
        Cancel Subscription
      </button>

      <ConfirmCancelModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onCancel={handleCancelSubscription}
      />
    </div>
  );
};

export default AboutUs;
