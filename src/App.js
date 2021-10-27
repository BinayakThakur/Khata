import { BrowserRouter as Routers, Route } from "react-router-dom";
import './App.css';
import ButtonAppBar from './components/AppBar';
import {  createTheme, ThemeProvider } from '@mui/material';
import Home from "./components/Home";
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
      

   <Routers>
   <ButtonAppBar/>
     <Route path="/home" component={Home}></Route>
   </Routers>

   </ThemeProvider>
  );
}

export default App;
