import { Card, CardContent, Divider, Typography ,Toolbar,Box} from "@mui/material";
import Fade from 'react-reveal/Fade';
import {  Line } from 'react-chartjs-2';
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
        label: ' Number of votes',
        data: [1, 9, 5, 3, 6, 3],
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
        borderWidth: 6,
      },
    ],
  };

const Order = ()=>{
    return(<>
     <Fade top>
     
     </Fade>
         
          <Fade bottom>
          <Card  style={{border:"100px",background:"#212121",color:"white"}}>
        
    
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
           <Divider className="mt-3"></Divider>
         <CardContent>
           <Fade>
          <Line data={data} options={options} className="mt-4" height="30" width="100"/>
          </Fade>
        </CardContent>
       
         </Card>
         </Fade>
         <Box>
          
          </Box>
          
          <Divider className="mt-5"></Divider>
    
    
    </>)
}
export default Order;