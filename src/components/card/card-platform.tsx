import Image from "next/image";

import { cn } from "~/lib/utils";

type PlatformCardProperties = {
  /**
   *  Displaying the platform name or title.
   */
  heading: string;
  /**
   * Displaying the platform logo or icon.
   */
  logo: string;
  /**
   * Providing a brief overview of the platform.
   */
  description: string;
  /**
   * Additional class names for customizing the container style.
   */
  containerClassName?: string;
  /**
   * active status of the platform, true or false.
   */
  isActive: boolean;
  /**
   * onClick event to toggle the isActive status of a platform.
   */
  toggleSwitchHandler: () => void;
};

/**
 * A card component that displays platform details including a heading, logo, description, and a toggle switch.
 * The toggle switch allows admins to activate or deactivate the platform.
 *
 * @param {PlatformCardProps} props - The properties for the component.
 * @returns The CardPlatform component.
 */

export default function CardPlatform({
  heading,
  logo,
  description,
  containerClassName,
  isActive,
  toggleSwitchHandler,
}: PlatformCardProperties) {
  return (
    <div
      className={cn(
        "w-full rounded-[6px] border-[1px] border-[#CBD5E1] bg-white px-[16px] py-[24px]",
        containerClassName,
      )}
    >
      <header className="mb-[24px] flex items-center justify-between">
        <figure>
          <Image
            src={logo}
            alt={heading}
            height={32}
            width={32}
            className="h-[32px] w-[32px]"
          />
        </figure>
        <button
          onClick={toggleSwitchHandler}
          className={cn(
            "h-[22px] w-[46px] rounded-full px-[2px]",
            isActive ? "bg-[#F97316]" : "bg-[#D0D6D6]",
          )}
        >
          <div
            className={cn(
              "h-[18px] w-[18px] rounded-full transition duration-300",
              isActive
                ? "translate-x-[24px] bg-white"
                : "translate-x-0 bg-[#F9F9F9]",
            )}
          ></div>
        </button>
      </header>
      <div>
        <h2 className="mb-[6px] text-[16px] font-semibold text-[#0A0A0A]">
          {heading}
        </h2>
        <p className="text-[12px] text-[#0A0A0A]">{description}</p>
      </div>
    </div>
  );
}
