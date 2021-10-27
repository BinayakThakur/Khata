import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = props =>{
    
    const[isLogged,setLogged]=useState(false);
    
    return (
        <DataContext.Provider value={{
            isLogged,setLogged}}>
            {props.children}
        </DataContext.Provider>
    )
}