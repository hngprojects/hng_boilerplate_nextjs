import { EditProduct } from "../_components/schema/schema";

export const STOCKS: EditProduct["stocks"] = [
  {
    id: "P0001",
    size: "Small",
    stock: "",
    price: "",
  },
  {
    id: "P0002",
    size: "Medium",
    stock: "",
    price: "",
  },
  {
    id: "P0003",
    size: "Large",
    stock: "",
    price: "S",
  },
];

export const shouldDisableAddStocksButton = ({
  stocks,
}: {
  stocks: typeof STOCKS;
}) => {
  if (stocks.length === 0) return false;

  return stocks.some(
    (stock) =>
      stock.size!.length === 0 ||
      stock.stock!.length === 0 ||
      stock.price!.length === 0,
  )
    ? true
    : false;
};
