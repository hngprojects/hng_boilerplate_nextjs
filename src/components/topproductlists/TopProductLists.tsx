import { ArrowUpRight } from "lucide-react";

import CustomButton from "../common/Button/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import ProductList from "./ProductList";

type Product = {
  id: number;
  name: string;
  image: string;
  total: number;
};

export default function TopProductLists() {
  const products: Product[] = [
    {
      id: 1,
      name: "The Lemonade blender",
      image: "/images/product-image-1.png",
      total: 500,
    },
    {
      id: 2,
      name: "Bean Cake Powder",
      image: "/images/product-image-2.png",
      total: 250,
    },
  ];

  return (
    <Card
      className="max-w-[25.687rem] gap-6 rounded-xl"
      data-testid="top-products-card"
    >
      <CardHeader
        className="flex flex-row items-center justify-between"
        data-testid="top-products-header"
      >
        <div className="flex-col gap-y-2">
          <CardTitle
            className="text-2xl font-semibold"
            data-testid="top-products-title"
          >
            Top Products
          </CardTitle>
          <CardDescription
            className="text-xs font-normal"
            data-testid="top-products-description"
          >
            Your top selling products appear here.
          </CardDescription>
        </div>
        <div>
          <CustomButton
            variant="primary"
            size="sm"
            isRightIconVisible={true}
            icon={<ArrowUpRight />}
          >
            View All
          </CustomButton>
        </div>
      </CardHeader>
      <CardContent className="space-y-6" data-testid="top-products-content">
        {products &&
          products.map((product) => (
            <ProductList {...product} key={product.id} />
          ))}
      </CardContent>
    </Card>
  );
}
