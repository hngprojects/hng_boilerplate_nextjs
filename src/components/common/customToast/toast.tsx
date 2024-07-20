import { X } from "lucide-react";
import React from "react";

import { Toast } from "~/components/ui/toast";
import { useToast } from "~/components/ui/use-toast";
import { TopRightToastViewport } from "./toastViewport";

interface CustomToastProps {
  message: string;
  description: string;
}

export const CustomToast: React.FC<CustomToastProps> = ({
  message,
  description,
}) => {
  const { toast, dismiss } = useToast();

  const showCustomToast = () => {
    toast({
      title: message,
      description: description,
      className: "fixed top-4 right-4",
      action: (
        <button
          onClick={() => dismiss()}
          className="rounded-full p-1 hover:bg-gray-200"
        >
          <X size={16} />
        </button>
      ),
    });
  };

  return <button onClick={showCustomToast}>Show Custom Toast</button>;
};
