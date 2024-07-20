import { Easy, Prebuilt, Scalable } from "./svgs";

const HowItWorks = () => {
  return (
    <div className="bg-[#ffffff]">
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-10 xl:px-10">
        <div className="how-it-works">
          <div className="how-left">
            <h1>
              <span className="text-primary">How It Works:</span> Experience the
              benefits of using our product with every step.
            </h1>

            <p>
              {` We designed our product to simplify your life. It offers a
              comprehensive solution. Here's how it works and how it benefits
              you at each stage.`}
            </p>
          </div>

          <div className="how-right">
            <div className="how-component">
              <div>
                <Prebuilt />
              </div>

              <div>
                <h3 data-testid="prebuilt">Pre-Built Sections</h3>
                <small data-testid="section">
                  {` Leverage pre-built sections like "Features," "Benefits,"
                  "Pricing," and "Testimonials" to showcase your product
                  effectively.`}
                </small>
              </div>
            </div>
            <div className="how-component">
              <div>
                <Scalable />
              </div>
              <div>
                <h3 data-testid="scalable">Scalable Foundation</h3>
                <small data-testid="boilerplate">
                  Our boilerplate is designed to grow with your product. Easily
                  add new features and functionalities as needed.
                </small>
              </div>
            </div>
            <div className="how-component">
              <div>
                <Easy />
              </div>
              <div>
                <h3 data-testid="easy">Easy Customization</h3>
                <small data-testid="tailor">
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
