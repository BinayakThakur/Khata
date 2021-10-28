import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = props =>{
    
    const[isLogged,setLogged]=useState(false);
    const[currentUser,setUser]=useState();
    return (
        <DataContext.Provider value={{
            isLogged,setLogged,currentUser,setUser}}>
            {props.children}
        </DataContext.Provider>
    )
}