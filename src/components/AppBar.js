import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 3}}>
      <AppBar position="static" sx={{height:90}}>
        <Toolbar>
        
          <Typography variant="h4" className="mt-3" component="div" sx={{ flexGrow: 1 ,color:"lightgreen"}}>
            KHATA
          </Typography>
          <Button color="inherit" sx={{color:"lightgreen"}} className="under">Home</Button>
          <Button color="inherit" sx={{color:"lightgreen"}}>History</Button>
          <Button color="inherit" sx={{color:"lightgreen"}}>Settings</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}