import { useState } from "react";

import { CreateFaqs } from "~/actions/faq";
import { Button } from "~/components/common/common-button";
import { Input } from "~/components/common/input";
import LoadingSpinner from "~/components/miscellaneous/loading-spinner";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";
import { useToast } from "~/components/ui/use-toast";

interface AddFaqModalProperties {
  callback: boolean;
  setCallback: (value: boolean) => void;
  onClose: () => void;
}

const AddFaqModal = ({
  callback,
  setCallback,
  onClose,
}: AddFaqModalProperties) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  //add faq
  const handleFaq = async () => {
    setLoading(true);

    // validate input
    if (answer === "" || question === "") {
      toast({
        title: "Error",
        description: "Inputs cannot be empty",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    const payload = {
      question,
      answer,
      category,
    };

    const result = await CreateFaqs(payload);

    if (result?.status === 200 || result?.status === 201) {
      setCallback(!callback);
      toast({
        title: "Success",
        description: "Faq created successfully",
        variant: "default",
      });

      onClose();
      setLoading(false);
    } else {
      toast({
        title: "Error",
        description: result?.error,
        variant: "destructive",
      });
      setLoading(false);
      setCallback(!callback);
    }
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="flex h-fit flex-col gap-[23px] rounded-none border bg-white py-6 sm:max-w-[500px]">
        <DialogHeader className="inline-flex flex-col items-start justify-start border-b border-border pb-5">
          <DialogTitle className="text-lg font-bold text-neutral-950">
            Create FAQ
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-2 px-2">
          <div className="items-left mb-2 flex flex-col gap-1">
            <Label
              htmlFor="productname"
              className="left-0 text-left text-sm font-medium text-slate-900"
            >
              Question*
            </Label>
            <Input
              id="productname"
              required
              placeholder="FAQ"
              className="col-span-3 inline-flex h-10 items-start justify-start gap-2"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
            />
          </div>

          <div className="items-left mb-2 flex flex-col gap-1">
            <Label
              htmlFor="productname"
              className="left-0 text-left text-sm font-medium text-slate-900"
            >
              Category*
            </Label>
            <Select
              onValueChange={(value) => setCategory(value)}
              value={category}
            >
              <SelectTrigger className="text-primary focus:outline-none focus:ring-1 focus:ring-primary focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Pricing">Pricing</SelectItem>
                <SelectItem value="Policy">Policy</SelectItem>
                <SelectItem value="General">General</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="items-left flex flex-col gap-2">
            <Label
              htmlFor="productdescription"
              className="left-0 text-left text-sm font-medium text-slate-900"
            >
              Answer
            </Label>
            <Textarea
              id="productdescription"
              required
              placeholder="input answer to FAQ"
              className="col-span-3 inline-flex h-10 items-start justify-start gap-2 border bg-transparent text-primary focus:outline-none focus:ring-1 focus:ring-primary focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0"
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
            />
          </div>

          <span className="text-[13px] text-foreground">
            Minimum of 50 characters
          </span>
        </div>

        <DialogFooter className="border-t border-border pt-10">
          <DialogTrigger asChild>
            <Button variant={"subtle"}>Cancel</Button>
          </DialogTrigger>

          <Button
            variant={"primary"}
            onClick={handleFaq}
            disabled={category === "" || answer?.length < 20 ? true : false}
          >
            {loading ? (
              <span className="flex items-center gap-x-2">
                <span className="animate-pulse">Saving</span>{" "}
                <LoadingSpinner className="size-4 animate-spin sm:size-5" />
              </span>
            ) : (
              "Save"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddFaqModal;
