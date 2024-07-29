import { Button } from "~/components/common/common-button";
import { Input } from "~/components/common/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

interface AddProductModalProperties {
  children: React.ReactNode;
}
const AddProductModal = ({ children }: AddProductModalProperties) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex h-fit max-h-[500px] flex-col gap-[23px] overflow-y-auto rounded-none border bg-white p-6 sm:max-w-[500px]">
        <DialogHeader className="inline-flex flex-col items-start justify-start">
          <DialogTitle className="text-lg font-bold text-neutral-950">
            Add new product
          </DialogTitle>
          <DialogDescription className="text-xs leading-3 text-slate-500">
            Create a new product
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 px-2">
          <div className="items-left flex flex-col gap-1">
            <Label
              htmlFor="productname"
              className="left-0 text-left text-sm font-medium text-slate-900"
            >
              Product name
            </Label>
            <Input
              id="productname"
              required
              placeholder="@Joh Doe"
              className="col-span-3 inline-flex h-10 items-start justify-start gap-2"
            />
          </div>
          <div className="items-left flex flex-col gap-1">
            <Label
              htmlFor="productdescription"
              className="left-0 text-left text-sm font-medium text-slate-900"
            >
              Product Description
            </Label>
            <Textarea
              id="productdescription"
              required
              placeholder="add product description"
              className="col-span-3 inline-flex h-10 items-start justify-start gap-2 border bg-transparent text-primary focus:outline-none focus:ring-1 focus:ring-primary focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0"
            />
          </div>
          <div className="grid w-full grid-cols-2 gap-2">
            <div className="items-left flex flex-col gap-1">
              <Label
                htmlFor="price"
                className="left-0 text-left text-sm font-medium text-slate-900"
              >
                Price
              </Label>
              <Input
                type="number"
                id="price"
                required
                placeholder="e.g 2000.00"
                className="col-span-3 inline-flex h-10 items-start justify-start gap-2"
              />
            </div>
            <div className="items-left flex flex-col gap-1">
              <Label
                htmlFor="quantity"
                className="left-0 text-left text-sm font-medium text-slate-900"
              >
                Quantity
              </Label>
              <Input
                type="number"
                id="quantity"
                required
                placeholder="e.g 1000"
                className="col-span-3 inline-flex h-10 items-start justify-start gap-2"
              />
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-2">
            <div className="flex flex-col gap-1">
              <span className="left-0 text-left text-sm font-medium text-slate-900">
                Upload Images
              </span>
              <Button className="w-48" variant={"subtle"} size={"sm"}>
                Choose file No file choosen
              </Button>
            </div>
            <div className="flex w-full items-end justify-start gap-[15px]">
              <div className="h-8 w-8 rounded bg-neutral-50" />
              <div className="h-8 w-8 rounded bg-neutral-50" />
              <div className="h-8 w-8 rounded bg-neutral-50" />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant={"primary"} type="submit">
            Add Product
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductModal;
