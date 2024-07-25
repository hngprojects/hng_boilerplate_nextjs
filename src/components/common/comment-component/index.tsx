"use client";

import { AnimatePresence, AnimationProps, motion } from "framer-motion";
import { Session } from "next-auth";
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
  session: Session | null;
};

export type ReplyProperties = Omit<CommentProperties, "date">;

const Comment = ({
  id,
  className,
  avatar,
  name,
  username,
  content,
  timestamp,
  likes: initialLikes,
  dislikes: initialDislikes,
  session,
  ...properties
}: CommentProperties) => {
  const [showReply, setShowReply] = useState(false);
  const [replies, setReplies] = useState<ReplyProperties[]>([]);
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);

  const animation: AnimationProps = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto" },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
    },
  };

  const handleReplySubmit = (replyContent: string) => {
    if (replyContent.trim()) {
      const newReply: ReplyProperties = {
        id: Date.now().toString(),
        avatar: "/path/to/default/avatar.png",
        name: session?.user?.name ?? "Current User",
        username: session?.user?.name?.[0]?.toLowerCase() ?? "currentuser",
        content: replyContent,
        timestamp: new Date().toISOString(),
        likes: 0,
        dislikes: 0,
        session,
      };
      setReplies([newReply, ...replies]);
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
    <div className="flex w-full flex-col" data-testid="comment-box-container">
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
            session={session}
            onLike={() => handleLike("comment", id)}
            onDislike={() => handleDislike("comment", id)}
            onReply={() => setShowReply(!showReply)}
            isReplyActive={showReply}
          />
        </CardContent>
      </Card>

      <div
        className={`duration-300 ${replies.length > 0 || showReply ? "pt-3 sm:pt-6" : "pt-0"}`}
      >
        <AnimatePresence>
          {showReply && (
            <motion.div
              {...animation}
              className="overflow-hidden"
              data-testid="reply-form-container"
            >
              <ReplyForm session={session} onSubmit={handleReplySubmit} />
            </motion.div>
          )}
        </AnimatePresence>
        {replies.length > 0 && (
          <div className="flex flex-col gap-y-3 sm:gap-y-6">
            {replies.map((reply) => (
              <div
                key={reply.id}
                className="ml-[39px] sm:ml-[135px]"
                data-testid={`reply-${reply.id}`}
              >
                <Card
                  className={cn(
                    "w-full rounded border-[0.8px] border-stroke-colors-stroke bg-popover px-4 py-[18px]",
                    className,
                  )}
                >
                  <CardContent className="p-0">
                    <CommentBody
                      {...reply}
                      isReplyActive={showReply}
                      type="reply"
                      session={session}
                      onLike={() => handleLike("reply", reply.id)}
                      onDislike={() => handleDislike("reply", reply.id)}
                    />
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
