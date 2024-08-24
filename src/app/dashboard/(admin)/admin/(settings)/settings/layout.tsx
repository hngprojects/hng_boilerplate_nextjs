import { FC, ReactNode } from "react";

import SettingsSidebar from "./_components/layout/sidebar";

interface Iproperties {
  children: ReactNode;
}
const layout: FC<Iproperties> = ({ children }) => {
  return (
    <div className="grid h-screen grid-cols-[auto_1fr]">
      <SettingsSidebar />
      <div className="hide_scrollbar mt-7 h-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default layout;
