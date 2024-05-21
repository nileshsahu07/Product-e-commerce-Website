import Products from "./Products"
import {Box} from "@mui/material"
// import MdbCart from "./MdbCart"


function Home({productData}) {

    
    return ( 
        <>
            
            <Box 
                sx={{
                    display:"flex",
                    justifyContent: "space-around",
                    flexWrap:"wrap",
                    gap:"50px",
                    alignItems:"center",
                    minHeight:"60vh",
                    marginTop:"40px",
                }}
            >
            {productData && productData.map((res)=>(
                <>
                <Products cardData = {res}/>
                {/* <MdbCart cardsData = {res}/> */}
                </>
            ))}
            </Box>
        </>
     );
}

export default Home;