import { useState } from "react"

 const Number=()=>{
       const[count,setcount]=useState(100)
   const increment=(value)=>{
    setcount(count+value)
   }
   const dicrement=()=>{
    setcount(count-1)
   }
   var reset=()=>{
    setcount(0)
   }


    return(
        <>
        <h1>useState</h1>
       <h1>{count}</h1>
       <button onClick={()=>increment(4)}>increment</button>
       <button onClick={dicrement}>dicrement</button>
       <button onClick={reset}>reset </button>

        </>


    
    )
 }
 export default Number