"use client";

import React, { useState } from "react";

import { cn } from "../../../lib/utils";
import { Card, CardContent } from "../../ui/card";
import { CommentBody } from "./comment-body";
import { ReplyForm } from "./comment-reply";

export type CommentProperties = React.ComponentProps<typeof Card> & {
  id: string;
  avatar: string;
  name: string;
  username: string;
  content: string;
  timestamp: string;
  date?: string;
  likes: number;
  dislikes: number;
  className?: string;
};

export type ReplyProperties = Omit<CommentProperties, "date">;

const HBPCommentBox = ({
  id,
  className,
  avatar,
  name,
  username,
  content,
  timestamp,
  // date,
  likes: initialLikes,
  dislikes: initialDislikes,
  ...properties
}: CommentProperties) => {
  const [showReply, setShowReply] = useState(false);
  const [replies, setReplies] = useState<ReplyProperties[]>([]);
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);

  const handleReplySubmit = (replyContent: string) => {
    if (replyContent.trim()) {
      const newReply: ReplyProperties = {
        id: Date.now().toString(),
        avatar: "/path/to/default/avatar.png",
        name: "Current User",
        username: "currentuser",
        content: replyContent,
        timestamp: new Date().toLocaleString(),
        likes: 0,
        dislikes: 0,
      };
      setReplies([...replies, newReply]);
      setShowReply(false);
    }
  };

  const handleLike = (type: "comment" | "reply", id: string) => {
    if (type === "comment") {
      setLikes((previous) => previous + 1);
    } else {
      setReplies((previous) =>
        previous.map((reply) =>
          reply.id === id ? { ...reply, likes: reply.likes + 1 } : reply,
        ),
      );
    }
  };

  const handleDislike = (type: "comment" | "reply", id: string) => {
    if (type === "comment") {
      setDislikes((previous) => previous + 1);
    } else {
      setReplies((previous) =>
        previous.map((reply) =>
          reply.id === id ? { ...reply, dislikes: reply.dislikes + 1 } : reply,
        ),
      );
    }
  };

  return (
    <div
      className="flex w-full max-w-[864px] flex-col gap-y-3 sm:gap-y-6"
      data-testid="comment-box-container"
    >
      <Card
        className={cn(
          "w-full rounded border-[0.8px] border-stroke-colors-stroke bg-popover px-4 py-[18px]",
          className,
        )}
        {...properties}
        data-testid="comment-card"
      >
        <CardContent className="p-0">
          <CommentBody
            type="comment"
            id={id}
            avatar={avatar}
            name={name}
            username={username}
            content={content}
            timestamp={timestamp}
            likes={likes}
            dislikes={dislikes}
            onLike={() => handleLike("comment", id)}
            onDislike={() => handleDislike("comment", id)}
            onReply={() => setShowReply(!showReply)}
          />
        </CardContent>
      </Card>

      {showReply && (
        <div className="relative" data-testid="reply-form-container">
          <ReplyForm onSubmit={handleReplySubmit} />
        </div>
      )}

      {replies.map((reply) => (
        <div
          key={reply.id}
          className="relative ml-4 sm:ml-12"
          data-testid={`reply-${reply.id}`}
        >
          {/* TODO: remove the absolute positioning if it does nothing */}
          <div className="lbottom-0 top absolute left-0 w-px bg-gray-200" />
          <Card className="w-full">
            <CardContent className="p-3 sm:p-4">
              <CommentBody
                type="reply"
                id={reply.id}
                avatar={reply.avatar}
                name={reply.name}
                username={reply.username}
                content={reply.content}
                timestamp={reply.timestamp}
                likes={reply.likes}
                dislikes={reply.dislikes}
                onLike={() => handleLike("reply", reply.id)}
                onDislike={() => handleDislike("reply", reply.id)}
              />
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default HBPCommentBox;
