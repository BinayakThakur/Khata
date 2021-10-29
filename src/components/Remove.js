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
        if(Object.size(productData)>1 && productData!==undefined){
            console.log(productData)
        // eslint-disable-next-line
        productData.map((product)=>{
            products.push(<>
            
            <br/>
                <Grid item>
                <Box sx={{ background:"orange",p:1,border:2,borderRadius:4}}>
                <Typography variant="subtitle2">
                <Grid>
                <Grid item className="ms-2 mt-2">Name : {product.product} </Grid> 
                <Grid item className="ms-2 mt-2">Category : {product.category} </Grid>
                <Grid item className="ms-2 mt-2">Date : {product.date} </Grid>
                <Grid item className="ms-2 mt-2">Quantity : {product.quantity} </Grid>
                <Grid item className="ms-2 mt-2">Purpose : {product.purpose} </Grid>
                <Grid item className="ms-2 mt-2">Price : {product.price} </Grid>
                <Grid item className="mt-4 ">
                <Button variant="contained" className="ms-3">Remove</Button>
                </Grid>
                </Grid>
                
               
                
                
                
                </Typography>
                </Box>
                </Grid>
            
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
      direction="coloumn"
      justifyContent="space-evenly"
      alignItems="flex-start">
    <Fade>
    {val}
    </Fade>
    </Grid>
    </>);
}
export default Remove;