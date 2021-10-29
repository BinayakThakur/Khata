import { Alert,Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import { useContext, useState } from "react";
import Fade from 'react-reveal/Fade';
import { DataContext } from "../Datacontext";
const Adding=()=>{
    const {currentUser} = useContext(DataContext);
    const val=currentUser.user;
    const productData={
        user : val,
        product:'',
        date:'',
        quantity:'',
        price:'',
        purpose:'',
        category:''
    }
    const [update,setUpdate]=useState(<></>)
    const productSubmit = (e) =>{
        console.log(e);
        const reqOptions = {
            method: 'POST',
            body: JSON.stringify(e),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch("https://butlerservice.herokuapp.com/users/product", reqOptions)
            .then(res => res.json() )
            .then( 
                setUpdate(<Fade><Alert severity="success" className="ms-4 mt-4">Added!</Alert></Fade>)
            )
            .catch(err => {
             
            })
    }
    return (<>
    <Formik initialValues={productData} onSubmit={productSubmit}>
        {
            ({values,handleSubmit,handleChange})=>(

                <form onSubmit={handleSubmit}>
                    <Fade bottom>
                    <TextField id="product" onChange={handleChange} value={values.product} variant="standard" label="Enter Product Name" fullWidth></TextField><br/>
                    <Typography variant="subtitle2" className="mt-1" fullWidth>Enter Date</Typography><br/>
                    <TextField id="date" onChange={handleChange}  value={values.date} variant="standard" type="Date" fullWidth></TextField><br/>
                    <TextField id="quantity" onChange={handleChange}  value={values.quantity} variant="standard" label="Enter Quantity" fullWidth className="mt-2"></TextField><br/>
                    <TextField id="price" onChange={handleChange}  value={values.price} variant="standard" label="Enter Price" fullWidth className="mt-2"></TextField><br/>
                    <TextField id="purpose"  onChange={handleChange} value={values.purpose} variant="standard" label="Purpose" fullWidth className="mt-2"></TextField><br/>
    
   
                    <TextField id="category" onChange={handleChange}  value={values.category} variant="standard" label="Home/Bill/FastFood/Diet/Travel/Misc" fullWidth className="mt-2"></TextField><br/>
                    </Fade>
                    <Button variant="contained" className="mt-4" type="submit">Add</Button>
            
                </form>
            

            )


        }
    </Formik>
    {update}
    
    
    
    </>);
}
export default Adding;