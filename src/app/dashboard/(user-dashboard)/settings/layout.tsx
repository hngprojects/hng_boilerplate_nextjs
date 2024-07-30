import { FC, ReactNode } from "react";

import SettingsSidebar from "./_components/layout/sidebar";

interface Iproperties {
  children: ReactNode;
}
const layout: FC<Iproperties> = ({ children }) => {
  return (
    <div className="grid grid-cols-[auto_1fr]">
      <SettingsSidebar />
      <div className="mx-[24px] my-[30px] md:mx-[41px]">{children}</div>
    </div>
  );
};

export default layout;
