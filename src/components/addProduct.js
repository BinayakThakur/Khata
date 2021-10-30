import { Card, CardContent, Divider, Typography } from "@mui/material";
import Fade from 'react-reveal/Fade';
import Adding from "./Adding";
import Order from "./order";
import Product from "./productGraph";
import Remove from "./Remove";

const Add = () =>{
    return (<>
    <Fade>
    <Typography variant="h6" style={{color:"white"}} className="mt-3">Product management</Typography>
    <Card sx={{width:"100",height:"100",background:"#212121"}} className="mt-4" style={{border:"40px"}}>
        <CardContent>
            <Fade>
               <Product></Product> 
            </Fade>
        </CardContent>

    </Card>
    </Fade>
    <Divider></Divider>
    <Fade>
    <Typography variant="h6" style={{color:"white"}} className="mt-3">Manage Product</Typography>
    <Card sx={{width:"100",height:"100",background:"#212121"}} className="mt-4" style={{border:"40px"}}>
        <CardContent>
            <Fade>
            <Order></Order>
            </Fade>
        </CardContent>

    </Card>
    </Fade>
    <Divider></Divider>
    <Fade>
    <Typography variant="h6" style={{color:"white"}} className="mt-3">Order Product</Typography>
    <Card sx={{width:"100",height:"100",background:"orange",color:"black"}} className="mt-4" style={{border:"40px"}}>
        <CardContent>
            <Fade>
            <Adding></Adding>
            </Fade>
        </CardContent>

    </Card>
    </Fade>
    <Divider></Divider>
    <Fade>
    <Typography variant="h6" style={{color:"white"}} className="mt-3">Remove product</Typography>
    <Card sx={{width:"100",height:"400px",background:"pink",color:"black"}} className="mt-4" style={{border:"40px",overflow:"auto"}}>
        <CardContent>
            <Fade>
            <Remove></Remove>
            </Fade>
        </CardContent>

    </Card>
    </Fade>

    
    
    
    </>)
}
export default Add;