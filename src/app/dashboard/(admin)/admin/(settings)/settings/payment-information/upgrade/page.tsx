"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const UpgradePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(
      "/dashboard/admin/settings/payment-information/upgrade/basic",
    );
  }, [router]);

  return;
};

export default UpgradePage;
