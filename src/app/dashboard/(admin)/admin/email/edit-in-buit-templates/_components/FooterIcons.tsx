"use client";

import { useEffect, useState } from "react";

interface FooterIconsProperties {
  index: number;
  handleParagraph: (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    index: number,
  ) => void;
  paragraph: string;
}

const FooterIcons: React.FC<FooterIconsProperties> = ({
  handleParagraph,
  paragraph,
  index,
}) => {
  const [localParagraph, setLocalParagraph] = useState<string>(paragraph);

  useEffect(() => {
    setLocalParagraph(paragraph);
  }, [paragraph]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    handleParagraph(event, index);
    setLocalParagraph(value);
  };

  return (
    <div className="mt-2 h-auto min-h-96 w-full rounded-sm bg-white p-6 hover:border hover:border-orange-500 lg:w-4/5">
      <textarea
        value={localParagraph}
        onChange={handleChange}
        className="h-auto min-h-96 w-full border-none outline-none focus:ring-0"
      />
    </div>
  );
};

export default FooterIcons;
