import { Dialog, DialogContent } from "@/components/ui/dialog";

export function DialogDemo({
  open,
  onOpenChanged,
  children,
}: {
  open: boolean;
  onOpenChanged: any;
  children: any;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChanged}>
      <DialogContent className="sm:max-w-[425px]">{children}</DialogContent>
    </Dialog>
  );
}
