import CustomButton from "~/components/common/Button/button";

const CookieFooter: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 w-[100vw] bg-background text-start text-neutral-dark-1 md:text-foreground">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-x-[25px] gap-y-4 px-6 py-5 md:py-10 lg:flex-row lg:justify-between">
        <p className="flex flex-col gap-y-2 text-sm font-bold leading-normal md:text-xl md:font-semibold lg:max-w-[693px]">
          We Value your Privacy{" "}
          <span className="text-xs font-normal md:text-base">
            Our website uses cookies to enhance your browsing experience,
            provide personalized content, and analyze site traffic. By clicking
            &quot;Accept All&quot;, you consent to our use of cookies.
          </span>
        </p>
        <ul className="flex flex-row flex-wrap items-end gap-x-4 gap-y-2">
          <li className="md:order-3">
            <CustomButton size="default" variant="primary">
              Accept All Cookies
            </CustomButton>
          </li>
          <li className="md:order-2">
            <CustomButton variant="primary" size="default">
              Reject All
            </CustomButton>
          </li>
          <li className="md:order-1">
            <button className="rounded-[6px] border border-primary px-4 py-2 text-sm text-primary md:bg-secondary">
              Cookies Settings
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default CookieFooter;
