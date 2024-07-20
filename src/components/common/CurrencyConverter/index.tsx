"use client";

import { useEffect, useState } from "react";

export interface CurrencyConversionProperty {
  amount: number;
  currencyCode: string;
  showSymbol?: boolean;
}

export type conversionRates = {
  [key: string]: number;
};

export type CObject = {
  convertedAmount: number;
  currencySymbol: string;
};

export const currencySymbols: { [key: string]: string } = {
  AED: "د.إ",
  AFN: "؋",
  ALL: "L",
  AMD: "֏",
  ANG: "ƒ",
  AOA: "Kz",
  ARS: "$",
  AUD: "A$",
  AWG: "ƒ",
  AZN: "₼",
  BAM: "KM",
  BBD: "Bds$",
  BDT: "৳",
  BGN: "лв",
  BHD: ".د.ب",
  BIF: "FBu",
  BMD: "$",
  BND: "B$",
  BOB: "Bs.",
  BRL: "R$",
  BSD: "$",
  BTN: "Nu.",
  BWP: "P",
  BYN: "Br",
  BZD: "BZ$",
  CAD: "C$",
  CDF: "FC",
  CHF: "CHF",
  CLP: "$",
  CNY: "¥",
  COP: "$",
  CRC: "₡",
  CUP: "$MN",
  CVE: "Esc",
  CZK: "Kč",
  DJF: "Fdj",
  DKK: "kr",
  DOP: "RD$",
  DZD: "دج",
  EGP: "£",
  ERN: "Nkf",
  ETB: "Br",
  EUR: "€",
  FJD: "FJ$",
  FKP: "£",
  FOK: "kr",
  GBP: "£",
  GEL: "₾",
  GGP: "£",
  GHS: "₵",
  GIP: "£",
  GMD: "D",
  GNF: "FG",
  GTQ: "Q",
  GYD: "$",
  HKD: "HK$",
  HNL: "L",
  HRK: "kn",
  HTG: "G",
  HUF: "Ft",
  IDR: "Rp",
  ILS: "₪",
  IMP: "£",
  INR: "₹",
  IQD: "ع.د",
  IRR: "﷼",
  ISK: "kr",
  JEP: "£",
  JMD: "J$",
  JOD: "د.ا",
  JPY: "¥",
  KES: "KSh",
  KGS: "лв",
  KHR: "៛",
  KID: "$",
  KMF: "CF",
  KRW: "₩",
  KWD: "د.ك",
  KYD: "$",
  KZT: "₸",
  LAK: "₭",
  LBP: "ل.ل",
  LKR: "Rs",
  LRD: "$",
  LSL: "L",
  LYD: "ل.د",
  MAD: "د.م.",
  MDL: "L",
  MGA: "Ar",
  MKD: "ден",
  MMK: "K",
  MNT: "₮",
  MOP: "MOP$",
  MRU: "UM",
  MUR: "Rs",
  MVR: "Rf",
  MWK: "MK",
  MXN: "$",
  MYR: "RM",
  MZN: "MT",
  NAD: "$",
  NGN: "₦",
  NIO: "C$",
  NOK: "kr",
  NPR: "Rs",
  NZD: "NZ$",
  OMR: "ر.ع.",
  PAB: "B/.",
  PEN: "S/",
  PGK: "K",
  PHP: "₱",
  PKR: "Rs",
  PLN: "zł",
  PYG: "Gs",
  QAR: "ر.ق",
  RON: "lei",
  RSD: "din",
  RUB: "₽",
  RWF: "FRw",
  SAR: "﷼",
  SBD: "SI$",
  SCR: "SR",
  SDG: "ج.س.",
  SEK: "kr",
  SGD: "S$",
  SHP: "£",
  SLE: "Le",
  SLL: "Le",
  SOS: "Sh",
  SRD: "$",
  SSP: "£",
  STN: "Db",
  SYP: "£S",
  SZL: "E",
  THB: "฿",
  TJS: "SM",
  TMT: "m",
  TND: "د.ت",
  TOP: "T$",
  TRY: "₺",
  TTD: "TT$",
  TVD: "$",
  TWD: "NT$",
  TZS: "Sh",
  UAH: "₴",
  UGX: "USh",
  USD: "$",
  UYU: "$U",
  UZS: "сўм",
  VES: "Bs.S",
  VND: "₫",
  VUV: "VT",
  WST: "T",
  XAF: "FCFA",
  XCD: "$",
  XOF: "CFA",
  XPF: "F",
  YER: "﷼",
  ZAR: "R",
  ZMW: "ZK",
  ZWL: "$",
};

export async function fetchRates(): Promise<conversionRates | undefined> {
  try {
    const response = await fetch(
      "https://v6.exchangerate-api.com/v6/c58fed89b800f3566d6c89f1/latest/USD",
      {
        method: "GET",
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch currency rates");
    }
    const data = await response.json();

    const conversionRates: conversionRates = data.conversion_rates;
    return conversionRates;
  } catch (error) {
    console.log(error.message);
  }
}

export const convertCurrencyFromUSD = (
  totalAmount: number = 0,
  currencyCode: string = "USD",
  conversionRates: conversionRates | undefined,
): CObject => {
  if (!conversionRates || !conversionRates[currencyCode]) {
    return {
      convertedAmount: 0,
      currencySymbol: "$",
    };
  }

  if (typeof totalAmount !== "number" || Number.isNaN(totalAmount)) {
    totalAmount = 0;
  }

  const exchangerate = conversionRates[currencyCode];
  const convertedAmount = totalAmount * exchangerate;
  const currencySymbol = currencySymbols[currencyCode];

  return {
    convertedAmount,
    currencySymbol,
  };
};

const CurrencyConverter = ({
  amount,
  currencyCode,
  showSymbol,
}: CurrencyConversionProperty) => {
  const [convertedAmount, setConvertedAmount] = useState<string | undefined>();
  const [currencySymbol, setCurrencySymbol] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    const fetchRateAndConvert = async () => {
      setIsLoading(true);
      setError(undefined);

      const exchangerate = await fetchRates();
      if (exchangerate) {
        const { convertedAmount, currencySymbol } = convertCurrencyFromUSD(
          amount,
          currencyCode,
          exchangerate,
        );

        const formattedAmount = new Intl.NumberFormat("en-US", {
          style: "decimal",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(convertedAmount);

        setConvertedAmount(formattedAmount);
        setCurrencySymbol(currencySymbol);
      } else {
        setError("conversion failed");
      }

      setIsLoading(false);
    };

    fetchRateAndConvert();
  }, [amount, currencyCode]);

  return (
    <div className="container flex max-w-[328px] flex-col rounded-xl border-[0.5px] border-[#CBD5E1] p-6 shadow-[0px_1px_18px_0px_#0A39B01F]">
      <div className="flex w-full items-center justify-between">
        <p className="text-left text-[14px] font-medium leading-[16.94px]">
          Total Revenue
        </p>
        {showSymbol && currencySymbol && (
          <h4 className="text-2xl font-semibold leading-[29.05px] text-[#0A0A0A]">
            {currencySymbol}
          </h4>
        )}
      </div>
      <div className="flex">
        {error && <div>{error}</div>}
        {isLoading && (
          <div className="text-base text-[#f97316]">Loading....</div>
        )}
        {showSymbol && currencySymbol && (
          <h4 className="text-2xl font-semibold leading-[29.05px] text-[#0A0A0A]">
            {currencySymbol}
          </h4>
        )}
        {convertedAmount && (
          <h4 className="text-2xl font-semibold leading-[29.05px] text-[#0A0A0A]">
            {convertedAmount}
          </h4>
        )}
      </div>
      <p className="text-left text-[12px] font-normal leading-[14.52px] text-[#525252]">
        +20% from last month
      </p>
    </div>
  );
};

export default CurrencyConverter;
