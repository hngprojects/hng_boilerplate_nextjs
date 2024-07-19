import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import ActionButtons from "./ActionButtons";

type CommentBodyProperties = {
  type: "comment" | "reply";
  id: string;
  avatar: string;
  name: string;
  username: string;
  content: string;
  timestamp: string;
  likes: number;
  dislikes: number;
  onLike: () => void;
  onDislike: () => void;
  onReply?: () => void;
};

export function CommentBody({
  type,
  id,
  avatar,
  name,
  username,
  content,
  timestamp,
  likes,
  dislikes,
  onLike,
  onDislike,
  onReply,
}: CommentBodyProperties) {
  return (
    <div
      className="flex items-start justify-center gap-3  "
      aria-labelledby={`comment-${id}`}
      data-comment-id={id}
      data-testid="comment-body"
    >
      <Avatar className="h-8 w-8 sm:h-10 sm:w-10" data-testid="avatar">
        <AvatarImage src={avatar} alt={name} data-testid="avatar-image" />
        <AvatarFallback data-testid="avatar-fallback">
          {name.charAt(0)}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 w-full sm:w-auto" data-testid="comment-content">
        <div className="flex flex-col items-start ">
          <span
            className="font-semibold text-base sm:text-2xl font-inter sm:font-medium leading-normal"
            id={`comment-${id}`}
            data-testid="comment-name"
          >
            {name}
          </span>
          <span
            className="text-[#525252] font-inter text-xs sm:text-sm font-medium"
            data-testid="comment-username"
          >
            @{username}
          </span>
        </div>
        <p className="text-sm sm:text-base" data-testid="comment-text">
          {content}
        </p>
        <span
          className="text-xs sm:text-sm text-gray-500"
          data-testid="comment-timestamp"
        >
          {timestamp}
        </span>
        <div className="mt-2 sm:mt-3" data-testid="action-buttons-container">
          <ActionButtons
            type={type}
            likes={likes}
            dislikes={dislikes}
            onLike={onLike}
            onDislike={onDislike}
            onReply={onReply}
          />
        </div>
      </div>
    </div>
  );
}
