import CustomButton from "../../common/Button/button";

import "./modal.css";

const ErrorModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">
            Error: Unable to Process Payment!
          </h2>
          <p className="mt-2 max-w-lg">
            We apologize, but there seems to be an issue processing your upgrade
            to the Basic plan. Don&apos;t worry, your current plan remains
            active.
          </p>
        </div>
        <div className="flex items-end justify-end" onClick={onClose}>
          <CustomButton variant="primary">Try Again</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
