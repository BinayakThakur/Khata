import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { DataContext } from '../Datacontext';
import { useSnackbar } from 'notistack';
export default function ButtonAppBar() {
  const[option,setOption] = useState();
  const {isLogged} = useContext(DataContext);
  const {setLogged} =  useContext(DataContext);
  const{enqueueSnackbar} = useSnackbar();
  // eslint-disable-next-line
  const logOut=()=>{
    
    setLogged(false);
    enqueueSnackbar("Logged out",{variant:"success"})
  }
  useEffect(
    ()=>{
      
      if(isLogged){
        
        setOption(<Button color="inherit" className="under" onClick={logOut} style={{ textDecoration: 'none' ,color:"white"}}>Log out</Button>)
      }
     // eslint-disable-next-line
    },[isLogged]
  );
  useEffect(()=>{
    if(!isLogged){setOption(<Button color="inherit" className="under"><Link to="/register" style={{ textDecoration: 'none' ,color:"white"}}>Register</Link></Button>)}
  },[isLogged,setOption]);
    return (
    <Box sx={{ flexGrow: 3}}>
      <AppBar position="static" sx={{height:80}}>
        <Toolbar>
      
          <Typography variant="h6"  component="div" sx={{ flexGrow: 1 ,color:"white"}}>
          <Link to="/home" style={{ textDecoration: 'none' ,color:"white"}}> DASHBOARD   </Link> 
          </Typography>
        
       
          {option}
        </Toolbar>
      </AppBar>
    </Box>
  );
}