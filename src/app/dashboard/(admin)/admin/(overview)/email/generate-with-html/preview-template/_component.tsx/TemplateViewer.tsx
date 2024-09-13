import { usePathname } from "next/navigation";
import React, { ReactNode, useEffect, useRef, useState } from "react";

interface PreviewComponentProperties {
  template?: string | ReactNode;
  mode?: "preview" | "edit";
  onEdit?: (content: string) => void;
}

const TemplateViewer: React.FC<PreviewComponentProperties> = ({
  template,
  mode = "preview",
  onEdit,
}) => {
  const [content, setContent] = useState<string>(template as string);
  const contentReference = useRef<HTMLTextAreaElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof template === "string") {
      setContent(template);
    }
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
    if (newContent !== content) {
      setContent(newContent);
      onEdit?.(newContent);
    }
  };

  return (
    <div
      data-testid="html-template-viewer"
      className="rounded-[19px] border border-[#CBD5E180] p-4"
    >
      <div
        data-testid="scroll-container"
        className="relative overflow-y-auto rounded-lg lg:max-h-[719px]"
      >
        <div className="flex w-[98%] items-center justify-center overflow-auto rounded-lg border border-[#CBD5E1] bg-white p-[1rem]">
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
              className={
                pathname?.includes("preview-template") ? `my-[48px]` : undefined
              }
            >
              <div
                data-testid="template-content"
                dangerouslySetInnerHTML={{ __html: content }}
                className="h-full w-fit"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TemplateViewer;
