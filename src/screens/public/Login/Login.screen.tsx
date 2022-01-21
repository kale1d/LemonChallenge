import React, { FC, useEffect } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useLogin } from "./hooks/useLogin";

export const LoginScreen: FC<any> = () => {
  const { signIn } = useLogin();
 
  return (
    <SafeAreaView>
      <View>
        <Text>holi</Text>
        <Button title={"Sign in with Google"} onPress={() => signIn()} />
      </View>
    </SafeAreaView>
  );
};
