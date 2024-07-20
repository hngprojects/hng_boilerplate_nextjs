import React from "react";

const DialogDescription: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <p className="text-sm text-gray-600">{children}</p>;
};

export default DialogDescription;
