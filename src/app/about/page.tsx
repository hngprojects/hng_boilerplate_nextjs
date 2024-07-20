"use client";

import React, { useState } from "react";

import ConfirmCancelModal from "../../components/cancel-sub-modal/ConfirmCancelModal";
import { Button } from "../about/button";

const AboutPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleCancelSubscription = () => {
    // Add your cancel subscription logic here
    console.log("Subscription cancelled");
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">About Us</h1>
      <p className="mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        scelerisque leo at lorem vestibulum, sit amet auctor metus venenatis.
        Aenean sit amet urna a libero dapibus sollicitudin.
      </p>
      <Button onClick={handleModalOpen} className="mt-4">
        Cancel Subscription
      </Button>
      <ConfirmCancelModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onCancel={handleCancelSubscription}
      />
    </div>
  );
};

export default AboutPage;
