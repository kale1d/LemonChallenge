import { ActionProps, IStoreState, Types } from "./types";


export const initialState: IStoreState = {token: null, countryInfo: []};

const setToken = (state: IStoreState, payload: Partial<IStoreState>) => {
  return { ...state, token: payload.token };
};

const setCountryData = (state:IStoreState, payload: Partial<IStoreState>) => {
  return {...state, countryInfo: payload.countryInfo};
}

export const Reducer = (state: IStoreState, { type, payload }: ActionProps ) => {
  switch (type) {
    case Types.initialize: {
      return payload;
    }
    case Types.setToken: {
      return setToken(state, payload);
    }
    case Types.setCountryData: {
      return setCountryData(state, payload);
    }
    default: {
      return state;
    }
  }
};
