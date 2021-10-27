import { BrowserRouter as Routers, Route } from "react-router-dom";
import './App.css';
import ParticleBackground from 'react-particle-backgrounds'
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
  const settings = {
    canvas: {
      canvasFillSpace: true,
      width: 200,
      height: 100,
      useBouncyWalls: true
    },
    particle: {
      particleCount: 30,
      color: '#94ecbe',
      minSize: 5,
      maxSize: 10
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 1,
      maxSpeed: 2
    },
    opacity: {
      minOpacity: 0.3,
      maxOpacity: 0.9,
      opacityTransitionTime: 3000
    }
  }


  return (
    <ThemeProvider theme={darkTheme}>
      <ButtonAppBar/>

   <Routers>
     <Route path="/home" component={Home}></Route>
   </Routers>
   <ParticleBackground settings={settings}/>
   </ThemeProvider>
  );
}

export default App;
