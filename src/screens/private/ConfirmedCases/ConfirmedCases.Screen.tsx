import React, { FC } from "react";
import {
  Button,
  Text,
  View,
  VirtualizedList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListItem } from "../../../components/ListItem/ListItem.component";
import { useConfirmedCases } from "./hooks/useConfirmedCases";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useStore } from "../../../store";
import { Types } from "../../../store/types";

export const ConfirmedCasesScreen: FC = () => {
  const {covidCases, sortCases, sortDates} = useConfirmedCases();
const {dispatch} = useStore();

  const logOut = () => {
    console.log(AsyncStorage.getItem("token"));
    dispatch({type: Types.setToken, payload: {token: null}})
    AsyncStorage.removeItem("token");
  }

  return (
    <SafeAreaView>
      <Button
        title="Ordenar Fecha"
        onPress={() => sortDates()}
      />
      <Button
        title="Ordenar Casos"
        onPress={() =>sortCases()}
      />

<Button
        title="Log Out"
        onPress={() =>logOut()}
      />
      <VirtualizedList
        data={covidCases}
        initialNumToRender={10}
        renderItem={({ item }: any) => (
          <ListItem title={`Cases: ${item.Cases}`} subtitle={`Date: ${new Date(item.Date).toLocaleDateString("es-ES")}`} disabled/>
         
        )}
        getItemCount={(data) => data?.length || 0}
        getItem={(data, index) => data[index]}
      />
    </SafeAreaView>
  );
};
