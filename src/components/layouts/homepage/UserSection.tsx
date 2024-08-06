import { Descript, Grammarly, Intercom, Notion, UnSplash } from "./svgs";

const UserSection = () => {
  return (
    <div className="py-20 text-center md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-10">
        <h1 className="mb-9 text-3xl font-bold md:text-4xl">
          More than 200 <span className="text-primary">Users</span> make use of
          our Boilerplate
        </h1>

        <div className="hide-scrollbar mx-auto w-11/12 overflow-auto md:w-full">
          <div className="flex w-[1100px] items-center justify-around md:w-full md:justify-between md:space-x-8">
            <div data-testid="unsplash-logo">
              <UnSplash />
            </div>

            <div data-testid="notion-logo">
              <Notion />
            </div>

            <div data-testid="intercom-logo">
              <Intercom />
            </div>

            <div data-testid="descript-logo">
              <Descript />
            </div>

            <div data-testid="grammarly-logo">
              <Grammarly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSection;
