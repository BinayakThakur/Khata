import { Alert,  Button, Card, CardContent,  Container, Divider, Grid,  TextField } from "@mui/material";
import { Formik } from "formik";
import {  useState } from "react";
import ParticleBackground from 'react-particle-backgrounds'
const settings = {
    canvas: {
      canvasFillSpace: true,
      width: 100,
      height: 300,
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
        name : '',
        email:'',
        password:'',
        dob:''
    }
    const signSubmit = (e)=>{

        const reqOptions = {
            method: 'POST',
            body: JSON.stringify(e),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch("https://butlerservice.herokuapp.com/users/add", reqOptions)
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
            <Card className="mt-5">
                <CardContent>
            <Formik initialValues={signform} onSubmit={signSubmit}>

            { ({
                values,handleSubmit,handleChange
            })=>(
                <form onSubmit={handleSubmit}>
                <TextField className="mt-4 ms-3" fullWidth id="name" label="Enter ID" variant="standard" style={{width:"98%"}} onChange={handleChange} value={values.name}/><br/>
                
                 <TextField 
                  className="mt-2 ms-3"
                  variant="standard"
                  id="email"
                  label="E-mail"
                  type="email"
                  fullWidth
                  onChange={handleChange}
                  value={ values.email}
                
                  style={{width:"98%"}}
                 /><br/>
                 <TextField 
                  className="mt-2 ms-3"
                  variant="standard"
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                  onChange={handleChange} value={values.password}
                
                  style={{width:"98%"}}
                 /><br/>
                <TextField
                className="mt-4 ms-3"
                id="dob"
                onChange={handleChange} value={values.dob}
                variant="standard"
                label="Birthday"
                type="date"
                defaultValue="2000-12-31"
                sx={{ width: "98%" }}
                InputLabelProps={{
                shrink: true,
                }}
                />
                <br/>
                <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                >
                 
                 <Grid item>
                <Button variant="contained" className="mt-3 ms-5" type="submit" >
                     Register
                 </Button>
                 </Grid>
                
                   
                 </Grid>
                 
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