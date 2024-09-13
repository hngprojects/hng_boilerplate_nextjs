"use client";

import axios from "axios";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

import { getApiUrl } from "~/actions/getApiUrl";
import CustomButton from "~/components/common/common-button/common-button";
import { Input } from "~/components/common/input";
import LoadingSpinner from "~/components/miscellaneous/loading-spinner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { useToast } from "~/components/ui/use-toast";
import noJob from "../../../../public/images/career/noJob.svg";

function Nojobs() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const t = useTranslations("noJobs");

  const locale = localStorage.getItem("preferredLanguage");
  const toastDesc =
    locale === "fr"
      ? "Veuillez fournir votre e-mail"
      : locale === "es"
        ? "Por favor, proporcione su correo electrónico"
        : "Please provide a valid email";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = (email: string): boolean => emailRegex.test(email);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async () => {
    if (!isValidEmail(email)) {
      setError(true);

      toast({
        title: "Error",
        description: toastDesc,
        variant: "destructive",
      });
      return;
    }
    setLoading(true);

    const apiUrl = await getApiUrl();
    await axios
      .post(
        `${apiUrl}/api/v1/newsletter-subscription`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then(() => {
        toast({
          title: "Thank you for subscribing!",
          description:
            "You've successfully joined our newsletter. We're excited to keep you updated with our latest news and offers!",
          variant: "default",
        });
        setIsOpen(false);
        setLoading(false);
        setEmail("");
        setIsSubscribed(true);
      })
      .catch((error) => {
        if (error?.response) {
          const errorData = error.response.data;
          if (errorData.status_code === 400) {
            toast({
              title: "You're already subscribed!",
              description:
                "It looks like you're already on our list. Thank you for being part of our community!",
              variant: "default",
            });
          } else {
            toast({
              title: "Oops! Something went wrong.",
              description:
                "We encountered an issue while trying to subscribe you to our newsletter. Check your internet connection or contact support if the problem persists.",
              variant: "destructive",
            });
            setLoading(false);
          }
          setLoading(false);
          return;
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <Image src={noJob} alt="No Job" />
      </div>

      <h3 className="font-inter mb-1 text-center text-[22px] font-semibold leading-normal text-neutral-800 sm:w-[auto]">
        {t("noJobsTitle")}
      </h3>
      <p className="font-inter text-wrap text-center text-[16px] font-normal leading-normal text-neutral-600 sm:text-[18px]">
        {isSubscribed ? t("subscribed") : t("noJobsContent")}
      </p>

      {!isSubscribed && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <div className="mt-4 flex justify-center">
              <button className="rounded bg-primary px-6 py-4 text-background hover:bg-destructive">
                {t("button")}
              </button>
            </div>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t("modalTitle")}</DialogTitle>
              <DialogDescription>{t("noJobsContent")}</DialogDescription>
            </DialogHeader>

            <div className="">
              <div className="item flex h-[46px] w-full items-center justify-start">
                <div className="flex grow flex-col gap-0.5">
                  <Input
                    name="email"
                    placeholder={t("placeholder")}
                    className={`border-r-none text-md h-[46px] rounded-r-none border-r-0 border-r-transparent bg-transparent active:border-transparent ${error && "!border-red-500"}`}
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    onBlur={() =>
                      email.length === 0 ? setError(true) : setError(false)
                    }
                  />
                </div>
                <CustomButton
                  variant="primary"
                  className="h-full transition-all hover:bg-primary/80"
                  onClick={handleSubmit}
                >
                  {loading ? (
                    <LoadingSpinner className="size-4 animate-spin sm:size-5" />
                  ) : (
                    t("modalButton")
                  )}
                </CustomButton>
              </div>
              {error && (
                <small className="mt-0.5 block text-xs text-red-500">
                  {t("error")}
                </small>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default Nojobs;
