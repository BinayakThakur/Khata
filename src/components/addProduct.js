import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import Fade from 'react-reveal/Fade';
import Adding from "./Adding";
import Order from "./order";
import Product from "./productGraph";
import Remove from "./Remove";

const Add = () =>{
    return (<div className="container">
    
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start">
        <Grid item xs={12} sm={7}>
    <Fade>
        <Divider/>
    <Typography variant="h6" style={{color:"white"}} className="mt-3">Product management</Typography>
    <Divider/>
 
    <Card className="mt-4"  style={{border:"40px",background:"white"}}>
        <CardContent>
            <Fade>
               <Product></Product> 
            </Fade>
        </CardContent>

    </Card>
    </Fade>
    </Grid>
    <Grid item sm={4} xs={12}>
    <Divider></Divider>
    <Fade>
    <Typography variant="h6" style={{color:"white"}} className="mt-3">Manage Product</Typography>
    <Divider/>
    <Card className="mt-4" style={{border:"40px",background:"white"}}>
        <CardContent>
            <Fade>
          
            <Adding></Adding>
            </Fade>
        </CardContent>

    </Card>
    </Fade>
    </Grid>
    
    

    


    </Grid>
    
    <Fade>
    <Typography variant="h6" style={{color:"white"}} className="mt-3">Order Product</Typography>
    <Divider></Divider>
    <Card  className="mt-4" style={{border:"40px",background:"white"}}>
        <CardContent>
            <Fade>
           
            <Order></Order>
            </Fade>
        </CardContent>

    </Card>
    </Fade>
    
    
    </div>)
}
export default Add;