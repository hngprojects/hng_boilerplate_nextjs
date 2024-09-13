export function ProductNotFound({ term }: { term: string }) {
  return (
    <div className="absolute top-1/2 flex w-full items-center justify-center">
      <p className="w-full text-center">
        No product found for &quot;
        <span className="font-bold">{term}</span>
        &quot;
      </p>
    </div>
  );
}
