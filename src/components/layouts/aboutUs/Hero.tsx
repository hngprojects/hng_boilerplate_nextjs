"use client";

import { getCookie } from "cookies-next";
import Image from "next/image";

import Heading from "../heading";

const Hero = () => {
  const locale = getCookie("NEXT_LOCALE") || "en";

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-10 lg:px-10 xl:px-10">
        <Heading
          tag={`${
            locale === "es"
              ? "Sobre Nosotros"
              : locale === "fr"
                ? "À Propos De Nous"
                : "About Us"
          }`}
          title={`${
            locale === "es"
              ? "Más Que {{Solo}} Un BoilerPlate"
              : locale === "fr"
                ? "Plus Que {{Juste}} Un BoilerPlate"
                : "More Than {{Just}} A BoilerPlate"
          }`}
          content={`${
            locale === "es"
              ? "Bienvenido a Hng Boilerplate, donde la pasión se encuentra con la innovación. Descubre cómo comenzamos, los desafíos que superamos y los hitos que definen nuestro viaje."
              : locale === "fr"
                ? "Bienvenue sur Hng Boilerplate, où la passion rencontre l'innovation. Découvrez comment nous avons commencé, les défis que nous avons surmontés et les jalons qui définissent notre parcours."
                : "Welcome to Hng Boilerplate, where passion meets innovation. Discover how we started, the challenges we overcame, and the milestones that define our journey."
          }`}
        />

        <div className="mt-[10px] w-full">
          <Image
            src="/images/about-us/aboutus1.svg"
            alt="Hero_image"
            className="w-full"
            width={1036}
            height={355}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
