import UpdatePassword from "~/components/common/FormPage/UpdatePassword";

const Page = () => {
  return (
    <div className="w-full space-y-6 px-[5%] pt-4 md:w-2/3">
      <div className="">
        <h3 className="self-stretch text-2xl font-semibold capitalize text-[#141414]">
          Password settings
        </h3>
        <p className="self-stretch text-sm font-normal text-[#434343]">
          Update password for enhanced account security
        </p>
      </div>

     <UpdatePassword/>
    </div>
  );
};

export default Page;
