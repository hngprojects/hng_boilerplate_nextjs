"use client";

import { NextPage } from "next";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import reply from "../../../../public/assets/comment.svg";
import avatar from "../../../../public/assets/Ellipse 1.svg";
import like from "../../../../public/assets/like.svg";
import repost from "../../../../public/assets/repost.svg";
import share from "../../../../public/assets/share.svg";
import unlike from "../../../../public/assets/unlike.svg";

interface Comment {
  id: number;
  name: string;
  username: string;
  content: string;
  date: string;
  time: string;
  likes: number;
  dislikes: number;
  replies: Comment[];
}

const commentsData: Comment[] = [
  {
    id: 1,
    name: "Uduak Essien",
    username: "@Uduess",
    content:
      "Living a balanced lifestyle is essential. Focus on healthy eating, regular exercise, and mental well-being. A well-rounded lifestyle leads to a happier, more fulfilling life. Embrace positive habits and enjoy the journey.",
    date: "02 Jan, 2020",
    time: "Wed 02:30pm",
    likes: 20,
    dislikes: 0,
    replies: [
      {
        id: 4,
        name: "Uduak Essien",
        username: "@Uduess",
        content:
          "A well-rounded lifestyle leads to a happier, more fulfilling life. Embrace positive habits and enjoy the journey.",
        date: "03 Jan, 2020",
        time: "Wed 04:00pm",
        likes: 20,
        dislikes: 0,
        replies: [],
      },
      {
        id: 5,
        name: "Uduak Essien",
        username: "@Uduess",
        content:
          "A well-rounded lifestyle leads to a happier, more fulfilling life. Embrace positive habits and enjoy the journey.",
        date: "03 Jan, 2020",
        time: "Wed 04:00pm",
        likes: 20,
        dislikes: 0,
        replies: [],
      },
    ],
  },
  {
    id: 2,
    name: "Uduak Essien",
    username: "@Uduess",
    content:
      "Living a balanced lifestyle is essential. Focus on healthy eating, regular exercise, and mental well-being. A well-rounded lifestyle leads to a happier, more fulfilling life. Embrace positive habits and enjoy the journey",
    date: "02 Jan, 2020",
    time: "Wed 02:30pm",
    likes: 20,
    dislikes: 0,
    replies: [],
  },
  {
    id: 3,
    name: "Uduak Essien",
    username: "@Uduess",
    content:
      "Living a balanced lifestyle is essential. Focus on healthy eating, regular exercise, and mental well-being. A well-rounded lifestyle leads to a happier, more fulfilling life. Embrace positive habits and enjoy the journey",
    date: "02 Jan, 2020",
    time: "Wed 02:30pm",
    likes: 20,
    dislikes: 0,
    replies: [],
  },
];

const Comments: NextPage = () => {
  const [comments, setComments] = useState<Comment[]>(commentsData);
  const [showReplies, setShowReplies] = useState<{ [key: number]: boolean }>(
    {},
  );

  useEffect(() => {
    setComments(commentsData);
  }, []);

  const toggleReplies = (id: number) => {
    setShowReplies((previous) => ({
      ...previous,
      [id]: !previous[id],
    }));
  };

  return (
    <div className="sm:px-18 container mx-auto px-9 py-10 md:px-36 lg:px-64">
      <h1 className="mb-4 text-2xl font-medium">Comments</h1>
      {comments.map((comment) => (
        <div key={comment.id}>
          <CommentBox
            comment={comment}
            showReplies={showReplies}
            toggleReplies={toggleReplies}
          />
          {showReplies[comment.id] &&
            comment.replies.map((reply) => (
              <div
                key={reply.id}
                className="ml-5 mt-2 sm:ml-10 md:ml-20 lg:ml-40"
              >
                <CommentBox
                  comment={reply}
                  showReplies={showReplies}
                  toggleReplies={toggleReplies}
                />
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

interface CommentBoxProperties {
  comment: Comment;
  showReplies: { [key: number]: boolean };
  toggleReplies: (id: number) => void;
}

const CommentBox: React.FC<CommentBoxProperties> = ({
  comment,
  toggleReplies,
}) => {
  return (
    <div className="mb-4 rounded-lg border bg-card p-4">
      <div className="mb-2 flex items-center">
        <Image
          src={avatar}
          alt="Avatar"
          width={40}
          height={40}
          className="mr-2 rounded-full"
        />
        <div>
          <h2 className="text-xl font-medium text-card-foreground">
            {comment.name}
          </h2>
          <p className="text-sm font-medium text-muted-foreground">
            {comment.username}
          </p>
        </div>
      </div>
      <div className="ml-12 sm:ml-16">
        <p className="mb-2 text-muted-foreground">{comment.content}</p>
        <div className="text-xs text-muted-foreground">
          {comment.date}, {comment.time}
        </div>
        <div className="mt-2 flex items-center gap-4">
          <div className="flex items-center rounded-md border border-border bg-muted px-2 py-1">
            <Image src={like} alt="Like" className="h-4 w-4" />
            <span className="ml-1 text-xs">{comment.likes}</span>
          </div>
          <button className="flex items-center rounded-md border border-border bg-muted px-3 py-1.5">
            <Image src={unlike} alt="Unlike" className="h-4 w-4" />
          </button>
          <button className="rounded-md border border-border bg-muted px-3 py-1.5">
            <Image src={share} alt="Share" className="h-4 w-4" />
          </button>
          <button className="rounded-md border border-border bg-muted px-3 py-1.5">
            <Image src={repost} alt="Repost" className="h-4 w-4" />
          </button>
          <button
            className="flex items-center rounded-md border border-border bg-muted px-3 py-1.5"
            onClick={() => toggleReplies(comment.id)}
          >
            <Image src={reply} alt="Reply" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
