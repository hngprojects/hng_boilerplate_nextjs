import { Session } from "next-auth";

import Comment from "~/components/common/comment-component";
import { sampleComments } from "~/components/common/comment-component/sample-comments";

const CommentPage = () => {
  const mockSession: Session = {
    expires: "1",
    user: {
      name: "Current User",
      email: "user@example.com",
      id: "Strinf",
      image: "Strinf",
      access_token: "access_token",
    },
  };
  return (
    <div className="my-6 flex items-center justify-center px-3 sm:px-4">
      <div className="flex flex-col gap-y-3 sm:gap-y-6">
        <p className="text-2xl font-medium leading-normal">Comments</p>
        {sampleComments.map((comment) => (
          <Comment
            session={mockSession}
            key={comment.id}
            {...comment}
            className="rounded-lg bg-white shadow-sm"
          />
        ))}
      </div>
    </div>
  );
};

export default CommentPage;
