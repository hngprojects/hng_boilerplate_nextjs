const CoreValues = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 lg:px-10 xl:px-10">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4 flex w-[300px] flex-col items-center sm:w-[400px] md:w-[500px]">
            <h3 className="mb-2 text-[28px] font-[700] text-neutral-600 sm:text-[32px] md:text-[35px] lg:text-[40px]">
              Our Core Values
            </h3>
            <p className="text-center text-[14px] text-neutral-600 md:text-[16px] lg:text-[18px]">
              Our Value shapes the core of our organization, and defines the
              character of our industry
            </p>
          </div>

          <div className="mt-[20px] grid w-full grid-cols-1 gap-[20px] sm:w-[500px] md:w-[750px] md:grid-cols-2 lg:w-[1000px] xl:w-[1200px]">
            <div className="rounded-[10px] bg-[#f974161a] p-6 sm:p-8">
              <h3
                className="mb-3 text-[18px] font-[700] text-primary sm:text-[20px]"
                data-testid="integrity"
              >
                Integrity
              </h3>
              <p className="text-[14px] font-[400] text-neutral-600 md:text-[16px] lg:text-[18px]">
                We uphold the highest ethical standards in everything we do,
                fostering trust and transparency with our clients, partners, and
                employees. We believe that honesty and integrity are the
                foundation of lasting success.
              </p>
            </div>

            <div className="rounded-[10px] bg-[#f974161a] p-6 sm:p-8">
              <h3 className="mb-3 text-[18px] font-[700] text-primary sm:text-[20px]">
                Customer Centricity
              </h3>
              <p className="text-[14px] font-[400] text-neutral-600 md:text-[16px] lg:text-[18px]">
                Our customers are at the heart of our business. We strive to
                understand their needs, exceed their expectations, and build
                lasting relationships based on trust and mutual respect. We
                believe that putting our customers first is the key to long-term
                success.
              </p>
            </div>

            <div className="rounded-[10px] bg-[#f974161a] p-6 sm:p-8">
              <h3
                className="mb-3 text-[18px] font-[700] text-primary sm:text-[20px]"
                data-testid="innovation"
              >
                Innovation
              </h3>
              <p className="text-[14px] font-[400] text-neutral-600 md:text-[16px] lg:text-[18px]">
                We embrace a culture of continuous improvement and creativity,
                constantly seeking new ways to evolve and enhance our products,
                services, and processes. We encourage experimentation and
                risk-taking, recognizing that innovation is essential for
                growth.
              </p>
            </div>

            <div className="rounded-[10px] bg-[#f974161a] p-6 sm:p-8">
              <h3 className="mb-3 text-[18px] font-[700] text-primary sm:text-[20px]">
                Excellence
              </h3>
              <p className="text-[14px] font-[400] text-neutral-600 md:text-[16px] lg:text-[18px]">
                We are committed to delivering exceptional quality in everything
                we do, from our products and services to our customer
                interactions and internal processes. We strive for continuous
                improvement and hold ourselves to the highest standards of
                performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
