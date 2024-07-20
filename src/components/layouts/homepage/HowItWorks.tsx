import { Easy, Prebuilt, Scalable } from "./svgs";

const HowItWorks = () => {
  return (
    <div className="bg-[#ffffff] py-10">
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-10 xl:px-10">
        <div className="flex flex-col md:flex-row items-center md:py-10">
          <div className="w-full md:w-3/5 md:pr-10 lg:pr-20">
            <h1 className="text-4xl md:text-5xl font-bold font-inter leading-snug md:leading-tight">
              <span className="text-primary">How It Works:</span> Experience the benefits of using our product with every step.
            </h1>
            <p className="text-lg md:text-xl font-normal font-inter mt-6 mb-12">
              {` We designed our product to simplify your life. It offers a comprehensive solution. Here's how it works and how it benefits you at each stage.`}
            </p>
          </div>

          <div className="w-full md:w-2/5 flex flex-col items-end md:items-start">
            <div className="flex space-x-5 mb-9">
              <div>
                <Prebuilt />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-inter mb-2" data-testid="prebuilt">Pre-Built Sections</h3>
                <small className="text-base font-normal font-inter" data-testid="section">
                  {` Leverage pre-built sections like "Features," "Benefits," "Pricing," and "Testimonials" to showcase your product effectively.`}
                </small>
              </div>
            </div>

            <div className="flex space-x-5 mb-9">
              <div>
                <Scalable />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-inter mb-2" data-testid="scalable">Scalable Foundation</h3>
                <small className="text-base font-normal font-inter" data-testid="boilerplate">
                  Our boilerplate is designed to grow with your product. Easily add new features and functionalities as needed.
                </small>
              </div>
            </div>

            <div className="flex space-x-5 mb-9">
              <div>
                <Easy />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-inter mb-2" data-testid="easy">Easy Customization</h3>
                <small className="text-base font-normal font-inter" data-testid="tailor">
                  Tailor the experience to your specific needs and preferences for maximum results.
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
