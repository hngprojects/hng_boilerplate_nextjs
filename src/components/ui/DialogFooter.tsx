import React from "react";

const DialogFooter: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="mt-4 flex justify-end">{children}</div>;
};

export default DialogFooter;
