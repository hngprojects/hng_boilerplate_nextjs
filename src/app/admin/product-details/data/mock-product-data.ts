interface ProductStatusProperties {
  inStock: boolean;
  outOfStock: boolean;
  lowOnStock: boolean;
}

interface ProductProperty {
  title: string;
  id: number;
  category: string;
  price: number;
  status: ProductStatusProperties;
}

export const productData: ProductProperty[] = [
  {
    title: "Product 1",
    id: 1,
    category: "breakfast",
    price: 19,
    status: {
      inStock: true,
      lowOnStock: false,
      outOfStock: false,
    },
  },

  {
    title: "Product 2",
    id: 2,
    category: "appetizers",
    price: 29,
    status: {
      inStock: true,
      lowOnStock: false,
      outOfStock: false,
    },
  },

  {
    title: "Product 3",
    id: 3,
    category: "appetizers",
    price: 45,
    status: {
      inStock: true,
      lowOnStock: false,
      outOfStock: false,
    },
  },

  {
    title: "Product 4",
    id: 4,
    category: "breakfast",
    price: 15,
    status: {
      inStock: true,
      lowOnStock: false,
      outOfStock: false,
    },
  },

  {
    title: "Product 5",
    id: 5,
    category: "lunch",
    price: 12,
    status: {
      inStock: false,
      lowOnStock: false,
      outOfStock: true,
    },
  },

  {
    title: "Product 6",
    id: 6,
    category: "breakfast",
    price: 12,
    status: {
      inStock: false,
      lowOnStock: true,
      outOfStock: false,
    },
  },

  {
    title: "Product 7",
    id: 7,
    category: "lunch",
    price: 3,
    status: {
      inStock: true,
      lowOnStock: false,
      outOfStock: false,
    },
  },

  {
    title: "Product 8",
    id: 8,
    category: "appetizers",
    price: 18,
    status: {
      inStock: false,
      lowOnStock: false,
      outOfStock: true,
    },
  },

  {
    title: "Product 9",
    id: 9,
    category: "breakfast",
    price: 4,
    status: {
      inStock: true,
      lowOnStock: false,
      outOfStock: false,
    },
  },

  {
    title: "Product 10",
    id: 10,
    category: "dinner",
    price: 9,
    status: {
      inStock: false,
      lowOnStock: false,
      outOfStock: true,
    },
  },
];
