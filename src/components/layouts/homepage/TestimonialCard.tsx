import Image from "next/image";
import { Rating } from "./svgs";

interface Properties {
  image: string;
  content: string;
  name: string;
  stack: string;
}

const TestimonialCard = (properties: Properties) => {
  return (
    <div className="border border-solid border-primary bg-white p-10 flex flex-col items-center justify-center rounded-md text-center">
      <p className="text-base font-normal font-inter mb-6">{properties?.content}</p>

      <div data-testid="rating" className="mb-6">
        <Rating />
      </div>

      <div className="w-12 h-12 rounded-full overflow-hidden mt-3">
        <Image
          src={properties?.image}
          alt="testimonial-image"
          width={50}
          height={50}
          className="object-cover"
        />
      </div>

      <h4 className="text-lg font-semibold font-inter mt-2 mb-2">{properties?.name}</h4>
      <small className="text-base font-normal font-inter">{properties?.stack}</small>
    </div>
  );
};

export default TestimonialCard;
