import { Button,Card,CardContent,Container,Divider,  TextField,  Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';
import { DataContext} from "../Datacontext";
import Cards from "./Cards";
import { Formik } from "formik";
import ParticleBackground from 'react-particle-backgrounds'
import { useSnackbar } from "notistack";
const settings = {
  canvas: {
    canvasFillSpace: true,
    width: 100,
    height: 300,
    useBouncyWalls: false
  },
  particle: {
    particleCount: 50,
    color: '#94ecbe',
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

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 255, 255, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderColor: [
          'rgba(255, 255, 255, 255)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const signform={
    user : '',
    password:''
}

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  
const Home = () =>{
    const{enqueueSnackbar} = useSnackbar();
    const[myData,setData]=useState(<></>);
    const {isLogged} = useContext(DataContext);
    const {setLogged} =  useContext(DataContext);
    const signSubmit = (e)=>{
      const reqOptions = {
        method: 'POST',
        body: JSON.stringify(e),
        headers: { 'Content-Type': 'application/json' }
      }
    fetch("https://butlerservice.herokuapp.com/users/get", reqOptions)
        .then(res => res.json() ).then(data=>{
          if(data===true){
            enqueueSnackbar("Logged",{variant:"success"});
            setLogged(true);
          }
          else{
            enqueueSnackbar("ID or Password is wrong",{variant:"error"});
          }
        })
        .catch(err => {
         
        })
    }
    useEffect(()=>{
      if(isLogged){
      setData(
        <>
        <Typography variant="h5" className="mt-4 ms-3"   sx={{background:"#ffffff00",color:"white"}}>Summary</Typography>
          <Divider className="mt-3"></Divider>
          <Box sx={{background:"#ffffff00",color:"white"}}>
              <Toolbar>
          <Box>
          <Typography variant="caption" className="mt-4" >Average</Typography>
          <Typography variant="h5" >23,000 rs</Typography>
          </Box>
          <Box>
          <Typography variant="caption" className="ms-4">increase</Typography>
          <Typography variant="h5" className="ms-4">10% </Typography>
          </Box>
          <Box>
          <Typography variant="caption" className="ms-4">decrease</Typography>
          <Typography variant="h5" className="ms-4">10% </Typography>
          </Box>
          <Box>
          <Typography variant="caption" className="ms-4">Stocks</Typography>
          <Typography variant="h5" className="ms-4">+10% </Typography>
          </Box>
          
              </Toolbar>
          <Bar data={data} options={options} className="mt-4" height="22" width="60"/>
         </Box>
         <Box>
          
          </Box>
          <Divider className="mt-5"></Divider>
          <Button  variant="contained" fullWidth sx={{border:"20px",background:"#ffffff00"}}><Typography variant="h5">See all actions this month</Typography></Button>
          <Cards></Cards></>
      )}
      else{
        
        setData(

          <>
            <Card className="mt-5">
            <Formik initialValues={signform} onSubmit={signSubmit}>

            { ({
                values,handleSubmit,handleChange
            })=>(
                <form onSubmit={handleSubmit}>
                <CardContent>
                <TextField className="mt-4 ms-3" fullWidth id="user" label="Enter ID" variant="standard" style={{width:"96%"}} onChange={handleChange} value={values.user}/><br/>
                <TextField 
                  className="mt-2 ms-3"
                  variant="standard"
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                  onChange={handleChange} value={values.password}
                  autoComplete="current-password"
                  style={{width:"96%"}}
                 /><br/>
                 
                 <Button variant="contained"  className="mt-4 mb-3" sx={{border:"3px",background:"cadetblue"}} fullWidth type="submit">
                     Login
                 </Button>
                 
                  </CardContent>
               
                 </form>

            ) }

            </Formik>
              </Card>
              
            </>
        )
                        
        
        
     
      }
      // eslint-disable-next-line
    },[isLogged,setData])
    return(
        <>
        <Container>
        {myData}
        </Container>
        <ParticleBackground settings={settings} />
        </>
    )
}
export default Home;