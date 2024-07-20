import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import ActionButtons from "./ActionButtons";

export type CommentBodyProperties = {
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
      className="flex items-start justify-center gap-3"
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
      <div className="w-full flex-1" data-testid="comment-content">
        <div className="flex flex-col items-start">
          <span
            className="font-inter text-base font-semibold leading-normal sm:text-2xl sm:font-medium"
            id={`comment-${id}`}
            data-testid="comment-name"
          >
            {name}
          </span>
          <span
            className="font-inter text-xs font-medium text-[#525252] sm:text-sm"
            data-testid="comment-username"
          >
            <span>@</span>
            <span>{username}</span>
          </span>
        </div>
        <p className="text-sm sm:text-base" data-testid="comment-text">
          {content}
        </p>
        <span
          className="text-xs text-gray-500 sm:text-sm"
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
