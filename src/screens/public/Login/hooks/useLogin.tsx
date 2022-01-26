import { GoogleSignin } from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useStore } from "../../../../store";
import { Types } from "../../../../store/types";

export const useLogin = () => {
  const { dispatch } = useStore();

  const googleSignInConfig: () => void = () => {
    GoogleSignin.configure({
      webClientId:
        "476381402305-p2u1v4lu2fjq53goavgeqv9rm8mjbc2r.apps.googleusercontent.com",
      iosClientId:
        "476381402305-5gge01pn7g8j288e7efpcgapek4t4v3a.apps.googleusercontent.com",
      offlineAccess: true,
    });
  };

  const signIn = async () => {
    try {
      const hasPlayerServices = await GoogleSignin.hasPlayServices();
      if (hasPlayerServices) {
        try {
          const response = await GoogleSignin.signIn();
          if(response.idToken) {
            await AsyncStorage.setItem("token", response.idToken);
            dispatch({
              type: Types.setToken,
              payload: { token: response.idToken },
            });
          }
        } catch (e) {
          console.log(e);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  

  const fetchUserToken = async (): Promise<string | null> => {
    let token : string | null = null;
    try {
      token = await AsyncStorage.getItem("token");
    } catch(e) {
      console.log(e);
    } finally {
      dispatch({
        type: Types.setToken,
        payload: { token: token },
      });
      return token;
    }
  };

  const logOut = () => {
    dispatch({ type: Types.setToken, payload: { token: null } });
    AsyncStorage.removeItem("token");
  };

  return { googleSignInConfig, signIn, fetchUserToken, logOut };
};
