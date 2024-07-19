import React from "react";

import AdminLayout from "~/components/superadminlayout";

interface IProperties {
  children: React.ReactNode;
}

const layout: React.FC<IProperties> = ({ children }) => {
  return <AdminLayout>{children}</AdminLayout>;
};

export default layout;
