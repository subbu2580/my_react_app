import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { useParams } from "react-router-dom"





const ProductDetails=()=>{
    const[productdatas,setproductdatas]=useState({})
    const datafarmUrl=useParams("")

    useEffect(()=>{

        axios.get(`https://fakestoreapi.com/products/${datafarmUrl.id}`)
        .then((Response)=>
        setproductdatas(Response.data))

    },[datafarmUrl.id])




    return(

        <>
    <Card style={{width:700,borderColor:"blue"}}>
        <div style={{marginLeft:20}}>
      <img src={productdatas.image} style={{width:300}} alt=" "/>
         <h3>{productdatas.id}</h3>
         <h2>{productdatas.title}</h2>
         <h2>${productdatas.price}</h2>
         <h3>{productdatas.category}</h3>
         <p>{productdatas.description}</p>
         </div>
         </Card>

       
        
        
        </>

    )
}
export default ProductDetails