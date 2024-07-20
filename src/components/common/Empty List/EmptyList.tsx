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
<<<<<<< HEAD
      <h5 className="text-neutral-dark-2 mx-auto w-[324px] text-center text-[20px] font-semibold leading-normal sm:w-full sm:text-[28px]">
        {mainText}
      </h5>
      <h6 className="text-neutral-dark-2 mx-auto w-[315px] text-center text-[18px] font-normal leading-normal sm:w-full sm:text-[20px]">
=======
      <h5 className="mx-auto w-[324px] text-center text-[20px] font-semibold leading-normal text-[#525252] sm:w-full">
        {mainText}
      </h5>
      <h6 className="mx-auto w-[315px] text-center text-[18px] font-normal leading-normal text-[#525252] sm:w-full">
>>>>>>> 6d984f635f90a408562a2fb74cb152a1fb821393
        {subText}
      </h6>
    </section>
  );
};
export default EmptyList;
