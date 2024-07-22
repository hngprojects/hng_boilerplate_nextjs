import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

interface Comment {
  name: string;
  message: string;
  imageLink: string;
  timeAgo: string;
}

interface BlogCommentProperties {
  data: Comment;
}

const BlogComment: React.FC<BlogCommentProperties> = ({ data }) => {
  return (
    <div
      className={`my-[8px] flex w-full flex-row rounded-[6px] px-[28px] py-[20px] shadow-[0px_3px_14px_3px_rgba(10,57,176,0.12)]`}
    >
      {data.imageLink === "" ? (
        <div className="relative mr-[8px] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-border">
          <Image
            width={30}
            height={30}
            src="/images/blogcommentsection/person.svg"
            alt="profile image"
          />
        </div>
      ) : (
        <Avatar className="mr-[8px] h-[50px] w-[50px]">
          <AvatarImage src={data.imageLink} alt="picture of a user" />
          <AvatarFallback>Anonymous</AvatarFallback>
        </Avatar>
      )}
      <div className="flex w-full flex-col">
        <div className="flex w-full justify-between">
          <p className="neutral-dark-1 text-[18px] font-[500] leading-[24px]">
            {data.name}
          </p>
          <p className="text-[16px] font-[400] leading-[19.36px] text-neutral-dark-1">
            {data.timeAgo}
          </p>
        </div>
        <p className="mt-[4px] max-w-[650px] text-[18px] font-[400] leading-[21.78px] text-neutral-dark-1">
          {data.message}
        </p>
      </div>
    </div>
  );
};

export default BlogComment;
