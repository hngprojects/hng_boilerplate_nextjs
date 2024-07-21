"use client";

import React, { createContext, useContext, useState } from "react";

interface Block {
  id: string;
  content: string;
}

interface EditorContextType {
  blocks: Block[];
  moveBlockUp: (id: string) => void;
  moveBlockDown: (id: string) => void;
  deleteBlock: (id: string) => void;
}

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export const EditorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [blocks, setBlocks] = useState<Block[]>([]);

  const moveBlockUp = (id: string) => {
    setBlocks((previousBlocks) => {
      const index = previousBlocks.findIndex((block) => block.id === id);
      if (index > 0) {
        const newBlocks = [...previousBlocks];
        [newBlocks[index - 1], newBlocks[index]] = [
          newBlocks[index],
          newBlocks[index - 1],
        ];
        return newBlocks;
      }
      return previousBlocks;
    });
  };

  const moveBlockDown = (id: string) => {
    setBlocks((previousBlocks) => {
      const index = previousBlocks.findIndex((block) => block.id === id);
      if (index < previousBlocks.length - 1) {
        const newBlocks = [...previousBlocks];
        [newBlocks[index], newBlocks[index + 1]] = [
          newBlocks[index + 1],
          newBlocks[index],
        ];
        return newBlocks;
      }
      return previousBlocks;
    });
  };

  const deleteBlock = (id: string) => {
    setBlocks((previousBlocks) =>
      previousBlocks.filter((block) => block.id !== id),
    );
  };

  return (
    <EditorContext.Provider
      value={{ blocks, moveBlockUp, moveBlockDown, deleteBlock }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = () => {
  const context = useContext(EditorContext);
  if (context === undefined) {
    throw new Error("useEditorContext must be used within an EditorProvider");
  }
  return context;
};
