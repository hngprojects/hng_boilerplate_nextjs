export type ProductTableProperties = {
  product_id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  status: "in_stock" | "out_of_stock" | "low_on_stock";
  stock: number;
  date_added: string;
  time: string;
};
