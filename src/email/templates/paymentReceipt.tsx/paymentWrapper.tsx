import bollerplateLogo from "./assets/Logo.png";
import PaymentReceipt from "./PaymentReceipt";

interface OrderSummaryItemProperties_ {
  item: string;
  quantity: number | string;
  price: number;
}

interface PaymentDetailItemProperties {
  label: string;
  value: string;
}

export interface PaymentReceiptProperties {
  title: string;
  orderSummaryDetails: OrderSummaryItemProperties_[];
  paymentDetails: PaymentDetailItemProperties[];
  amount: string;
  contactNumber: string;
  email: string;
}

const orderSummaryDetails: OrderSummaryItemProperties_[] = [
  { item: "Item", quantity: 5, price: 200 },
  { item: "Item", quantity: 3, price: 120 },
  { item: "VAT", quantity: "10%", price: 32 },
];

const paymentDetails: PaymentDetailItemProperties[] = [
  { label: "Amount", value: "$352" },
  { label: "Payment Method", value: "Mastercard" },
];

export default function Page() {
  return (
    <>
      <PaymentReceipt
        title="Payment Receipt"
        orderSummaryDetails={orderSummaryDetails}
        paymentDetails={paymentDetails}
        amount="400"
        contactNumber="123-456-7890"
        email="contact@example.com"
      />
    </>
  );
}
