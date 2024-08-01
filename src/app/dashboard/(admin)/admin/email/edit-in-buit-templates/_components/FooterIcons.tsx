"use client";

import { useState } from "react";

interface SelectFooterProperties {
  index: number;
  handleParagraph: (
    event: React.ChangeEvent<HTMLInputElement>,
    ind: number,
  ) => void;
  paragraph: string;
}

const FooterIcons: React.FC<SelectFooterProperties> = ({
  handleParagraph,
  paragraph,
  index,
}) => {
  const [_paragraph_, setParagraph] = useState<string | undefined>(paragraph);
  return (
    <div className="mt-2 h-auto min-h-96 w-full rounded-sm bg-white p-6 hover:border hover:border-orange-500 lg:w-4/5">
      <textarea
        value={_paragraph_}
        onChange={(event_) => {
          const value = handleParagraph(event_, index);
          setParagraph((priv) => value);
        }}
        className="h-auto min-h-96 w-full border-none outline-none focus:ring-0"
      />
    </div>
  );
};

export default FooterIcons;
