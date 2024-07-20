const CoreValues = () => {
  return (
    <div className="mt-[150px] flex flex-col items-center justify-center md:mt-[80px]">
      <div className="flex w-[382px] flex-col items-center md:w-[500px]">
        <h3 className="text-[32px] font-[700] text-[#525252] md:text-[44px] md:font-[600]">
          Our Core Values
        </h3>
        <p className="text-center text-[16px] leading-[22px] text-[#525252] md:text-[18px]">
          Our Value shapes the core of our organization, and defines the
          character of our industry
        </p>
      </div>

      <div className="mt-[40px] grid h-[876px] w-[382px] grid-cols-1 gap-[24px] max-sm:px-[10px] md:h-[424px] md:w-[1200px] md:grid-cols-2">
        <div className="flex h-[200px] flex-col items-center gap-[24px] rounded-[10px] bg-[#f974161a] px-[16px] md:w-[588px]">
          <h3
            className="text-[28px] font-[700] text-[#F97316]"
            data-testid="integrity"
          >
            Integrity
          </h3>
          <p className="text-[16px] font-[400] leading-[19px] text-[#525252] max-sm:text-center md:text-[18px] md:leading-[22px]">
            We uphold the highest ethical standards in everything we do,
            fostering trust and transparency with our clients, partners, and
            employees. We believe that honesty and integrity are the foundation
            of lasting success.
          </p>
        </div>

        <div className="flex h-[200px] flex-col items-center gap-[24px] rounded-[10px] bg-[#f974161a] px-[16px] md:w-[588px]">
          <h3 className="text-center text-[28px] font-[700] text-[#F97316]">
            Customer Centricity
          </h3>
          <p className="text-[16px] font-[400] leading-[19px] text-[#525252] max-sm:w-[350px] max-sm:text-center md:text-[18px] md:leading-[22px]">
            Our customers are at the heart of our business. We strive to
            understand their needs, exceed their expectations, and build lasting
            relationships based on trust and mutual respect. We believe that
            putting our customers first is the key to long-term success.
          </p>
        </div>

        <div className="flex h-[200px] flex-col items-center gap-[24px] rounded-[10px] bg-[#f974161a] px-[16px] md:w-[588px]">
          <h3
            className="text-center text-[28px] font-[700] text-[#F97316]"
            data-testid="innovation"
          >
            Innovation
          </h3>
          <p className="text-[16px] font-[400] leading-[19px] text-[#525252] max-sm:w-[350px] max-sm:text-center md:text-[18px] md:leading-[22px]">
            We embrace a culture of continuous improvement and creativity,
            constantly seeking new ways to evolve and enhance our products,
            services, and processes. We encourage experimentation and
            risk-taking, recognizing that innovation is essential for growth.
          </p>
        </div>

        <div className="flex h-[200px] flex-col items-center gap-[24px] rounded-[10px] bg-[#f974161a] px-[16px] md:w-[588px]">
          <h3 className="text-center text-[28px] font-[700] text-[#F97316]">
            Excellence
          </h3>
          <p className="text-[16px] font-[400] leading-[19px] text-[#525252] max-sm:w-[350px] max-sm:text-center md:text-[18px] md:leading-[22px]">
            We are committed to delivering exceptional quality in everything we
            do, from our products and services to our customer interactions and
            internal processes. We strive for continuous improvement and hold
            ourselves to the highest standards of performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
