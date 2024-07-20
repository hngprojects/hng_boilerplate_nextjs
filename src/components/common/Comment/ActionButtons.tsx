import {
  Forward,
  MessageSquare,
  Share2,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { useState } from "react";

import CustomButton from "../Button/button";

type ActionButtonsProperties = {
  type: "comment" | "reply";
  likes: number;
  dislikes: number;
  onLike: () => void;
  onDislike: () => void;
  onReply?: () => void;
};

const ActionButtons = ({
  type,
  likes,
  dislikes,
  onLike,
  onDislike,
  onReply,
}: ActionButtonsProperties) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onReply?.();
  };

  return (
    <div
      className="mt-2 flex items-center space-x-2 text-sm sm:space-x-4"
      aria-label="Action Buttons"
    >
      <CustomButton
        variant="outline"
        className="h-auto p-1 hover:bg-primary hover:text-white"
        onClick={onLike}
        aria-label="Like Button"
        isLeftIconVisible={true}
        icon={<ThumbsUp className="h-4 w-4" aria-label="Thumbs Up Icon" />}
      >
        <span className="text-bg-subtle" aria-label="Likes Count">
          {likes}
        </span>
      </CustomButton>
      <CustomButton
        variant="outline"
        className="h-auto p-1 hover:bg-primary hover:text-white"
        onClick={onDislike}
        aria-label="Dislike Button"
        isLeftIconVisible={true}
        icon={<ThumbsDown className="h-4 w-4" aria-label="Thumbs Down Icon" />}
      >
        <span className="text-bg-subtle" aria-label="Dislikes Count">
          {dislikes}
        </span>
      </CustomButton>
      <CustomButton
        className="p-1 hover:bg-primary hover:text-white"
        variant="outline"
        size="icon"
        isIconOnly={true}
        icon={<Share2 className="h-4 w-4" aria-label="Share Icon" />}
        aria-label="Share Button"
      />
      <CustomButton
        className="p-1 hover:bg-primary hover:text-white"
        variant="outline"
        size="icon"
        isIconOnly={true}
        icon={<Forward className="h-4 w-4" aria-label="Forward Icon" />}
        aria-label="Forward Button"
      />

      {type === "comment" && onReply && (
        <CustomButton
          className="p-1 hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary active:text-white"
          onClick={handleClick}
          aria-label="Reply Button"
          variant="outline"
          size="icon"
          isIconOnly={true}
          icon={
            <MessageSquare
              className="h-4 w-4"
              aria-label="Message Square Icon"
            />
          }
        />
      )}
    </div>
  );
};

export default ActionButtons;
