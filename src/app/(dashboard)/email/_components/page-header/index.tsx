import { FC } from "react";

interface IProperties {
  title: string;
  description: string;
}
const PageHeader: FC<IProperties> = ({ title, description }) => {
  return (
    <div className="mb-9">
      <h1 className="mb-3 text-2xl font-bold text-neutral-dark-2">{title}</h1>
      <p className="text-base text-neutral-dark-2">{description}</p>
    </div>
  );
};

export default PageHeader;
