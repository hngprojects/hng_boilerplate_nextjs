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
                {/* Product description */}

                {/* Product Price */}
                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                    Price
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                    id="price"
                    name="price"
                    type="text"
                    placeholder="0.00"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                    <label htmlFor="currency" className="sr-only">
                        Currency
                    </label>
                    <select
                        id="currency"
                        name="currency"
                        className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    >
                        <option>USD</option>
                        <option>CAD</option>
                        <option>EUR</option>
                    </select>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" className="add-product-btn">Add Product</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
     );
}
 
export default AddProduct;