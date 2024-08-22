// /* eslint-disable react-hooks/exhaustive-deps */
// "use client";

// import { useEffect } from "react";

// import { useProducts } from "~/hooks/admin-product/use-products.persistence";
// import { PRODUCT_TABLE } from "./data/product.mock";

// export default function UserProductLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const { addProducts } = useProducts();
//   useEffect(() => {
//     const is_saved = localStorage.getItem("admin_products");
//     if (is_saved) {
//       const parse_data = JSON.parse(is_saved);
//       if (parse_data.state.products) return;
//       setTimeout(() => {
//         addProducts(PRODUCT_TABLE);
//       }, 5000);
//     }
//   }, []);

//   return <>{children}</>;
// }

"use client";

export default function UserProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
