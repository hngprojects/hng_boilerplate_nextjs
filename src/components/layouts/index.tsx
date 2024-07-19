import React from "react";

import Navbar from "./Navbar";

interface IProperties {
  children: React.ReactNode;
}
const Layout: React.FC<IProperties> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
