import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

function App() {

    const [singleProduct,setSingleProduct] = useState([])

    const params = useParams()
    

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${params.id}`).then((data)=>{
        return data.json()
    }).then((result)=>{
        setSingleProduct(result)
    })
    })

  return (
    <MDBContainer fluid className="my-5 text-center">
        {/* <h4 className="mt-4 mb-5">
            <strong>Bestsellers</strong>
        </h4> */}

      <MDBRow>
       
        <MDBCol md="6" lg="4" className="mb-4 m-auto">
          <MDBCard style={{backgroundColor:"#090979",color:"white"}}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src={singleProduct.image}
                // style={{height:"60vh"}}
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div class="d-flex justify-content-start align-items-end h-100"></div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
                <h5 className="card-title mb-3">Product:- {singleProduct.title}</h5>
                <h6 className="mb-3">Rating:- {singleProduct.rating && singleProduct.rating.rate}</h6>
              <h6 className="mb-3 ">Price:- ${singleProduct.price}</h6>
              <MDBBtn className="me-2" color="success">Add To Cart</MDBBtn>
              <MDBBtn color="danger">Whishlist</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;