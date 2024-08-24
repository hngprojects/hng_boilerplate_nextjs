declare module "react-country-state-city" {
  export function GetCountries(): Promise<Country[]>;
  export function GetState(countryId: number): Promise<State[]>;
  export type State = {
    id: number;
    name: string;
    state_code: string;
    latitude: string;
    longitude: string;
  };
  export type Country = {
    id: number;
    name: string;
    iso3: string;
    iso2: string;
    numeric_code: string;
    phone_code: number;
    capital: string;
    currency: string;
    currency_name: string;
    currency_symbol: string;
    native: string;
    region: string;
    subregion: string;
    emoji: string;
    emojiU: string;
    tld: string;
    latitude: string;
    longitude: string;
  };
}
