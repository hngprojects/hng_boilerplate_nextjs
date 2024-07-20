import { X } from "lucide-react";

import { useToast } from "~/components/ui/use-toast";

interface CustomToastProps {
  description: string;
}

export const CustomToast: React.FC<CustomToastProps> = ({ description }) => {
  const { toast, dismiss } = useToast();
  const role = "alert";

  const showCustomToast = () => {
    toast({
      description: description,
      role: role,
      className:
        "custom-toast-invite fixed top-20 left-1/2 transform -translate-x-1/2 w-60 sm:w-80 md:w-96 lg:w-[480px] xl:w-[480px] 2xl:w-[480px] shadow-none bg-green-100 border-2 border-solid border-green-400 rounded-sm [&>button.custom-close-btn]:hidden ",
      action: (
        <button data-testid="close-alert-btn" onClick={() => dismiss()}>
          <X size={24} className="p-1" />
        </button>
      ),
    });
  };

  return (
    <button onClick={showCustomToast} data-testid="invite-members-btn">
      Show Custom Toast
    </button>
  );
};
