// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { ProductTableProperties } from "~/types/admin-product.types";

type ProductNavProperties = {
  name: string;
  label: string;
};

export const PRODUCT_NAV: ProductNavProperties[] = [
  {
    name: "product_name",
    label: "Product Name",
  },
  {
    name: "product_id",
    label: "Product ID",
  },
  {
    name: "category",
    label: "Category",
  },
  {
    name: "price",
    label: "Price",
  },
  {
    name: "status",
    label: "Status",
  },
  {
    name: "actions",
    label: "Actions",
  },
];

export const PRODUCT_TABLE: ProductTableProperties[] = [
  {
    product_id: "1",
    name: "Wireless Mouse",
    description:
      "Ergonomic wireless mouse with adjustable DPI settings, designed for maximum comfort and precision. Perfect for both casual browsing and intense gaming sessions.",
    price: 29.99,
    image: "/product/product-image.webp",
    category: "Electronics",
    status: "in_stock",
    stock: 10,
    date_added: "2023-01-15",
    time: "12:34:56",
  },
  {
    product_id: "2",
    name: "Mechanical Keyboard",
    description:
      "RGB mechanical keyboard with blue switches for a satisfying clicky sound and tactile feedback. Features customizable lighting effects and durable keycaps.",
    price: 79.99,
    image: "/product/product-image.webp",
    category: "Electronics",
    status: "low_on_stock",
    stock: 10,
    date_added: "2023-02-10",
    time: "12:34:56",
  },
  {
    product_id: "3",
    name: "Gaming Headset",
    description:
      "Surround sound gaming headset with noise-cancelling microphone. Offers immersive audio experience, comfortable ear cups, and an adjustable headband for long gaming sessions.",
    price: 49.99,
    image: "/product/product-image.webp",
    category: "Accessories",
    status: "in_stock",
    stock: 10,
    date_added: "2023-03-05",
    time: "12:34:56",
  },
  {
    product_id: "4",
    name: "4K Monitor",
    description:
      "Ultra HD 4K monitor with vibrant colors and crystal-clear image quality. Features a slim bezel design and multiple input options, perfect for professional and entertainment use.",
    price: 299.99,
    image: "/product/product-image.webp",
    category: "Electronics",
    status: "out_of_stock",
    stock: 10,
    date_added: "2023-04-12",
    time: "12:34:56",
  },
  {
    product_id: "5",
    name: "Bluetooth Speaker",
    description:
      "Portable Bluetooth speaker with powerful sound and deep bass. Water-resistant and with a long-lasting battery, ideal for outdoor activities and parties.",
    price: 59.99,
    image: "/product/product-image.webp",
    category: "Audio",
    status: "in_stock",
    stock: 10,
    date_added: "2023-05-18",
    time: "12:34:56",
  },
  {
    product_id: "6",
    name: "Smartwatch",
    description:
      "Feature-rich smartwatch with fitness tracking, heart rate monitoring, and notifications. Stylish design with interchangeable bands, compatible with both Android and iOS.",
    price: 199.99,
    image: "/product/product-image.webp",
    category: "Wearables",
    status: "low_on_stock",
    stock: 10,
    date_added: "2023-06-21",
    time: "12:34:56",
  },
  {
    product_id: "7",
    name: "Drone",
    description:
      "Compact drone with high-definition camera for stunning aerial photography and videography. Easy to control with smartphone app and comes with multiple flight modes.",
    price: 399.99,
    image: "/product/product-image.webp",
    category: "Toys",
    status: "in_stock",
    stock: 10,
    date_added: "2023-07-15",
    time: "12:34:56",
  },
  {
    product_id: "8",
    name: "Electric Toothbrush",
    description:
      "Rechargeable electric toothbrush with multiple brushing modes and a smart timer. Provides thorough cleaning and improves oral hygiene, suitable for all ages.",
    price: 89.99,
    image: "/product/product-image.webp",
    category: "Health",
    status: "in_stock",
    stock: 10,
    date_added: "2023-08-10",
    time: "12:34:56",
  },
  {
    product_id: "9",
    name: "Fitness Tracker",
    description:
      "Advanced fitness tracker with activity monitoring, sleep analysis, and water resistance. Lightweight and comfortable to wear, ideal for fitness enthusiasts.",
    price: 69.99,
    image: "/product/product-image.webp",
    category: "Wearables",
    status: "low_on_stock",
    stock: 10,
    date_added: "2023-09-05",
    time: "12:34:56",
  },
  {
    product_id: "10",
    name: "Noise-Cancelling Headphones",
    description:
      "High-fidelity noise-cancelling headphones with superior sound quality and long battery life. Comfortable over-ear design, perfect for travel and work.",
    price: 249.99,
    image: "/product/product-image.webp",
    category: "Audio",
    status: "in_stock",
    stock: 10,
    date_added: "2023-10-20",
    time: "12:34:56",
  },
  {
    product_id: "11",
    name: "Smart Home Hub",
    description:
      "Centralized smart home hub that connects and controls all your smart devices seamlessly. Compatible with various smart home ecosystems for enhanced convenience.",
    price: 129.99,
    image: "/product/product-image.webp",
    category: "Home",
    status: "in_stock",
    stock: 10,
    date_added: "2023-11-05",
    time: "12:34:56",
  },
  {
    product_id: "12",
    name: "Robot Vacuum Cleaner",
    description:
      "Automatic robot vacuum cleaner with powerful suction and smart navigation. Effortlessly cleans your floors and carpets, with scheduled cleaning and app control.",
    price: 499.99,
    image: "/product/product-image.webp",
    category: "Home",
    status: "low_on_stock",
    stock: 10,
    date_added: "2023-12-01",
    time: "12:34:56",
  },
  {
    product_id: "13",
    name: "Electric Kettle",
    description:
      "Fast-boiling electric kettle with temperature control and auto shut-off. Stylish design with a large capacity, perfect for making tea, coffee, and instant meals.",
    price: 39.99,
    image: "/product/product-image.webp",
    category: "Kitchen",
    status: "in_stock",
    stock: 10,
    date_added: "2023-12-15",
    time: "12:34:56",
  },
  {
    product_id: "14",
    name: "Instant Pot",
    description:
      "Multi-functional Instant Pot with pressure cooking, slow cooking, and sautéing features. Saves time and effort in the kitchen, with various preset programs.",
    price: 99.99,
    image: "/product/product-image.webp",
    category: "Kitchen",
    status: "out_of_stock",
    stock: 10,
    date_added: "2024-01-10",
    time: "12:34:56",
  },
  {
    product_id: "15",
    name: "Air Purifier",
    description:
      "High-efficiency air purifier with HEPA filter and quiet operation. Removes allergens, dust, and pollutants, providing clean and fresh air in your home.",
    price: 149.99,
    image: "/product/product-image.webp",
    category: "Home",
    status: "in_stock",
    stock: 10,
    date_added: "2024-01-25",
    time: "12:34:56",
  },
  {
    product_id: "16",
    name: "Smart Thermostat",
    description:
      "Energy-saving smart thermostat with remote control and learning capabilities. Adjusts to your preferences and schedule, ensuring optimal comfort and efficiency.",
    price: 249.99,
    image: "/product/product-image.webp",
    category: "Home",
    status: "low_on_stock",
    stock: 10,
    date_added: "2024-02-14",
    time: "12:34:56",
  },
  {
    product_id: "17",
    name: "Portable Projector",
    description:
      "Compact portable projector with high-definition resolution and built-in speakers. Ideal for home entertainment, business presentations, and outdoor movie nights.",
    price: 199.99,
    image: "/product/product-image.webp",
    category: "Electronics",
    status: "in_stock",
    stock: 10,
    date_added: "2024-03-02",
    time: "12:34:56",
  },
  {
    product_id: "18",
    name: "Electric Scooter",
    description:
      "Eco-friendly electric scooter with a powerful motor and long-lasting battery. Features a foldable design for easy portability and storage, perfect for urban commuting.",
    price: 599.99,
    image: "/product/product-image.webp",
    category: "Outdoors",
    status: "out_of_stock",
    stock: 10,
    date_added: "2024-03-20",
    time: "12:34:56",
  },
  {
    product_id: "19",
    name: "Digital Camera",
    description:
      "High-performance digital camera with interchangeable lenses and 4K video recording. Perfect for photography enthusiasts and professionals seeking high-quality images.",
    price: 899.99,
    image: "/product/product-image.webp",
    category: "Photography",
    status: "in_stock",
    stock: 10,
    date_added: "2024-04-05",
    time: "12:34:56",
  },
  {
    product_id: "20",
    name: "Smart Doorbell",
    description:
      "Smart doorbell with HD video, two-way audio, and motion detection. Enhances home security by allowing you to see and communicate with visitors remotely.",
    price: 179.99,
    image: "/product/product-image.webp",
    category: "Home",
    status: "low_on_stock",
    stock: 10,
    date_added: "2024-04-20",
    time: "12:34:56",
  },
];
