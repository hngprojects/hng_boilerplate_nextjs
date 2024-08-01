"use client";

import { EllipsisVertical, Eye, Redo, Undo } from "lucide-react";

import { Button } from "~/components/common/common-button";
import PageHeader from "../../_components/page-header";

export default function page() {
  return (
    <div>
      <div className="flex flex-col items-center justify-between sm:flex-row sm:gap-6">
        <PageHeader
          title="Edit template"
          description="Paste your HTML code below to generate your email template."
        />
        <div className="w-full sm:max-w-[40%]">
          <div className="flex w-full items-center justify-between">
            <button title="Preview">
              <Eye color="#141414" />
            </button>
            <button title="Undo">
              <Undo color="#141414" />
            </button>
            <button title="Redo">
              <Redo color="#141414" />
            </button>
            <Button className="bg-primary">Send</Button>
            <button>
              <EllipsisVertical color="#141414" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 flex items-center sm:mt-20 md:ml-4 lg:mb-[213px] lg:ml-[89px] lg:mt-[156px]">
        <div className="w-full">
          {/* YOUR EDIT TEMPLATE COMPONENTS GOES HERE ACCORRDING  */}
          {/* CREATE A FLEX CONTAINER TO HOUSE THE TEMPLATE AREA AND THE SIDEBAR ICONS  */}
        </div>
      </div>
    </div>
  );
}
