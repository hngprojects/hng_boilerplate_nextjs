import ProductCard from "../_components/productcadrcomponent";
import productimage from '../../../public/images/productimage.png'

const Home: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <ProductCard
                title="Product 1"
                price="$19.00"
                description="Breakfast"
                inStock={true}
                imageUrl={productimage}
            />
        </div>
    );
};

export default Home;