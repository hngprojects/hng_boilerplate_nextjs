import { Session } from "next-auth";

import Comment from "~/components/common/Comment";
import { sampleComments } from "~/components/common/Comment/sample-comments";

const CommentPage = () => {
  const mockSession: Session = {
    expires: "1",
    user: { email: "a", name: "Adeyinka Akinsanya", image: "c" },
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
