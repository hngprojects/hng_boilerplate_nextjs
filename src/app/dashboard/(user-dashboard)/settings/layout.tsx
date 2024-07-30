import { FC, ReactNode } from "react";

import SettingsSidebar from "./_components/layout/sidebar";

interface Iproperties {
  children: ReactNode;
}
const layout: FC<Iproperties> = ({ children }) => {
  return (
    <div className="grid grid-cols-[auto_1fr]">
      <SettingsSidebar />
      <div className="sm:mx-[41px] my-[30px] 2xl:mx-auto 2xl:max-w-[975px]">
        {children}
      </div>
    </div>
  );
};

export default layout;
