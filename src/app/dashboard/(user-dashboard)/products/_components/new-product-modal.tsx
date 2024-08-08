// components/admin/NewProductModal.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { Loader, X } from "lucide-react";
import { useSession } from "next-auth/react";
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
import { useProductModal } from "~/hooks/admin-product/use-product.modal";
import { useProducts } from "~/hooks/admin-product/use-products.persistence";
import { cn } from "~/lib/utils";
import { CATEGORIES } from "../data/categories.mock";
import { MAX_CHAR, NewProductSchema } from "./schema/schema";

const NewProductModal = () => {
  const { data } = useSession();
  const { setIsNewModal, isNewModal } = useProductModal();
  const { addProduct } = useProducts();
  const [isLoading] = useTransition();

  const variantProperties = {
    left: "50%",
    top: "50%",
    translateX: "-50%",
    translateY: "-50%",
  };

  const newProductForm = useForm<z.infer<typeof NewProductSchema>>({
    defaultValues: {
      product_name: "",
      description: "",
      price: "",
      category: "",
      quantity: "",
    },
    resolver: zodResolver(NewProductSchema),
  });

  const onSubmit = async (values: z.infer<typeof NewProductSchema>) => {
    try {
      await addProduct(
        {
          name: values.product_name,
          description: values.description,
          price: Number(values.price),
          quantity: Number(values.quantity),
          category: values.category,
        },
        data?.access_token as string,
      );
      newProductForm.reset();
      setIsNewModal(false);
    } catch (error) {
      return error;
      // Optionally handle the error (e.g., show a toast or alert)
    }
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
            initial={{ ...variantProperties, opacity: 0, scale: 0.5 }}
            animate={{ ...variantProperties, opacity: 1, scale: 1 }}
            exit={{ ...variantProperties, opacity: 0, scale: 0.5 }}
            className={cn(
              "fixed left-1/2 top-1/2 z-[9999] grid h-fit max-h-[90%] w-full max-w-[95%] -translate-x-1/2 -translate-y-1/2 transform-gpu place-items-center items-center overflow-y-auto rounded-md bg-white pb-6 min-[500px]:max-w-[480px] min-[500px]:rounded-xl md:max-h-[850px] lg:h-fit lg:max-w-[491px]",
            )}
          >
            <div className="flex h-full w-full flex-col items-center gap-y-4">
              <div className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-neutral-200 bg-white/70 px-2 py-2 backdrop-blur min-[500px]:px-6 min-[500px]:py-4">
                <p className="font-semibold sm:text-lg">Add a Product</p>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsNewModal(false)}
                >
                  <X className="xl:size-6" />
                </Button>
              </div>
              <Form {...newProductForm}>
                <form
                  onSubmit={newProductForm.handleSubmit(onSubmit)}
                  className="flex h-full w-full flex-col gap-y-2"
                >
                  <div className="flex h-full w-full flex-col gap-y-2 px-2 min-[500px]:px-6">
                    <FormField
                      control={newProductForm.control}
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
                      control={newProductForm.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="hidden font-medium text-neutral-dark-2 min-[376px]:inline">
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
                      control={newProductForm.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="hidden font-medium text-neutral-dark-2 min-[376px]:inline">
                            Category
                          </FormLabel>
                          <FormControl>
                            <Select
                              disabled={isLoading}
                              onValueChange={field.onChange}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Categories</SelectLabel>
                                  {CATEGORIES.map((category) => (
                                    <SelectItem
                                      key={category.label}
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
                    <FormField
                      control={newProductForm.control}
                      name="quantity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="hidden font-medium text-neutral-dark-2 min-[376px]:inline">
                            Quantity<span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              id="quantity"
                              type="number"
                              disabled={isLoading}
                              placeholder="Quantity"
                              className="bg-transparent placeholder:text-slate-400"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={newProductForm.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="hidden font-medium text-neutral-dark-2 min-[376px]:inline">
                            Price<span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              id="price"
                              type="number"
                              disabled={isLoading}
                              placeholder="Price"
                              className="bg-transparent placeholder:text-slate-400"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="sticky bottom-0 z-50 flex w-full items-center justify-center gap-x-2 border-t border-neutral-200 bg-white/70 px-2 py-2 backdrop-blur min-[500px]:px-6 min-[500px]:py-4">
                    <Button
                      variant="ghost"
                      type="reset"
                      disabled={isLoading}
                      onClick={() => setIsNewModal(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="default"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Loader className="h-5 w-5 animate-spin" />
                      ) : (
                        "Add Product"
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
