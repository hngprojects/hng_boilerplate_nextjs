import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { useState } from "react";

import { Card, CardContent } from "../../ui/card";
import { Textarea } from "../../ui/textarea";
import { Button } from "../Button";

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
        <div className="flex flex-col items-start space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
          <Avatar
            className="h-8 w-8 sm:h-10 sm:w-10"
            data-testid="reply-avatar"
          >
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="w-full flex-1">
            <Textarea
              placeholder="Write your reply..."
              className={`w-full text-sm text-[#656565] sm:text-base ${
                error
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-200 focus:border-[#F97316] focus:ring-[#F97316]"
              } focus:ring-1`}
              value={replyContent}
              onChange={handleChange}
              rows={3}
            />
            {error && (
              <p className="text-red-500·sm:text-sm·mt-1·text-xs">
                Please enter a reply before submitting.
              </p>
            )}
            <div className="mt-2 flex justify-end">
              <Button
                className="px-3·py-1·text-sm·text-[#F8FAFC]·hover:bg-[#F97316]/90·sm:px-4·sm:py-2·sm:text-base·bg-[#F97316]"
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
