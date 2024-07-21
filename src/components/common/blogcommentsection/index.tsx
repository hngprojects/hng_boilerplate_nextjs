"use client";

import { useEffect, useState } from "react";

import CustomButton from "~/components/common/Button/button";
import BlogComment from "./blogcomment";

interface Comment {
  name: string;
  message: string;
  imageLink: string;
  timeAgo: string;
  timestamp: Date;
}

const dummyData: Comment[] = [
  {
    name: "Matthew",
    message:
      "Wow, I had no idea the history of computers was so long and complex! This is fascinating.",
    imageLink: "",
    timeAgo: "3m ago",
    timestamp: new Date(Date.now() - 3 * 60 * 1000),
  },
  {
    name: "Abraham",
    message:
      "It's amazing to see how much progress has been made in such a short time. Thanks for sharing this!",
    imageLink: "",
    timeAgo: "10m ago",
    timestamp: new Date(Date.now() - 10 * 60 * 1000),
  },
];

const formatTimeAgo = (timestamp: Date) => {
  const now = new Date();
  const difference = now.getTime() - timestamp.getTime();
  const minutes = Math.floor(difference / (1000 * 60));

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes}m ago`;
  if (minutes < 1440) return `${Math.floor(minutes / 60)}h ago`;
  return `${Math.floor(minutes / 1440)}d ago`;
};

export default function BlogCommentSection() {
  const [commentData, setCommentData] = useState<Comment[]>([]);
  const [commentInput, setCommentInput] = useState<string>("");

  useEffect(() => {
    setCommentData(
      dummyData.map((comment) => ({
        ...comment,
        timeAgo: formatTimeAgo(comment.timestamp),
      })),
    );
  }, []);

  const sendMessage = () => {
    if (commentInput.trim()) {
      const now = new Date();
      const newComment = {
        name: "Anonymous",
        message: commentInput,
        imageLink: "",
        timeAgo: formatTimeAgo(now),
        timestamp: now,
      };
      setCommentData([...commentData, newComment]);
      setCommentInput("");
    }
  };

  return (
    <section className="flex w-full flex-row justify-center bg-background">
      <div className="flex h-fit min-h-[316px] w-full max-w-[1445px] flex-col items-center px-[16px] pb-[24px] pt-[8px] font-[700] md:px-[220px]">
        <div className="flex w-full flex-col">
          <h2 className="neutral-dark-1 text-[24px] font-[700] leading-[29.05px]">
            Add a Comment
          </h2>
          <textarea
            required
            id="inputcomment"
            value={commentInput}
            onChange={(event) => setCommentInput(event.target.value)}
            placeholder="Type your comment here"
            className="mt-[12px] h-fit min-h-[120px] w-full rounded-[6px] border-[1px] border-border bg-outline px-[12px] py-[8px] text-[14px] font-[400] leading-[20px] text-black shadow-[0px_3px_14px_3px_rgba(10,57,176,0.12)] outline-none"
          ></textarea>
          <div onClick={sendMessage} className="mt-[20px] w-fit">
            <CustomButton variant="primary" size="lg">
              Send
            </CustomButton>
          </div>
        </div>
        <div className="my-[8px] flex w-full flex-col items-start">
          <h2 className="neutral-dark-1 mb-[8px] p-[8px] text-[24px] font-[700] leading-[33.89px]">
            Comments
          </h2>
          <div className="flex w-full flex-col">
            {commentData.map((dummy, index) => (
              <BlogComment data={dummy} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
