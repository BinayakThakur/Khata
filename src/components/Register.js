import { Alert,  Button, Card, CardContent, Container, Divider, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Formik } from "formik";
import {  useState } from "react";
import ParticleBackground from 'react-particle-backgrounds'
const settings = {
    canvas: {
      canvasFillSpace: true,
      width: 100,
      height: 250,
      useBouncyWalls: false
    },
    particle: {
      particleCount: 50,
      color: 'red',
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



const Sign =()=>{
    const [update,setUpdate]=useState(<></>)

    
    const signform={
        user : '',
        password:'',
        date:''
    }
    const signSubmit = (e)=>{

        const reqOptions = {
            method: 'POST',
            body: JSON.stringify(e),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch("https://react-rest-spring.herokuapp.com/mregister", reqOptions)
            .then(res => res.json() )
            .then( 
                setUpdate(<Alert severity="success" className="ms-4">Registered!</Alert>)
            )
            .catch(err => {
             
            })
    }
    const login=()=>{
        return (
            <>
            <Card>
                <CardContent>
            <Formik initialValues={signform} onSubmit={signSubmit}>

            { ({
                values,handleSubmit,handleChange
            })=>(
                <form onSubmit={handleSubmit}>
                <TextField className="mt-4 ms-3" fullWidth id="user" label="Enter ID" variant="standard" style={{width:"96%"}} onChange={handleChange} value={values.user}/><br/>
                <TextField 
                  className="mt-2 ms-3"
                  variant="standard"
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                  onChange={handleChange} value={values.password}
                
                  style={{width:"96%"}}
                 />
                 <TextField 
                  className="mt-2 ms-3"
                  variant="standard"
                  id="confirm"
                  label="confirm"
                  type="password"
                  fullWidth

                
                  style={{width:"96%"}}
                 /><br/>
                <TextField
                className="mt-4 ms-3"
                id="date"
                onChange={handleChange} value={values.date}
                variant="standard"
                label="Birthday"
                type="date"
                defaultValue="2000-12-31"
                sx={{ width: "96%" }}
                InputLabelProps={{
                shrink: true,
                }}
                />
                <br/>
                <Box>
                <Button variant="contained" className="mt-3 ms-4" type="submit" style={{width:"45%"}} >
                     Sign up
                 </Button>
                 <Button variant="contained" className="mt-3 ms-5" style={{width:"45%"}} >
                     Login
                 </Button>
                </Box>
                
                 
                 </form>
    
            ) }

            </Formik>
            </CardContent>
            </Card>
                        
                         </>
        );
    }
    const content=useState(login());
    
    return(
    <>
    <Container>
        
        
        
        {content}
        <Divider style={{width:"0%"}} className="mb-5"/>
        {update}
        
        
        
    </Container>
    <ParticleBackground settings={settings} /></>)
}
export default Sign;