
import Navebar from "../headrs/Navebar";
import AppData from "../headrs/CardAligner";
import { useEffect, useState } from "react";
import axios from "axios";

  
  const HomeScreen=()=>{

  const[Products,setProducts]=useState([])
      
    useEffect(()=>{
      axios.get("https://fakestoreapi.com/products")
      .then((Response)=>{
       setProducts(Response.data)
    })
    .catch((error)=>console.log(error))
    


    },[])

    return(
        <>
      <Navebar/>  
      <AppData Products={Products}/>

   
 
   
        </>
    )
  }
  export default  HomeScreen;