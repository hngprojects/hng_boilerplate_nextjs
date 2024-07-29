"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Loader } from "lucide-react";
import Link from "next/link";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import WordCounter from "~/components/miscellaneous/WordCounter";
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
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";
import { useProducts } from "~/hooks/admin-product/use-products.persistence";
import { cn, generateId, getCurrentDateTime, simulateDelay } from "~/lib/utils";
import { ProductTableProperties } from "~/types/admin-product.types";
import { NewProductSchema } from "../_components/schema/schema";
import { CATEGORIES } from "../data/categories.moct";
import ProjectLogo from "./form-images/project-logo";

const MAX_CHAR = 160;

const ProductDetailsComponent = ({
  product,
}: {
  product: ProductTableProperties;
}) => {
  const { addProduct } = useProducts();
  const [isLoading, startTransition] = useTransition();

  const new_product_form = useForm<z.infer<typeof NewProductSchema>>({
    defaultValues: {
      product_name: "",
      description: "",
      price: "",
      category: "",
      quantity: "",
      media: {
        url: "",
        id: "",
      },
    },
    resolver: zodResolver(NewProductSchema),
  });

  const hasProjectLogo = new_product_form.getValues("media.url");

  const onSubmit = async (values: z.infer<typeof NewProductSchema>) => {
    startTransition(async () => {
      const date_data = getCurrentDateTime();
      await simulateDelay(3);
      addProduct({
        product_id: `P${generateId(6)}`,
        category: values.category,
        description: values.description,
        name: values.product_name,
        price: Number(values.price),
        stock: Number(values.quantity),
        image: "/product/product-image.webp",
        status: "in_stock",
        date_added: date_data.date_added,
        time: date_data.time,
      });
      new_product_form.reset();
    });
  };

  return (
    <div className="flex w-full flex-col gap-y-8 md:gap-y-16">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-x-2 md:gap-x-4">
          <Link
            href={"/dashboard/products"}
            className="rounded-sm border p-0.5 hover:bg-gray-200"
          >
            <ArrowLeft />
          </Link>
          <span className="font-medium text-neutral-dark-2 sm:text-[20px] md:font-semibold">
            {product.name}
          </span>
          <span
            className={cn(
              "flex items-center gap-x-1 whitespace-nowrap rounded-full pl-2 text-sm leading-5 text-neutral-dark-1 md:gap-x-2",
            )}
          >
            <span
              className={cn("size-3 rounded-full", {
                "bg-[#6DC347]": product.status === "in_stock",
                "bg-[#DC2626]": product.status === "low_on_stock",
                "bg-[#EAB308]": product.status === "out_of_stock",
              })}
            />
            {product.status === "in_stock" && "In Stock"}
            {product.status === "low_on_stock" && "Low on Stock"}
            {product.status === "out_of_stock" && "Out of Stock"}
          </span>
        </div>
        <div className="flex items-center justify-end gap-x-4">
          <Button
            disabled={isLoading}
            type="button"
            variant="outline"
            size="default"
            className="rounded-md bg-transparent px-4 py-3 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Discard
          </Button>
          <Button
            disabled={isLoading}
            type="submit"
            variant="default"
            size="default"
            className="rounded-md bg-primary px-4 py-3 font-normal text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            {isLoading ? (
              <span className="flex items-center gap-x-2">
                <span className="animate-pulse">Saving...</span>{" "}
                <Loader className="size-4 animate-spin sm:size-5" />
              </span>
            ) : (
              <span>Save changes</span>
            )}
          </Button>
        </div>
      </div>
      <Form {...new_product_form}>
        <form
          onSubmit={new_product_form.handleSubmit(onSubmit)}
          className="flex h-full w-full flex-col gap-y-2"
        >
          <div className="flex h-full w-full flex-col gap-y-2 px-2 min-[500px]:px-6">
            {" "}
            <FormField
              control={new_product_form.control}
              name="product_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-neutral-dark-2">
                    Title<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="product_name"
                      disabled={isLoading}
                      placeholder="Product name"
                      className="bg-transparent placeholder:text-slate-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={new_product_form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-neutral-dark-2">
                    Description
                  </FormLabel>
                  <FormControl>
                    <div className="relative flex w-full flex-col gap-y-2">
                      <Textarea
                        disabled={isLoading}
                        placeholder="Enter product description"
                        className={cn(
                          "h-20 resize-none bg-transparent placeholder:text-slate-400",
                          field.value.length > MAX_CHAR
                            ? "focus-visible:outline-red-500 focus-visible:ring-red-500"
                            : "",
                        )}
                        {...field}
                      />
                      <div className="flex w-full items-center justify-between">
                        <span className="whitespace-nowrap text-sm text-slate-500">
                          Maximum of {MAX_CHAR} characters
                        </span>
                        <WordCounter length={MAX_CHAR} word={field.value} />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage data-testid="password-error" />
                </FormItem>
              )}
            />
            <FormField
              control={new_product_form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-neutral-dark-2">
                    Category
                  </FormLabel>
                  <FormControl>
                    <Select {...field} onValueChange={field.onChange}>
                      <SelectTrigger className="bg-transparent">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent className="z-[99999]">
                        <SelectGroup>
                          <SelectLabel>Fruits</SelectLabel>
                          {CATEGORIES.map((category) => (
                            <SelectItem
                              key={category.value}
                              value={category.value}
                            >
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex w-full items-center gap-x-4 gap-y-4 xl:flex-col">
              {" "}
              <FormField
                control={new_product_form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className="relative w-full">
                    <FormLabel className="font-medium text-neutral-dark-2">
                      Standard Price
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <div className="relative flex w-full items-center gap-x-2">
                        <span className="absolute left-2 font-medium text-black">
                          $
                        </span>
                        <Input
                          disabled={isLoading}
                          placeholder="0.00"
                          className="bg-transparent pl-8 placeholder:text-slate-400"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="absolute -bottom-5" />
                  </FormItem>
                )}
              />
              <FormField
                control={new_product_form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem className="relative w-full">
                    <FormLabel className="font-medium text-neutral-dark-2">
                      Quantity<span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="0.00"
                        className="bg-transparent placeholder:text-slate-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="absolute -bottom-5" />
                  </FormItem>
                )}
              />
            </div>
            <div className="relative mt-2 flex h-fit min-h-[125px] w-full flex-col gap-y-2 rounded-xl md:rounded-2xl">
              <p className="font-medium text-neutral-dark-2">Media</p>
              <ProjectLogo form={new_product_form} name="media" />
              {hasProjectLogo.length === 0 &&
                new_product_form.formState.errors.media && (
                  <p className="mt-0.5 w-full justify-self-start border-l-4 border-red-500 bg-red-500/10 px-2 text-sm font-bold text-red-500">
                    {new_product_form.formState.errors.media.message}
                  </p>
                )}
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProductDetailsComponent;
