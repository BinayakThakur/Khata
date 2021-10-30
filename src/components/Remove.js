import { Button, Grid, TextField, Toolbar, Typography} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../Datacontext";
import Fade from 'react-reveal/Fade';
import { Box } from "@mui/system";
import { useSnackbar } from "notistack";


const Remove = ()=>{
  // eslint-disable-next-line
  var{socket}=useContext(DataContext);
  const{currentUser}=useContext(DataContext);
  const{enqueueSnackbar} = useSnackbar();
  const {setChange} = useContext(DataContext);
  const {change} = useContext(DataContext);
  function sayHello(name) {
    
    fetch("https://butlerservice.herokuapp.com/users/delete/"+name)
    .then(()=>{
      enqueueSnackbar("Removed",{variant:"success"})
    
      
    })
    .catch(err => {
      enqueueSnackbar("Unable to remove",{variant:"error"});
    })
    setChange(change+11)
    setChange(change+12)
    setChange(change+13)
    setChange(change+11)
    setChange(change+12)
    setChange(change+13)
    setChange(change+11)
    setChange(change+12)
    setChange(change+13)
  }
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
          socket.emit("productData",currentUser);
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
                <Button variant="contained" onClick={() => sayHello(product._id)} id="pro"  className="ms-3">Remove</Button>
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
   
    const search = (e)=>{
      e=e.target.value;
      products=[<></>]
      // eslint-disable-next-line
      productData.map((product)=>{
        if((product.product).includes(e)){
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
        
        <br/></>)}
        else{products.push(<></>)}
    })
    setVal(products);
    }    
   
    return (<>
    <Toolbar>
    <TextField label="Search Product" variant="standard" className="mt-2"  onChange={e => search(e)}></TextField>
    
    
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