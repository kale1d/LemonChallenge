import React, { FC, useReducer } from "react"
import { AppContext, initialState, Reducer } from ".";

export const AppProvider: FC<any> = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <AppContext.Provider value={{state, dispatch}}>
        {children}
        </AppContext.Provider>
    )
}