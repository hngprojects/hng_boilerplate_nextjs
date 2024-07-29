"use client";

import Image from "next/image";

import { Switch } from "~/components/ui/switch";
import { cn } from "~/lib/utils";

type PlatformCardProperties = {
  /**
   *  Checks if the platform is active or not
   */
  active: boolean;

  /**
   *  Checks if the platform is active or not
   */
  setActive: (platform: string) => void;

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
};

/**
 * A card component that displays platform details including a heading, logo, description, and a toggle switch.
 * The toggle switch allows admins to activate or deactivate the platform.
 *
 * @param {PlatformCardProps} props - The properties for the component.
 * @returns The CardPlatform component.
 */

export default function IntegrationCard({
  active,
  setActive,
  heading,
  logo,
  description,
  containerClassName,
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
          <Image src={logo} width={32} height={32} alt={heading} />
        </figure>
        <Switch checked={active} onClick={() => setActive(heading)} />
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
