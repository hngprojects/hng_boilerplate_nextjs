"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import { Textarea } from "~/components/ui/textarea";
import { formSchema, imageSchema } from "./schema";

function handleSubmit() {
  console.log();
}
function TableForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
    },
  });
  const formImage = useForm<z.infer<typeof imageSchema>>({
    resolver: zodResolver(imageSchema),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-[15px]"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => {
            return (
              <FormItem className="space-y-0">
                <FormLabel className="text-[14px] font-medium">
                  Product name
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    id="name"
                    placeholder="e.g Joh Doe"
                    {...field}
                    className="mt-[6px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => {
            return (
              <FormItem className="space-y-0">
                <FormLabel>Product Decription</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="add product description"
                    id="description"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => {
            return (
              <FormItem className="space-y-0">
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    id="price"
                    placeholder="e.g 2000.00"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => {
            return (
              <FormItem className="space-y-0">
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    id="quantity"
                    placeholder="e.g 1000"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={formImage.control}
          name="image"
          render={({ field }) => {
            return (
              <FormItem className="space-y-1">
                <FormLabel className="">Upload Images</FormLabel>
                <FormControl>
                  <Input type="file" id="image" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <div className="flex justify-end">
          <Button type="submit" className="bg-acent-300 text-sm text-white">
            Add Product
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default TableForm;
