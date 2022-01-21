import { createContext, Dispatch, useContext } from "react";
import { initialState } from "./Store.reducer";
import { ActionProps, IStoreState } from "./types";

export const AppContext = createContext<{
  state: IStoreState;
  dispatch: Dispatch<ActionProps>;
}>({ state: initialState, dispatch: () => null });

export const useStore = () => {
  return useContext(AppContext);
};

