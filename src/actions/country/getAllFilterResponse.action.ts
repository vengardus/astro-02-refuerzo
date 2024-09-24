import { COUNTRY } from "@/config/constants";
import type { CountryFilterFieldsResponse } from "@/interfaces/response/CountryFilterFieldsResponse.interface";


export const getAllFilterResponse = async (): Promise<CountryFilterFieldsResponse[]> => {
  const response = await fetch(
    `${COUNTRY.urlBaseApiCountries}/all?fields=name,capital,currencies,region,flags`,
  );
  const data: CountryFilterFieldsResponse[] = await response.json();
  return data;
};
