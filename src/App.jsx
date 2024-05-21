import { useEffect, useState } from "react"
import "./App.css"
import Home from "./Comp/Home"
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./Comp/Navbar"
import Mycart from "./Comp/Mycart"
import Favorite from "./Comp/Favorite"
import MdbCart from "./Comp/MdbCart"
import MdbSingleProduct from "./Comp/MdbSingleProduct"



function App() {

  const [value,setValue] = useState([])
   
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/').then((data)=>{
        return data.json()
    }).then((result)=>{
        // console.log(result)
        setValue(result)
    })
    },[])

  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home productData={value}/>}/>
      <Route path="/mycart" element={<Mycart/>}/>
      <Route path="/whishlist" element={<Favorite/>}/>
      <Route path="/cart" element={<MdbCart/>}/>
      <Route path="/product/:id" element={<MdbSingleProduct/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;
