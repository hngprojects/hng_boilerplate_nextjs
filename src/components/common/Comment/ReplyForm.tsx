import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { useState } from "react";

import { Card, CardContent } from "../../ui/card";
import { Textarea } from "../../ui/textarea";
import CustomButton from "../Button/button";
import ButtonWrapper from "./ButtonWrapper";

export type ReplyFormProperties = {
  onSubmit: (content: string) => void;
};

export function ReplyForm({ onSubmit }: ReplyFormProperties) {
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
    <Card className="border border-gray-200">
      <CardContent className="p-2 sm:p-4">
        <div className="flex flex-col items-start space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
          <Avatar
            className="h-8 w-8 sm:h-10 sm:w-10"
            data-testid="reply-avatar"
          >
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="w-full flex-1">
            <Textarea
              data-testid="reply-input"
              placeholder="Write your reply..."
              className={`w-full text-sm text-[#656565] sm:text-base ${
                error
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "focus:border-bg-primary focus:ring-bg-primary border-gray-200"
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
            <div className="mt-2 flex justify-end">
              <ButtonWrapper
                data-testid="reply-button-2"
                onClick={handleSubmit}
              >
                <CustomButton variant="primary">Reply</CustomButton>
              </ButtonWrapper>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
