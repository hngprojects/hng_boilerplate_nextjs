import Image from "next/image";
import { useEffect, useState } from "react";

import { Locale } from "~/utils/config";
import { Language, languages } from "~/utils/languages";
import { setUserLocale } from "~/utils/locale";

const LanguageSwitcher: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("preferredLanguage") || "en",
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("preferredLanguage", selectedLanguage);
  }, [selectedLanguage]);

  const handleLanguageChange = (language: Language) => {
    const locale = language.code as Locale;
    setUserLocale(locale);
    setSelectedLanguage(language.code);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const findFlag = (code: string) => {
    const language = languages.find((lang) => lang.code === code);
    return language ? language.flag : "/images/flags/en.svg";
  };

  const flagPath = findFlag(selectedLanguage);

  return (
    <>
      <div className="relative">
        <div
          className="flex w-[100px] cursor-pointer rounded-sm p-2 hover:bg-gray-100"
          onClick={toggleDropdown}
        >
          <Image src={flagPath} alt="" width={30} height={18} />
          <div className="ml-2 text-lg uppercase text-[#F97316]">
            {selectedLanguage}
          </div>
        </div>
        {isOpen && (
          <div className="absolute -left-full top-full z-50 my-4 w-[180px] list-none rounded-[16px] bg-white shadow">
            <ul className="py-2 font-medium" role="none">
              <div className="my-2 text-center text-xs text-[#9F9F9F]">
                SELECT YOUR LANGUAGE
              </div>
              {languages.map((language) => (
                <li key={language.code}>
                  <div
                    className="flex cursor-pointer items-center justify-center gap-2 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => handleLanguageChange(language)}
                  >
                    <Image
                      src={language.flag}
                      width={24}
                      height={16}
                      alt="flg"
                    />
                    <div className="text-sm">{language.name}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default LanguageSwitcher;
