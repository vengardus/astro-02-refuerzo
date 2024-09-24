import { COUNTRY } from "@/config/constants";
import type { CountryFilterFieldsResponse } from "@/interfaces/response/CountryFilterFieldsResponse.interface";

export const getAll = async () => {
  const response = await fetch(`${COUNTRY.urlBaseApiCountries}/all`);
  const data = await response.json();
  return data as CountryFilterFieldsResponse[];
};

