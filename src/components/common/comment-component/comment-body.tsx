import moment from "moment";
import { Session } from "next-auth";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import CommentActions from "./comment-actions";

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
  session: Session | null;
  isReplyActive: boolean;
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
  isReplyActive,
  session,
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
      <div
        className="flex w-full flex-1 flex-col gap-y-3.5"
        data-testid="comment-content"
      >
        <div className="flex flex-col items-start">
          <span
            className="font-inter mb-1.5 text-base font-semibold leading-normal text-neutral-dark-2 sm:text-2xl sm:font-medium"
            id={`comment-${id}`}
            data-testid="comment-name"
          >
            {name}
          </span>
          <span
            className="font-inter text-xs font-medium text-neutral-dark-1 sm:text-sm"
            data-testid="comment-username"
          >
            {`@${username}`}
          </span>
        </div>
        <div className="flex flex-col gap-y-3">
          <p
            className="text-sm text-muted-foreground sm:text-base"
            data-testid="comment-text"
          >
            {content}
          </p>
          <p
            className="text-xs text-neutral-dark-1 sm:text-sm"
            data-testid="comment-timestamp"
          >
            <span>{moment(timestamp).format("DD MMM, YYYY")}</span>
            <span className="ml-3">
              {moment(timestamp).format("ddd hh:mma")}
            </span>
          </p>
        </div>
        {session && (
          <div data-testid="action-buttons-container">
            <CommentActions
              type={type}
              isReplyActive={isReplyActive}
              likes={likes}
              dislikes={dislikes}
              onLike={onLike}
              onDislike={onDislike}
              onReply={onReply}
            />
          </div>
        )}
      </div>
    </div>
  );
}
