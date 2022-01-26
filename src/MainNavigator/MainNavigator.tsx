import React, { FC, useEffect, useRef } from "react";
import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainStackList, Routes } from "./types";
import { useStore } from "../store";
import { LoginScreen } from "../screens/public/Login/Login.screen";
import { ConfirmedCasesScreen } from "../screens/private/ConfirmedCases/ConfirmedCases.screen";
import { CountriesScreen } from "../screens/private/Countries/Countries.screen";
import { useLogin } from "../screens/public/Login/hooks/useLogin";


export const MainNavigator: FC = () => {
  const Stack = createStackNavigator<MainStackList>();
  const { state } = useStore();
  const {fetchUserToken} = useLogin();

  const { token } = state;
  
  useEffect(()=> {
    fetchUserToken();
  }, [fetchUserToken]);

  const navigationRef: React.RefObject<NavigationContainerRef> = useRef(null)

  return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator headerMode="none">
          {!token ? (
            <>
              <Stack.Screen name={Routes.Login} component={LoginScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name={Routes.Countries} component={CountriesScreen} />
              <Stack.Screen name={Routes.ConfirmedCases} component={ConfirmedCasesScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
  );
};
