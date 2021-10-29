import { Button, Grid, TextField, Toolbar, Typography} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../Datacontext";
import Fade from 'react-reveal/Fade';
import { Box } from "@mui/system";
const Remove = ()=>{
    Object.size = function(obj) {
        var size = 0,
          key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) size++;
        }
        return size;
      };
    const{productData} = useContext(DataContext);
    var products=[];
    const[val,setVal]=useState();
   
    useEffect(()=>{
        if(productData!=null && Object.size(productData)>0){
            console.log(productData)
        // eslint-disable-next-line
        productData.map((product)=>{
            products.push(<>
            
            <br/>
                
                <Box sx={{ flexGrow: 3,background:"orange",p:3,border:3,borderRadius:4,gap:4,boxShadow:4,margin:8}}>
                <Typography variant="subtitle2">
              
                <Grid item className="ms-2 mt-2">Name : {product.product} </Grid> 
                <Grid item className="ms-2 mt-2">Category : {product.category} </Grid>
                <Grid item className="ms-2 mt-2">Date : {product.date} </Grid>
                <Grid item className="ms-2 mt-2">Quantity : {product.quantity} </Grid>
                <Grid item className="ms-2 mt-2">Purpose : {product.purpose} </Grid>
                <Grid item className="ms-2 mt-2">Price : {product.price} </Grid>
                <Grid item className="mt-4 ">
                <Button variant="contained" className="ms-3">Remove</Button>
                </Grid>
                
               
                
                
                
                </Typography>
                </Box>
            
            <br/></>)
        })
        setVal(products);}
        else{
            setVal(<></>)
        }
         // eslint-disable-next-line
    },[productData,setVal])
   
        
    
    return (<>
    <Toolbar>
    <TextField label="Enter product name" variant="standard"></TextField>
    <Button variant="contained" className="ms-3">Search</Button>
    
    </Toolbar>
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="flex-start">
    <Fade>
    {val}
    </Fade>
    </Grid>
    </>);
}
export default Remove;