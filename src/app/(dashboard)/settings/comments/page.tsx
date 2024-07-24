import HBPCommentBox from "~/components/common/comment";
import { sampleComments } from "~/components/common/comment/sample-comments";

const CommentPage = () => {
  return (
    <div className="my-6 flex items-center justify-center">
      <div className="flex flex-col gap-y-6">
        <p className="text-2xl font-medium leading-normal">Comments</p>
        {sampleComments.map((comment) => (
          <HBPCommentBox
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
