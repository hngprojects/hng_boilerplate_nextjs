"use client";

import React, { useRef, useState } from "react";

import Toolbar from "../toolbar/toolbar";

interface BlockProperties {
  id: string;
  content: string;
  children?: React.ReactNode;
}

const ReusableTemplateEditorBlock: React.FC<BlockProperties> = ({
  id,
  content,
  children,
}) => {
  const [isActive, setIsActive] = useState(false);
  const blockReference = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsActive(true);
  };

  const handleBlur = (event: React.FocusEvent) => {
    if (!blockReference.current?.contains(event.relatedTarget as Node)) {
      setIsActive(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "50%",
        maxHeight: "100%",
      }}
      ref={blockReference}
      onClick={handleClick}
      onBlur={handleBlur}
      className={`relative mb-4 cursor-pointer rounded border px-12 py-20 transition-all duration-300 ${isActive ? "border-primary shadow-xl" : "border-none shadow-md"} `}
      tabIndex={0}
    >
      <div dangerouslySetInnerHTML={{ __html: content }} />
      {children}
      {isActive && (
        <div className="absolute left-full top-0 ml-2">
          <Toolbar blockId={id} content={content} />
        </div>
      )}
    </div>
  );
};

export default ReusableTemplateEditorBlock;
