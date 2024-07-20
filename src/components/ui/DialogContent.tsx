import React from "react";

const DialogContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="rounded-lg bg-white p-6">{children}</div>;
};

export default DialogContent;
