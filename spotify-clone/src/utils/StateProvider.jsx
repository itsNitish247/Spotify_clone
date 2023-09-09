import { createContext,useContext,useReducer } from "react";


export const StateContext=createContext();

export const StateProvider=({children,initialState,reducer})=>(
<StateProvider.Provider value={useReducer(reducer,initialState)}>
{children}
</StateProvider.Provider>
);

export const useStateProvider=()=>useContext(StateContext);
