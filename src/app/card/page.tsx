import CareerCardParent from "~/components/common/CareerCard";

export default function Card() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  gap-3 mt-7 px-7">
      <CareerCardParent />
      <CareerCardParent />
      <CareerCardParent />
      <CareerCardParent />
    </div>
  );
}
