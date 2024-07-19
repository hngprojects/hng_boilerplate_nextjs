import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { useState } from "react";

import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { Textarea } from "../../ui/textarea";

type ReplyFormProperties = {
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
        <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-3">
          <Avatar
            className="h-8 w-8 sm:h-10 sm:w-10"
            data-testid="reply-avatar"
          >
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex-1 w-full">
            <Textarea
              placeholder="Write your reply..."
              className={`w-full text-[#656565] text-sm sm:text-base ${
                error
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-200 focus:border-[#F97316] focus:ring-[#F97316]"
              } focus:ring-1`}
              value={replyContent}
              onChange={handleChange}
              rows={3}
            />
            {error && (
              <p className="mt-1 text-xs sm:text-sm text-red-500">
                Please enter a reply before submitting.
              </p>
            )}
            <div className="mt-2 flex justify-end">
              <Button
                className="bg-[#F97316] hover:bg-[#F97316]/90 text-[#F8FAFC] text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2"
                onClick={handleSubmit}
              >
                Reply
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
