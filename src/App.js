import { BrowserRouter as Routers, Route } from "react-router-dom";
import './App.css';
import ButtonAppBar from './components/AppBar';
import {  createTheme, ThemeProvider, Container } from '@mui/material';
import Home from "./components/Home";
import { DataProvider } from "./Datacontext";
import Sign from "./components/Register";
import { SnackbarProvider } from 'notistack';
import Refer from "./components/Refer";



const darkTheme = createTheme({
  palette:    {
    type: 'dark',
    primary: {
      main: '#2B2B2D',
    },
    secondary: {
      main: '#000000',
    },
    background: {
      default: '#000000',
      paper: '#000000',
    },
  },
  
}
);
function App() {
  
  return (
    <ThemeProvider theme={darkTheme}>
      <SnackbarProvider>
    <DataProvider>
    <Container>
      
   
   <Routers>
   <ButtonAppBar/>
  
  <Route path="/register" component={Sign}></Route>
  <Route path="/home" component={Home}></Route>
  <Route path="/" component={Refer}></Route>
   </Routers>
   </Container>
    </DataProvider>
    </SnackbarProvider>
   </ThemeProvider>
  );
}

export default App;
