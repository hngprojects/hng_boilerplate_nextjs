// components/admin/NewProductModal.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { Loader, X } from "lucide-react";
import Image from "next/image";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { createProduct } from "~/actions/product";
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
import { Label } from "~/components/ui/label";
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
import { useToast } from "~/components/ui/use-toast";
import { useOrgContext } from "~/contexts/orgContext";
import { useLocalStorage } from "~/hooks/use-local-storage";
import { cn } from "~/lib/utils";
import { productSchema } from "~/schemas";
import { CloudinaryAsset } from "~/types";
import { CATEGORIES } from "../data/categories.mock";
import { MAX_CHAR } from "./schema/schema";

const NewProductModal = () => {
  const { setIsNewModal, isNewModal } = useOrgContext();
  const [image, setImage] = useState<File | Blob>();
  const [isLoading, startTransition] = useTransition();
  const [org_id] = useLocalStorage<string>("current_orgid", "");

  const variantProperties = {
    left: "50%",
    top: "50%",
    translateX: "-50%",
    translateY: "-50%",
  };

  const { toast } = useToast();

  const newProductForm = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      description: "",
      size: "Small",
      image_url: "",
      quantity: "0",
      price: "0",
      category: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof productSchema>) => {
    startTransition(async () => {
      const formData = new FormData();
      formData.append("file", image!);
      formData.append("upload_preset", "starterhouse");
      formData.append("api_key", "673723355315667");

      await fetch(`https://api.cloudinary.com/v1_1/dnik53vns/image/upload`, {
        method: "POST",
        body: formData,
      }).then(async (response) => {
        const data: CloudinaryAsset = await response.json();
        values.image_url = data.url;
      });

      await createProduct(values, org_id).then((data) => {
        if (data.status === 201) {
          newProductForm.reset();
          setIsNewModal(false);
        }
        toast({
          title: data.status === 201 ? "Success" : "Error",
          description:
            data.status === 201 ? "Product created successfully" : data.error,
        });
      });
    });
  };

  const SIZE_CATEGORIES = new Set(["clothes", "shoes", "hats"]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    newProductForm.setValue("category", category);
    if (!SIZE_CATEGORIES.has(category)) {
      newProductForm.setValue("size", "Small");
    }
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
            initial={{ ...variantProperties, opacity: 0, scale: 0.5 }}
            animate={{ ...variantProperties, opacity: 1, scale: 1 }}
            exit={{ ...variantProperties, opacity: 0, scale: 0.5 }}
            className={cn(
              "fixed left-1/2 top-1/2 z-[100] grid h-fit max-h-[90%] w-full max-w-[95%] -translate-x-1/2 -translate-y-1/2 transform-gpu place-items-center items-center overflow-hidden overflow-y-auto rounded-md bg-white pb-6 min-[500px]:max-w-[480px] min-[500px]:rounded-xl md:max-h-[850px] lg:h-fit lg:max-w-[491px]",
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
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="hidden font-medium text-neutral-dark-2 min-[376px]:inline">
                            Name<span className="text-red-500">*</span>
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
                              onValueChange={(value) => {
                                field.onChange(value);
                                handleCategoryChange(value);
                              }}
                              value={field.value}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                              <SelectContent className="z-[300]">
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
                    {SIZE_CATEGORIES.has(selectedCategory) && (
                      <FormField
                        control={newProductForm.control}
                        name="size"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="hidden font-medium text-neutral-dark-2 min-[376px]:inline">
                              Size
                            </FormLabel>
                            <FormControl>
                              <Select
                                disabled={isLoading}
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a size" />
                                </SelectTrigger>
                                <SelectContent className="z-[300]">
                                  <SelectGroup>
                                    <SelectLabel>Sizes</SelectLabel>
                                    {["Small", "Standard", "Large"].map(
                                      (size) => (
                                        <SelectItem key={size} value={size}>
                                          {size}
                                        </SelectItem>
                                      ),
                                    )}
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

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
                              disabled={isLoading}
                              type="int"
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
                              type="int"
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
                  <div className="relative mt-2 flex h-fit max-h-[150px] min-h-[125px] w-full flex-col items-center justify-center gap-y-2 rounded-xl px-4 md:rounded-2xl">
                    <p className="font-medium text-neutral-dark-2">Media</p>
                    {image ? (
                      <Image
                        src={URL.createObjectURL(image)}
                        alt="Uploaded image"
                        width={200}
                        height={200}
                        className="h-40 w-full rounded-t-md object-cover"
                      />
                    ) : (
                      <Label htmlFor="image" className="cursor-pointer">
                        <Input
                          className="sr-only"
                          id="image"
                          type="file"
                          onChange={(entries) =>
                            setImage(
                              entries.target.files
                                ? entries.target.files[0]
                                : undefined,
                            )
                          }
                          accept="image/jpeg,image/png,image/svg+xml"
                        />
                        Add Image
                      </Label>
                    )}
                  </div>

                  <div className="sticky bottom-0 z-50 flex w-full items-center justify-center gap-x-2 border-t border-neutral-200 bg-white/70 px-2 py-2 backdrop-blur min-[500px]:px-6 min-[500px]:py-4">
                    <Button
                      variant="ghost"
                      type="reset"
                      disabled={isLoading}
                      onClick={() => {
                        setIsNewModal(false);
                        newProductForm.reset();
                      }}
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
