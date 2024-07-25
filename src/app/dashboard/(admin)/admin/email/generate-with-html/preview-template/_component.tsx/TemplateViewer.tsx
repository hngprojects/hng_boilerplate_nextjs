import React, { useEffect, useRef, useState } from "react";

import { templateOne, templateTwo } from "./template-example";

interface PreviewComponentProperties {
  template?: string;
  mode?: "preview" | "edit";
  onEdit?: (content: string) => void;
}

const TemplateViewer: React.FC<PreviewComponentProperties> = ({
  template = templateTwo,
  mode = "preview",
  onEdit,
}) => {
  const [content, setContent] = useState<string>(template);
  const contentReference = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setContent(template);
  }, [template]);

  useEffect(() => {
    if (mode === "edit" && contentReference.current) {
      contentReference.current.value = content;
    }
  }, [mode, content]);

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const newContent = event.target.value;
    setContent(newContent);
    onEdit?.(newContent);
  };

  return (
    <div
      data-testid="html-template-viewer"
      className="h-full rounded-[19px] border border-[#CBD5E180] p-4"
    >
      <div
        data-testid="scroll-container"
        className="relative overflow-y-auto rounded-lg"
      >
        <div className="flex h-[700px] w-[98%] items-center justify-center overflow-auto rounded-lg border border-[#CBD5E1] bg-white">
          {mode === "edit" ? (
            <textarea
              style={{ scrollbarWidth: "none" }}
              ref={contentReference}
              value={content}
              onChange={handleContentChange}
              data-testid="template-content"
              className="h-[70vh] w-full resize-none overflow-auto whitespace-pre break-words rounded-lg border-[2px] border-primary p-4"
            />
          ) : (
            <div
              data-testid="template-content"
              dangerouslySetInnerHTML={{ __html: content }}
              className="h-full w-fit"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TemplateViewer;
