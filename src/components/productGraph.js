import { Card, CardContent, Divider, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect ,useState} from "react";
import {  Bar } from 'react-chartjs-2';
import { DataContext } from "../Datacontext";
import Fade from 'react-reveal/Fade';

const options = {
  
  };
  
  

const Product=()=>{
  var{socket}=useContext(DataContext);
  const{currentUser}=useContext(DataContext);
  const{setProdData}=useContext(DataContext);
  const[nhome,setHome]=useState(0);
  const[nbill,setBill]=useState(0);
  const[nfast,setFast]=useState(0);
  const[ndiet,setDiet]=useState(0);
  const[ntravel,setTravel]=useState(0);
  const[nmisc,setMisc]=useState(0);
  useEffect(()=>{
    // eslint-disable-next-line
    const reqOptions = {
      method: 'POST',
      body: JSON.stringify(currentUser),
      headers: { 'Content-Type': 'application/json' }
    }
  
    var home=0;
    var bill=0;
    var fast=0;
    var diet=0;
    var travel=0;
    var misc=0;
    socket.emit("productData",currentUser);
    socket.on("productData",(data)=>{
       
        setProdData(data)
       
        // eslint-disable-next-line
          data.map(
            // eslint-disable-next-line
           (nval)=>{ 
            switch((nval.category).toLowerCase()){
              case "home":home=parseInt(home+parseInt(nval.price));break;
              case "bill":bill=parseInt(bill+parseInt(nval.price));break;
              case "fastfood":fast=parseInt(fast+parseInt(nval.price));break;
              case "diet":diet=parseInt(diet+parseInt(nval.price));break;
              case "travel":travel=parseInt(travel+parseInt(nval.price));break;
              case "misc":misc=parseInt(misc+parseInt(nval.price));break;
              default:break;
            }
           
            setHome(home);
            setBill(bill);
            setFast(fast);
            setDiet(diet);
            setTravel(travel);
            setMisc(misc);
           }
          )
      
    })

    // eslint-disable-next-line
  },[socket])

  const data = {
    labels: ['Home', 'Bill', 'FastFood', 'Diet', 'Travel', 'Misc'],
    
    datasets: [
      {
        label: 'Money used',
        data: [nhome,nbill, nfast, ndiet, ntravel, nmisc],
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
  
    return(<>
    <Fade top>
     <Typography variant="h5" className="mt-4 ms-3 "   sx={{background:"#ffffff00",color:"orange"}}>{currentUser.user} Summary</Typography>
    
     <Toolbar style={{color:"white"}}>
    
   
        <Box>
          
        <Typography variant="caption" className="" style={{color:"cyan"}}>increase</Typography>
        <Typography variant="h5" className="">N/A </Typography>
        </Box>
        <Box>
        <Typography variant="caption" className="ms-4">decrease</Typography>
        <Typography variant="h5" className="ms-4">N/A </Typography>
        </Box>
        <Box>
        <Typography variant="caption" className="ms-4"  style={{color:"#ff6699"}}>Stocks</Typography>
        <Typography variant="h5" className="ms-4">N/A </Typography>
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