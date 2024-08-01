import { ArrowDown, ArrowUp, Copy, Delete, Plus } from "lucide-react";
import React from "react";

interface SideEditNavProperties {
  onMoveUp: () => void;
  onMoveDown: () => void;
  onCopy: () => void;
  onDelete: () => void;
  onAdd: () => void;
}

const SideEditNav: React.FC<SideEditNavProperties> = ({
  onMoveUp,
  onMoveDown,
  onCopy,
  onDelete,
//   onAdd,
}) => {
  return (
    <nav className="flex-1 space-y-1">
      <button
        onClick={onMoveUp}
        className="flex items-center rounded-md border border-slate-100 p-3 text-left hover:bg-gray-200"
      >
        <ArrowUp className="h-3 w-3" />
      </button>
      <button
        onClick={onMoveDown}
        className="flex items-center rounded-md border border-slate-100 p-3 text-left hover:bg-gray-200"
      >
        <ArrowDown className="h-3 w-3" />
      </button>
      <button
        onClick={onCopy}
        className="flex items-center rounded-md border border-slate-100 p-3 text-left hover:bg-gray-200"
      >
        <Copy className="h-3 w-3" />
      </button>
      <button
        onClick={onDelete}
        className="flex items-center rounded-md border border-slate-100 p-3 text-left hover:bg-gray-200"
      >
        <Delete className="h-3 w-3" />
      </button>
      {/* <button
        onClick={onAdd}
        className="flex items-center rounded-md border border-slate-100 p-3 text-left hover:bg-gray-200"
      >
        <Plus className="h-3 w-3" />
      </button> */}
    </nav>
  );
};

export default SideEditNav;
