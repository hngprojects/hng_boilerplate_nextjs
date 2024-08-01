import { ArrowDown, ArrowUp, Copy, Delete, Plus } from "lucide-react";
import React from "react";

const SideEditNav: React.FC = () => {
  return (
    <nav className="flex-1 space-y-1">
      <button className="flex items-center rounded-md border border-slate-100 p-3 text-left hover:bg-gray-200">
        <ArrowUp className="h-3 w-3" />
      </button>
      <button className="flex items-center rounded-md border border-slate-100 p-3 text-left hover:bg-gray-200">
        <ArrowDown className="h-3 w-3" />
      </button>
      <button className="flex items-center rounded-md border border-slate-100 p-3 text-left hover:bg-gray-200">
        <Copy className="h-3 w-3" />
      </button>
      <button className="flex items-center rounded-md border border-slate-100 p-3 text-left hover:bg-gray-200">
        <Delete className="h-3 w-3" />
      </button>
      <button className="flex items-center rounded-md border border-slate-100 p-3 text-left hover:bg-gray-200">
        <Plus className="h-3 w-3" />
      </button>
    </nav>
  );
};

export default SideEditNav;
