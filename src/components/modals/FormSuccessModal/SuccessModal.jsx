import CustomButton from "../../common/Button/button";

import "./modalS.css";

const SuccessModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">
            Success! You&apos;ve Upgraded Your Plan!
          </h2>
          <p className="mt-2 max-w-lg">
            Congratulations! You&apos;ve successfully upgraded to Basic This
            means you now have access to all the powerful features that will
            help you manage your team effectively
          </p>
        </div>
        <div className="flex items-end justify-end" onClick={onClose}>
          <CustomButton variant="primary">Done</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
