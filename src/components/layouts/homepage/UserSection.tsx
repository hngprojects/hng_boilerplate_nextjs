import { Descript, Grammarly, Intercom, Notion, UnSplash } from "./svgs";

const UserSection = () => {
  return (
    <div className="py-40 text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-9">
          More than 200 <span className="text-primary">Users</span> make use of our Boilerplate
        </h1>

        <div className="w-11/12 md:w-full mx-auto overflow-auto">
          <div className="flex items-center justify-around md:justify-between md:space-x-8 w-[1100px] md:w-full">
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
