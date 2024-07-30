export interface Product {
  name: string;
  price: string;
  totalSold: string;
  status: "Active" | "Draft";
  createdAt: string;
}

export const products: Product[] = [
  {
    name: "Hypernova Headphones",
    price: "$129.99",
    totalSold: "25",
    status: "Draft",
    createdAt: "2024-07-16 10:36AM",
  },
  {
    name: "Hypernova Headphones",
    price: "$129.99",
    totalSold: "25",
    status: "Draft",
    createdAt: "2024-07-16 10:36AM",
  },
  {
    name: "Hypernova Headphones",
    price: "$129.99",
    totalSold: "25",
    status: "Draft",
    createdAt: "2024-07-16 10:36AM",
  },
];
