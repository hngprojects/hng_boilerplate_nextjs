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
        "custom-toast-invite fixed top-24 left-1/2 transform -translate-x-1/2 w-60 h-10 sm:w-80 sm:h-20 md:w-96 md:h-20 lg:w-96 lg:h-20 xl:w-96 xl:h-20 2xl:w-96 2xl:h-20 shadow-none bg-green-100 border-2 border-solid border-green-400 rounded-sm [&>button.custom-close-btn]:hidden ",
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
