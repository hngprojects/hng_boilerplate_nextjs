interface DialogBoxProperties {
  headerText: string;
  description?: string;
  buttons: React.ReactNode[];
}

const DialogBox = (properties: DialogBoxProperties) => {
  const { headerText, description, buttons } = properties;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
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
            <p
              id="dialog-description"
              className="text-description-text mt-2 text-sm"
            >
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
