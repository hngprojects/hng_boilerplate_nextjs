type Properties = {
  count?: number;
};

const ProductCardSkeleton = ({ count }: Properties) => {
  return Array.from({ length: count || 5 }).map((_, index) => (
    <div
      key={index}
      className="relative mx-auto my-2 h-[84px] w-full max-w-[98%] animate-pulse overflow-hidden rounded-xl bg-gray-300 md:mt-5"
    >
      <div
        className="absolute left-0 top-0 h-full w-full"
        style={{ animationDelay: `${index * 0.2}s`, animationDuration: "2s" }}
        data-placeholder
      />
    </div>
  ));
};

export default ProductCardSkeleton;
