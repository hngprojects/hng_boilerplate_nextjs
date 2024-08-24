import productimage from "/public/images/productimage.png";

import ProductCard from "../_components/productcadrcomponent";

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
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
