import { useState, useEffect, useTransition } from 'react';
import { languages } from "~/utils/languages";
import Image from "next/image";
import { Language } from '~/utils/languages';
import { Locale } from '~/utils/config';
import { setUserLocale } from '~/utils/locale';


const LanguageSwitcher: React.FC = () => {
    const [isPending, startTransition] = useTransition()

    const [selectedLanguage, setSelectedLanguage] = useState(
        localStorage.getItem('preferredLanguage') || 'en'
    );
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('preferredLanguage', selectedLanguage);
    }, [selectedLanguage]);

    const handleLanguageChange = (language: Language) => {
        const locale = language.code as Locale
        startTransition(() => {
            setUserLocale(locale);
        });
        setSelectedLanguage(language.code);
        setIsOpen(false)
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const findFlag = (code: string) => {
        const language = languages.find(lang => lang.code === code);
        return language ? language.flag : '/images/flags/en.svg'
    };

    const flagPath = findFlag(selectedLanguage);

    return (
        <>
            <div className='relative'>
                <div className="w-[100px] flex cursor-pointer rounded-sm p-2 hover:bg-gray-100"
                    onClick={toggleDropdown}
                >
                    <Image src={flagPath} alt='' width={36} height={24} />
                    <div className='text-[#F97316] ml-2 uppercase text-lg'>{selectedLanguage}</div>
                </div>
                {isOpen && (
                    <div
                        className="z-50 absolute top-full -left-1/2 my-4 list-none bg-white rounded-[16px] shadow w-[194px]"
                    >
                        <ul className="py-2 font-medium" role="none"><div className='text-xs text-center text-[#9F9F9F] my-2'>SELECT YOUR LANGUAGE</div>
                            {languages.map((language) => (
                                <li key={language.code}>
                                    <div
                                        className="flex items-center justify-center gap-2 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleLanguageChange(language)}
                                    >
                                        
                                        <Image src={language.flag} width={24} height={16} alt='flg' />
                                        <div className="text-sm">
                                            {language.name}
                                        </div>
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
