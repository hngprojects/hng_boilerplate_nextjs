import PasswordForm from "../ui/PasswordForm";

const Page = () => {
  return (
    <div className="space-y-6 w-full md:w-2/3 pt-4 px-[5%]">
      <div className="">
        <h3 className="self-stretch text-2xl font-semibold capitalize text-[#141414]">
          Password settings
        </h3>
        <p className="self-stretch text-sm font-normal text-[#434343]">
          Update password for enhanced account security
        </p>
      </div>

      <PasswordForm />
    </div>
  );
};

export default Page;
