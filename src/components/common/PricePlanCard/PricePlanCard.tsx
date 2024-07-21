import CustomButton from "~/components/common/Button/button";

export default function PricePlanCard() {
  return (
    <div className="flex w-[24rem] max-w-[24rem] flex-col gap-[51px] rounded-xl border border-[#CBD5E1] px-[32px] py-[31px] text-[#0A0A0A]">
      <section className="flex flex-col gap-4">
        <h1 className="text-[25px] font-bold">Basic</h1>
        <h1 className="text-[39px] font-bold">
          $800<span className="text-xl"> /month</span>
        </h1>
        <p className="text-[13px]">
          The essensitals to provide your best work for clients.
        </p>
      </section>

      <section className="flex flex-col gap-5">
        <p>2 Projects</p>
        <p>2 Projects</p>
        <p>2 Projects</p>
        <p>2 Projects</p>
        <p>2 Projects</p>
        <p>2 Projects</p>
      </section>
      <CustomButton variant="primary" size="lg" className="w-full">
        Continue
      </CustomButton>
    </div>
  );
}
