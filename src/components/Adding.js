import { Button, TextField, Typography } from "@mui/material";
import Fade from 'react-reveal/Fade';
const Adding=()=>{
    return (<>
    <Fade bottom>
    <TextField variant="standard" label="Enter Product Name" fullWidth></TextField><br/>
    <Typography variant="subtitle2" className="mt-1" fullWidth>Enter Date</Typography><br/>
    <TextField variant="standard" type="Date" fullWidth></TextField><br/>
    <TextField variant="standard" label="Enter Quantity" fullWidth className="mt-2"></TextField><br/>
    <TextField variant="standard" label="Enter Price" fullWidth className="mt-2"></TextField><br/>
    <TextField variant="standard" label="Purpose" fullWidth className="mt-2"></TextField><br/>
    
   
    <TextField variant="standard" label="Home/Bill/FastFood/Diet/Travel/Misc" fullWidth className="mt-2"></TextField><br/>
    </Fade>
    <>
    <Button variant="contained" className="mt-4">Add</Button>
    <Button variant="contained" className="mt-4 ms-3">Reset</Button>
    </>
    
    
    
    </>);
}
export default Adding;