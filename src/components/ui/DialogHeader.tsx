import React from "react";

const DialogHeader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="mb-4">{children}</div>;
};

export default DialogHeader;
