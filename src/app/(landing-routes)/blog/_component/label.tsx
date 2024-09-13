import { FC } from "react";

interface IProperties {
  label: string;
}
const BlogLabel: FC<IProperties> = ({ label }) => {
  return (
    <div className="flex items-center justify-center gap-1.5 rounded-[4px] bg-neutral-dark-1 px-2.5 py-1">
      <span className="h-2 w-2 rounded-full bg-white"></span>
      <span className="text-xs font-bold uppercase text-subtle">{label}</span>
    </div>
  );
};

export default BlogLabel;
