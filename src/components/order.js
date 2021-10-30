import { Card, CardContent, Divider, Typography ,Toolbar,Box} from "@mui/material";
import Fade from 'react-reveal/Fade';
import {  Line } from 'react-chartjs-2';
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../Datacontext";
import Remove from "./Remove";

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


const Order = ()=>{
  const [label,setLabel]=useState();
  const [mdata,setData]=useState();
  var lab=[];
  var mydata=[];
  const {productData}=useContext(DataContext);
  Object.size = function(obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };
  useEffect(()=>{
   
    if(productData!==undefined && Object.size(productData)>1){
     
      // eslint-disable-next-line
      productData.map((val)=>{
        lab.push(val.date);

      });
      setLabel(lab);
      
      if(productData!==undefined && Object.size(productData)>1){
        // eslint-disable-next-line
      productData.map((val)=>{
        console.log()
        mydata.push(0);
        mydata[lab.indexOf(val.date+"")]=parseInt(mydata[lab.indexOf(val.date+"")])+parseInt(val.price);
        if( isNaN(mydata[lab.indexOf(val.date+"")])){
          mydata[lab.indexOf(val.date+"")]=0;
        }
        
        
      });}

      setData(mydata);
    }
// eslint-disable-next-line
  },[productData])
  const data = {
    labels: label,
    datasets: [
      {
        label: 'Money spent',
        data:mdata,
        backgroundColor: [
          'rgba(255, 255, 255, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderColor: [
          'rgba(0, 0, 0, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };
    return(<>
     <Fade top>
     
     </Fade>
         
          <Fade bottom>
          <Card  style={{border:"100px",background:"white",color:"black"}}>
        
    
    <Toolbar style={{color:"white"}}>
   
  
       <Box>
         
       <Typography variant="caption" className="" style={{color:"black"}}>increase</Typography>
       <Typography variant="h5" className="" style={{color:"black"}}>N/A </Typography>
       </Box>
       <Box>
       <Typography variant="caption" className="ms-4" style={{color:"black"}}>decrease</Typography>
       <Typography variant="h5" className="ms-4" style={{color:"black"}}>N/A </Typography>
       </Box>
       <Box>
       <Typography variant="caption" className="ms-4"  style={{color:"black"}}>Stocks</Typography>
       <Typography variant="h5" className="ms-4" style={{color:"black"}}>N/A </Typography>
       </Box>
       
           </Toolbar>
           <Divider className="mt-3"></Divider>
         <CardContent>
           <Fade>
          <Line data={data} options={options} className="mt-4" height="80" width="100"/>
          </Fade>
          <Fade>
            <Remove></Remove>
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