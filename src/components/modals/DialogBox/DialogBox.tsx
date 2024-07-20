import React from "react";

interface DialogBoxProperties {
  headerText: string;
  description?: string;
  buttons: React.ReactNode[];
}

/**
 * DialogBox Component
 *
 * @param headerText - Required text to be displayed in the header.
 * @param description - Optional description to be displayed under the header text.
 * @param buttons - An array of button components to be displayed in the footer.
 *
 *
 * Usage:
 * type Variant = "success" | "warning" | "error";
 *
 * const [variant, setVariant] = useState<Variant>();
 *
 *
 * <button
 * className=""
 * onClick={() => setVariant("error")}>
 * </button>
 *
 <DialogBox
 *   headerText={
 *     variant === "success"
 *       ? "Success Header"
 *       : variant === "warning"
 *         ? "Warning Header"
 *         : variant === "error"
 *           ? "Error Header"
 *           : "Default Header"
 *   }
 *   description={
 *     variant === "success"
 *       ? "This is a success message."
 *       : variant === "warning"
 *         ? "This is a warning message."
 *         : variant === "error"
 *           ? "This is an error message."
 *           : "This is a default message."
 *   }
 *   buttons={[
 *     <button key="1" className="bg-background, rounded-md border-2 border-solid border-border px-4 py-2 text-foreground">
 *       Cancel
 *     </button>,
 *     <button
 *       key="2"
 *       className={`rounded-md ${
 *         variant === "success"
 *           ? "bg-success"
 *           : variant === "warning"
 *             ? "bg-warning"
 *             : variant === "error"
 *               ? "bg-error"
 *               : "bg-neutral-dark-2"
 *       } px-4 py-2 text-background`}
 *     >
 *       { variant === "success"
 *           ? "Success"
 *           : variant === "warning"
 *             ? "Warning"
 *             : variant === "error"
 *               ? "Error"
 *               : "Confirm"}
 *     </button>,
 *   ]}
 * />
 */

const DialogBox = (properties: DialogBoxProperties) => {
  const { headerText, description, buttons } = properties;
  return (
    <div>
      <div
        role="dialog"
        aria-labelledby="dialog-header"
        aria-describedby="dialog-description"
        className="m-auto h-auto w-[512px] max-w-xs rounded-md bg-background p-6 shadow-md sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
      >
        <header className="">
          <h2 id="dialog-header" className="text-lg font-semibold">
            {headerText}
          </h2>
          {description && (
            <p id="dialog-description" className="mt-2 text-sm text-[#64748B]">
              {description}
            </p>
          )}
        </header>
        <footer className="flex justify-end space-x-2 pt-4 font-semibold">
          {buttons.map((button, index) => (
            <span key={index}>{button}</span>
          ))}
        </footer>
      </div>
    </div>
  );
};

export default DialogBox;
