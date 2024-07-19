import React from "react";

import AdminLayout from "~/components/superadminlayout";

interface IProperties {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}

const layout: React.FC<IProperties> = ({ children }) => {
  return <AdminLayout>{children}</AdminLayout>;
};

export default layout;
