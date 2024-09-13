import { MessageCircle, Share2, ThumbsDown, ThumbsUp } from "lucide-react";

import CustomButton from "../common-button/common-button";
import ButtonWrapper from "./button-wrapper";

type CommentActionsProperties = {
  type: "comment" | "reply";
  likes: number;
  dislikes: number;
  isReplyActive: boolean;
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
  isReplyActive,
}: CommentActionsProperties) => {
  return (
    <div
      className="flex items-center gap-x-2 text-sm"
      aria-label="action-buttons"
    >
      <ButtonWrapper data-testid="like-button" onClick={onLike}>
        <CustomButton
          variant="outline"
          className={`h-9 w-auto bg-transparent p-0.5 transition-all duration-200 ease-in-out hover:bg-primary hover:text-white ${likes > 0 ? "px-2" : "pl-2 pr-4"}`}
          aria-label="Like Button"
        >
          <ThumbsUp className="size-4 sm:size-6" aria-label="thumbs-up-icon" />
          {likes > 0 && (
            <span
              className="font-medium transition-colors group-hover:text-white"
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
          className={`h-9 w-auto bg-transparent p-0.5 transition-all duration-200 ease-in-out hover:bg-primary hover:text-white ${dislikes > 0 ? "px-[5.33px] sm:px-2" : "pl-[5.33px] pr-[10.67px] sm:pl-2 sm:pr-4"}`}
          aria-label="Dislike Button"
        >
          <ThumbsDown
            className="size-4 sm:size-6"
            aria-label="thumbs-down-icon"
          />
          {dislikes > 0 && (
            <span
              className="text-[10.7px] font-medium transition-colors group-hover:text-white sm:text-base"
              aria-label="dislikes-count"
            >
              {dislikes}
            </span>
          )}
        </CustomButton>
      </ButtonWrapper>
      <ButtonWrapper data-testid="share-button">
        <CustomButton
          className="size-9 bg-transparent p-0.5 transition-all duration-200 ease-in-out hover:bg-primary hover:text-white"
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
      {type === "comment" && onReply && (
        <ButtonWrapper data-testid="reply-button" onClick={() => onReply?.()}>
          <CustomButton
            className={`size-9 bg-transparent p-0.5 transition-all duration-200 ease-in-out hover:bg-primary hover:text-white ${isReplyActive ? "border-primary bg-primary text-white" : ""}`}
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
