const EmailHeader = () => {
  return (
    <header className="flex h-[122px] items-center justify-center bg-subtle">
      <div className="flex items-center gap-[8px] md:gap-[10px]">
        <div
          className="grid grid-cols-2 gap-[2px]"
          data-testid="dots-container"
        >
          <div
            className="h-[8px] w-[8px] rounded-full bg-primary"
            data-testid="dot"
          ></div>
          <div
            className="h-[8px] w-[8px] rounded-full bg-primary"
            data-testid="dot"
          ></div>
          <div
            className="h-[8px] w-[8px] rounded-full bg-primary"
            data-testid="dot"
          ></div>
          <div
            className="h-[8px] w-[8px] rounded-full bg-primary"
            data-testid="dot"
          ></div>
        </div>
        <span className="text-2xl font-semibold text-default">
          Boilerplate.
        </span>
      </div>
    </header>
  );
};

export default EmailHeader;
