export type ProductTableProperties = {
  category: string | string[];
  date_added: string;
  description: string;
  imageUrl: string;
  name: string;
  price: number;
  product_id: string;
  status: "in_stock" | "out_of_stock" | "low_on_stock";
  stock: number;
  time: string;
};

export type ServerProductResponse = {
  products: ProductTableProperties[];
  pagination: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
  };
};
