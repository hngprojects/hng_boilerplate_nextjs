import UpdatePassword from "~/components/common/FormPage/UpdatePassword";

const Page = () => {
  return (
    <div className="w-full space-y-6 px-[5%] pt-4 md:w-2/3">
      <div className="">
        <h3 className="text-2xl font-semibold capitalize">Password settings</h3>
        <p className="self-stretch text-sm font-normal opacity-80">
          Update password for enhanced account security
        </p>
      </div>

      <UpdatePassword />
    </div>
  );
};

export default Page;
