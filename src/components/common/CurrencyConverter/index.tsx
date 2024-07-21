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

export const mockConversionRates: conversionRates = {
  AED: 3.67,
  AFN: 86,
  ALL: 101.7,
  AMD: 405,
  ANG: 1.79,
  AOA: 825,
  ARS: 272,
  AUD: 1.48,
  AWG: 1.79,
  AZN: 1.7,
  BAM: 1.76,
  BBD: 2,
  BDT: 110,
  BGN: 1.76,
  BHD: 0.38,
  BIF: 2080,
  BMD: 1,
  BND: 1.35,
  BOB: 6.9,
  BRL: 4.85,
  BSD: 1,
  BTN: 82,
  BWP: 13.7,
  BYN: 2.55,
  BZD: 2,
  CAD: 1.31,
  CDF: 2050,
  CHF: 0.89,
  CLP: 805,
  CNY: 7.12,
  COP: 4040,
  CRC: 540,
  CUP: 24,
  CVE: 102,
  CZK: 22,
  DJF: 177,
  DKK: 6.7,
  DOP: 55,
  DZD: 137,
  EGP: 30,
  ERN: 15,
  ETB: 55,
  EUR: 0.93,
  FJD: 2.25,
  FKP: 0.78,
  FOK: 6.7,
  GBP: 0.78,
  GEL: 2.6,
  GGP: 0.78,
  GHS: 12,
  GIP: 0.78,
  GMD: 62,
  GNF: 8600,
  GTQ: 7.8,
  GYD: 210,
  HKD: 7.85,
  HNL: 24.7,
  HRK: 7,
  HTG: 133,
  HUF: 343,
  IDR: 15_250,
  ILS: 3.61,
  IMP: 0.78,
  INR: 82,
  IQD: 1300,
  IRR: 42_500,
  ISK: 130,
  JEP: 0.78,
  JMD: 155,
  JOD: 0.71,
  JPY: 140,
  KES: 144,
  KGS: 87.5,
  KHR: 4100,
  KID: 1.48,
  KMF: 455,
  KRW: 1280,
  KWD: 0.31,
  KYD: 0.83,
  KZT: 440,
  LAK: 19_000,
  LBP: 15_000,
  LKR: 290,
  LRD: 180,
  LSL: 18,
  LYD: 4.85,
  MAD: 10,
  MDL: 17.5,
  MGA: 4550,
  MKD: 57.5,
  MMK: 2100,
  MNT: 3400,
  MOP: 8,
  MRU: 36,
  MUR: 45,
  MVR: 15.4,
  MWK: 1080,
  MXN: 17.3,
  MYR: 4.6,
  MZN: 64,
  NAD: 18,
  NGN: 780,
  NIO: 36.5,
  NOK: 10.2,
  NPR: 131,
  NZD: 1.63,
  OMR: 0.38,
  PAB: 1,
  PEN: 3.75,
  PGK: 3.53,
  PHP: 55,
  PKR: 278,
  PLN: 4.15,
  PYG: 7350,
  QAR: 3.64,
  RON: 4.65,
  RSD: 109,
  RUB: 92,
  RWF: 1200,
  SAR: 3.75,
  SBD: 8.3,
  SCR: 14,
  SDG: 600,
  SEK: 10.1,
  SGD: 1.35,
  SHP: 1.32,
  SLE: 19_500,
  SLL: 19_500,
  SOS: 570,
  SRD: 38,
  SSP: 650,
  STN: 22,
  SYP: 2700,
  SZL: 18,
  THB: 35,
  TJS: 10.3,
  TMT: 3.5,
  TND: 3.05,
  TOP: 2.33,
  TRY: 26,
  TTD: 6.8,
  TVD: 1.48,
  TWD: 31.5,
  TZS: 2400,
  UAH: 37,
  UGX: 3800,
  USD: 1,
  UYU: 38.5,
  UZS: 12_150,
  VES: 27,
  VND: 23_700,
  VUV: 119,
  WST: 2.75,
  XAF: 620,
  XCD: 2.7,
  XOF: 620,
  XPF: 110,
  YER: 250,
  ZAR: 18,
  ZMW: 19.5,
  ZWL: 365,
};

export async function fetchRates(
  url: string,
): Promise<conversionRates | undefined> {
  try {
    const response = await fetch(url, {
      method: "GET",
    });
    if (!response.ok) {
      return mockConversionRates;
    }
    const data = await response.json();
    const conversionRates: conversionRates = data.conversion_rates;
    return conversionRates;
  } catch {
    return mockConversionRates;
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

      const exchangerate = await fetchRates(
        "sorry we will be keeping it static and be using some mock rates",
      );

      if (!exchangerate || !exchangerate[currencyCode]) {
        setError("conversion failed");
        setIsLoading(false);
        return;
      }

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
