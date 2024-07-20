import { Tailwind } from "@react-email/components";
import React from "react";

import TailwindConfig from "../../../../tailwind.config";

interface Properties {
  children: React.ReactNode;
}

export default function TailwindWrapper(properties: Properties) {
  const { children } = properties;

  return <Tailwind config={TailwindConfig}>{children}</Tailwind>;
}
