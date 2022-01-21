import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CountryCovidInfo } from "../../../../Api/types/types";
import { useStore } from "../../../../store";
import { Types } from "../../../../store/types";

export const useConfirmedCases = () => {
  const { state, dispatch } = useStore();
  const { countryInfo } = state;
  const [covidCases, setCovidCases] = useState<CountryCovidInfo[]>(countryInfo);

  const [isDateFiltered, setIsDateFiltered] = useState(false);
  const [isCasesFiltered, setIsCasesFiltered] = useState(false);

  const sortData = (a: number, b: number) => {
    return a - b;
  };

  const sortCasesAsc = () => {
    const data = countryInfo.sort((a: CountryCovidInfo, b: CountryCovidInfo) =>
      sortData(a.Cases, b.Cases)
    );
    setIsCasesFiltered(false);
    setCovidCases(data);
  };

  const sortCasesDesc = () => {
    const data = countryInfo.sort((a: CountryCovidInfo, b: CountryCovidInfo) =>
      sortData(b.Cases, a.Cases)
    );
    setCovidCases(data);
    setIsCasesFiltered(true);
  };

  const sortCases = (): void => {
    if (isCasesFiltered) {
      sortCasesAsc();
    } else {
      sortCasesDesc();
    }
  };

  const sortDateAsc = () => {
    const data = countryInfo.sort((a: CountryCovidInfo, b: CountryCovidInfo) => {
      const f1 = new Date(a.Date).getTime();
      const f2 = new Date(b.Date).getTime();
      return sortData(f1, f2);
    });

    setCovidCases(data);
    setIsDateFiltered(false);
  };

  const sortDateDesc = () => {
    const data = countryInfo.sort((a: CountryCovidInfo, b: CountryCovidInfo) => {
      const f1 = new Date(a.Date).getTime();
      const f2 = new Date(b.Date).getTime();
      return sortData(f2, f1);
    });

    setCovidCases(data);
    setIsDateFiltered(true);
  };

  const sortDates = () => {
    if (isDateFiltered) {
      sortDateAsc();
    } else {
      sortDateDesc();
    }
  };

  const logOut = () => {
    dispatch({ type: Types.setToken, payload: { token: null } });
    AsyncStorage.removeItem("token");
  };

  return { covidCases, sortDates, sortCases, logOut };
};
