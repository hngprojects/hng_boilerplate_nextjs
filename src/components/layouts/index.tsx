import React from "react";

import Footer from "./footer";
import Navbar from "./navbar";

interface IProperties {
  children: React.ReactNode;
}

const index: React.FC<IProperties> = ({ children }) => {
  return (
    <div className="flex min-h-[100dvh] flex-col justify-between">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default index;
