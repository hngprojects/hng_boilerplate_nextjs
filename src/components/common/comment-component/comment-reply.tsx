import { Session } from "next-auth";
import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Textarea } from "~/components/ui/textarea";
import CustomButton from "../common-button/common-button";
import ButtonWrapper from "./button-wrapper";

export type ReplyFormProperties = {
  onSubmit: (content: string) => void;
  session: Session | null;
};

export function ReplyForm({ onSubmit, session }: ReplyFormProperties) {
  const [replyContent, setReplyContent] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (replyContent.trim() === "") {
      setError(true);
      return;
    }
    onSubmit(replyContent);
    setReplyContent("");
    setError(false);
  };

  const handleChange = (event_: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyContent(event_.target.value);
    if (error) {
      setError(false);
    }
  };

  return (
    <div className="flex items-start gap-3">
      <Avatar className="h-8 w-8 sm:h-10 sm:w-10" data-testid="avatar">
        <AvatarImage
          src={session?.user?.image ?? undefined}
          alt={session?.user?.name ?? "profile image"}
          data-testid="reply-avatar"
        />
        <AvatarFallback data-testid="avatar-fallback">
          {session?.user?.name?.charAt(0) ?? "U"}
        </AvatarFallback>
      </Avatar>
      <div className="w-full flex-1">
        <Textarea
          data-testid="reply-input"
          placeholder="Write your reply..."
          className={`min-h-[106px] w-full resize-none rounded-lg bg-zinc-50 py-5 pl-4 pr-6 text-sm text-[#656565] sm:text-base ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-primary focus:border-primary focus:ring-0 focus-visible:ring-0 focus-visible:ring-transparent"
          } focus:ring-1`}
          value={replyContent}
          onChange={handleChange}
          rows={3}
        />
        {error && (
          <p className="mt-1 text-xs text-red-500 sm:text-sm">
            Please enter a reply before submitting.
          </p>
        )}
        <div className="mt-3 flex justify-end pb-3 sm:pb-6">
          <ButtonWrapper data-testid="reply-button-2" onClick={handleSubmit}>
            <CustomButton
              variant="primary"
              className="h-10 px-8 text-sm font-medium"
            >
              Reply
            </CustomButton>
          </ButtonWrapper>
        </div>
      </div>
    </div>
  );
}
