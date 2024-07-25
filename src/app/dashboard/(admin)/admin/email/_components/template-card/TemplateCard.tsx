const TemplateCard = () => {
  return (
    <div className="flex cursor-pointer items-center justify-between gap-2 border-b-[1px] border-border px-5 py-6 transition-all duration-300 hover:border-primary hover:bg-neutral-dark-1/5">
      <div className="flex flex-1 items-center justify-start gap-5">
        <div className="h-[102px] w-full max-w-[102px] rounded-[3px] border-[1px] border-border"></div>
        <h4>Welcome - No Image</h4>
      </div>
      <div className="flex w-full max-w-[102px] items-center justify-between gap-2">
        <span className="duration-all cursor-pointer text-xs font-medium text-neutral-dark-2 transition-all hover:text-primary">
          Preview
        </span>
        <span className="duration-all cursor-pointer text-xs font-medium text-neutral-dark-2 transition-all hover:text-primary">
          Edit
        </span>
      </div>
    </div>
  );
};

export default TemplateCard;
