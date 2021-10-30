import { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
const Refer=()=>{
    let history=useHistory();
    useEffect(()=>{
        history.push("/home");
    },[]);
    return(
        <>
         
        
        </>
    )
}
export default Refer;