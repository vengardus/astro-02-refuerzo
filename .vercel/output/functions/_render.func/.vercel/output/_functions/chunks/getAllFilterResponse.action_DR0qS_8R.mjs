import { C as COUNTRY } from './MainLayout_DnVXclY1.mjs';

const getAllFilterResponse = async () => {
  const response = await fetch(
    `${COUNTRY.urlBaseApiCountries}/all?fields=name,capital,currencies,region,flags`
  );
  const data = await response.json();
  return data;
};

export { getAllFilterResponse as g };
