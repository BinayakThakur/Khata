import { createContext,    useState } from "react";
import io from 'socket.io-client'

export const DataContext = createContext();

export const DataProvider = props =>{
    const[change,setChange]=useState("");
    var socket = io.connect("https://butlerservice.herokuapp.com/");
    const[isLogged,setLogged]=useState(false);
    const[productData,setProdData]=useState();
    const[currentUser,setUser]=useState();
    return (
        <DataContext.Provider value={{
            isLogged,setLogged,currentUser,setUser,productData,setProdData,socket,setChange,change}}>
            {props.children}
        </DataContext.Provider>
    )
}