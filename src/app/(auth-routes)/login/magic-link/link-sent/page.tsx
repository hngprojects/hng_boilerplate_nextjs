"use client";

import { Check } from "lucide-react";

import { Button } from "~/components/ui/button";

const handleOpenEmail = () => {
  window.location.href = "mailto:";
};
const MagicLinkSuccess = () => {
  return (
    <div className="my-8 flex min-h-full items-center justify-center bg-gray-50 px-0 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="font-inter text-neutralColor-dark-2 mb-5 text-center text-2xl font-medium leading-tight">
            Sent! Check your email.
          </h1>

          <div className="mx-auto mt-5 flex h-24 w-24 items-center justify-center rounded-full bg-success">
            <Check
              className="mx-auto h-20 w-20 text-center text-white"
              data-testid="check-icon"
            />
          </div>

          <p className="font-inter text-neutralColor-dark-2 mt-8 text-center text-base font-normal leading-6">
            We have sent an email to talk2johnsnow@gmail.com. It contains
            instructions on how to get started.
          </p>

          <Button
            variant="outline"
            type="button"
            onClick={handleOpenEmail}
            className="mt-10 h-12 w-full rounded-md border border-primary bg-white px-4 py-3 text-primary hover:bg-orange-600 hover:text-white focus:outline-none"
          >
            Open Email
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MagicLinkSuccess;
