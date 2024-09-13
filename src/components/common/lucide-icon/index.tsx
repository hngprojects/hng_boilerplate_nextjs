import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import dynamic from "next/dynamic";

interface ILucideIcon {
  name: keyof typeof dynamicIconImports;
}

export type LucideIconName = ILucideIcon["name"];

interface IconProperties extends Omit<LucideProps, "name">, ILucideIcon {}

const Icon = ({ name, ...properties }: IconProperties) => {
  const LucideIcon = dynamic(dynamicIconImports[name]);

  return <LucideIcon {...properties} />;
};

export default Icon;
