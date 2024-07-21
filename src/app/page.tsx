import CurrencyConverter from "~/components/common/CurrencyConverter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CurrencyConverter amount={100} currencyCode="EUR" showSymbol />
    </main>
  );
}
