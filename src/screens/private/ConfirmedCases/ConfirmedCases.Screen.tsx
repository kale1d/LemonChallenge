import React, { FC } from "react";
import { Button, View, VirtualizedList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ICountryInfo } from "../../../store/types";
import { useConfirmedCases } from "./hooks/useConfirmedCases";
import { ListItem } from "../../../components/ListItem/ListItem.component";
import { confirmedCasesStyles as styles } from "./ConfirmedCases.styles";

export const ConfirmedCasesScreen: FC = () => {
  const { covidCases, sortCases, sortDates, logOut } = useConfirmedCases();
  const { container, buttonsContainer, listContainer } = styles;

  return (
    <SafeAreaView style={container}>
      <View style={buttonsContainer}>
        <Button title="Ordenar Fecha" onPress={() => sortDates()} />
        <Button title="Ordenar Casos" onPress={() => sortCases()} />
        <Button title="Log Out" onPress={() => logOut()} />
      </View>
      <View style={listContainer}>
        <VirtualizedList
          data={covidCases}
          initialNumToRender={10}
          renderItem={({ item }: { item: ICountryInfo }) => (
            <ListItem
              title={`Cases: ${item.Cases}`}
              subtitle={`Date: ${new Date(item.Date).toLocaleDateString(
                "es-ES"
              )}`}
              disabled
            />
          )}
          getItemCount={(data) => data?.length || 0}
          getItem={(data, index) => data[index]}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};
