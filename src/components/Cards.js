import { Button,Divider, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Bar } from 'react-chartjs-2';
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
const Cards=()=>{
    return(<>
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
       
    
    
    </>)
}
export default Cards;