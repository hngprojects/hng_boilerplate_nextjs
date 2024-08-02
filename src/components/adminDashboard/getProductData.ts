"use server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  amount: number;
}

export const fetchAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
};

export const fetchProductById = async (id: number): Promise<Product> => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    throw new Error(`Error fetching product: ${error}`);
  }
};

export const searchProducts = async (
  searchTerm = "",
  filter = "",
): Promise<Product[]> => {
  try {
    const query = new URLSearchParams({
      search: searchTerm,
      filter,
    }).toString();
    const response = await fetch(`${API_URL}/products/search?${query}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
};

export const addProduct = async (product: Product): Promise<Product> => {
  try {
    const response = await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error("Failed to add product");
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error adding product: ${error}`);
  }
};

export const deleteProduct = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete product");
    }
  } catch (error) {
    throw new Error(`Error deleting product: ${error}`);
  }
};
