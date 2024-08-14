import { Tailwind } from "@react-email/components";
import React from "react";

import { emailTemplateConfig } from "~/email/config/tailwind.config";

interface Properties {
  children: React.ReactNode;
}

export default function TailwindWrapper(properties: Properties) {
  return (
    <Tailwind config={emailTemplateConfig}>{properties.children}</Tailwind>
  );
}
