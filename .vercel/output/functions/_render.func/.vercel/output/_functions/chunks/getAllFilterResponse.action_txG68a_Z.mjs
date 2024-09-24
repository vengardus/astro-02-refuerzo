import { C as COUNTRY } from './MainLayout_D3DKh4OK.mjs';

const getAllFilterResponse = async () => {
  const response = await fetch(
    `${COUNTRY.urlBaseApiCountries}/all?fields=name,capital,currencies,region,flags`
  );
  const data = await response.json();
  return data;
};

export { getAllFilterResponse as g };
