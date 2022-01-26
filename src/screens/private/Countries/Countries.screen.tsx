import React, { FC, useCallback, useEffect, useState } from "react";
import { VirtualizedList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fetchCountries, fetchCountryData } from "../../../Api/Api";
import { Country } from "../../../Api/types/types";
import { Types } from "../../../store/types";
import { MainNavigationProp, Routes } from "../../../MainNavigator/types";
import { useStore } from "../../../store";
import { ListItem } from "../../../components/ListItem/ListItem.component";

type Props = {
    navigation: MainNavigationProp<Routes.Countries>;
}
export const CountriesScreen:FC<Props> = ({navigation}) => {

  const [countries, setCountries] = useState<Country[] | void | null>(null);
  const {dispatch} = useStore();

  const fetchData = useCallback(async () => {
    const info = await fetchCountries();
    setCountries(info);
  }, [setCountries]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  
  const handleOnPress = async (slug: string) => {
      try {
          const info  = await fetchCountryData(slug);
          if(info) {
            dispatch({type: Types.setCountryData, payload: {countryInfo: info}})
          }

      } catch(e) {

      } finally {
          navigation.navigate(Routes.Home);
      }
  }

  return (
    <SafeAreaView>
      <VirtualizedList
        data={countries}
        initialNumToRender={10}
        renderItem={({ item }: {item: Country}) => <ListItem title={item.Country} subtitle={item.ISO2} onPress={()=> handleOnPress(item.Slug)}/>}
        getItemCount={data => data?.length || 0 }
        getItem={(data, index)=> data[index]}
        keyExtractor={(item, index) => item?.ISO2 || index.toString()}
      />
    </SafeAreaView>
  );
};
