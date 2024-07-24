"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

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

type FormData = z.infer<typeof formSchema>;

function SignUp() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  return (
    <>
      <div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl font-bold">Sign Up</h1>
          <p className="text-gray-500">
            Create an account to get started with us.
          </p>
        </div>

        <div className="mx-auto w-2/4">
          <Form {...form}>
            <form className="space-y-8">
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <div>
                      <FormLabel>Fullname</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your fullname" {...field} />
                      </FormControl>
                      <FormMessage />
                    </div>
                    <div>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </div>
                    <div>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your password"
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

export default SignUp;
