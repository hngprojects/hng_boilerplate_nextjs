const CoreValues = () => {
  return (
    <div className="mt-[80px] flex flex-col items-center justify-center">
      <div className="flex w-[500px] flex-col items-center">
        <h3 className="text-[44px] font-[600] text-[#525252]">
          Our Core Values
        </h3>
        <p className="text-center text-[18px] leading-[22px] text-[#525252]">
          Our Value shapes the core of our organization, and defines the
          character of our industry
        </p>
      </div>

      <div className="mt-[40px] grid h-[424px] w-[1200px] grid-cols-2 gap-[24px]">
        <div className="flex h-[200px] w-[588px] flex-col gap-[24px] rounded-[10px] bg-[#f974161a] p-[16px]">
          <h3
            className="text-center text-[28px] font-[700] text-[#F97316]"
            data-testid="integrity"
          >
            Integrity
          </h3>
          <p className="text-[#525252]font-[400] text-[18px] leading-[22px]">
            We uphold the highest ethical standards in everything we do,
            fostering trust and transparency with our clients, partners, and
            employees. We believe that honesty and integrity are the foundation
            of lasting success.
          </p>
        </div>
        <div className="flex h-[200px] w-[588px] flex-col gap-[24px] rounded-[10px] bg-[#f974161a] p-[16px]">
          <h3 className="text-center text-[28px] font-[700] text-[#F97316]">
            Customer Centricity
          </h3>
          <p className="text-[#525252]font-[400] text-[18px] leading-[22px]">
            Our customers are at the heart of our business. We strive to
            understand their needs, exceed their expectations, and build lasting
            relationships based on trust and mutual respect. We believe that
            putting our customers first is the key to long-term success.
          </p>
        </div>
        <div className="flex h-[200px] w-[588px] flex-col gap-[24px] rounded-[10px] bg-[#f974161a] p-[16px]">
          <h3
            className="text-center text-[28px] font-[700] text-[#F97316]"
            data-testid="innovation"
          >
            Innovation
          </h3>
          <p className="text-[#525252]font-[400] text-[18px] leading-[22px]">
            We embrace a culture of continuous improvement and creativity,
            constantly seeking new ways to evolve and enhance our products,
            services, and processes. We encourage experimentation and
            risk-taking, recognizing that innovation is essential for growth.
          </p>
        </div>
        <div className="flex h-[200px] w-[588px] flex-col gap-[24px] rounded-[10px] bg-[#f974161a] p-[16px]">
          <h3 className="text-center text-[28px] font-[700] text-[#F97316]">
            Excellence
          </h3>
          <p className="text-[#525252]font-[400] text-[18px] leading-[22px]">
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
