import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { DataContext } from '../Datacontext';
export default function ButtonAppBar() {
  const[option,setOption] = useState();
  const {isLogged} = useContext(DataContext);
  useEffect(
    ()=>{
      if(isLogged){
        setOption(<Button color="inherit" className="under">Log out</Button>)
      }
      else{
        setOption(<Button color="inherit" className="under"><Link to="/register" style={{ textDecoration: 'none' ,color:"white"}}>Register</Link></Button>)
      }
    },[setOption,isLogged]
  )
    return (
    <Box sx={{ flexGrow: 3}}>
      <AppBar position="static" sx={{height:60}}>
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