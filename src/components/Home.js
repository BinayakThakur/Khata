import { Button,Card,CardContent,Container, Divider, TextField } from "@mui/material";

import { useContext, useEffect, useState } from "react";

import { DataContext} from "../Datacontext";
import Cards from "./Cards";
import { Formik } from "formik";

import { useSnackbar } from "notistack";

  const signform={
    user : '',
    password:''
}

  
const Home = () =>{
    const{enqueueSnackbar} = useSnackbar();
    const[myData,setData]=useState(<></>);
    const{setUser}=useContext(DataContext);
    const {isLogged} = useContext(DataContext);
    const {setLogged} =  useContext(DataContext);
    
    
    useEffect(()=>{
      const signSubmit = (e)=>{
        const reqOptions = {
          method: 'POST',
          body: JSON.stringify(e),
          headers: { 'Content-Type': 'application/json' }
        }
      fetch("https://butlerservice.herokuapp.com/users/get", reqOptions)
          .then(res => res.json() ).then(data=>{
            if(data===true){
              enqueueSnackbar("Logged",{variant:"success"});
              setLogged(true);
              setUser({"user":e.user});
            }
            else{
              enqueueSnackbar("ID or Password is wrong",{variant:"error"});
            }
          })
          .catch(err => {
           
          })
      }
      if(isLogged){
      setData(
        <>
         <Cards ></Cards>
         <Divider className="mb-5"></Divider>
         
         </>
      )}
      else{
        
        setData(

          <>
            <Card className="mt-5" style={{background:"white  "}}>
            <Formik initialValues={signform} onSubmit={signSubmit}>

            { ({
                values,handleSubmit,handleChange
            })=>(
                <form onSubmit={handleSubmit}>
                <CardContent>
                <TextField className="mt-4 ms-3" fullWidth id="user" label="Enter ID" variant="standard" style={{width:"96%"}} onChange={handleChange} value={values.user}/><br/>
                <TextField 
                  className="mt-2 ms-3"
                  variant="standard"
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                  onChange={handleChange} value={values.password}
                  autoComplete="current-password"
                  style={{width:"96%"}}
                 /><br/>
                 
                 <Button variant="contained"  className="mt-4 mb-3" sx={{border:"3px",background:"black",color:"white",}} fullWidth type="submit">
                     Login
                 </Button>
                 
                  </CardContent>
               
                 </form>

            ) }

            </Formik>
              </Card>
              
            </>
        )
                        
        
        
     
      }
      // eslint-disable-next-line
    },[isLogged,setData])
    return(
        <>

        {myData}
        <Divider className="mt-2 mb-2"></Divider>
        
        </>
    )
}
export default Home;