import { Box, Button, Typography, styled } from "@mui/material";
import { useSelector } from "react-redux";

function Mycart(){

    const Div = styled(Box)({
        width:"70%",
        // height:"60vh",
        // backgroundColor:"white",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around",
        float:"left",
        flexDirection:"column",
        gap:"13px"
        
    })

    const Div1 = styled(Box)({
        width:"30%",
        height:"45vh",
        backgroundColor:"yellow",
        borderRadius:"20px",
        boxShadow:"3px 3px 10px grey",
    })

    const Div2 = styled(Box)({
        width:"60%",
        height:"45vh",
        backgroundColor:"aqua",
        borderRadius:"20px",
        boxShadow:"3px 3px 10px aqua",
        display:"flex",
        alignItems:'center',
        justifyContent:"space-between"
    })

    const Div3 = styled(Box)({
        width:"25%",
        height:"90vh",
        backgroundColor:"#08ff08",
        borderRadius:"20px",
        boxShadow:"3px 3px 10px green",
        display:"flex",
        justifyContent:"flex-end"
    })

    const DivMix = styled(Box)({
        width:"90%",
        height:"45vh",
        display:"flex",
        justifyContent:"space-evenly",
        float:"left"
    })

    let cartValue = useSelector((state)=>state.allCart.cart)

    return(
        <>
            <Div>

            {cartValue.map((value)=>(
                <DivMix>
                <Div1><img src={value.image} alt="" 
                    style={{
                        width:"100%",
                        height:"45vh",
                        borderRadius:"20px",
                    }}  

                /></Div1>
                <Div2>
                    <Box
                    sx={{
                        padding:"20px"
                    }}>
                        <Typography variant="h4">
                            {value.title}
                        </Typography>
                        <Typography variant="body2">
                        description :- {value.description}
                        </Typography>
                        <Typography variant="h5">
                        $ {value.price}/- One offer applied.
                        </Typography>
                        <Typography variant="h6">
                        Rating :- {value.rating && value.rating.rate}
                        </Typography>
                        <Button variant="contained">+</Button>
                        <Typography variant="caption" sx={{fontSize:"30px",padding:"10px"}}>
                            1
                        </Typography>
                        <Button variant="contained">-</Button>

                        <Button variant="contained" color="error" sx={{float:"right"}}>
                            Remove
                        </Button>
                    </Box>
                    
                       
                        
                   
                </Div2>
                </DivMix>
            ))}
                

            </Div>
            <Div3></Div3>



          
        </>
    )
}
export default Mycart;