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

interface AddProductModalProperties {
  children: React.ReactNode;
}
const AddUserModal = ({ children }: AddProductModalProperties) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="h-fit w-[350px] rounded-[6px] bg-white px-8 py-9 md:w-[422px] md:px-10 md:py-11">
        <DialogHeader className="inline-flex flex-col items-start justify-start">
          <DialogTitle className="text-lg font-bold leading-5 text-neutral-950">
            Add new user
          </DialogTitle>
          <DialogDescription className="text-xs leading-3 text-slate-500">
            Create a new user
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="flex flex-row items-center gap-3">
            <div className="h-[59px] w-[59px] rounded-full bg-gray-300"></div>
            <div className="h-fit">
              <div className="text-base font-normal leading-3 text-neutral-dark-2">
                Upload Picture
              </div>
              <div>
                <label
                  htmlFor="profileUpload"
                  className="leading-0 cursor-pointer text-xs font-normal text-primary"
                >
                  Click to upload
                </label>
                <input
                  type="file"
                  accept="img/jpg, img/png"
                  className="hidden"
                  id="profileUpload"
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <form className="flex flex-col space-y-4">
              <div>
                <Label
                  htmlFor="userName"
                  className="left-0 text-left text-sm font-medium leading-5 text-slate-900"
                >
                  Name
                </Label>
                <Input
                  id="userName"
                  required
                  type="text"
                  placeholder="e.g Joh Doe"
                  className="col-span-3 inline-flex h-10 items-start justify-start gap-2"
                />
              </div>

              <div>
                <Label
                  htmlFor="userEmail"
                  className="left-0 text-left text-sm font-medium leading-5 text-slate-900"
                >
                  Email
                </Label>
                <Input
                  id="userEmail"
                  required
                  type="email"
                  placeholder="e.g johndoe@gmail.com"
                  className="col-span-3 inline-flex h-10 items-start justify-start gap-2"
                />
              </div>

              <div>
                <Label
                  htmlFor="userName"
                  className="left-0 text-left text-sm font-medium leading-5 text-slate-900"
                >
                  Phone number
                </Label>
                <Input
                  id="userName"
                  required
                  type="text"
                  placeholder="e.g 08123456789"
                  className="col-span-3 inline-flex h-10 items-start justify-start gap-2"
                />
              </div>
            </form>
          </div>
        </div>
        <DialogFooter className="mt-3">
          <Button variant={"primary"} type="submit">
            Add new user
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserModal;
