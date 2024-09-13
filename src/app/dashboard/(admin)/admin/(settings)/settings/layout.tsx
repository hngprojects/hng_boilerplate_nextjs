import { FC, ReactNode } from "react";

import SettingsSidebar from "./_components/layout/sidebar";

interface Iproperties {
  children: ReactNode;
}
const layout: FC<Iproperties> = ({ children }) => {
  return (
    <div className="grid grid-cols-[auto_1fr]">
      <SettingsSidebar />
      <div className="mt-7">{children}</div>
    </div>
  );
};

export default layout;
