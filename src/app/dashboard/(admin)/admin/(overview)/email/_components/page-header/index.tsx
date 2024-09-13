import { FC } from "react";

interface IProperties {
  title: string;
  description: string;
}
const PageHeader: FC<IProperties> = ({ title, description }) => {
  return (
    <div className="mb-9">
      <h1
        data-testid="page-title"
        className="mb-3 text-2xl font-bold text-neutral-dark-2"
      >
        {title}
      </h1>
      <p data-testid="page-description" className="text-base text-[#8E8E93]">
        {description}
      </p>
    </div>
  );
};

export default PageHeader;
