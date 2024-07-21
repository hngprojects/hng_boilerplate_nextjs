"use client";

import { useState } from "react";

import Pagination from "../Pagination/Pagination";
import TemplateListItem from "../TemplateListItem/TemplateListItem";

interface PaginatedTemplateListProperties {
  templates: {
    id: number;
    name: string;
    image: string;
  }[];
  onPreview: (id: number) => void;
  itemsPerPage: number;
  activePreview: number;
}

const PaginatedTemplateList = ({
  templates,
  onPreview,
  itemsPerPage,
  activePreview,
}: PaginatedTemplateListProperties) => {
  const [currentPage, setCurrentPage] = useState(1);

  const validTemplates = Array.isArray(templates) ? templates : [];
  const totalPages = Math.ceil(validTemplates.length / itemsPerPage);

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const currentTemplates = validTemplates.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full border-collapse">
        <tbody>
          {currentTemplates.length > 0 ? (
            currentTemplates.map((template) => (
              <TemplateListItem
                key={template.id}
                template={template}
                onPreview={onPreview}
                activePreview={template.id === activePreview}
              />
            ))
          ) : (
            <tr>
              <td colSpan={3}>No templates available</td>
            </tr>
          )}
        </tbody>
      </table>
      {validTemplates.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      )}
    </div>
  );
};

export default PaginatedTemplateList;
