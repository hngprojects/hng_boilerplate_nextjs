import { Easy, Prebuilt, Scalable } from "./svgs";

const HowItWorks = () => {
  return (
    <div className="bg-[#ffffff] py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-10 xl:px-10">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="w-full md:pr-10 lg:w-3/5 lg:pr-20">
            <h1 className="font-inter text-3xl font-bold leading-snug md:text-4xl md:leading-tight">
              <span className="text-primary">How It Works:</span> Experience the
              benefits of using our product with every step.
            </h1>
            <p className="font-inter mb-12 mt-6 text-lg font-normal">
              {` We designed our product to simplify your life. It offers a comprehensive solution. Here's how it works and how it benefits you at each stage.`}
            </p>
          </div>

          <div className="flex w-full flex-col items-end md:items-start lg:w-2/5">
            <div className="mb-9 flex space-x-5">
              <div>
                <Prebuilt />
              </div>
              <div>
                <h3
                  className="font-inter mb-2 text-lg font-bold md:text-xl"
                  data-testid="prebuilt"
                >
                  Pre-Built Sections
                </h3>
                <small
                  className="font-inter text-base font-normal"
                  data-testid="section"
                >
                  {` Leverage pre-built sections like "Features," "Benefits," "Pricing," and "Testimonials" to showcase your product effectively.`}
                </small>
              </div>
            </div>

            <div className="mb-9 flex space-x-5">
              <div>
                <Scalable />
              </div>
              <div>
                <h3
                  className="font-inter mb-2 text-lg font-bold md:text-xl"
                  data-testid="scalable"
                >
                  Scalable Foundation
                </h3>
                <small
                  className="font-inter text-base font-normal"
                  data-testid="boilerplate"
                >
                  Our boilerplate is designed to grow with your product. Easily
                  add new features and functionalities as needed.
                </small>
              </div>
            </div>

            <div className="mb-9 flex space-x-5">
              <div>
                <Easy />
              </div>
              <div>
                <h3
                  className="font-inter mb-2 text-lg font-bold md:text-xl"
                  data-testid="easy"
                >
                  Easy Customization
                </h3>
                <small
                  className="font-inter text-base font-normal"
                  data-testid="tailor"
                >
                  Tailor the experience to your specific needs and preferences
                  for maximum results.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
