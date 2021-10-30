import { BrowserRouter as Routers, Route } from "react-router-dom";
import './App.css';
import ButtonAppBar from './components/AppBar';
import {  createTheme, ThemeProvider } from '@mui/material';
import Home from "./components/Home";
import { DataProvider } from "./Datacontext";
import Sign from "./components/Register";
import { SnackbarProvider } from 'notistack';
import Refer from "./components/Refer";
const darkTheme = createTheme({
  palette:  {
    type: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#000000',
      paper: '#0097a7',
    },
    text: {
      primary: '#ffffff',
    },
  },
  
}
);
function App() {
  
  return (
    <ThemeProvider theme={darkTheme}>
      <SnackbarProvider>
    <DataProvider>

   <Routers>
   <ButtonAppBar/>
  
  <Route path="/register" component={Sign}></Route>
  <Route path="/home" component={Home}></Route>
  <Route path="/" component={Refer}></Route>
   </Routers>
    </DataProvider>
    </SnackbarProvider>
   </ThemeProvider>
  );
}

export default App;
