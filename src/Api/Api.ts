import { Country, CountryCovidInfo } from "./types/types";

const API_URL = "https://api.covid19api.com/";

export const fetchCountries = async () => {
  return fetch(`${API_URL}countries`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(async (data: Country[]) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};

export const fetchCountryData = async (Slug: string) => {
  return fetch(`${API_URL}total/dayone/country/${Slug}/status/confirmed`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(async (data: CountryCovidInfo[]) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
