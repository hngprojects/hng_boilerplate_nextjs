import CareerCardParent from "~/components/common/CareerCard";

export default function Card() {
  return (
    <div className="mt-7 grid grid-cols-1 gap-3 px-7 sm:grid-cols-2">
      <CareerCardParent />
      <CareerCardParent />
      <CareerCardParent />
      <CareerCardParent />
    </div>
  );
}
