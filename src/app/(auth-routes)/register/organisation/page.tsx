"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useRouter } from "next-nprogress-bar";
import Link from "next/link";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { createOrg } from "~/actions/createOrg";
import LoadingSpinner from "~/components/miscellaneous/loading-spinner";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useToast } from "~/components/ui/use-toast";
import { organizationSchema } from "~/schemas";

function Organisation() {
  const router = useRouter();
  const { toast } = useToast();
  const { status } = useSession();
  const [isLoading, startTransition] = useTransition();

  if (status === "authenticated") {
    router.push("/dashboard");
  }

  const form = useForm<z.infer<typeof organizationSchema>>({
    resolver: zodResolver(organizationSchema),
    defaultValues: {
      name: "",
      description: "Company Description",
      email: "",
      industry: "",
      type: "",
      country: "",
      state: "",
      address: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof organizationSchema>) => {
    const token = sessionStorage.getItem("temp_token");
    startTransition(async () => {
      await createOrg(values, token ?? "").then(async (data) => {
        if (data.status === 201) {
          router.push("/login");
        }

        toast({
          title:
            data.status === 201
              ? "Organization created successfully"
              : "an error occurred",
          description: data.status === 201 ? "Continue to login" : data.error,
        });
      });
    });
  };

  return (
    <>
      <div>
        <div className="flex-col items-center gap-2 py-4 md:flex">
          <h1 className="text-xl font-bold md:text-2xl">
            Create Organisation Account
          </h1>
          <p className="text-gray-500">
            Create an account to get started with us.
          </p>
        </div>

        <div className="mx-auto md:w-2/4">
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
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
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
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
                  </FormItem>
                )}
              />
              <div className="flex flex-col gap-4 md:flex-row">
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col gap-2">
                      <div className="w-full">
                        <FormLabel>Industry</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value || ""}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Technology">
                                Technology
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col gap-2">
                      <div className="w-full">
                        <FormLabel>Organization Type</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value || ""}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Entertainment">
                                Entertainment
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-md">Company Address</h1>
                <div className="flex flex-col gap-4 md:flex-row">
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <div className="w-full">
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value || ""}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Nigeria">Nigeria</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </div>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <div className="w-full">
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value || ""}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Lagos">Lagos</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </div>
                    )}
                  />
                </div>
              </div>
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <div>
                      <FormLabel>Company Address</FormLabel>
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
                {isLoading ? (
                  <span className="flex items-center gap-x-2">
                    <span className="animate-pulse">
                      Creating Organization...
                    </span>{" "}
                    <LoadingSpinner className="size-4 animate-spin sm:size-5" />
                  </span>
                ) : (
                  <span>Create Organization</span>
                )}
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
