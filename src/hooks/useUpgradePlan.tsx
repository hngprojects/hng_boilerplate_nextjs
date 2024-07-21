import { useState } from "react";

export default function useUpgradePlan() {
  const [isLoading, setIsLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState<string | undefined>();

  const upgradePlan = async (plan: string) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setPopupMessage(`Upgraded to ${plan} plan successfully!`);
    } catch {
      setPopupMessage("Error upgrading plan.");
    } finally {
      setIsLoading(false);
      setTimeout(() => setPopupMessage(undefined), 3000);
    }
  };

  return { isLoading, popupMessage, upgradePlan };
}
