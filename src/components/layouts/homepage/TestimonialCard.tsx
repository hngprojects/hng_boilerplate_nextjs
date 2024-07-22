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
    <div className="testimonial-card border border-solid border-primary bg-[#ffffff]">
      <p>{properties?.content}</p>

      <div data-testid="rating">
        <Rating />
      </div>

      <div className="image-box">
        <Image
          src={properties?.image}
          alt="testimonial-image"
          width={100}
          height={100}
        />
      </div>

      <h4>{properties?.name}</h4>
      <small>{properties?.stack}</small>
    </div>
  );
};

export default TestimonialCard;
