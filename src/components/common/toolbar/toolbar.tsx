import * as ToolbarPrimitive from "@radix-ui/react-toolbar";
import { ArrowDown, ArrowUp, Copy, LucideDelete } from "lucide-react";
import React from "react";

import { useEditorContext } from "~/components/common/context/editor-context";

interface ToolbarProperties {
  blockId: string;
  content: string;
}

const Toolbar: React.FC<ToolbarProperties> = ({ blockId, content }) => {
  const { moveBlockUp, moveBlockDown, deleteBlock } = useEditorContext();

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
  };

  const buttonClass =
    "p-2 bg-white text-gray-700 rounded shadow-md transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300";

  return (
    <ToolbarPrimitive.Root className="flex flex-col gap-2 bg-transparent p-2">
      <ToolbarPrimitive.Button
        className={buttonClass}
        onClick={() => moveBlockUp(blockId)}
      >
        <ArrowUp size={16} />
      </ToolbarPrimitive.Button>
      <ToolbarPrimitive.Button
        className={buttonClass}
        onClick={() => moveBlockDown(blockId)}
      >
        <ArrowDown size={16} />
      </ToolbarPrimitive.Button>
      <ToolbarPrimitive.Button className={buttonClass} onClick={handleCopy}>
        <Copy size={16} />
      </ToolbarPrimitive.Button>
      <ToolbarPrimitive.Button
        className={buttonClass}
        onClick={() => deleteBlock(blockId)}
      >
        <LucideDelete size={16} />
      </ToolbarPrimitive.Button>
    </ToolbarPrimitive.Root>
  );
};

export default Toolbar;
