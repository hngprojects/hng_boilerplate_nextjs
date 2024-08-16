import { useTranslations } from "next-intl";
import Image from "next/image";

import { Rating } from "./svgs";

interface Properties {
  image: string;
  content: string;
  name: string;
  stack: string;
}

const TestimonialCard = (properties: Properties) => {
  const t = useTranslations("testimonials");
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-md border border-solid border-primary bg-white px-5 py-10 text-center sm:h-[500px] md:h-[500px] lg:h-[500px] xl:px-10">
      <p className="font-inter mb-6 text-base font-normal">
        {t(`${properties?.content}`)}
      </p>

      <div data-testid="rating" className="mb-6">
        <Rating />
      </div>

      <div className="mt-3 h-12 w-12 overflow-hidden rounded-full">
        <Image
          src={properties?.image}
          alt="testimonial-image"
          width={100}
          height={100}
          className="object-cover"
        />
      </div>

      <h4 className="font-inter mb-2 mt-2 text-lg font-semibold">
        {properties?.name}
      </h4>
      <small className="font-inter text-base font-normal">
        {properties?.stack}
      </small>
    </div>
  );
};

export default TestimonialCard;
