import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 3}}>
      <AppBar position="static" sx={{height:60}}>
        <Toolbar>
        
          <Typography variant="h6"  component="div" sx={{ flexGrow: 1 ,color:"white"}}>
            KHATA
          </Typography>
          
          <Link to="/home"><Button color="inherit" sx={{color:"white"}} className="under">Home</Button></Link>
          <Button color="inherit" sx={{color:"white"}}>History</Button>
          <Button color="inherit" sx={{color:"white"}}>Settings</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}