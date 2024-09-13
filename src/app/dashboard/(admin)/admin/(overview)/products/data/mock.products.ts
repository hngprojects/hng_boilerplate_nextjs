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
    name: "Galaxy Tablet",
    price: "$399.99",
    totalSold: "40",
    status: "Active",
    createdAt: "2024-07-14 03:15PM",
  },
  {
    name: "Astro Smartwatch",
    price: "$199.99",
    totalSold: "15",
    status: "Draft",
    createdAt: "2024-07-10 09:20AM",
  },
  {
    name: "Nebula Laptop",
    price: "$899.99",
    totalSold: "50",
    status: "Active",
    createdAt: "2024-07-08 01:45PM",
  },
];
