import { X } from "lucide-react";

import { useToast } from "~/components/ui/use-toast";

interface CustomToastProperties {
  description: string;
}

export const CustomToast: React.FC<CustomToastProperties> = ({
  description,
}) => {
  const { toast, dismiss } = useToast();
  const role = "alert";

  const showCustomToast = () => {
    toast({
      description: description,
      role: role,
      className:
        "custom-toast-invite fixed top-10 left-1/2 transform -translate-x-1/2 w-60 h-10 pr-6 sm:w-80 sm:h-16 md:w-[480px] shadow-none bg-toastBg border-2 border-solid border-toastBorder rounded-sm [&>button.custom-close-btn]:hidden ",
      action: (
        <button data-testid="close-alert-btn" onClick={() => dismiss()}>
          <X size={24} className="" />
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
