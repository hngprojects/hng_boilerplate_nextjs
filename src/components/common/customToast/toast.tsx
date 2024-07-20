import { X } from "lucide-react";

import { useToast } from "~/components/ui/use-toast";
import CustomButton from "../Button/button";

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
      description: description,
      className:
        "fixed top-6 left-1/2 transform -translate-x-1/2 w-60 sm:w-80 md:w-96 lg:w-[480px] xl:w-[480px] 2xl:w-[480px] shadow-none bg-green-100 border-2 border-solid border-green-400 rounded-sm",
      action: (
        <button onClick={() => dismiss()}>
          <X size={24} className="p-1 hover:bg-gray-200" />
        </button>
      ),
    });
  };

  return <button onClick={showCustomToast}>Show Custom Toast</button>;
};
