import Image from "next/image";

interface EmptyListProperties {
  image: string;
  mainText: string;
  subText: string;
}

const EmptyList = ({ image, mainText, subText }: EmptyListProperties) => {
  return (
    <section className="mx-auto flex w-[342px] flex-col items-center gap-1 sm:w-full">
      <aside className="h-[280px] w-[280px]">
        <Image
          src={image}
          alt="empty list component image"
          width={1000}
          height={1000}
        />
      </aside>
      <h5 className="mx-auto w-[324px] text-center text-[20px] font-semibold leading-normal text-neutral-dark-2 sm:w-full sm:text-[28px]">
        {mainText}
      </h5>
      <h6 className="mx-auto w-[315px] text-center text-[18px] font-normal leading-normal text-neutral-dark-2 sm:w-full sm:text-[20px]">
        {subText}
      </h6>
    </section>
  );
};
export default EmptyList;
