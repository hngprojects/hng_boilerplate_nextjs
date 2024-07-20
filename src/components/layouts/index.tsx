import React from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

interface IProperties {
  children: React.ReactNode;
}

const index: React.FC<IProperties> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default index;
