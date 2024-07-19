import React from "react";

interface IProperties {
  children: React.ReactNode;
}

const layout: React.FC<IProperties> = ({ children }) => {
  return <body>{children}</body>;
};

export default layout;
