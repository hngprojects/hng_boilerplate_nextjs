import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "~/components/ui/dialog";
import { Button } from "../ui/button";

const AddProduct = () => {
    return ( 
        <Dialog>
            <DialogTrigger className="open-add-product">Add Product</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle className="modal-title">Add new Product</DialogTitle>
                <DialogDescription className="modal-desc">
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </DialogDescription>
                </DialogHeader>
                {/* Product Name */}
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Email" />
                </div>
                
                <DialogFooter>
                    <Button type="submit" className="add-product-btn">Add Product</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
     );
}
 
export default AddProduct;