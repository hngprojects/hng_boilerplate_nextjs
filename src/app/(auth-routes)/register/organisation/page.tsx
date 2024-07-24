"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

function Organisation() {
  const formSchema = z.object({
    fullname: z.string().min(2, {
      message: "Fullname must be at least 2 characters.",
    }),
    email: z.string().min(2, {
      message: "Email must be at least 2 characters.",
    }),
    password: z.string().min(2, {
      message: "Password must be at least 2 characters.",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const [open, setOpen] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl font-bold">Create Organisation Account</h1>
          <p className="text-gray-500">
            Create an account to get started with us.
          </p>
        </div>

        <div className="mx-auto w-2/4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <div>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your company name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </div>
                    <div>
                      <FormLabel>Company Email Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </div>
                    <div className="flex gap-4">
                      <div className="w-full">
                        <FormLabel>Industry</FormLabel>
                        <Select>
                          <SelectTrigger className="">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Technology</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="w-full">
                        <FormLabel>Organization Type</FormLabel>
                        <Select>
                          <SelectTrigger className="">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Entertainment</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <h1 className="text-md">Company Address</h1>
                      <div className="flex gap-4">
                        <div className="w-full">
                          <FormLabel>Country</FormLabel>
                          <Select>
                            <SelectTrigger className="">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">Nigeria</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="w-full">
                          <FormLabel>State</FormLabel>
                          <Select>
                            <SelectTrigger className="">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">Lagos</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                    <div>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your company address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Create Account
              </Button>

              <div className="flex justify-center gap-2">
                <p className="text-sm">Already Have An Account?</p>
                <Link className="text-sm text-orange-500" href={"#"}>
                  Login
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Organisation;
