import {
  Forward,
  MessageSquare,
  Share2,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { useState } from "react";

import { Button } from "../../ui/button";

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

  const buttonClass =
    "flex items-center space-x-1 border border-[#E4E4E7] bg-[#FAFAFA] text-[#525252] hover:bg-[#F97316] hover:text-white active:bg-[#F97316] active:text-white px-2 py-2 transition duration-150 ease-in-out";

  return (
    <div
      className="mt-2 flex items-center space-x-4 text-sm"
      data-testid="action-buttons"
    >
      <Button
        size="sm"
        className={buttonClass}
        onClick={onLike}
        data-testid="like-button"
      >
        <ThumbsUp className="h-4 w-4" data-testid="thumbs-up-icon" />
        <span className="text-[#525252]" data-testid="likes-count">
          {likes}
        </span>
      </Button>
      <Button
        size="sm"
        className={buttonClass}
        onClick={onDislike}
        data-testid="dislike-button"
      >
        <ThumbsDown className="h-4 w-4" data-testid="thumbs-down-icon" />
        <span className="text-[#525252]" data-testid="dislikes-count">
          {dislikes}
        </span>
      </Button>
      <Button size="sm" className={buttonClass} data-testid="share-button">
        <Share2 className="h-4 w-4" data-testid="share-icon" />
      </Button>
      <Button size="sm" className={buttonClass} data-testid="forward-button">
        <Forward className="h-4 w-4" data-testid="forward-icon" />
      </Button>
      {type === "comment" && onReply && (
        <Button
          size="sm"
          className={`${buttonClass} ${
            isActive
              ? "bg-[#F97316] text-white"
              : "bg-[#FAFAFA] text-[#525252] hover:bg-[#F97316] hover:text-white"
          }`}
          onClick={handleClick}
          data-testid="reply-button"
        >
          <MessageSquare
            className="h-4 w-4"
            data-testid="message-square-icon"
          />
        </Button>
      )}
    </div>
  );
};

export default ActionButtons;
