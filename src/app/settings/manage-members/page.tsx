"use client";

import { CustomToast } from "~/components/common/customToast/toast";

const MockPage = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center bg-gray-100">
      <p>Dummy Page</p>
      <p>Click the button below to see an important message.</p>
      <div className="">
        {/* Import component like this when building manage-member component */}
        <CustomToast description="1 Invitation sent succesfully" />
      </div>
    </div>
  );
};

export default MockPage;
