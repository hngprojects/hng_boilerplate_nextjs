import { FC, ReactNode } from "react";

import { Breadcrumb } from "~/components/common/breadcrumb";

interface IProperties {
  children: ReactNode;
}
const layout: FC<IProperties> = ({ children }) => {
  return (
    <div>
      <div className="mb-6">
        <Breadcrumb />
      </div>
      {children}
    </div>
  );
};

export default layout;
