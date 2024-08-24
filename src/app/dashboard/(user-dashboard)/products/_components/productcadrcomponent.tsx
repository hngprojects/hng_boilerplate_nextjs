'use client'
import Image, { StaticImageData } from 'next/image';
interface ProductCardProps {
    title: string;
    price: string;
    description: string;
    inStock: boolean;
    imageUrl: string | StaticImageData;
}

const Delete = () => {
    alert('Are you sure you want to delete')
}

const Edit = () => {
    alert('Proceed to edit')
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, description, inStock, imageUrl }) => {
    return (
        <div className="max-w-sm rounded-md shadow-md overflow-hidden bg-white p-3 border-[#D9D9D9] border-[1px]">
            <Image
                src={imageUrl}
                alt={title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md"
            />
            <div className="p-4">
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-xl">{title}</h2>
                    <p className="text-gray-900 font-bold text-[20px] mt-1">{price}</p>
                </div>
                <p className="text-gray-700 text-base mb-4">{description}</p>
                <span className={`px-5 py-2 text-sm mt-3 ${inStock ? 'bg-[#E7F7E9] rounded-full  text-green-500' : 'bg-[#FDE7E7] text-red-500'}`}>
                  {inStock ? 'In stock' : 'Out of stock'}
                </span>
                <div className="mt-6 flex  justify-between space-x-2">
                    <button onClick={Edit} className="text-black px-4 w-[130px] py-2 rounded-md border-[1px]">
                        Edit
                    </button>
                    <button onClick={Delete} className="bg-white text-[#DC2626] px-4  w-[130px] py-2 rounded-md border-[1px]">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ProductCard;