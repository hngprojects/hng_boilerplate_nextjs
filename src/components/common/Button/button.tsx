import { LoaderCircle, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Button } from "~/components/common/Button";

type Variant =
  | "default"
  | "primary"
  | "destructive"
  | "subtle"
  | "loading"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";
type Size = "default" | "sm" | "lg" | "link" | "icon" | "circle";

interface ButtonProperties {
  /** Specifies the button style variant */
  variant?: Variant;
  /** Specifies the size of the button */
  size?: Size;
  /** Icon to be displayed inside the button */
  icon?: React.ReactNode;
  /** Text or elements to be displayed inside the button */
  children?: React.ReactNode;
  /** Indicates if the button is in a loading state */
  isLoading?: boolean;
  /** Indicates if the button is icon only */
  isIconOnly?: boolean;
  /** Indicates if the left icon is visible */
  isLeftIconVisible?: boolean;
  /** Indicates if the right icon is visible */
  isRightIconVisible?: boolean;
  /** Disables the button if true */
  isDisabled?: boolean;
  /** Accessibility label for the button */
  ariaLabel?: string;
  /** Href to link button to a URL or route */
  href?: string;
  /** Class for custom styling */
  className?: string;
  /** Click event handler for the button */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * CustomButton component to render a button with various styles and states.
 *
 * @param {ButtonProps} props - Properties to configure the button.
 * @returns {JSX.Element} The rendered button component.
 */
const CustomButton: React.FC<ButtonProperties> = ({
  variant,
  size,
  children,
  isLoading = false,
  isLeftIconVisible = false,
  isRightIconVisible = false,
  icon,
  isDisabled = false,
  isIconOnly = false,
  ariaLabel,
  href,
  className,
  onClick,
}) => {
  const modifiedIcon = icon ? (
    React.cloneElement(icon as React.ReactElement, {
      className: "w-[1rem] h-[1rem]",
      "data-testid": "icon",
    })
  ) : (
    <Plus className="h-[1rem] w-[1rem]" data-testid="icon" />
  );

  const buttonContent = (
    <>
      {isLeftIconVisible && !isLoading && modifiedIcon}
      {isLoading && (
        <LoaderCircle
          className="h-[1rem] w-[1rem] animate-spin"
          data-testid="loading-spinner"
        />
      )}
      {isIconOnly && !isLoading && modifiedIcon}
      {!isIconOnly && children}
      {!isIconOnly && !children && isLoading && "Loading"}
      {isRightIconVisible && !isLoading && modifiedIcon}
    </>
  );

  if (href) {
    const isExternal = /^https?:\/\//.test(href);

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          <Button
            variant={variant}
            size={size}
            disabled={isDisabled}
            aria-label={ariaLabel}
            className={className}
            onClick={onClick}
            role="button"
          >
            {buttonContent}
          </Button>
        </a>
      );
    }

    return (
      <Link href={href} passHref aria-label={ariaLabel}>
        <Button
          variant={variant}
          size={size}
          disabled={isDisabled}
          aria-label={ariaLabel}
          className={className}
          onClick={onClick}
          role="button"
        >
          {buttonContent}
        </Button>
      </Link>
    );
  }

  return (
    <>
      <Button
        variant={variant}
        size={size}
        disabled={isDisabled}
        aria-label={ariaLabel}
        className={className}
        onClick={onClick}
        role="button"
      >
        {buttonContent}
      </Button>
    </>
  );
};

export default CustomButton;
