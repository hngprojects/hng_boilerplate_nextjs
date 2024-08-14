"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import FormSchema from "./formSchema";
import { FormResponse, submitForm } from "./formSubmitHelper";

export default function AdditionalInquiriesForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  const { handleSubmit } = form;

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function onSubmit(_values: z.infer<typeof FormSchema>) {
    const response: FormResponse = await submitForm();

    if (response.success) {
      setSuccessMessage(response.message);
      setErrorMessage("");
      form.reset();
    } else {
      setErrorMessage(response.message);
      setSuccessMessage("");
      form.reset();
    }
  }

  return (
    <div className="mx-auto mb-[11.375rem] mt-[2.75rem] flex w-full max-w-[676px] flex-col gap-[28px] md:mb-[4rem] md:gap-[4.125rem]">
      <div className="flex flex-col items-center gap-[.9375rem] text-center md:gap-[9px]">
        <h3 className="text-[1.25rem] font-[700] leading-[33.89px] text-primary md:text-[1.75rem]">
          Still have questions?
        </h3>
        <p className="text-[1rem] font-[400] leading-[1.3613rem] text-[#525252] md:text-[1.125rem]">
          Fill the form and enter your message
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-[27px] md:gap-[1.5rem]"
          noValidate
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-[1rem] font-[400] leading-[1.5rem] text-[#434343] md:text-[1.25rem]">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter email address"
                    {...field}
                    className="h-[3rem] w-full rounded-md border-[1px] border-[#B2B0B0] px-[1rem] py-[.75rem] text-[.875rem] font-[400] leading-[1.35rem] text-foreground outline-none placeholder:text-[.875rem] focus-visible:ring-0 md:h-[4rem] md:px-0 md:py-[1.25rem] md:pl-[1rem] md:pr-[1.5rem] md:text-[18px] md:placeholder:text-[18px]"
                  />
                </FormControl>
                {fieldState.error && (
                  <span className="text-error">{fieldState.error.message}</span>
                )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-[1rem] font-[400] leading-[1.5rem] text-[#434343] md:text-[1.25rem]">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter full name"
                    {...field}
                    className="h-[3rem] w-full rounded-md border-[1px] border-[#B2B0B0] px-[1rem] py-[.75rem] text-[.875rem] font-[400] leading-[1.35rem] text-foreground outline-none placeholder:text-[.875rem] focus-visible:ring-0 md:h-[4rem] md:px-0 md:py-[1.25rem] md:pl-[1rem] md:pr-[1.5rem] md:text-[18px] md:placeholder:text-[18px]"
                  />
                </FormControl>
                {fieldState.error && (
                  <span className="text-error">{fieldState.error.message}</span>
                )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-[1rem] font-[400] leading-[1.5rem] text-[#434343] md:text-[1.25rem]">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Message..."
                    {...field}
                    className="h-[12.75rem] w-full rounded-md border-[1px] border-[#B2B0B0] pb-[7rem] pl-[1rem] pr-[10px] pt-[10px] text-[.8125rem] outline-none focus-visible:ring-0 md:text-[1.125rem]"
                  />
                </FormControl>
                {fieldState.error && (
                  <span className="text-error">{fieldState.error.message}</span>
                )}
              </FormItem>
            )}
          />
          <div className="text-center">
            <Button
              type="submit"
              className="mb-3 mt-[1.75rem] h-[3rem] w-full rounded-md bg-primary px-4 py-2 text-[1rem] font-[400] leading-[1.3613rem] text-white hover:bg-destructive md:h-[3.75rem] md:text-[1.125rem]"
            >
              Submit
            </Button>
            {successMessage && (
              <div className="text-success">{successMessage}</div>
            )}
            {errorMessage && <div className="text-error">{errorMessage}</div>}
          </div>
        </form>
      </Form>
    </div>
  );
}
