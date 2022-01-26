import React, { FC } from "react";
import { Button, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLogin } from "./hooks/useLogin";
import { loginStyles as styles } from "./Login.styles";

export const LoginScreen: FC = () => {
  const { signIn } = useLogin();
  const { container } = styles;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={container}>
        <Button title="Sign in with Google" onPress={() => signIn()} />
      </View>
    </SafeAreaView>
  );
};
