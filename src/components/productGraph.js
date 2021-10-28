import { Card, CardContent, Divider, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import {  Bar } from 'react-chartjs-2';
import { DataContext } from "../Datacontext";
import Fade from 'react-reveal/Fade';
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
  
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Number of Votes',
        data: [4,2, 8, 3, 2, 1],
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

const Product=()=>{
  const {currentUser}=useContext(DataContext);
    return(<>
    <Fade top>
     <Typography variant="h5" className="mt-4 ms-3 "   sx={{background:"#ffffff00",color:"orange"}}>{currentUser} Summary</Typography>
    
     <Toolbar style={{color:"white"}}>
    
   
        <Box>
          
        <Typography variant="caption" className="" style={{color:"cyan"}}>increase</Typography>
        <Typography variant="h5" className="">10% </Typography>
        </Box>
        <Box>
        <Typography variant="caption" className="ms-4">decrease</Typography>
        <Typography variant="h5" className="ms-4">10% </Typography>
        </Box>
        <Box>
        <Typography variant="caption" className="ms-4"  style={{color:"#ff6699"}}>Stocks</Typography>
        <Typography variant="h5" className="ms-4">+10% </Typography>
        </Box>
        
            </Toolbar>
     </Fade>
          <Divider className="mt-3"></Divider>
          <Fade bottom>
          <Card  style={{border:"100px",background:"#212121",color:"white"}}>
            
         <CardContent>
           <Fade>
          <Bar data={data} options={options} className="mt-4" height="40" width="80"/>
          </Fade>
        </CardContent>
       
         </Card>
         </Fade>
         <Box>
          
          </Box>
          
          <Divider className="mt-5"></Divider>
 
    
    
    </>)
}
export default Product;