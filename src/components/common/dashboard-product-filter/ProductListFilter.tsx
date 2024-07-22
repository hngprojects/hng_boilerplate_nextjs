import { Check, Filter } from "lucide-react";
import { FC, KeyboardEvent, useRef, useState } from "react";

import { Button } from "~/components/ui/button";

export interface FilterType {
  label: string;
  queryParameter: string;
  isActive: boolean;
}

interface ProductListFilterProperties {
  filters: FilterType[];
  handleFilterActiveState: (label: string) => void;
}

const ProductListFilter: FC<ProductListFilterProperties> = ({
  filters,
  handleFilterActiveState,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonReference = useRef<HTMLButtonElement>(null);
  const menuReference = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((previous) => !previous);
  };

  // handle escape and keydown keys events on the dropdown button
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
      buttonReference.current?.focus();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      }
      const menu = menuReference.current;
      if (menu) {
        const firstItem = menu.querySelector('[data-testid^="filter-"]');
        (firstItem as HTMLElement)?.focus();
      }
    }
  };

  // handle accessibility interactions for keyboard navigation on the menu items (filter items)
  const handleMenuItemKeyDown = (event: KeyboardEvent, index: number) => {
    switch (event.key) {
      case "ArrowDown": {
        event.preventDefault();
        const nextItem =
          menuReference.current?.querySelectorAll('[role="option"]')[index + 1];
        if (nextItem) {
          (nextItem as HTMLElement).focus();
        }
        break;
      }
      case "ArrowUp": {
        event.preventDefault();
        const previousItem =
          menuReference.current?.querySelectorAll('[role="option"]')[index - 1];
        if (previousItem) {
          (previousItem as HTMLElement).focus();
        } else {
          buttonReference.current?.focus();
        }
        break;
      }
      case "Enter": {
        event.preventDefault();
        const item =
          menuReference.current?.querySelectorAll('[role="option"]')[index];
        (item as HTMLElement)?.click();
        break;
      }
      case "Escape": {
        event.preventDefault();
        setIsOpen(false);
        buttonReference.current?.focus();
      }
    }
  };

  return (
    <div className="relative">
      <Button
        ref={buttonReference}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        aria-haspopup="true"
        aria-expanded={isOpen}
        variant="outline"
        className="flex items-center gap-x-2 bg-transparent text-sm"
      >
        <Filter />
        <span>Filter</span>
      </Button>

      {isOpen && (
        // drop down content
        <div
          ref={menuReference}
          role="listbox"
          aria-label="Filter options"
          data-testid="filter-dropdown"
          className="absolute right-0 z-10 mt-2 min-w-[185px] rounded-md border border-border bg-card p-1 shadow-md"
        >
          <div className="px-2 py-2">
            <p className="text-sm font-semibold text-neutral-dark-2">
              Filter by
            </p>
          </div>

          {/* filter items (menu items) */}
          <div className="border-t border-border" />

          {filters.map((filter, index) => (
            <button
              key={filter.label}
              data-testid={`filter-${filter.label}`}
              role="option"
              tabIndex={-1}
              aria-selected={filter.isActive}
              className="flex w-full cursor-pointer items-center gap-2 rounded bg-card px-1.5 py-2 hover:bg-subtle"
              onClick={() => {
                handleFilterActiveState(filter.label);
                setIsOpen(false);
              }}
              onKeyDown={(event) => handleMenuItemKeyDown(event, index)}
            >
              <div className="w-4">
                {filter.isActive && (
                  <Check data-testid="check-icon" className="w-4" />
                )}
              </div>
              <span className="text-sm text-neutral-dark-1">
                {filter.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListFilter;
