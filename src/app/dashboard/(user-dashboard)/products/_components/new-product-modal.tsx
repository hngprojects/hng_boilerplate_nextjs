import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { Loader, X } from "lucide-react";
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
import { toast } from "~/components/ui/use-toast";
import { useProductModal } from "~/hooks/admin-product/use-product.modal";
import { cn, getApiBaseUrl, simulateDelay } from "~/lib/utils";
import { CATEGORIES } from "../data/categories.moct";
import ProjectLogo from "./form-images/project-logo";
import { NewProductSchema } from "./schema/schema";

const MAX_CHAR = 160;
const NewProductModal = () => {
  const { setIsNewModal, isNewModal } = useProductModal();
  const [isLoading, startTransition] = useTransition();
  const variantProperties = {
    left: "50%",
    top: "50%",
    translateX: "-50%",
    translateY: "-50%",
  };
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
      await simulateDelay(3);
      const data = {
        category: values.category,
        description: values.description,
        name: values.product_name,
        price: Number(values.price),
      };

      const baseUrl = getApiBaseUrl();
      const url = `${baseUrl}/api/v1/products`;

      try {
        const response = await fetch(url, {
          method: "POST",
          // Uncomment when token storage is handled
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          const errorText = await response.text();
          toast({
            title: `Failed to create product: ${errorText}`,
            variant: "destructive",
            className: "z-[99999]",
          });
          return;
        }

        toast({
          title: `Product created successfully`,
          className: "z-[99999]",
        });
        new_product_form.reset();
        setIsNewModal(false);
      } catch (error) {
        toast({
          title: `An unexpected error occurred`,
          description: String(error),
          variant: "destructive",
          className: "z-[99999]",
        });
      }
    });
  };

  return (
    <>
      <div
        onClick={() => setIsNewModal(false)}
        className={cn(
          "fixed left-0 top-0 z-[9999] min-h-screen w-full overflow-hidden bg-[rgba(10,10,10,0.40)] transition-all duration-300",
          isNewModal
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      />

      <AnimatePresence>
        {isNewModal && (
          <motion.div
            initial={{
              ...variantProperties,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              ...variantProperties,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              ...variantProperties,
              opacity: 0,
              scale: 0.5,
            }}
            className={cn(
              "fixed left-1/2 top-1/2 z-[9999] grid h-fit max-h-[60%] w-full max-w-[95%] -translate-x-1/2 -translate-y-1/2 transform-gpu place-items-center items-center overflow-y-auto rounded-md bg-white pb-6 hover:overflow-y-scroll min-[500px]:max-w-[480px] min-[500px]:rounded-xl md:max-h-[700px] lg:h-fit lg:max-w-[491px]",
            )}
          >
            <div className="flex h-full w-full flex-col items-center gap-y-4">
              <div className="sticky top-0 z-50 flex w-full items-center justify-between rounded-t-lg border-b border-neutral-200 bg-white/70 px-2 py-2 backdrop-blur min-[500px]:px-6 min-[500px]:py-4">
                <p className="font-semibold sm:text-lg">Add a Product</p>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsNewModal(false)}
                >
                  <X className="xl:size-6" />
                </Button>
              </div>
              <Form {...new_product_form}>
                <form
                  onSubmit={new_product_form.handleSubmit(onSubmit)}
                  className="flex h-full w-full flex-col gap-y-4"
                >
                  <div className="flex h-full w-full flex-col gap-y-4 px-2 min-[500px]:px-6">
                    {" "}
                    <FormField
                      control={new_product_form.control}
                      name="product_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="hidden font-medium text-neutral-dark-2 min-[376px]:inline">
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
                          <FormLabel className="hidden font-medium text-neutral-dark-2 min-[376px]:inline">
                            Description
                          </FormLabel>
                          <FormControl>
                            <div className="relative flex w-full flex-col gap-y-1">
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
                                <span className="whitespace-nowrap text-xs text-slate-500">
                                  Maximum of {MAX_CHAR} characters
                                </span>
                                <WordCounter
                                  length={MAX_CHAR}
                                  word={field.value}
                                />
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
                          <FormLabel className="hidden font-medium text-neutral-dark-2 min-[376px]:inline">
                            Category
                          </FormLabel>
                          <FormControl>
                            {isNewModal ? (
                              <select
                                {...field}
                                onChange={(event) =>
                                  field.onChange(event.target.value)
                                }
                                className="h-10 w-full rounded-md border bg-transparent px-2"
                              >
                                <option value="" disabled>
                                  Select a category
                                </option>
                                {CATEGORIES.map((category) => (
                                  <option
                                    key={category.value}
                                    value={category.value}
                                  >
                                    {category.label}
                                  </option>
                                ))}
                              </select>
                            ) : (
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
                            )}
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
                            <FormLabel className="hidden font-medium text-neutral-dark-2 min-[376px]:inline">
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
                            <FormLabel className="hidden font-medium text-neutral-dark-2 min-[376px]:inline">
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
                    <div className="relative mt-2 flex h-fit min-h-[125px] w-full flex-col gap-y-1 rounded-xl md:rounded-2xl">
                      <FormLabel className="font-medium text-neutral-dark-2">
                        Media<span className="text-red-500">*</span>
                      </FormLabel>
                      <ProjectLogo form={new_product_form} name="media" />
                      {hasProjectLogo.length === 0 &&
                        new_product_form.formState.errors.media && (
                          <p className="mt-0.5 w-full justify-self-start border-l-4 border-red-500 bg-red-500/10 px-2 text-sm font-bold text-red-500">
                            {new_product_form.formState.errors.media.message}
                          </p>
                        )}
                    </div>
                  </div>
                  <div className="mt-4 flex w-full items-center justify-end gap-x-4 border-t border-neutral-200 px-2 pt-4 min-[500px]:px-6">
                    <Button
                      type="button"
                      onClick={() => setIsNewModal(false)}
                      variant="outline"
                      size="default"
                      className="rounded-md bg-transparent px-4 py-3 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="default"
                      size="default"
                      className="rounded-md bg-primary px-4 py-3 font-normal text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-x-2">
                          <span className="animate-pulse">
                            Adding product...
                          </span>{" "}
                          <Loader className="size-4 animate-spin sm:size-5" />
                        </span>
                      ) : (
                        <span>Add product</span>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NewProductModal;
