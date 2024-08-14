"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Loader, Plus } from "lucide-react";
import { useRouter } from "next-nprogress-bar";
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
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";
import { cn, generateId, simulateDelay } from "~/lib/utils";
import { ProductTableProperties } from "~/types/admin-product.types";
import { EditProductSchema, MAX_CHAR } from "../_components/schema/schema";
import { STOCKS_SELECT } from "../data/categories.mock";
import { shouldDisableAddStocksButton } from "../data/stocks.mock";
import ProjectLogo from "./form-images/project-logo";

const ProductDetailsComponent = ({
  product,
}: {
  product: ProductTableProperties;
}) => {
  const [isLoading, startTransition] = useTransition();
  const router = useRouter();

  const new_product_form = useForm<z.infer<typeof EditProductSchema>>({
    defaultValues: {
      product_name: product.name || "",
      description: product.description || "",
      price: "",
      category: "",
      quantity: "",
      stocks: [
        {
          id: "P0001",
          size: "Small",
          stock: "0",
          price: "",
        },
        {
          id: "P0002",
          size: "Standard",
          price: String(product.price) || "",
        },
        {
          id: "P0003",
          size: "Large",
          stock: "0",
          price: "",
        },
      ],
    },
    resolver: zodResolver(EditProductSchema),
  });
  const FORM_STOCKS = new_product_form.getValues("stocks");
  const handleAddNewStock = () => {
    const previousStocks = FORM_STOCKS;
    new_product_form.setValue("stocks", [
      ...previousStocks,
      {
        id: `S${generateId(5)}`,
        size: "",
        stock: "",
        price: "",
      },
    ]);
  };

  const hasProjectLogo = new_product_form.getValues("media.url");
  new_product_form.watch("stocks");
  // DISABLE
  const disableAddStockButton = shouldDisableAddStocksButton({
    stocks: FORM_STOCKS,
  });
  const onSubmit = async () => {
    startTransition(async () => {
      await simulateDelay(3);

      new_product_form.reset();
    });
  };

  return (
    <Form {...new_product_form}>
      <form
        onSubmit={new_product_form.handleSubmit(onSubmit)}
        className="relative flex w-full flex-col gap-y-8 md:gap-y-10"
      >
        <div className="sticky top-0 flex w-full items-center justify-between bg-white/80 py-2 backdrop-blur">
          <div className="flex items-center gap-x-2 md:gap-x-4">
            <Link
              href={"/dashboard/products"}
              className="rounded-sm border p-0.5 hover:bg-gray-200"
            >
              <ArrowLeft className="size-4 min-[500px]:size-5" />
            </Link>
            <span className="text-sm font-medium text-neutral-dark-2 sm:text-[20px] md:font-semibold">
              {product.name}
            </span>
            <span
              className={cn(
                "flex items-center gap-x-1 whitespace-nowrap rounded-full text-xs leading-5 text-neutral-dark-1 min-[500px]:pl-2 min-[500px]:text-sm md:gap-x-2",
              )}
            >
              <span
                className={cn("size-3 rounded-full", {
                  "bg-[#6DC347]": product.status === "in_stock",
                  "bg-[#DC2626]": product.status === "out_of_stock",
                  "bg-[#EAB308]": product.status === "low_on_stock",
                })}
              />
              <span className="hidden min-[500px]:inline">
                {" "}
                {product.status === "in_stock" && "In Stock"}
                {product.status === "low_on_stock" && "Low on Stock"}
                {product.status === "out_of_stock" && "Out of Stock"}
              </span>
            </span>
          </div>
          <div className="flex items-center justify-end gap-x-2 min-[500px]:gap-x-4">
            <Button
              disabled={isLoading}
              onClick={() => router.push("/dashboard/products")}
              type="button"
              variant="ghost"
              size="default"
              className="h-7 rounded-sm border bg-transparent px-1.5 py-1 text-[10px] hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 min-[400px]:!h-8 min-[400px]:rounded-md min-[400px]:px-2 min-[400px]:py-2 min-[400px]:text-xs sm:h-10 sm:px-4 sm:py-3 sm:text-sm"
            >
              Discard
            </Button>
            <Button
              disabled={isLoading}
              type="submit"
              variant="ghost"
              size="default"
              className="h-7 rounded-sm border bg-primary px-1.5 py-1 text-[10px] font-normal text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 min-[400px]:!h-8 min-[400px]:rounded-md min-[400px]:px-2 min-[400px]:py-2 min-[400px]:text-xs sm:h-10 sm:px-4 sm:py-3 sm:text-sm"
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
        <div className="flex w-full flex-col gap-y-8 md:grid md:grid-cols-2 md:gap-6">
          {" "}
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2 rounded-[6px] p-4 shadow-[0_0_10px_rgba(0,0,0,0.1)] sm:gap-y-4 md:gap-y-6 xl:p-6">
              <div className="flex flex-col border-b border-gray-200 pb-3">
                <h2 className="text-xl font-medium text-neutral-dark-2 md:text-2xl md:font-semibold">
                  Product Details
                </h2>
                <p className="text-xs text-neutral-dark-2">
                  Make quick changes to your product.
                </p>
              </div>
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
                          <span className="whitespace-nowrap text-xs text-slate-500 sm:text-sm">
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
            </div>
            <div className="flex flex-col gap-y-2 rounded-[6px] shadow-[0_0_10px_rgba(0,0,0,0.1)] max-sm:pb-4 sm:gap-y-4 sm:p-4 md:gap-y-6 xl:p-6">
              <div className="flex flex-col border-b border-gray-200 pb-3 max-sm:p-4">
                <h2 className="text-xl font-medium text-neutral-dark-2 md:text-2xl md:font-semibold">
                  Stock
                </h2>
                <p className="text-xs text-neutral-dark-2">
                  Add and remove products
                </p>
              </div>
              <div className="flex flex-col divide-y divide-gray-200 rounded-[6px] border">
                <div className="grid w-full grid-cols-3 gap-2 bg-[#F1F5F9] p-4 text-sm font-medium text-neutral-dark-2">
                  <span>Size</span>
                  <span>Stock</span>
                  <span>Price</span>
                </div>

                <AnimatePresence>
                  {FORM_STOCKS.map((stock, index) => (
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      layout
                      layoutId={stock.id}
                      key={stock.id}
                      className="relative grid w-full grid-cols-3 items-center gap-2 p-4"
                    >
                      <FormField
                        control={new_product_form.control}
                        name={`stocks.${index}.size`}
                        render={({ field }) => (
                          <FormItem>
                            <div className="relative">
                              <FormControl>
                                <Input
                                  {...field}
                                  disabled={isLoading}
                                  name={`stocks.${index}.size`}
                                  id={`stocks.${index}.size`}
                                  type="text"
                                  className="placeholder:text-400/50 h-10 w-full rounded-lg border-none bg-transparent px-4 text-sm text-neutral-dark-2 outline-none"
                                  placeholder="size"
                                />
                              </FormControl>
                              <FormMessage className="absolute -bottom-[17px] whitespace-nowrap text-xs font-light" />
                            </div>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={new_product_form.control}
                        name={`stocks.${index}.stock`}
                        render={({ field }) => (
                          <FormItem>
                            <div className="relative">
                              <FormControl>
                                <Input
                                  {...field}
                                  disabled={isLoading}
                                  name={`stocks.${index}.stock`}
                                  id={`stocks.${index}.stock`}
                                  type="text"
                                  className="placeholder:text-400/50 h-10 w-full rounded-lg border bg-transparent px-4 text-sm text-neutral-dark-2 outline-none"
                                  placeholder="0"
                                />
                              </FormControl>
                              <FormMessage className="absolute -bottom-[17px] whitespace-nowrap text-xs font-light" />
                            </div>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={new_product_form.control}
                        name={`stocks.${index}.price`}
                        render={({ field }) => (
                          <FormItem>
                            <div className="relative">
                              <FormControl>
                                <div className="relative flex w-full items-center">
                                  <span className="absolute left-2 font-medium text-black">
                                    $
                                  </span>

                                  <Input
                                    disabled={isLoading}
                                    placeholder="0.00"
                                    {...field}
                                    name={`stocks.${index}.price`}
                                    id={`stocks.${index}.price`}
                                    type="text"
                                    className="placeholder:text-400/50 h-10 w-full rounded-lg border bg-transparent pl-6 pr-4 text-sm text-neutral-dark-2 outline-none"
                                  />
                                </div>
                              </FormControl>
                              <FormMessage className="absolute -bottom-[17px] whitespace-nowrap text-xs font-light" />
                            </div>
                          </FormItem>
                        )}
                      />

                      {/* {STOCKS.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveStock(stock.id)}
                          className="hidden place-items-center rounded-lg bg-[#585858] px-4 py-2 text-xl font-medium text-white transition-all duration-200 active:scale-90 sm:text-3xl md:grid"
                        >
                          <Minus className="size-10" />
                        </button>
                      )} */}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              <Button
                type="button"
                disabled={isLoading || disableAddStockButton}
                onClick={handleAddNewStock}
                className="w-fit bg-transparent max-sm:ml-4"
                variant="outline"
              >
                Add a variant
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2 rounded-[6px] p-4 shadow-[0_0_10px_rgba(0,0,0,0.1)] sm:gap-y-4 md:gap-y-6 xl:p-6">
              <div className="flex flex-col border-b border-gray-200 pb-3">
                <h2 className="text-xl font-medium text-neutral-dark-2 md:text-2xl md:font-semibold">
                  Media
                </h2>
                <p className="text-xs text-neutral-dark-2">
                  Upload media for your product
                </p>
              </div>
              <div className="relative mt-2 flex h-fit w-full flex-col gap-y-2 rounded-xl md:min-h-[292px] md:rounded-2xl">
                <div className="flex size-full items-center justify-center gap-x-1">
                  {" "}
                  <ProjectLogo form={new_product_form} name="media" />
                  <Button
                    type="button"
                    variant="outline"
                    disabled={isLoading}
                    className="bg-transparent py-10 sm:py-20"
                  >
                    <Plus />
                  </Button>
                </div>
                {hasProjectLogo.length === 0 &&
                  new_product_form.formState.errors.media && (
                    <p className="mt-0.5 w-full justify-self-start border-l-4 border-red-500 bg-red-500/10 px-2 text-sm font-bold text-red-500">
                      {new_product_form.formState.errors.media.message}
                    </p>
                  )}
              </div>
            </div>

            <div className="flex flex-col gap-y-2 rounded-[6px] p-4 shadow-[0_0_10px_rgba(0,0,0,0.1)] sm:gap-y-4 md:gap-y-6 xl:p-6">
              <div className="flex flex-col border-b border-gray-200 pb-3">
                <h2 className="text-xl font-medium text-neutral-dark-2 md:text-2xl md:font-semibold">
                  Stock
                </h2>
              </div>
              <FormField
                control={new_product_form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-neutral-dark-2">
                      Availability
                    </FormLabel>
                    <FormControl>
                      <Select {...field} onValueChange={field.onChange}>
                        <SelectTrigger className="bg-transparent">
                          <SelectValue placeholder="Select Availability" />
                        </SelectTrigger>
                        <SelectContent className="z-[99999]">
                          <SelectGroup>
                            {STOCKS_SELECT.map((stock) => (
                              <SelectItem key={stock.value} value={stock.value}>
                                {stock.label}
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
            </div>
            <div className="flex flex-1 flex-col gap-y-2 rounded-[6px] p-4 py-10 shadow-[0_0_10px_rgba(0,0,0,0.1)] sm:gap-y-4 md:gap-y-6 xl:p-6">
              <div className="flex flex-col border-b border-gray-200 pb-3">
                <h2 className="text-xl font-medium text-neutral-dark-2 md:text-2xl md:font-semibold">
                  Archive
                </h2>
                <p className="text-xs text-neutral-dark-2">Archive a product</p>
              </div>
              <Button
                type="button"
                disabled={isLoading}
                onClick={handleAddNewStock}
                className="w-fit bg-transparent"
                variant="outline"
              >
                Archive {product?.name}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default ProductDetailsComponent;
