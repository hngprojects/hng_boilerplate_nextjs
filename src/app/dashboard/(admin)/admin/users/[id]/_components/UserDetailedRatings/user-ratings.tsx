import { Star } from "lucide-react";
import { useState } from "react";

interface RatingProperties {
  initialRating?: number;
  onRatingChange?: (rating: number) => void;
}

const Rating: React.FC<RatingProperties> = ({
  initialRating = 3.5,
  onRatingChange,
}) => {
  const [rating, setRating] = useState<number>(initialRating);

  const handleClick = (value: number) => {
    setRating(value);
    if (onRatingChange) {
      onRatingChange(value);
    }
  };

  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center space-y-1">
      <span className="text px-1 font-semibold text-[#444846]">
        {rating.toFixed(1)}/5
      </span>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((value) => (
          <Star
            key={value}
            className={`m-0 h-6 w-6 cursor-pointer p-0 ${rating >= value ? "text-yellow-500" : "text-black"}`}
            fill={rating >= value ? "currentColor" : "none"}
            onClick={() => handleClick(value)}
          />
        ))}
        {hasHalfStar && (
          <Star className="h-6 w-6 text-yellow-500" fill="currentColor" />
        )}
      </div>
    </div>
  );
};

export default Rating;
