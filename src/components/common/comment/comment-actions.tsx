import {
  Forward,
  MessageCircle,
  Share2,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { useState } from "react";

import CustomButton from "~/components/common/button/button";
import ButtonWrapper from "./button-wrapper";

type CommentActionsProperties = {
  type: "comment" | "reply";
  likes: number;
  dislikes: number;
  onLike: () => void;
  onDislike: () => void;
  onReply?: () => void;
};

const CommentActions = ({
  type,
  likes,
  dislikes,
  onLike,
  onDislike,
  onReply,
}: CommentActionsProperties) => {
  const [isActive, setIsActive] = useState(false);

  const handleReplyClick = () => {
    setIsActive(!isActive);
    onReply?.();
  };

  return (
    <div
      className="flex items-center gap-x-2 text-sm"
      aria-label="action-buttons"
    >
      <ButtonWrapper data-testid="like-button" onClick={onLike}>
        <CustomButton
          variant="outline"
          className={`group h-[24.96px] min-w-8 gap-1.5 rounded-[6px] border-[1.5px] border-stroke-colors-stroke bg-zinc-50 py-1 text-neutral-dark-2 hover:border-primary hover:bg-primary hover:text-white sm:h-9 sm:min-w-12 sm:py-1.5 ${likes > 0 ? "px-2" : "pl-2 pr-4"}`}
          aria-label="Like Button"
        >
          <ThumbsUp className="size-4 sm:size-6" aria-label="thumbs-up-icon" />
          {likes > 0 && (
            <span
              className="font-medium text-neutral-dark-1 transition-colors group-hover:text-white"
              aria-label="likes-count"
            >
              {likes}
            </span>
          )}
        </CustomButton>
      </ButtonWrapper>
      <ButtonWrapper data-testid="dislike-button" onClick={onDislike}>
        <CustomButton
          variant="outline"
          className={`group h-[24.96px] min-w-8 gap-1.5 rounded-[6px] border-[1.5px] border-stroke-colors-stroke bg-zinc-50 py-1 text-neutral-dark-1 hover:border-primary hover:bg-primary hover:text-white sm:h-9 sm:sm:min-w-12 sm:py-1.5 ${dislikes > 0 ? "px-[5.33px] sm:px-2" : "pl-[5.33px] pr-[10.67px] sm:pl-2 sm:pr-4"}`}
          aria-label="Dislike Button"
        >
          <ThumbsDown
            className="size-4 sm:size-6"
            aria-label="thumbs-down-icon"
          />
          {dislikes > 0 && (
            <span
              className="text-[10.7px] font-medium text-neutral-dark-1 transition-colors group-hover:text-white sm:text-base"
              aria-label="dislikes-count"
            >
              {dislikes}
            </span>
          )}
        </CustomButton>
      </ButtonWrapper>
      <ButtonWrapper data-testid="share-button">
        <CustomButton
          className="group h-[24.96px] min-w-8 gap-1.5 rounded-[6px] border-[1.5px] border-stroke-colors-stroke bg-zinc-50 py-1 pl-[5.33px] pr-[10.67px] text-neutral-dark-1 hover:border-primary hover:bg-primary hover:text-white sm:h-9 sm:min-w-12 sm:py-1.5 sm:pl-2 sm:pr-4"
          variant="outline"
          size="icon"
          aria-label="Share Button"
        >
          <Share2
            className="size-4 -rotate-90 sm:size-6"
            aria-label="share-icon"
          />
        </CustomButton>
      </ButtonWrapper>
      <ButtonWrapper data-testid="forward-button">
        <CustomButton
          className="group h-[24.96px] min-w-8 gap-1.5 rounded-[6px] border-[1.5px] border-stroke-colors-stroke bg-zinc-50 py-1 pl-[5.33px] pr-[10.67px] text-neutral-dark-1 hover:border-primary hover:bg-primary hover:text-white sm:h-9 sm:min-w-12 sm:py-1.5 sm:pl-2 sm:pr-4"
          variant="outline"
          size="icon"
          aria-label="Forward Button"
        >
          <Forward className="size-4 sm:size-6" aria-label="forward-icon" />
        </CustomButton>
      </ButtonWrapper>

      {type === "comment" && onReply && (
        <ButtonWrapper data-testid="reply-button" onClick={handleReplyClick}>
          <CustomButton
            className={`group h-[24.96px] min-w-8 gap-1.5 rounded-[6px] border-[1.5px] border-stroke-colors-stroke bg-zinc-50 py-1 pl-[5.33px] pr-[10.67px] text-neutral-dark-1 hover:border-primary hover:bg-primary hover:text-white sm:h-9 sm:min-w-12 sm:py-1.5 sm:pl-2 sm:pr-4 ${isActive ? "border-primary bg-primary text-white" : ""}`}
            aria-label="Reply Button"
            variant="outline"
            size="icon"
          >
            <MessageCircle
              className="size-4 -scale-x-[1] sm:size-6"
              aria-label="message-square-icon"
            />
          </CustomButton>
        </ButtonWrapper>
      )}
    </div>
  );
};

export default CommentActions;
