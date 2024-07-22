import { Descript, Grammarly, Intercom, Notion, UnSplash } from "./svgs";

const UserSection = () => {
  return (
    <div className="user-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1>
          More than 200 <span className="text-primary">Users</span> make use of
          our Boilerplate
        </h1>

        <div className="section-box">
          <div className="image-section">
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
