import React, { useEffect } from "react";
import { MainNavigator } from "./src/MainNavigator/MainNavigator";
import { useLogin } from "./src/screens/public/Login/hooks/useLogin";
import { AppProvider } from "./src/store/Store";

const App = () => {
  const { googleSignInConfig } = useLogin();
  
  useEffect(() => {
    googleSignInConfig();
  }, [googleSignInConfig]);

  
  return (
    <AppProvider>
      <MainNavigator />
    </AppProvider>
  );
};

export default App;
