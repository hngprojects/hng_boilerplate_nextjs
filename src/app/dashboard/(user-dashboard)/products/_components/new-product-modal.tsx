import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import LoadingSpinner from "~/components/miscellaneous/loading-spinner";
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
import { cn, generateId, getCurrentDateTime, simulateDelay } from "~/lib/utils";
import { CATEGORIES } from "../data/categories.moct";
import ProjectLogo from "./form-images/project-logo";
import { NewProductSchema } from "./schema/schema";

const NewProductModal = () => {
  const { setIsNewModal, isNewModal } = useProductModal();
  const { addProduct } = useProducts();
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
      setIsNewModal(false);
    });
  };

  return (
    <>
      <div
        onClick={() => setIsNewModal(false)}
        className={cn(
          "fixed left-0 top-0 z-[99] min-h-screen w-full overflow-hidden bg-[rgba(10,10,10,0.40)] transition-all duration-300",
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
              scale: 2,
            }}
            className={cn(
              "fixed left-1/2 top-1/2 z-[999] grid h-[550px] w-full max-w-[95%] -translate-x-1/2 -translate-y-1/2 transform-gpu place-items-center items-center overflow-y-auto rounded-md bg-white pb-6 min-[500px]:max-w-[480px] min-[500px]:rounded-xl sm:h-[650px] lg:h-[800px] lg:max-w-[491px]",
            )}
          >
            <div className="flex h-full w-full flex-col items-center gap-y-4">
              <div className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-neutral-200 bg-white/70 px-2 py-2 backdrop-blur min-[500px]:px-6 min-[500px]:py-4 lg:py-6">
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
                  className="flex h-full w-full flex-col gap-y-4 px-2 min-[500px]:px-6"
                >
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
                              className="h-20 resize-none bg-transparent placeholder:text-slate-400"
                              {...field}
                            />
                            <div className="flex w-full items-center justify-between">
                              <span className="whitespace-nowrap text-sm text-slate-500">
                                Maximum of 200 characters
                              </span>
                              <WordCounter length={200} word={field.value} />
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
                  <FormField
                    control={new_product_form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-neutral-dark-2">
                          Standard Price<span className="text-red-500">*</span>
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
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={new_product_form.control}
                    name="quantity"
                    render={({ field }) => (
                      <FormItem>
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
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid aspect-square min-h-[200px] w-full max-w-[400px] place-items-center rounded-xl bg-[#585858] min-[500px]:max-w-[400px] md:min-h-[300px] md:rounded-2xl xl:min-h-[446px] xl:max-w-[446px]">
                    <ProjectLogo form={new_product_form} name="media" />
                    {hasProjectLogo.length === 0 &&
                      new_product_form.formState.errors.media && (
                        <p className="mt-0.5 w-full justify-self-start border-l-4 border-red-500 bg-red-500/10 px-2 text-sm font-bold text-red-500">
                          {new_product_form.formState.errors.media.message}
                        </p>
                      )}
                  </div>

                  <Button
                    type="submit"
                    variant="default"
                    size="default"
                    className="h-12 w-full rounded-md bg-primary px-4 py-3 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-x-2">
                        <span className="animate-pulse">Logging in...</span>{" "}
                        <LoadingSpinner className="size-4 animate-spin sm:size-5" />
                      </span>
                    ) : (
                      <span>Login</span>
                    )}
                  </Button>
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
