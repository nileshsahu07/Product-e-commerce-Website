import {Box} from "@mui/material"
import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import {Typography} from "@mui/material"

function SingleProduct() {

    const [singleProduct,setSingleProduct] = useState([])

    const params = useParams()
    

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${params.id}`).then((data)=>{
        return data.json()
    }).then((result)=>{
        console.log(result)
        setSingleProduct(result)
    })
    })

    return ( 
        <>
            
                    {/* <h1 style={{color:"white"}}>
                    Id:- {params.id}
                    </h1> */}
                    <Box 
                    sx={{
                        width:"100%",
                        height:"100vh",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                    }}>
                    <Box 
                    sx={{
                        display:"flex",
                    }}>
                        <Box 
                        sx={{
                            width:"350px",
                            height:"400px",
                            backgroundColor:"white",
                            borderBottomLeftRadius:"10px",
                            borderTopLeftRadius:"10px"
                        }}>
                        <img src={singleProduct.image && singleProduct.image} alt="product"
                            style={{
                                width:"340px",
                                height:"390px",
                                borderTopLeftRadius:"10px"
                            }}
                        />
                        </Box>
                        <Box
                        sx={{
                            width:"350px",
                            height:"400px",
                            backgroundColor:"white",
                            borderBottomRightRadius:"10px",
                            borderTopRightRadius:"10px"
                        }}>
                        <Typography variant="h6">
                           Product :- {singleProduct.title && singleProduct.title}
                        </Typography>
                        <Typography variant="h5">
                            Price :- {singleProduct.price && singleProduct.price} $
                        </Typography>
                        <Typography variant="inherit">
                            Description :- {singleProduct.description && singleProduct.description}
                        </Typography>
                        <Typography variant="h6">
                            Rating :- {singleProduct.rating && singleProduct.rating.rate}
                        </Typography>
                        <Stack direction="row" spacing={2}>
                        <Button variant="contained" color="error" >
                            Whishlist
                        </Button>
                        <Button variant="contained" color="success">
                            Add To Cart
                        </Button>
                        </Stack>

                        </Box>
                    </Box>
                    </Box>
              
        </>
     );
}

export default SingleProduct;