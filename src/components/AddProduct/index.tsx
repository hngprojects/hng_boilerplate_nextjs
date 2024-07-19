import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "~/components/ui/dialog";

const AddProduct = () => {
    return ( 
        <Dialog>
            <DialogTrigger className="add-btn">Add Product</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle className="modal-title">Add new Product</DialogTitle>
                <DialogDescription className="modal-desc">
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </DialogDescription>
                </DialogHeader>
                {/* Product Name */}
                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                    Product name
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                    id="id"
                    name="name"
                    type="text"
                    placeholder="e.g Jon Doe"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </DialogContent>
        </Dialog>
     );
}
 
export default AddProduct;