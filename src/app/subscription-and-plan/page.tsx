import Image from "next/image";

import {
  managementData,
  projectData,
  sharingData,
  supportData,
} from "../api/userdata";

interface Dataprops {
  title: string;
  value: string;
  id: string;
}

const SubscriptionAndPlan = () => {
  return (
    <div className="mx-[2rem] mb-[4rem] flex flex-col sm:mx-[4rem]">
      <h4 className="text-neutralColor-dark-2 my-4 text-start text-[24px] font-[600] leading-[29.05px]">
        Current Plan
      </h4>
      <section className="flex flex-col justify-start rounded-xl bg-[#FFF8F2] px-4 pb-1 pt-6">
        <h4 className="py-2 text-[18px] font-[600]">Basic</h4>
        <p className="text-neutralColor-dark-2 text-[14px] font-[400] leading-[16.9xpx]">
          Your are currently enjoying the benefits of our Basic plan. Your
          subcription will auto-renew on the 30th of July 2024.
        </p>
        <span className="text-neutralColor-dark-1 mb-2 text-[14px]">
          $20/month
        </span>
        <span className="pt-4 text-[14px] text-primary">
          Upgrade to access more features
        </span>
      </section>

      <section className="mt-4 flex-col rounded-xl bg-[#FFF8F2] p-4 sm:flex sm:flex-row sm:justify-start">
        <div className="text-neutralColor-dark-2 mb-4 basis-[45%] text-[14px] font-[600]">
          Current Plan Benefits
        </div>

        <ul className="basis-[45%] list-inside list-disc text-[14px]">
          <li className="text-neutralColor-dark-2 text-[14px] leading-[28.94px]">
            100 Projects
          </li>
          <li className="text-neutralColor-dark-2 text-[14px] leading-[28.94px]">
            Up to 50 subscribers
          </li>
          <li className="text-neutralColor-dark-2 text-[14px] leading-[28.94px]">
            Advanced analytics
          </li>
          <li className="text-neutralColor-dark-2 text-[14px] leading-[28.94px]">
            24-hour support{" "}
          </li>
        </ul>
      </section>
      <section className="mt-4">
        <div className="text-neutralColor-dark-2 basis-[45%] bg-[#FFF8F2] px-2 py-4 text-[14px] font-[600]">
          Project Management
        </div>
        <>
          {projectData.map((item: Dataprops) => (
            <div
              key={item.id}
              className="border-restroke-colors-stroke flex items-start justify-start border-[0.05px] px-2 py-4 text-[14px] sm:justify-start"
            >
              <p className="basis-[70%] sm:basis-[45%]">{item.title}</p>
              <p className="basis-[25%] sm:basis-[45%]">{item.value}</p>
            </div>
          ))}
        </>
      </section>

      <section className="mt-4">
        <div className="text-neutralColor-dark-2 basis-[45%] bg-[#FFF8F2] px-2 py-4 text-[14px] font-[600]">
          Sharing and collaboration
        </div>
        <>
          {sharingData.map((item: Dataprops) => (
            <div
              key={item.id}
              className="border-restroke-colors-stroke flex items-center justify-start border-[0.05px] px-2 py-4 text-[14px] sm:justify-start"
            >
              <p className="basis-[70%] sm:basis-[45%]">{item.title}</p>
              <div className="basis-[25%] sm:basis-[45%]">
                <Image
                  width={50}
                  height={50}
                  className="h-[16] w-[16px]"
                  src={item.value}
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </>
      </section>

      <section className="mt-4">
        <div className="text-neutralColor-dark-2 basis-[45%] bg-[#FFF8F2] px-2 py-4 text-[14px] font-[600]">
          Management and security
        </div>
        <>
          {managementData.map((item: Dataprops) => (
            <div
              key={item.id}
              className="border-restroke-colors-stroke flex items-center justify-start border-[0.05px] px-2 py-4 text-[14px] sm:justify-start"
            >
              <p className="basis-[70%] sm:basis-[45%]">{item.title}</p>
              <div className="basis-[25%] sm:basis-[45%]">
                <Image
                  width={50}
                  height={50}
                  className="h-[16] w-[16px]"
                  src={item.value}
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </>
      </section>

      <section className="mt-4">
        <div className="text-neutralColor-dark-2 basis-[45%] bg-[#FFF8F2] px-2 py-4 text-[14px] font-[600]">
          Support
        </div>
        <>
          {supportData.map((item: Dataprops) => (
            <div
              key={item.id}
              className="justart border-restroke-colors-stroke flex items-center border-[0.05px] px-2 py-4 text-[14px] sm:justify-start"
            >
              <p className="basis-[70%] sm:basis-[45%]">{item.title}</p>
              <div className="basis-[25%] sm:basis-[45%]">
                <Image
                  width={50}
                  height={50}
                  className="h-[16] w-[16px]"
                  src={item.value}
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </>
      </section>

      <section className="mt-4 flex-col">
        <div className="text-neutralColor-dark-2 bg-[#FFF8F2] px-2 py-4 text-[14px] font-[600]">
          Recent
        </div>

        <div className="border-spacing-5restroke-colors-stroke flex items-center justify-between border-[0.05px] px-2 py-4 text-[14px]">
          <span className="basis-[45%] text-start">Date</span>
          <span className="basis-[30%] text-start">Status</span>
          <span className="basis-[30%] text-start">Invoice</span>
        </div>
        <div className="border-restroke-colors-stroke flex items-center justify-between border-[0.05px] px-2 py-4 text-[14px]">
          <span className="basis-[45%] text-start">7-7-24</span>
          <span className="basis-[30%] text-start">paid</span>
          <a href="/" className="basis-[30%] text-start text-primary">
            download
          </a>
        </div>
      </section>

      <div className="mt-6 flex items-center justify-center">
        <button className="mr-2 rounded bg-primary px-2 py-2 text-[10px] text-white sm:mr-4 sm:px-4 sm:text-[12px]">
          Upgrade Subscription
        </button>
        <button className="text-neutralColor-dark-2 ml-2 rounded border-[0.05px] border-stroke-colors-stroke px-2 py-2 text-[10px] sm:ml-4 sm:px-4 sm:text-[12px]">
          Cancel Subscription
        </button>
      </div>
    </div>
  );
};

export default SubscriptionAndPlan;
