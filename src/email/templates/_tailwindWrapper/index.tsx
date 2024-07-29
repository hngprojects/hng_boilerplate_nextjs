import { Tailwind } from "@react-email/components";
import React from "react";

import TailwindConfig from "../../../../tailwind.config";

interface Properties {
  children: React.ReactNode;
}

export default function TailwindWrapper(properties: Properties) {
  return <Tailwind config={TailwindConfig}>{properties.children}</Tailwind>;
}
