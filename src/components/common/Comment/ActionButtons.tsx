import {
  Forward,
  MessageSquare,
  Share2,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { useState } from "react";

import CustomButton from "../Button/button";
import ButtonWrapper from "./ButtonWrapper";

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

  const handleReplyClick = () => {
    setIsActive(!isActive);
    onReply?.();
  };

  return (
    <div
      className="mt-2 flex items-center space-x-2 text-sm sm:space-x-4"
      aria-label="action-buttons"
    >
      <ButtonWrapper data-testid="like-button" onClick={onLike}>
        <CustomButton
          variant="outline"
          className="h-auto p-1 hover:bg-primary hover:text-white"
          aria-label="Like Button"
          isLeftIconVisible={true}
          icon={<ThumbsUp className="h-4 w-4" aria-label="thumbs-up-icon" />}
        >
          <span className="text-bg-subtle" aria-label="likes-count">
            {likes}
          </span>
        </CustomButton>
      </ButtonWrapper>
      <ButtonWrapper data-testid="dislike-button" onClick={onDislike}>
        <CustomButton
          variant="outline"
          className="h-auto p-1 hover:bg-primary hover:text-white"
          aria-label="Dislike Button"
          isLeftIconVisible={true}
          icon={
            <ThumbsDown className="h-4 w-4" aria-label="thumbs-down-icon" />
          }
        >
          <span className="text-bg-subtle" aria-label="dislikes-count">
            {dislikes}
          </span>
        </CustomButton>
      </ButtonWrapper>
      <ButtonWrapper data-testid="share-button">
        <CustomButton
          className="p-1 hover:bg-primary hover:text-white"
          variant="outline"
          size="icon"
          isIconOnly={true}
          aria-label="Share Button"
          icon={<Share2 className="h-4 w-4" aria-label="share-icon" />}
        />
      </ButtonWrapper>
      <ButtonWrapper data-testid="forward-button">
        <CustomButton
          className="p-1 hover:bg-primary hover:text-white"
          variant="outline"
          size="icon"
          isIconOnly={true}
          aria-label="Forward Button"
          icon={<Forward className="h-4 w-4" aria-label="forward-icon" />}
        />
      </ButtonWrapper>

      {type === "comment" && onReply && (
        <ButtonWrapper data-testid="reply-button" onClick={handleReplyClick}>
          <CustomButton
            className={`p-1 hover:bg-primary hover:text-white focus:bg-primary focus:text-white ${isActive ? "active:bg-primary" : ""}`}
            aria-label="Reply Button"
            variant="outline"
            size="icon"
            isIconOnly={true}
            icon={
              <MessageSquare
                className="h-4 w-4"
                aria-label="message-square-icon"
              />
            }
          />
        </ButtonWrapper>
      )}
    </div>
  );
};

export default ActionButtons;
