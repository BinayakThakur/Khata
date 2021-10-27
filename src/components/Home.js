import { Button, Divider,  Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Bar } from 'react-chartjs-2';
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
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
    return(
        <>
        <Box sx={{background:"#ffffff00",color:"black"}}>
            <Toolbar>
        <Box>
        <Typography variant="caption" className="ms-4">Monthly Average</Typography>
        <Typography variant="subtitle2" className="ms-4">23,000 rs</Typography>
        </Box>
        <Box>
        <Typography variant="caption" className="ms-4">Percentage increase</Typography>
        <Typography variant="subtitle2" className="ms-4">10% </Typography>
        </Box>
        <Box>
        <Typography variant="caption" className="ms-4">Percentage decrease</Typography>
        <Typography variant="subtitle2" className="ms-4">10% </Typography>
        </Box>
        
            </Toolbar>
        <Bar data={data} options={options} height="26" width="70"/>
       </Box>
       <Box>
        
        </Box>
        <Divider className="mt-5"></Divider>
        <Button fullWidth variant="contained">See all actions this month</Button>
        </>
    )
}
export default Home;