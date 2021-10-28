import { Button,Card,CardContent,Container, TextField } from "@mui/material";

import { useContext, useEffect, useState } from "react";

import { DataContext} from "../Datacontext";
import Cards from "./Cards";
import { Formik } from "formik";
import ParticleBackground from 'react-particle-backgrounds'
import { useSnackbar } from "notistack";
const settings = {
  canvas: {
    canvasFillSpace: true,
    width: 100,
    height: 300,
    useBouncyWalls: false
  },
  particle: {
    particleCount: 50,
    color: '#94ecbe',
    minSize: 2,
    maxSize: 5
  },
  velocity: {
    directionAngle: 0,
    directionAngleVariance: 360,
    minSpeed: 1,
    maxSpeed: 3
  },
  opacity: {
    minOpacity: 0,
    maxOpacity: 0.5,
    opacityTransitionTime: 3000
  }
}

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
            setUser(e.user)
          }
          else{
            enqueueSnackbar("ID or Password is wrong",{variant:"error"});
          }
        })
        .catch(err => {
         
        })
    }
    useEffect(()=>{
      if(isLogged){
      setData(
        <>
         <Cards></Cards></>
      )}
      else{
        
        setData(

          <>
            <Card className="mt-5">
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
                 
                 <Button variant="contained"  className="mt-4 mb-3" sx={{border:"3px",background:"cadetblue"}} fullWidth type="submit">
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
        <Container>
        {myData}
        </Container>
        <ParticleBackground settings={settings} />
        </>
    )
}
export default Home;