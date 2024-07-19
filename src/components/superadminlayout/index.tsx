import React from "react";

import AdminNavbar from "./navbar/AdminNavbar";

interface IProperties {
  children: React.ReactNode;
}
const AdminLayout: React.FC<IProperties> = ({ children }) => {
  return (
    <div>
      <AdminNavbar />
      {children}
    </div>
  );
};

export default AdminLayout;
