import { Button, TextField, Toolbar} from "@mui/material";

const Remove = ()=>{
    return (<>
    <Toolbar>
    <TextField label="Enter product name" variant="standard"></TextField>
    <Button variant="contained" className="ms-3">Search</Button>
    </Toolbar>
    </>);
}
export default Remove;