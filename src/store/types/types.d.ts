
export enum Types {
  initialize = "INITIALIZE",
  setToken = "SET_TOKEN",
  setCountryData = "SET_COUNTRY_DATA",
}

type Initialize = {
  type: Types.initialize,
  payload: IStoreState,
}

type SetToken = {
  type: Types.setToken,
  payload: Partial<IStoreState>
}

type SetCountryData = {
  type: Types.setCountryData,
  payload: Partial<IStoreState>,
}

export type ActionProps = Initialize | SetToken | SetCountryData;

export type ICountryInfo = {
  Country: string;
  CountryCode: string;
  Province: string;
  City: string;
  CityCode: string;
  Lat: string;
  Lon: string;
  Cases: number;
  Status: string;
  Date: string;
};

export type IStoreState = { token: string | null; countryInfo: ICountryInfo[] };
