import { StaticImageData } from "next/image";

export interface ProductDataPropertyTypes {
  name: string;
  id: string;
  category: string;
  price: number;
  lowStock: boolean;
  inStock: boolean;
  image: StaticImageData;
}
